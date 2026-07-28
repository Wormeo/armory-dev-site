import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://Wormeo.github.io',
  base: '/armory-dev-site',
  vite: {
    plugins: [tailwindcss()]
  }
});
