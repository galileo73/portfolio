# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Professional portfolio website for Gianluigi Rossi - Space Systems Architect. Built with React 19, TypeScript, Vite, Tailwind CSS 4, and Framer Motion. Supports English and Czech languages.

## Common Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (port 5173, strictPort)
npm run build        # Type-check and production build (tsc -b && vite build)
npm run lint         # Run ESLint
npm run preview      # Preview production build locally
```

## Architecture

**Entry Point:** `src/main.tsx` wraps `App.tsx` with `I18nProvider`

**Component Structure:**
- `src/components/layout/` - Header, Footer, Container (page shell)
- `src/components/sections/` - Hero, Bento, Experience, Projects, Education, Contact
- `src/components/ui/` - Card, Icons, Reveal, SectionHeader (reusable primitives)

**Data Layer:** Content lives in `src/data/` as typed TypeScript exports:
- `profile.ts`, `experience.ts`, `education.ts`, `projects.ts`, `caseStudies.ts`, `skills.ts`, `bento.ts`
- Types defined in `src/data/types.ts`

**Internationalization:**
- `src/i18n/I18nProvider.tsx` - React Context provider
- `src/i18n/translations.ts` - All UI strings (en/cs)
- Use `useI18n()` hook to access `lang`, `setLang()`, and `t` (translation dict)

**Styling:** Tailwind CSS 4 with Vite plugin (`@tailwindcss/vite`), no separate CSS files except `src/index.css` and `src/App.css`

## Key Patterns

- Sections import data from `src/data/` and translations via `useI18n().t`
- Language switching updates `document.documentElement.lang`
- All static assets in `public/` and `src/assets/`
- Build outputs to `dist/`

## Requirements

- Node.js ≥20.19.0 (see `.nvmrc`: 20.20.0)
- npm 10+

## Deployment

Configured for Netlify via `netlify.toml`. CI runs on GitHub Actions (`lint` + `build`) for main/master/develop/feature branches.

## Content Updates

Edit files in `src/data/` for portfolio content, or `src/i18n/translations.ts` for UI strings. No CMS - content is hardcoded.