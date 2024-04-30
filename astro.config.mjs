import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://tinoviana.com.br',
  integrations: [mdx(), sitemap(), tailwind(), partytown()],
  output: 'hybrid',
  adapter: vercel()
});