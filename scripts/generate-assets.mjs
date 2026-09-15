import sharp from 'sharp';
import path from 'node:path';

const root = process.cwd();
await sharp(path.join(root, 'public/images/social-card.svg'))
  .png({ compressionLevel: 9, palette: true })
  .toFile(path.join(root, 'public/images/social-card.png'));
console.log('PASS: generated public/images/social-card.png');

