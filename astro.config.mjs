import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import preact from "@astrojs/preact";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  markdown: {
    syntaxHighlighting: true,
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'material-theme'
    }
  },
  integrations: [mdx(), sitemap(), tailwind({
    applyBaseStyles: false
  }), preact({
    compat: true
  })],
  vite: {
    ssr: {
      noExternal: ['react-hook-form']
    }
  },
  output: "server",
  adapter: netlify()
});