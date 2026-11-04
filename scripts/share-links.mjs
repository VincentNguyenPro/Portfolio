// Prints every shareable URL with a cache-busting ?v= suffix.
//
// WhatsApp (and LinkedIn for a few days) keep the link preview they first fetched for a URL and
// offer no way to refresh it; a URL with a new query string is a new URL, so it gets a fresh fetch.
// Usage: npm run share-links            -> ?v=<today, YYYYMMDD>
//        npm run share-links -- --v=3   -> ?v=3
// Routes come from the same data files as the sitemap and the static pages.
import { createServer } from 'vite';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const ROOT = path.dirname(fileURLToPath(import.meta.url)) + '/..';
const flag = process.argv.find((arg) => arg.startsWith('--v='));
const today = new Date().toISOString().slice(0, 10).replaceAll('-', '');
const version = flag ? flag.slice(4) : today;

const server = await createServer({ root: ROOT, server: { middlewareMode: true }, logLevel: 'error' });
let sections;
try {
  const { projects } = await server.ssrLoadModule('/src/data/projects.ts');
  const { blogPosts } = await server.ssrLoadModule('/src/data/blog.ts');
  const { SITE_URL, staticPageMeta } = await server.ssrLoadModule('/src/data/seo.ts');
  const url = (route) => `${SITE_URL}${route}?v=${version}`;
  sections = [
    ['Pages', Object.keys(staticPageMeta).map(url)],
    ['Projets', projects.sort((a, b) => a.order - b.order).map((p) => url(`/projet/${p.slug}`))],
    ['Blog', blogPosts.map((post) => url(`/blog/${post.slug}`))],
  ];
} finally {
  await server.close();
}

for (const [title, urls] of sections) {
  console.log(`\n# ${title} (${urls.length})`);
  console.log(urls.join('\n'));
}
console.log(`\n${sections.reduce((n, [, urls]) => n + urls.length, 0)} links, ?v=${version}`);
