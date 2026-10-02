import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site — absolute asset paths are prefixed with base
  site: 'https://girishlade111.github.io/ariana-vega-portfolio',
  base: '/ariana-vega-portfolio',
  output: 'static',
  integrations: [sitemap()],
  server: {
    port: 3000,
    host: '0.0.0.0'
  }
});
