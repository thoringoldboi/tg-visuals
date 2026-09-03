// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update `site` if you later add a custom domain (e.g. tgvisuals.com).
// https://astro.build/config
export default defineConfig({
  site: 'https://tg-visuals.vercel.app',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
