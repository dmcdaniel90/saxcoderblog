# Saxcoder Blog

A modern, performant Astro + Preact + Tailwind CSS blog, deployed on Netlify, with content managed via Decap CMS.

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
  - [Astro Config](#astro-config-astroconfigmjs)
  - [Tailwind CSS Config](#tailwind-css-config-tailwindconfigcjs)
  - [Decap CMS Config](#decap-cms-config-publicadminconfigyml)
- [Development](#development)
- [Deployment](#deployment)
- [License](#license)

---

## Features

- **Astro** for static site generation and hybrid rendering
- **Preact** for fast, lightweight interactivity
- **Tailwind CSS** for utility-first styling
- **MDX** for rich content
- **Decap CMS** for content management
- **Shiki** syntax highlighting
- **SEO**-friendly and accessible

---

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/dmcdaniel90/saxcoderblog.git
   cd saxcoderblog
   ```

2. **Install dependencies:**

   ```sh
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**

   ```sh
   npm run dev
   # or
   yarn dev
   ```

---

## Configuration

### Astro Config (`astro.config.mjs`)

- **Site URL:** Set in the `site` property for sitemap and SEO.
- **Markdown:** Uses Shiki for syntax highlighting with the `material-theme`.
- **Integrations:**
  - `@astrojs/mdx` for MDX support
  - `@astrojs/sitemap` for sitemap generation
  - `@astrojs/tailwind` for Tailwind CSS
  - `@astrojs/preact` for Preact integration (with React compatibility)
- **Vite SSR:** Ensures `react-hook-form` is not externalized for SSR.
- **Output:** Hybrid (supports both static and server rendering)
- **Adapter:** Netlify for deployment

**Excerpt:**

```js
export default defineConfig({
  site: 'https://example.com',
  markdown: {
    syntaxHighlighting: true,
    syntaxHighlight: 'shiki',
    shikiConfig: { theme: 'material-theme' },
  },
  integrations: [mdx(), sitemap(), tailwind({ applyBaseStyles: false }), preact({ compat: true })],
  vite: { ssr: { noExternal: ['react-hook-form'] } },
  output: 'hybrid',
  adapter: netlify(),
});
```

---

### Tailwind CSS Config (`tailwind.config.cjs`)

- **Content:** Scans all Astro, HTML, JS, JSX, MD, MDX, TS, and TSX files in `src/`.
- **Dark Mode:** Enabled via class strategy.
- **Theme:**
  - Custom font families: `Inter` (sans), `Newsreader` (serif)
  - Extended color palette using CSS variables for text, background, and border colors
  - Custom typography variants (`dante`, `DEFAULT`, `lg`) for prose styling
- **Plugins:** Uses `@tailwindcss/typography` for rich text formatting

**Excerpt:**

```js
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      serif: ['Newsreader', ...defaultTheme.fontFamily.serif],
    },
    extend: {
      textColor: { ... },
      backgroundColor: { ... },
      borderColor: { ... },
      typography: (theme) => ({ ... }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
```

---

### Decap CMS Config (`public/admin/config.yml`)

- **Backend:** Uses Git Gateway for authentication, commits to `main` branch
- **Publish Mode:** Editorial workflow (drafts, review, publish)
- **Media:**
  - Media files stored in `public/`
  - Served from `/`
- **Collections:**
  - **Blog:**
    - Folder: `src/content/blog`
    - Fields: Title, Excerpt, Publish Date, Updated Date, Is Featured, Body (Markdown), Tags, SEO (Image src/alt)

**Excerpt:**

```yaml
backend:
  name: git-gateway
  repo: dmcdaniel90/saxcoderblog
  branch: main
  squash_merges: true
publish_mode: editorial_workflow
media_folder: 'public/'
public_folder: '/'
collections:
  - name: 'blog'
    label: 'Blog'
    folder: 'src/content/blog'
    create: true
    slug: '{{slug}}'
    fields:
      - { label: 'Title', name: 'title', widget: 'string' }
      - { label: 'Excerpt', name: 'excerpt', widget: 'string', optional: true }
      - { label: 'Publish Date', name: 'publishDate', widget: 'datetime' }
      - { label: 'Updated Date', name: 'updatedDate', widget: 'datetime', optional: true }
      - { label: 'Is Featured', name: 'isFeatured', widget: 'boolean', default: false }
      - { label: 'Body', name: 'body', widget: 'markdown' }
      - { label: 'Tags', name: 'tags', widget: 'list', field: { label: 'Tag', name: 'tag', widget: 'string' } }
      - { label: 'SEO', name: 'seo', widget: 'object', fields: [ { label: 'Image', name: 'image', widget: 'object', fields: [ { label: 'Source', name: 'src', widget: 'string' }, { label: 'Alt Text', name: 'alt', widget: 'string' } ] } ] }
```

---

## Development

- **Start local server:** `npm run dev`
- **Build for production:** `npm run build`
- **Preview production build:** `npm run preview`
- **Access Decap CMS:** Navigate to `/admin` in your local or deployed site

---

## Deployment

- **Netlify:**
  - Push to `main` branch to trigger deploy
  - Configure environment variables and custom domain in Netlify dashboard as needed

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
