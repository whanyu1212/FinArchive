# FinArchive - Project Overview

## Project Type
Code Project (Documentation Site)

## Description
**FinArchive** is a curated collection of financial concepts and technical knowledge base, focusing on FX Markets, Commodities, and Macro Drivers. It is built as a static documentation website using **Astro** and the **Starlight** documentation theme.

## Architecture & Structure
- **Framework:** [Astro](https://astro.build/)
- **Theme:** [Starlight](https://starlight.astro.build/) (@astrojs/starlight)
- **Content:** The documentation content is written in Markdown/MDX and is located in the `src/content/docs/` directory.
  - `src/content/docs/fx/`: FX Markets (Spot, Forwards, Swaps, Options, etc.)
  - `src/content/docs/commodities/`: Commodities
  - `src/content/docs/macro/`: Macro Drivers (Interest Rates, Inflation, Risk Sentiment, etc.)
- **Configuration:** 
  - `astro.config.mjs`: Defines the Starlight integration, sidebar navigation, and site metadata.
  - `package.json`: Manages project dependencies and scripts.

## Building and Running
The project uses standard Astro CLI commands via npm scripts defined in `package.json`.

- **Development Server:**
  ```bash
  npm run dev
  # or
  npm start
  ```
  Starts the local development server.

- **Build for Production:**
  ```bash
  npm run build
  ```
  Builds the static site into the `dist/` directory.

- **Preview Production Build:**
  ```bash
  npm run preview
  ```
  Serves the built site locally for testing.

## Development Conventions
- **Content Creation:** Add new documentation pages as `.md` or `.mdx` files within the appropriate subdirectories in `src/content/docs/`.
- **Navigation:** When adding new pages, update the `sidebar` array in `astro.config.mjs` to ensure the pages are accessible via the site's navigation menu.
- **Frontmatter:** Ensure all `.md`/`.mdx` files include appropriate YAML frontmatter (e.g., `title`, `description`) for Starlight to render them correctly.
