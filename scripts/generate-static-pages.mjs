// Runs after `vite build` (see package.json "build").
//
// The site is a single-page app: titles, descriptions and share images are only injected in the
// browser, but WhatsApp, LinkedIn, iMessage, Slack... read the raw HTML and never run JavaScript,
// so every link used to show the home page card. This step writes one static HTML file per URL
// (dist/blog/<slug>/index.html, dist/projet/<slug>/index.html, ...) with the right <title>,
// description, canonical and Open Graph / Twitter tags, plus a 1200x630 JPEG share image per
// article and project made from its cover (dist/og/*.jpg).
//
// The app itself is unchanged: each file is a copy of dist/index.html, so the router takes over
// as usual. public/.htaccess serves a directory's index.html before the SPA fallback.
// Titles and descriptions come from src/data/seo.ts, src/data/blog.ts and src/data/projects.ts.
import { createServer } from 'vite';
import sharp from 'sharp';
import { mkdir, readFile, stat, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const ROOT = path.dirname(fileURLToPath(import.meta.url)) + '/..';
const DIST = path.join(ROOT, 'dist');
const OG_W = 1200;
const OG_H = 630;
const MAX_OG_BYTES = 280 * 1024; // WhatsApp ignores share images above ~300 KB

async function loadData() {
  const server = await createServer({ root: ROOT, server: { middlewareMode: true } });
  try {
    const { projects } = await server.ssrLoadModule('/src/data/projects.ts');
    const { blogPosts } = await server.ssrLoadModule('/src/data/blog.ts');
    const seo = await server.ssrLoadModule('/src/data/seo.ts');
    return { projects, blogPosts, seo };
  } finally {
    await server.close();
  }
}

const escapeAttr = (value) =>
  String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** 1200x630 JPEG. A cover that is not close to 1.91:1 is shown whole on a blurred copy of itself. */
async function makeShareImage(srcPath, outPath) {
  const { width, height } = await sharp(srcPath).metadata();
  const closeToTarget = Math.abs(width / height / (OG_W / OG_H) - 1) < 0.06;
  let pipeline;
  if (closeToTarget) {
    pipeline = sharp(srcPath).resize(OG_W, OG_H, { fit: 'cover' });
  } else {
    const background = await sharp(srcPath)
      .resize(OG_W, OG_H, { fit: 'cover' })
      .blur(28)
      .modulate({ brightness: 0.92 })
      .toBuffer();
    const foreground = await sharp(srcPath).resize(OG_W, OG_H, { fit: 'inside' }).toBuffer();
    pipeline = sharp(background).composite([{ input: foreground, gravity: 'centre' }]);
  }
  const flat = await pipeline.flatten({ background: '#ffffff' }).toBuffer();
  for (const quality of [84, 76, 68, 60]) {
    const jpeg = await sharp(flat).jpeg({ quality, mozjpeg: true }).toBuffer();
    if (jpeg.length <= MAX_OG_BYTES || quality === 60) {
      await writeFile(outPath, jpeg);
      return jpeg.length;
    }
  }
}

function buildHead({ title, description, url, image, imageAlt, type }) {
  return [
    `<title>${escapeAttr(title)}</title>`,
    `<meta name="description" content="${escapeAttr(description)}">`,
    `<link rel="canonical" href="${escapeAttr(url)}">`,
    `<meta property="og:type" content="${type}">`,
    `<meta property="og:site_name" content="Vincent Nguyen">`,
    `<meta property="og:locale" content="fr_FR">`,
    `<meta property="og:title" content="${escapeAttr(title)}">`,
    `<meta property="og:description" content="${escapeAttr(description)}">`,
    `<meta property="og:url" content="${escapeAttr(url)}">`,
    `<meta property="og:image" content="${escapeAttr(image)}">`,
    `<meta property="og:image:type" content="image/jpeg">`,
    `<meta property="og:image:width" content="${OG_W}">`,
    `<meta property="og:image:height" content="${OG_H}">`,
    `<meta property="og:image:alt" content="${escapeAttr(imageAlt)}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${escapeAttr(title)}">`,
    `<meta name="twitter:description" content="${escapeAttr(description)}">`,
    `<meta name="twitter:image" content="${escapeAttr(image)}">`,
  ]
    .map((line) => `    ${line}`)
    .join('\n');
}

/** Replace the generic head tags of dist/index.html with the page's own. */
function withMeta(template, meta) {
  const stripped = template
    .replace(/<title>[\s\S]*?<\/title>\s*/g, '')
    .replace(/<meta\s+name="description"[^>]*>\s*/g, '')
    .replace(/<link\s+rel="canonical"[^>]*>\s*/g, '')
    .replace(/<meta\s+property="og:[^"]*"[^>]*>\s*/g, '')
    .replace(/<meta\s+name="twitter:[^"]*"[^>]*>\s*/g, '');
  if (!stripped.includes('</head>')) throw new Error('dist/index.html has no </head>');
  return stripped.replace('</head>', `${buildHead(meta)}\n  </head>`);
}

async function writePage(route, html) {
  const target = route === '/' ? path.join(DIST, 'index.html') : path.join(DIST, route, 'index.html');
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, html, 'utf-8');
}

await stat(path.join(DIST, 'index.html')).catch(() => {
  throw new Error('dist/index.html not found: run `vite build` first');
});
const template = await readFile(path.join(DIST, 'index.html'), 'utf-8');
const { projects, blogPosts, seo } = await loadData();
const { SITE_URL, DEFAULT_OG_IMAGE, staticPageMeta, blogOgImage, projectOgImage } = seo;
const abs = (p) => `${SITE_URL}${p}`;

await mkdir(path.join(DIST, 'og'), { recursive: true });
let count = 0;

for (const [route, page] of Object.entries(staticPageMeta)) {
  await writePage(
    route,
    withMeta(template, {
      title: page.exactTitle,
      description: page.description,
      url: abs(route === '/' ? '/' : route),
      image: abs(DEFAULT_OG_IMAGE),
      imageAlt: 'Vincent Nguyen, Product Manager et Product Owner, Finance & SI',
      type: 'website',
    })
  );
  count++;
}

const coverPath = (url) => path.join(ROOT, url.split('?')[0]);

for (const post of blogPosts) {
  const imagePath = blogOgImage(post.slug);
  const bytes = await makeShareImage(coverPath(post.cover.url), path.join(DIST, imagePath));
  if (bytes > MAX_OG_BYTES) console.warn(`[static] ${imagePath} is ${Math.round(bytes / 1024)} KB`);
  await writePage(
    `/blog/${post.slug}`,
    withMeta(template, {
      title: `${post.title} | Vincent Nguyen`,
      description: post.description,
      url: abs(`/blog/${post.slug}`),
      image: abs(imagePath),
      imageAlt: post.cover.alt,
      type: 'article',
    })
  );
  count++;
}

for (const project of projects) {
  const imagePath = projectOgImage(project.slug);
  if (project.coverImage) {
    await makeShareImage(coverPath(project.coverImage), path.join(DIST, imagePath));
  }
  await writePage(
    `/projet/${project.slug}`,
    withMeta(template, {
      title: `${project.title} | Vincent Nguyen`,
      description: project.summary,
      url: abs(`/projet/${project.slug}`),
      image: abs(project.coverImage ? imagePath : DEFAULT_OG_IMAGE),
      imageAlt: `${project.company} - ${project.title}`,
      type: 'article',
    })
  );
  count++;
}

console.log(
  `[static] wrote ${count} pages (${Object.keys(staticPageMeta).length} fixed, ${blogPosts.length} blog posts, ${projects.length} projects) and share images to dist/og/`
);
