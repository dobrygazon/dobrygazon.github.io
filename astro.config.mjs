import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import partytown from "@astrojs/partytown";

export default defineConfig({
  site: 'https://dobrygazon.github.io',
  integrations: [mdx(), sitemap(), tailwind(), partytown()],
});