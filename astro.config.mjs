import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Dominio y subruta configurables por variable de entorno: permiten reutilizar el
// mismo código tanto para la vista previa en GitHub Pages (subruta /web-ninou/)
// como para el dominio definitivo (raíz "/") sin tocar nada más el día del cambio.
// TODO: actualizar SITE_URL cuando se decida el dominio definitivo.
const SITE_URL = process.env.SITE_URL ?? 'https://www.ninoumarroquineria.com';
const BASE_PATH = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'ca',
    locales: ['ca', 'es'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  redirects: {
    // El destino debe incluir BASE_PATH a mano: Astro no lo aplica automáticamente aquí.
    '/': `${BASE_PATH}ca`,
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
