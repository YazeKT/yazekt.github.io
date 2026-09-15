import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yazekt.github.io',
  output: 'static',
  trailingSlash: 'always',
  integrations: [react(), sitemap()],
  build: {
    assets: '_assets'
  },
  vite: {
    build: {
      cssMinify: 'lightningcss'
    }
  }
});

