// Re-compresses src/assets/**/*.{png,jpg,jpeg} in place (same path, same extension —
// no import references need to change). Caps oversized dimensions and re-encodes with
// format-appropriate lossy compression. Only overwrites a file if the result is smaller.
// Run manually with `npm run compress-images` after adding new images.
import sharp from 'sharp';
import { readdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url)) + '/..';
const ASSETS_DIR = path.join(ROOT, 'src/assets');
const MAX_WIDTH = 1920;
const JPEG_QUALITY = 78;
const PNG_QUALITY = 80;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else if (/\.(png|jpe?g)$/i.test(entry.name)) files.push(full);
  }
  return files;
}

function formatKB(bytes) {
  return (bytes / 1024).toFixed(0) + ' KB';
}

const files = await walk(ASSETS_DIR);
let totalBefore = 0;
let totalAfter = 0;
let touched = 0;

for (const file of files) {
  const before = (await stat(file)).size;
  const ext = path.extname(file).toLowerCase();
  const image = sharp(file).rotate(); // .rotate() with no args auto-applies EXIF orientation
  const metadata = await image.metadata();

  const resized =
    metadata.width && metadata.width > MAX_WIDTH
      ? image.resize({ width: MAX_WIDTH, withoutEnlargement: true })
      : image;

  const encoded =
    ext === '.png'
      ? resized.png({ quality: PNG_QUALITY, compressionLevel: 9, palette: true })
      : resized.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });

  const buffer = await encoded.toBuffer();

  totalBefore += before;
  if (buffer.length < before) {
    await writeFile(file, buffer);
    totalAfter += buffer.length;
    touched++;
    console.log(`${path.relative(ROOT, file)}: ${formatKB(before)} -> ${formatKB(buffer.length)}`);
  } else {
    totalAfter += before;
  }
}

console.log(
  `\n[compress-images] ${touched}/${files.length} file(s) shrunk, ${formatKB(totalBefore)} -> ${formatKB(
    totalAfter
  )} (-${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(0)}%)`
);
