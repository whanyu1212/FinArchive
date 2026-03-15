# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start local dev server (localhost:4321)
npm run build     # Production build → dist/
npm run preview   # Preview the production build locally
```

There are no tests or linters configured. The build command serves as the validation step — a successful `npm run build` confirms all pages compile and Pagefind search indexes correctly.

## Architecture

This is a static knowledge base built with **Astro v6 + Starlight**. All content is Markdown/MDX; there is no application logic, API, or database.

### How content works

- All pages live in `src/content/docs/` as `.md` or `.mdx` files
- The collection is defined in `src/content.config.ts` using Starlight's `docsSchema`
- Starlight handles routing automatically: `src/content/docs/fx/spot.md` → `/fx/spot/`
- The **sidebar navigation** is manually defined in `astro.config.mjs` — every new page must be added there under the appropriate section label
- Page order within a section is controlled by `sidebar.order` in each file's frontmatter

### Frontmatter schema (required fields)

```yaml
---
title: Page Title
description: One-line description shown in meta and search.
sidebar:
  order: 1   # Controls position within the section
---
```

### Sidebar registration

When adding a new page, register it in `astro.config.mjs` inside the correct `sidebar` group:

```js
{ label: 'Display Name', slug: 'section/filename' }
// slug = path relative to src/content/docs/, no extension, no leading slash
```

### Content sections

| Directory | Topic |
|---|---|
| `src/content/docs/fx/` | FX instruments (spot → complex derivatives) |
| `src/content/docs/commodities/` | Commodity markets |
| `src/content/docs/macro/` | Macro drivers (rates, inflation, risk sentiment, cross-asset) |
| `src/content/docs/ta/` | Technical analysis |
| `src/content/docs/index.mdx` | Homepage — uses `LinkCard` and `CardGrid` components from Starlight |

### Homepage (index.mdx)

The homepage does **not** use `template: splash` (removed so the sidebar is visible). It imports `Card`, `CardGrid`, and `LinkCard` from `@astrojs/starlight/components`. When adding a new section, update both the `CardGrid` sections block and the `Quick Links` grid.

### Content style conventions

- ASCII diagrams in fenced code blocks for visualisations (no external image dependencies)
- Formulas written in inline code (Starlight does not render LaTeX by default)
- Each page ends with a `## Further Reading` section with cited markdown links
- No custom components, layouts, or CSS overrides — pure Starlight defaults
