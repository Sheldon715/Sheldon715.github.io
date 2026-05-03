# Current Feature: Portfolio Image Performance

## Status

In Progress

## Goals

- Review all local screenshot assets
- Generate optimized WebP or AVIF versions for large screenshots
- Keep original PNG files only if needed for fallback or source reference
- Add explicit `width` and `height` attributes to image tags
- Add `loading="lazy"` to below-the-fold project images
- Add `decoding="async"` where appropriate
- Use `fetchpriority="high"` only for the most important above-the-fold hero/project preview image
- Consider responsive `srcset` and `sizes` for project screenshots
- Ensure image crops still show meaningful product UI
- Verify no broken image paths
- Check desktop and mobile rendering after optimization

## Todo List

- [x] Audit screenshot asset sizes and dimensions
- [x] Choose WebP or AVIF output format based on local tool support
- [x] Generate optimized responsive image assets
- [x] Update hero preview image markup with appropriate priority and source candidates
- [x] Update below-the-fold project image markup with lazy loading and responsive sources
- [x] Preserve original PNGs where useful as fallback/source references
- [x] Verify generated image paths exist
- [x] Build generated files from source
- [x] Check desktop and mobile rendering for obvious image crop regressions

## Notes

- Optimize portfolio screenshot assets for faster page loads and better Lighthouse performance.
- Current PNG screenshots are large, and below-the-fold screenshots should avoid increasing initial page weight.
- Avoid changing project content or layout beyond image-related fixes.
- Source context: `docs/personal-website-optimization-results.md`
- Chose WebP because local `sharp` support was available after installing the dev dependency.
- Generated 640, 960, 1280, and 1920 pixel WebP variants for all screenshot PNGs.
- PNG originals are retained as fallback and source references.
- Generated image path verification found 35 image references and 0 missing files.
- WebP variants total about 853 KB, compared with about 6.8 MB for the original PNG set.
- This repo is a personal portfolio site, not a web app product.
- Keep `index.html` as the static site entry point unless a feature explicitly changes the structure.
- Current default stack is HTML, CSS, and vanilla JavaScript.

## History

- Portfolio site kept as a single-page static experience
- Context docs refreshed to match the current portfolio site
- Portfolio project restructure completed with screenshot assets moved into `assets/images/`, updated `index.html` image paths, and context docs aligned to the new structure
- Portfolio Static Refactor Quick Wins completed with shared CSS utilities, filter ARIA state handling, image attributes, feature spec template, external CSS/JS, and build-time HTML section partials; static build/checks passed, manual browser layout and keyboard verification still pending
- Portfolio Accessibility and Motion completed with visible keyboard focus styles, synchronized project filter ARIA states, reduced-motion CSS, improved screenshot alt text, accessible project cover focus behavior, stronger muted-text contrast, and static keyboard-target verification
- Portfolio Content and Project Presentation completed with stronger full-stack hero positioning, Projects moved before About, concise engineering-focused project descriptions, completed work separated from the quieter currently-building e-commerce section, current project links, and generated static output verified
