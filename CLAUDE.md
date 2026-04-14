# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Next.js Version Warning

This project uses **Next.js 16.2.3** with React 19. This version has breaking changes from earlier Next.js versions. **Always read the relevant guide in `node_modules/next/dist/docs/` before writing any code.** Do not assume APIs, conventions, or file structure match your training data. Heed deprecation notices.

No test framework is configured yet.

## Architecture

- **Framework:** Next.js App Router (`app/` directory), TypeScript (strict), Tailwind CSS v4, shadcn/ui
- **Path alias:** `@/*` maps to project root
- **Fonts:** Geist Sans & Geist Mono via `next/font/google` (set as CSS variables in root layout)
- **Styling:** Tailwind utility classes only. Global theme variables in `app/globals.css` using Tailwind v4 `@theme` directive. Dark mode via `prefers-color-scheme`.
- **Current state:** Scaffolded from Create Next App. Only root page (`/`) exists. Design mockups for landing, projects, and contact pages live in `design/`.

## Design System

The design system is documented in `design/DESIGN.md` ("The Digital Curator" editorial style). Key rules to follow:

- **No 1px borders.** Hierarchy via color shifts, tonal nesting, and negative space only.
- **No standard drop shadows.** Use ambient shadows (40-60px blur, 4-6% opacity) only for floating elements.
- **No pure black (#000000).** Use `primary` (#00130B) or charcoal (#222222).
- **Colors:** Forest & Parchment duality — dark sections use `primary_container` (#0A2A1E), light sections use `surface` (#FAFAF5).
- **Typography:** Epilogue (display/headline, weight 800, -0.04em tracking), Noto Serif (title/body, line-height 1.6), Manrope (labels, all-caps).
- **Border radius:** XL (48px) for sections, LG (32px) for cards.
- **Glassmorphism:** `surface_variant` at 60% opacity with 24px backdrop-blur for floating UI.

## Design Mockups

HTML mockups with screenshots in `design/`:
- `design/landing-page/` — landing page
- `design/projects-page/` — projects page
- `design/contact-page/` — contact page

## Skills

The `awwwards-animations` skill is installed (references in `.claude/skills/awwwards-animations/references/`). Use it for premium scroll effects, parallax, text animations, and page transitions via GSAP, Motion (Framer Motion), Anime.js, or Lenis.
