import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const contentDir = path.join(root, 'src/content/projects');
const required = new Set(['dlme.md', 'nestform.md', 'atlas-reach.md', 'pinharbor.md']);
const files = fs.readdirSync(contentDir).filter((name) => name.endsWith('.md'));
const failures = [];

for (const expected of required) if (!files.includes(expected)) failures.push(`Missing ${expected}`);
if (files.length !== required.size) failures.push(`Expected ${required.size} project files, found ${files.length}`);

for (const file of files) {
  const body = fs.readFileSync(path.join(contentDir, file), 'utf8');
  if (/agency[ -]agents/i.test(body)) failures.push(`${file}: excluded project name found`);
  if (/\.env\b|[A-Z0-9_]*(TOKEN|SECRET|PASSWORD)\s*=/i.test(body)) failures.push(`${file}: secret-shaped text found`);
  for (const field of ['title:', 'summary:', 'repository:', 'contribution:', 'constraints:', 'decisions:', 'results:', 'evidence:']) {
    if (!body.includes(field)) failures.push(`${file}: missing ${field}`);
  }
}

const publicTree = fs.readdirSync(path.join(root, 'public/images/projects'));
for (const file of files) {
  const body = fs.readFileSync(path.join(contentDir, file), 'utf8');
  for (const match of body.matchAll(/\/images\/projects\/([^"']+)/g)) {
    if (!publicTree.includes(match[1])) failures.push(`${file}: missing image ${match[1]}`);
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(`PASS: ${files.length} project records and referenced assets validated`);

