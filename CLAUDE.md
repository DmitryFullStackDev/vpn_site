# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (Next.js, default port 3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

**OrbitSafe VPN** is a Next.js 16 marketing/landing site for an iOS VPN app (not yet released). It uses the App Router with TypeScript and Tailwind CSS v4.

### Key patterns

- **Single-page layout**: `src/app/page.tsx` is the main landing page, composing all sections inline. Section content (feature benefits, how-it-works steps, FAQ items) is defined as plain data arrays at the top of `page.tsx` and passed as props to shared components.
- **SVG icons are inlined**: Icons are defined as local function components within the file that uses them (not imported from a library). Both `page.tsx` and individual components like `HeroSection.tsx` follow this pattern.
- **`"use client"` only where needed**: `Navbar` (mobile toggle state) and `FAQ` (accordion state) are client components. Everything else is a Server Component.
- **React Compiler is enabled** via `next.config.ts` (`reactCompiler: true`) — avoid manual `useMemo`/`useCallback` optimizations.
- **No external UI library or icon library** — all UI is Tailwind utility classes with hand-written inline SVGs.

### Routes

Pages are defined under `src/app/`. The sitemap (`src/app/sitemap.ts`) lists the expected routes: `/`, `/features`, `/privacy`, `/terms`, `/contact`. Not all of these may have page files yet.

### Styling

Tailwind v4 is imported via `@import "tailwindcss"` in `src/app/globals.css`. Global CSS defines:
- CSS custom properties for brand colors (indigo-600/indigo-500 palette)
- `.bg-grid-pattern` — a subtle dot/line grid used as a background texture on hero and alternating sections
- `.glow-indigo` — box-shadow utility for CTA hover states

Design tokens: slate for text/borders, indigo for primary brand color, max-width `max-w-6xl` for page-width containers.

### Environment

`NEXT_PUBLIC_SITE_URL` — used in `layout.tsx`, `sitemap.ts`, and `robots.ts` to set the canonical base URL. Falls back to `https://orbitsafevpn.com`.
