import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// TODO: actualizar cuando se decida el dominio definitivo (necesario para sitemap y canonical URLs correctas)
const SITE_URL = 'https://www.ninoumarroquineria.com';

export default defineConfig({
  site: SITE_URL,
  i18n: {
    defaultLocale: 'ca',
    locales: ['ca', 'es'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  redirects: {
    '/': '/ca',
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
