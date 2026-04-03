# Gianluigi Rossi Portfolio

Professional portfolio website built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

The site presents professional experience, case studies, education, and contact information for advisory, architecture, and mission-critical systems work in the space and secure systems domain.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Framer Motion
- React Icons

## Features

- Responsive portfolio website
- English and Czech language support
- Structured experience and education sections
- Case studies with direct calls to contact
- SEO metadata, Open Graph tags, and structured data
- Netlify deployment configuration
- Lightweight animated UI

## Project Structure

```text
src/
  assets/                Static assets such as profile image and CV
  components/
    layout/              Header, footer, container
    sections/            Hero, experience, projects, education, contact
    ui/                  Reusable UI pieces
  data/                  Portfolio content and structured records
  i18n/                  Language provider, translations, context
  App.tsx                Main page composition
  main.tsx               Application entry point
```

## Getting Started

### Prerequisites

- Node.js 20.20.0 or newer
- npm 10 or newer

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Run lint

```bash
npm run lint
```

### Preview production build

```bash
npm run preview
```

## Content Updates

Most site content is managed directly in the `src/data` and `src/i18n` folders.

### Main editable files

- `src/data/profile.ts`
- `src/data/experience.ts`
- `src/data/education.ts`
- `src/data/caseStudies.ts`
- `src/data/bento.ts`
- `src/i18n/translations.ts`

## SEO

The site includes:

- HTML metadata in `index.html`
- Open Graph and Twitter tags
- `robots.txt`
- `sitemap.xml`
- JSON-LD structured data for person/profile discoverability

## Deployment

The project is configured for Netlify through `netlify.toml`.

Standard deployment flow:

1. Install dependencies
2. Run production build
3. Publish the `dist` directory

## Quality Notes

Recommended checks before publishing:

- verify all external links
- verify both languages
- verify mobile and desktop layout
- verify CV download
- verify Open Graph preview image
- run lint and production build

## Roadmap

Planned or recommended improvements:

- automated tests
- accessibility audit
- CI pipeline for lint and build
- further content localization polish
- asset optimization for performance

## License

This project is private and intended for personal portfolio use.
