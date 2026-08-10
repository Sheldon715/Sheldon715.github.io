# Current Feature: Portfolio Content and UX Refresh

## Status

In Progress

## Goals

- Strengthen the recruiter-facing positioning with concise, evidence-based copy.
- Add ShopMate as the flagship AI and Android project without requiring an image.
- Use the latest resume as the source for education, location, role focus, and technical breadth.
- Improve mobile first-screen density, navigation, project hierarchy, and action visibility.
- Remove low-value project filtering and replace long project paragraphs with scannable proof points.
- Add a resume entry point and a site-specific social sharing image.
- Add an accessible dark/light theme switch with saved preference and system-theme fallback.
- Preserve the current static HTML, CSS, and vanilla JavaScript architecture.

## Todo List

- [x] Review the current local and deployed portfolio on desktop and mobile.
- [x] Inspect the latest resume and verify ShopMate against its local repository.
- [x] Rewrite the hero positioning and add concise engineering strengths.
- [x] Simplify mobile navigation and bring projects closer to the first viewport.
- [x] Add a featured, text-only ShopMate project with defensible architecture and evaluation evidence.
- [x] Make DevStash the strongest visual web project and shorten all project content.
- [x] Remove the ineffective project filters, portfolio self-card, and planned e-commerce placeholder.
- [x] Refresh About and Contact with Melbourne, University of Melbourne, cross-platform, and availability context.
- [x] Add the latest resume as a public portfolio asset and expose a Resume CTA.
- [x] Create and wire a dedicated Open Graph / social sharing image.
- [x] Build the generated static site and verify links, responsive layout, keyboard focus, and content accuracy.
- [x] Review the completed diff against every goal and update this checklist.
- [x] Add complete light-theme colour tokens and component overrides.
- [x] Add an accessible theme control to desktop and mobile navigation.
- [x] Apply the saved or system theme before first paint to avoid a colour flash.
- [x] Persist manual theme selection and update button labels and theme colour metadata.
- [x] Rebuild and verify dark mode, light mode, mobile layout, and refresh persistence.
- [x] Replace the purple-cyan light theme with a neutral stone and indigo palette.
- [x] Reduce light-mode ambient colour and unify badges, buttons, cards, and focus states.
- [x] Rebuild the static site and review the generated theme assets.
- [x] Replace light-mode indigo typography with a fresh sea-glass teal and sky palette.
- [x] Soften headline gradients, supporting text, labels, and ambient colour together.
- [x] Rebuild and verify the refreshed light-mode palette in generated assets.
- [x] Fix light-mode primary project buttons so white labels always sit on a high-contrast filled background.
- [x] Prepare three light-mode palette comparisons using the site's real headline, buttons, and tags.
- [x] Apply the user's selected A cream-and-charcoal light-mode palette across the portfolio.
- [x] Replace the dark cream-and-charcoal palette with a brighter cream, apricot, and coral direction.
- [x] Keep normal text and primary button contrast accessible while increasing light-mode saturation.

## Notes

- This repo is a personal portfolio site, not a web app product.
- Keep `index.html` as the static site entry point and edit source partials under `src/`.
- ShopMate is a course/demo system, not a production marketplace.
- ShopMate retrieval metrics must be labelled as offline evaluation results, not production accuracy or an SLA.
- Do not repeat the resume claim of a sub-one-second first token because the current repository evidence does not support it.
- Do not invent work-rights status, production traffic, user counts, or business outcomes.
- ShopMate may ship without a screenshot for this iteration.
- Theme preference key: `portfolio-theme`; accepted values are `dark` and `light`.
- Selected light direction: bright cream white with warm brown text, apricot-coral accents, and high-contrast coral primary buttons.

## History

- Portfolio site kept as a single-page static experience
- Context docs refreshed to match the current portfolio site
- Portfolio project restructure completed with screenshot assets moved into `assets/images/`, updated `index.html` image paths, and context docs aligned to the new structure
- Portfolio Static Refactor Quick Wins completed with shared CSS utilities, filter ARIA state handling, image attributes, feature spec template, external CSS/JS, and build-time HTML section partials; static build/checks passed, manual browser layout and keyboard verification still pending
- Portfolio Accessibility and Motion completed with visible keyboard focus styles, synchronized project filter ARIA states, reduced-motion CSS, improved screenshot alt text, accessible project cover focus behavior, stronger muted-text contrast, and static keyboard-target verification
- Portfolio Content and Project Presentation completed with stronger full-stack hero positioning, Projects moved before About, concise engineering-focused project descriptions, completed work separated from the quieter currently-building e-commerce section, current project links, and generated static output verified
- Portfolio Image Performance completed with responsive WebP screenshot variants generated by `sharp`, `picture`/`srcset` markup with PNG fallbacks, lazy loading for below-the-fold images, a single high-priority hero preview image, verified image paths, and a reusable `images:optimize` script
- Portfolio UI Review Follow-up completed with compact mobile navigation, reduced mobile hero height, mobile-specific headline sizing, more scannable project cards, touch-visible project CTAs, Portfolio Website GitHub linking, SEO/social metadata, JSON-LD, favicon, static focus-order verification, and build checks
