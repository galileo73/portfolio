# Test Plan

This document defines the minimum verification checklist for the portfolio website before publishing.

## Scope

The checks cover:

- navigation
- multilingual content
- responsiveness
- external links
- downloadable assets
- accessibility basics
- SEO basics
- production readiness

## Functional Checks

### Navigation

- Verify the header links scroll correctly to:
  - Experience
  - Education
  - Case Studies
  - Contact
- Verify the site logo/name returns to the top of the page
- Verify all CTA buttons in the hero section work correctly

### Content

- Verify all experience entries render correctly
- Verify all education entries render correctly
- Verify all case studies render correctly
- Verify no placeholder content remains
- Verify all texts are readable and correctly encoded
- Verify no mixed broken characters appear such as `â€“`, `Â©`, `Ã`, or similar

### Language Switching

- Verify switching from English to Czech updates:
  - navigation
  - hero content
  - section titles
  - descriptive text
- Verify the document language updates correctly
- Verify no untranslated hardcoded labels remain

## Link Checks

- Verify LinkedIn link works
- Verify GitHub link works
- Verify Instagram link works if enabled
- Verify OpenSea link works if enabled
- Verify contact button scrolls correctly
- Verify email CTA opens the default mail client
- Verify CV download works

## Responsive Checks

### Mobile

- Verify layout is usable at 360px to 430px width
- Verify no horizontal overflow appears
- Verify hero section remains readable
- Verify cards stack correctly
- Verify buttons remain tappable

### Tablet

- Verify layout remains balanced around 768px width
- Verify spacing and section alignment remain consistent

### Desktop

- Verify hero two-column layout renders correctly
- Verify header spacing and alignment remain consistent
- Verify cards and sections preserve visual hierarchy

## Accessibility Checks

- Verify all icon-only links include accessible labels
- Verify language toggle is keyboard accessible
- Verify interactive elements are reachable by keyboard
- Verify visible focus states are present
- Verify reduced motion mode does not force animations
- Verify color contrast remains readable against the dark background

## SEO Checks

- Verify page title is correct
- Verify meta description is present
- Verify canonical URL is correct
- Verify Open Graph image loads correctly
- Verify structured data is present in `index.html`
- Verify `robots.txt` is correct
- Verify `sitemap.xml` is correct

## Performance Checks

- Verify main page loads quickly on first visit
- Verify large assets are reasonable in size
- Verify the Open Graph image is optimized
- Verify no obviously unused assets remain in the repository

## Build Checks

Run the following before publishing:

```bash
npm run lint
npm run build
```

Expected result:

- lint completes without blocking issues
- production build completes successfully
- output is generated in `dist/`

## Release Checklist

Before deployment confirm:

- all links are valid
- all language content is correct
- no placeholder text remains
- no encoding issues remain
- CV is downloadable
- metadata is correct
- lint and build pass
- visual review completed on mobile and desktop
