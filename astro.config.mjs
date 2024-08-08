import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: 'static',
  integrations: [netlify(), react(), tailwind()]
});