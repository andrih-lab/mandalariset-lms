// Pemakaian: node scripts/import-slides.mjs <folder _output Quarto> <tujuan, mis. slides/r>
// - Menyatukan folder libs (semua modul memakai libs identik) menjadi satu folder `libs/`
// - Membuang catatan pembicara (<aside class="notes">) supaya naskah narasi tidak ikut tampil ke peserta
import { readdirSync, readFileSync, writeFileSync, mkdirSync, cpSync, rmSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const [src, dest] = process.argv.slice(2);
if (!src || !dest) { console.error('Pemakaian: import-slides.mjs <src> <dest>'); process.exit(1); }

const htmls = readdirSync(src).filter((f) => /^modul-\d+\.html$/.test(f)).sort();
if (!htmls.length) { console.error('Tidak ada modul-XX.html di', src); process.exit(1); }

rmSync(dest, { recursive: true, force: true });
mkdirSync(dest, { recursive: true });
const libsFrom = join(src, htmls[0].replace('.html', '_files'), 'libs');
cpSync(libsFrom, join(dest, 'libs'), { recursive: true, filter: (p) => !p.endsWith('.map') });

for (const f of htmls) {
  const base = f.replace('.html', '');
  let html = readFileSync(join(src, f), 'utf8');
  const before = (html.match(/<aside class="notes"/g) || []).length;
  html = html.replace(/<aside class="notes">[\s\S]*?<\/aside>/g, '');
  html = html.replaceAll(`${base}_files/libs/`, 'libs/');
  if (html.includes(`${base}_files`)) console.warn('Masih ada rujukan _files di', f);
  writeFileSync(join(dest, f), html);
  console.log(f, '- catatan dibuang:', before);
}
