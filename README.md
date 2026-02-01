# Cristian Florez — Developer Portfolio

## Overview
- Minimal, dark single-page built with Astro + TypeScript + Tailwind CSS.
- Data-driven sections (Hero, About, Stack, Projects, Contact/Footer) powered by `src/data`.
- Focus on performance, accessibility, and premium visual language with black + blue accents.

## Getting started
```bash
npm install
npm run dev
```

## Build & deploy
```bash
npm run build
vercel deploy --prod
```
- `astro` output is static; deploy on Vercel for instant previews and analytics.
- For previewing locally (`dist`), run `npm run preview` after `npm run build`.

## Key decisions
- **Architecture:** Data files (`site.ts`, `stack.ts`, `projects.ts`) supply props to presentational sections, keeping components stateless and reusable.
- **Persona:** Updated copy pulls from GitHub details (Ingeniero Mecatrónico + Full Stack) and a contact email matching devflorez’s public profile.
- **Layout:** `BaseLayout.astro` injects SEO metadata (title, description, Open Graph, canonical) and imports `globals.css` for typography and animation tokens.
- **Styling:** Tailwind theme extends with `dark`, `offwhite`, `muted`, `accent` colors, Inter font, and subtle fade-up keyframes. Global `.reveal` class drives scroll animation with `prefers-reduced-motion` guard.
- **Interactions:** Hover/ focus states use accent blue, focus-visible rings, and soft card transitions—no heavy JS or carousels.
- **Accessibility:** Semantic sections, meaningful headings/links, focus-visible outlines, and motion preferences honored.
- **Localization:** A lightweight toggle surfaces Spanish and English copy for each section, defaulting to the browser language and persisting the choice via `localStorage`.
- **Pointer effect:** Subtle radial glow follows the cursor via CSS custom properties updated in BaseLayout’s script, adding a premium touch without heavy JS.
- **SEO:** Head metadata now includes robots, keywords, OG image, Twitter cards, and structured person data derived from `siteMetadata`, so crawlers receive canonical + social/technical context.

## Requirements checklist
- [x] Astro + TypeScript + Tailwind single-page (Hero, About, Stack, Projects, Contact/Footer).
- [x] Data separated in `src/data` and layout in `BaseLayout.astro`.
- [x] Components under `src/components` consume typed data.
- [x] Dark theme with blue accents, subtle animations, reduced-motion support.
- [x] SEO metadata and accessible markup; ready for Lighthouse tuning (Perf/A11y/Best/SEO ≥95).
- [x] README documents how to run, build, and deploy to Vercel plus design decisions.
