# Ariana Vega — Creative Portfolio Website

A pixel-faithful, production-quality clone of the creative portfolio website for UI/UX designer and digital storyteller **Ariana Vega**, built with pure **Astro 5** — zero UI frameworks, zero Tailwind, strict TypeScript, and fully self-hosted assets.

**Stack:** Astro 5 · TypeScript · vanilla CSS · Sharp · @astrojs/sitemap

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Content & Data Model](#content--data-model)
- [Asset Slot Table](#asset-slot-table)
- [Regenerating Assets](#regenerating-assets)
- [Performance & Accessibility](#performance--accessibility)
- [Acceptance Criteria](#acceptance-criteria)
- [Deployment](#deployment)
- [License](#license)

---

## Overview

This site is a single-page portfolio featuring a layered hero with oversized display type, a rotating SVG textPath badge, a floating sun-glow, project showcases, an expertise grid, an about section with stats, and a CTA footer. It builds to fully static HTML/CSS/JS — no client-side framework runs in the browser. Interactions are handled by a sub-kilobyte vanilla TypeScript module with full `prefers-reduced-motion` support.

## Features

- **Pure Astro 5 (SSG)** — 100% `.astro` components. No React, Vue, Svelte, or Solid in the output bundle.
- **Pure modern CSS** — design tokens in `src/styles/global.css`, component-scoped `<style>` blocks, `clamp()`-based fluid typography, and custom gradients matching the sunset-coral / deep-plum aesthetic.
- **Self-hosted typography** — Bodoni Moda (display), Yellowtail (script), Jost Variable (UI), and Anton (accent) via `@fontsource` packages. Zero Google Fonts CDN or third-party runtime requests.
- **Optimized images** — responsive processing through `astro:assets` + Sharp.
- **Inline SVG icons & illustrations** — handcrafted vectors in `Icon.astro` and `Sparkle.astro` (no icon fonts, no runtime libraries).
- **Lightweight interactions** — `src/scripts/reveal.ts` (< 1 KB gzipped) provides one-shot scroll reveals and hero parallax, gated behind `prefers-reduced-motion`.
- **SEO ready** — sitemap integration (`@astrojs/sitemap`), canonical URL, OpenGraph/Twitter card image, and `robots.txt`.
- **Typed content model** — all copy, projects, expertise items, stats, and contacts live in a single typed file (`src/data/site.ts`).

## Tech Stack

| Layer     | Choice                                        |
| --------- | --------------------------------------------- |
| Framework | [Astro 5](https://astro.build) (static output) |
| Language  | TypeScript 5 (strict)                          |
| Styling   | Vanilla CSS (design tokens + scoped styles)    |
| Fonts     | `@fontsource` (Bodoni Moda, Yellowtail, Jost, Anton) |
| Images    | `astro:assets` + Sharp                         |
| SEO       | `@astrojs/sitemap`                             |
| Package manager | npm (lockfile committed)                |

## Getting Started

### Prerequisites

- **Node.js** ≥ 18.17.1 (20 LTS recommended)
- **npm** ≥ 9

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/ariana-vega-portfolio.git
cd ariana-vega-portfolio

# 2. Install dependencies
npm install

# 3. (Optional) Create a local env file
cp .env.example .env

# 4. Start the dev server → http://localhost:3000
npm run dev
```

### Production build

```bash
npm run build      # type-checks + emits static site into dist/
npm run preview    # serves dist/ locally on port 3000
```

## Available Scripts

| Script            | Description                                                             |
| ----------------- | ----------------------------------------------------------------------- |
| `npm run dev`     | Start Astro dev server on `http://localhost:3000` (`0.0.0.0` bound)     |
| `npm run start`   | Alias of `dev`                                                          |
| `npm run build`   | Validate TypeScript and generate static HTML/CSS/JS in `dist/`          |
| `npm run preview` | Preview the production build from `dist/` on port 3000                  |
| `npm run astro`   | Pass-through to the Astro CLI (e.g. `npm run astro -- --help`)          |

## Project Structure

```
.
├── public/
│   ├── favicon.svg          # Coral sparkle badge favicon
│   ├── og.jpg               # OpenGraph / Twitter share image (1200×630)
│   └── robots.txt           # Crawler directives + sitemap reference
├── scripts/
│   └── build-assets.mjs     # Sharp script that regenerates all image assets
├── src/
│   ├── assets/              # Processed images (hero, about, projects)
│   │   ├── about/
│   │   ├── hero/
│   │   └── projects/
│   ├── components/          # Scoped .astro components
│   │   ├── AboutSection.astro
│   │   ├── CtaFooter.astro
│   │   ├── ExpertiseSection.astro / ExpertiseTile.astro
│   │   ├── Hero.astro
│   │   ├── Icon.astro
│   │   ├── ProjectCard.astro / ProjectsSection.astro
│   │   ├── RotatingBadge.astro
│   │   ├── SectionHeading.astro
│   │   ├── Sparkle.astro
│   │   └── StatItem.astro
│   ├── data/
│   │   └── site.ts          # Single source of truth for all site copy
│   ├── layouts/
│   │   └── BaseLayout.astro # HTML shell, meta, fonts, global CSS
│   ├── pages/
│   │   └── index.astro      # Page composition (only route)
│   ├── scripts/
│   │   └── reveal.ts        # Scroll reveal + hero parallax (vanilla TS)
│   └── styles/
│       └── global.css       # Design tokens, resets, fluid type utilities
├── astro.config.mjs         # Astro config (static output, sitemap, port)
├── tsconfig.json
├── package.json
└── .env.example
```

### Page section order

1. **Hero** — layered `ARIANA` / `Vega` type, subject cutout, rotating badge, floating sun glow
2. **Selected Projects** (`#work`) — three project cards
3. **My Expertise** (`#expertise`) — five-tile skills grid
4. **About Me** (`#about`) — portrait, bio, stats, quote
5. **CTA Footer** (`#contact`) — contact CTA + footer badge

## Configuration

### `astro.config.mjs`

```js
export default defineConfig({
  site: 'https://arianavega.design', // canonical origin for sitemap/SEO
  output: 'static',
  integrations: [sitemap()],
  server: { port: 3000, host: '0.0.0.0' }
});
```

Change `site` to your own domain before deploying.

### Environment variables

Copy `.env.example` to `.env`. These are only needed for AI Studio / Gemini-injected environments — the static build itself requires none:

| Variable        | Purpose                                            |
| --------------- | -------------------------------------------------- |
| `GEMINI_API_KEY`| Gemini API access (AI Studio runtime only)         |
| `APP_URL`       | Hosted app URL (AI Studio Cloud Run injection)     |

`.env` is git-ignored; `.env.example` is committed.

## Content & Data Model

All user-facing copy lives in **`src/data/site.ts`** and is fully typed via the exported `SiteData` interface:

- `projects` — title, tag, href, image key, alt text
- `expertise` — title, description, icon key (`uiux | web | mobile | visual | interaction`)
- `stats` — value, label, icon key (`layers | heart | globe`)
- `about`, `quote`, `cta`, `contact`, badge text, hero copy

Edit that one file to rebrand the entire site without touching components.

## Asset Slot Table

To swap an asset, drop a replacement at the identical path with the same filename.

| Slot Path | Target Dimensions | Format | Description |
| :--- | :--- | :--- | :--- |
| `src/assets/hero/hero-subject.png` | 1600 × 2000 | PNG (transparent) | Transparent cutout of Ariana: messy hair bun, red-tinted sunglasses, golden-hour rim light. |
| `src/assets/hero/palm-tl.svg` | Vector | SVG | Tropical palm-frond silhouette (top-left hero corner). |
| `src/assets/hero/palm-r.svg` | Vector | SVG | Palm-frond silhouette overlapping the right hero edge. |
| `src/assets/about/about-portrait.jpg` | 900 × 1100 | JPG | Warm tropical portrait in round sunglasses against palm bokeh. |
| `src/assets/about/quote-sky.jpg` | 800 × 1000 | JPG | Sunset sky, violet→coral clouds, palm silhouettes. |
| `src/assets/projects/wild-soul.jpg` | 1200 × 1000 | JPG | Laptop mockup on sunset gradient showing the "WILD SOUL" studio site. |
| `src/assets/projects/planta.jpg` | 1200 × 1000 | JPG | Beige desktop browser + black phone plant-care app + floating card. |
| `src/assets/projects/move-freely.jpg` | 1200 × 1000 | JPG | Sports editorial with "MOVE FREELY" typography and dancer in motion. |
| `public/og.jpg` | 1200 × 630 | JPG | OpenGraph / Twitter social share image. |
| `public/favicon.svg` | 64 × 64 | SVG | Coral 4-point sparkle on deep-plum badge. |
| `public/robots.txt` | — | TXT | Crawler directives and sitemap reference. |

## Regenerating Assets

All image assets can be regenerated programmatically from inline SVG sources using Sharp:

```bash
node scripts/build-assets.mjs
```

This rewrites every file in the asset slot table (hero PNG, about JPGs, project JPGs, OG image, favicon, robots.txt).

## Performance & Accessibility

- Static-first: zero client framework hydration
- Fluid type via `clamp()` — no layout shift from font scaling
- Fonts self-hosted; no render-blocking third-party origins
- Images processed and lazily sized by `astro:assets`
- All animations respect `prefers-reduced-motion: reduce`
- Responsive from 360 px → 1920 px with no horizontal scroll

## Acceptance Criteria

- [x] **Section order & copy:** Hero → Selected Projects (`#work`) → My Expertise (`#expertise`) → About Me (`#about`) → CTA Footer (`#contact`)
- [x] **Layering:** "ARIANA" sits behind the subject; "Vega" script overlaps with a −7° tilt
- [x] **Rotating badges:** CSS keyframe SVG `textPath` rotation — Hero 30 s, Footer 20 s
- [x] **Sun glow & float:** radial gradient sun floats on an 8 s ease-in-out cycle
- [x] **No frameworks:** 100% pure `.astro` components — no React, Tailwind, or animation libraries
- [x] **Self-contained:** all fonts and assets local; no CDNs
- [x] **Responsive:** fluid clamp scaling and breakpoints from 360 px to 1920 px, zero horizontal scroll

## Deployment

Any static host works. Build output is the `dist/` folder.

**Netlify**

```bash
npm run build
# publish directory: dist
```

**Vercel**

```bash
npm i -g vercel
vercel --prod
# Framework: Astro · Build: npm run build · Output: dist
```

**GitHub Pages / Cloudflare Pages / S3** — point the host at `dist/` after `npm run build`.

> Remember to set `site` in `astro.config.mjs` to your final production URL so the sitemap and canonical tags are correct.

## License

Provided as-is for portfolio/demo purposes. All artwork and copy are fictional and created for this clone.
