// Regenerates public/sitemap.xml from the real route list + src/data/{projects,blog}.ts,
// so project/blog pages can never drift out of sync with the sitemap again.
// Runs automatically before `npm run build` (see package.json "prebuild"); run manually
// with `npm run sitemap`.
import { createServer } from 'vite';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const ROOT = path.dirname(fileURLToPath(import.meta.url)) + '/..';
const SITE_URL = 'https://vincentnguyen.pro';
const OUT_FILE = path.join(ROOT, 'public/sitemap.xml');

const STATIC_ROUTES = [
  { loc: '/', changefreq: 'monthly', priority: '1.0' },
  { loc: '/parcours', changefreq: 'monthly', priority: '0.8' },
  { loc: '/projets', changefreq: 'monthly', priority: '0.8' },
  { loc: '/blog', changefreq: 'weekly', priority: '0.7' },
  { loc: '/contact', changefreq: 'yearly', priority: '0.5' },
];

async function loadData() {
  const server = await createServer({ root: ROOT, server: { middlewareMode: true } });
  try {
    const { projects } = await server.ssrLoadModule('/src/data/projects.ts');
    const { blogPosts } = await server.ssrLoadModule('/src/data/blog.ts');
    return { projects, blogPosts };
  } finally {
    await server.close();
  }
}

function buildUrlEntry({ loc, changefreq, priority }) {
  return `  <url>\n    <loc>${SITE_URL}${loc}</loc>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}

const { projects, blogPosts } = await loadData();

const routes = [
  ...STATIC_ROUTES,
  ...projects.map((p) => ({ loc: `/projet/${p.slug}`, changefreq: 'monthly', priority: '0.6' })),
  ...blogPosts.map((p) => ({ loc: `/blog/${p.slug}`, changefreq: 'monthly', priority: '0.6' })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
  .map(buildUrlEntry)
  .join('\n')}\n</urlset>\n`;

await writeFile(OUT_FILE, xml, 'utf-8');
console.log(`[sitemap] wrote ${routes.length} URLs (${STATIC_ROUTES.length} static, ${projects.length} projects, ${blogPosts.length} blog posts) to public/sitemap.xml`);
