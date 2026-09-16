import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const required = [
  'index.html', 'work/index.html', 'work/dlme/index.html', 'work/nestform/index.html',
  'work/atlas-reach/index.html', 'work/pinharbor/index.html', 'about/index.html',
  'resume/index.html', 'roadmap/index.html', '404.html', 'sitemap-index.xml', 'robots.txt',
  'resume/kirsten-trimaley-resume.pdf', 'images/social-card.png'
];
const failures = required.filter((item) => !fs.existsSync(path.join(dist, item))).map((item) => `Missing dist/${item}`);

const htmlFiles = [];
const walk = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const target = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(target);
    else if (entry.name.endsWith('.html')) htmlFiles.push(target);
  }
};
walk(dist);

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  if (/agency[ -]agents/i.test(html)) failures.push(`${path.relative(dist, file)}: excluded project name found`);
  if (/lovable|supabase|whatsapp|067\s*096\s*9303/i.test(html)) failures.push(`${path.relative(dist, file)}: retired service or contact found`);
  if (!/<main\b/i.test(html) || !/<title>[^<]+<\/title>/i.test(html)) failures.push(`${path.relative(dist, file)}: main landmark or title missing`);
  if ((html.match(/<h1\b/gi) || []).length !== 1) failures.push(`${path.relative(dist, file)}: expected exactly one h1`);
  if (!/<meta name="description" content="[^"]+"/i.test(html)) failures.push(`${path.relative(dist, file)}: description missing`);
  if (!/<link rel="canonical" href="https:\/\/yazekt\.github\.io\/[^"]*"/i.test(html)) failures.push(`${path.relative(dist, file)}: canonical missing or incorrect`);
  if (!/property="og:image"/i.test(html) || !/name="twitter:image:alt"/i.test(html)) failures.push(`${path.relative(dist, file)}: social metadata incomplete`);
  if (/C:[\\/]+Users|OneDrive/i.test(html)) failures.push(`${path.relative(dist, file)}: local filesystem path found`);
  if (file.endsWith('404.html') && !/name="robots" content="noindex, follow"/i.test(html)) failures.push('404.html: noindex missing');
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)) {
    try { JSON.parse(match[1]); } catch { failures.push(`${path.relative(dist, file)}: malformed JSON-LD`); }
  }
}

for (const asset of required.filter((item) => /\.(png|webp|jpg|jpeg)$/i.test(item))) {
  const size = fs.statSync(path.join(dist, asset)).size;
  if (size > 1_000_000) failures.push(`${asset}: deployment asset exceeds 1 MB`);
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(`PASS: ${required.length} required artifacts and ${htmlFiles.length} HTML files validated`);
