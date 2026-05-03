# Coding Standards

## Current Stack

- This project is currently a static personal portfolio site.
- Source files live under `src/`.
- The generated static entry file is `index.html`.
- Use HTML, CSS, and vanilla JavaScript by default.
- Do not introduce a framework or bundler unless a feature explicitly calls for it.
- Use `node scripts/build-site.mjs` or `npm run build` to regenerate `index.html` and static assets after editing source files.
- Astro is the preferred future rebuild option if the portfolio grows into multiple pages, case studies, markdown content, or reusable components.

## HTML

- Keep the document semantic and accessible.
- Use clear landmark structure: `header`, `main`, `section`, `nav`, `footer`.
- Keep heading levels logical and avoid skipping levels without reason.
- Use meaningful `alt` text for images.
- External links should use `target="_blank"` with `rel="noreferrer"`.
- Avoid dead links like `href="#"`; use a real target, a section link, or non-link text.
- Add metadata when relevant:
  - meta description
  - canonical URL
  - Open Graph tags
  - Twitter card tags
  - author
  - theme color
  - JSON-LD when useful

## CSS

- Keep source styling in `src/styles/styles.css`.
- Organize CSS by page area when editing larger sections.
- Prefer CSS custom properties for shared colors, spacing, shadows, and radii.
- Preserve the current dark-mode visual direction.
- Keep responsive behavior explicit with media queries.
- Add visible `:focus-visible` styles for interactive elements.
- Respect `prefers-reduced-motion` for animations and transitions.
- Avoid over-complicating the design with unnecessary decorative effects.

## JavaScript

- Keep source JavaScript in `src/scripts/main.js`.
- Use vanilla JavaScript only when behavior is needed.
- Keep scripts small and focused.
- Do not add dependencies for simple interactions.
- Keep DOM state and accessibility state in sync, such as updating `aria-pressed` on filter buttons.
- Avoid adding app-like state management unless the site is rebuilt with a framework.

## Images and Assets

- Use real project screenshots as primary visual assets.
- Keep screenshot crops readable and product-focused.
- Optimize large screenshots before adding them to the page.
- Prefer WebP or AVIF for optimized display assets when practical.
- Add `width` and `height` attributes to images.
- Use `loading="lazy"` for below-the-fold images.
- Use `decoding="async"` where appropriate.
- Use responsive `srcset` and `sizes` when multiple image sizes exist.
- Use `fetchpriority="high"` only for the most important above-the-fold image.

## Content

- Keep copy concise, professional, and recruiter-friendly.
- Make the target role and technical strengths clear quickly.
- Completed projects should carry more visual weight than planned work.
- Project descriptions should explain:
  - what the app is
  - what was personally built
  - key technical systems
  - deployment/auth/database/API details where relevant
- Keep links to live demos, GitHub, LinkedIn, and email current.

## File Organization

- Current structure should stay simple:

```text
/
  index.html
  README.md
  package.json
  scripts/
    build-site.mjs
  src/
    layout.html
    sections/
    styles/
    scripts/
  assets/
    images/
    css/
    js/
  docs/
  context/
```

- Keep project planning specs in `context/feature/`.
- Keep research prompts in `context/research/`.
- Keep completed research output in `docs/`.
- If the project grows, prefer an Astro structure with `src/pages`, `src/components`, and content collections.

## Future Astro Standards

- Use Astro only when the portfolio needs multiple pages, case studies, markdown/MDX content, or reusable components.
- Keep pages mostly static.
- Use client-side JavaScript islands only for interactions that need browser state.
- Store project metadata in content collections or a structured data file.
- Keep generated output deployable as a static site.

## Code Quality

- No commented-out code unless it is intentionally documented.
- No unused CSS or JavaScript when reasonably avoidable.
- Keep changes scoped to the current feature spec.
- Preserve existing patterns unless the feature is specifically about refactoring.
- Fix obvious HTML validity issues when touching nearby code.

## Verification

- For source changes, run `node scripts/build-site.mjs` or `npm run build`.
- Open the generated page locally or in browser preview when practical.
- Check desktop and mobile widths for layout regressions.
- Check keyboard navigation for interactive elements.
- For SEO/performance features, review metadata, image paths, and Lighthouse-style concerns.
- There is no lint/test toolchain yet.
