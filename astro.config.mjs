import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://arianavega.design',
  output: 'static',
  integrations: [sitemap()],
  server: {
    port: 3000,
    host: '0.0.0.0'
  }
});
