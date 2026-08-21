// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update `site` to the production domain when it's chosen.
// https://astro.build/config
export default defineConfig({
  site: 'https://tgvisuals.com',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
