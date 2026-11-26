import { readFile, readdir, writeFile } from 'node:fs/promises';
import { dirname, extname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const types = { '.webp': 'image/webp', '.mp4': 'video/mp4', '.woff2': 'font/woff2', '.vtt': 'text/vtt' };

async function dataUrl(path) {
  const type = types[extname(path)];
  if (!type) throw new Error(`Unknown offline media type for ${path}`);
  return `data:${type};base64,${(await readFile(path)).toString('base64')}`;
}

const assets = {};
for (const group of ['art', 'film']) {
  for (const filename of (await readdir(join(dist, group))).sort()) {
    const key = `${group}/${filename}`;
    assets[key] = await dataUrl(join(dist, key));
  }
}

const html = await readFile(join(dist, 'index.html'), 'utf8');
const moduleTag = html.match(/<script\b[^>]*\bsrc="([^"]+)"[^>]*><\/script>/);
const styleTag = html.match(/<link\b[^>]*\brel="stylesheet"[^>]*\bhref="([^"]+)"[^>]*>/);
if (!moduleTag || !styleTag) throw new Error('Expected one compiled module and one stylesheet in the Vite entry.');

const js = await readFile(resolve(dist, moduleTag[1]), 'utf8');
const cssPath = resolve(dist, styleTag[1]);
let css = await readFile(cssPath, 'utf8');
for (const [expression, url] of [...css.matchAll(/url\(["']?([^)'"\s]+)["']?\)/g)]) {
  if (url.startsWith('data:')) continue;
  css = css.replaceAll(expression, `url("${await dataUrl(resolve(dirname(cssPath), url))}")`);
}

const embedded = `<script>window.__carryFiles=${JSON.stringify(assets)}</script>\n`;
const script = `<script type="module">${js.replace(/<\/script/gi, '<\\/script')}</script>`;
// The online entry starts both cover requests while the module is downloading.
// In the file edition the module supplies their embedded bytes immediately.
const offline = html.replace(/(<img\b[^>]*\bdata-art="[^"]+")\s+src="[^"]+"/g, '$1')
  .replace(moduleTag[0], '')
  .replace(styleTag[0], () => `<style>${css}</style>`)
  .replace('</body>', () => `${embedded}${script}\n</body>`);
await writeFile(join(dist, 'Carryistic.html'), offline);
console.log(`Offline edition: ${Object.keys(assets).length} embedded assets, ${(Buffer.byteLength(offline)/1e6).toFixed(1)} MB`);
