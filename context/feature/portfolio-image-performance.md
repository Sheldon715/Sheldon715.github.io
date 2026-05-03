# Portfolio Image Performance

## Overview

Optimize portfolio screenshot assets for faster page loads and better Lighthouse performance. The current PNG screenshots are large, and several are shown below the fold where responsive/lazy image handling can reduce initial page weight.

## Requirements

- Review all local screenshot assets:
  - `assets/images/property-pulse-home.png`
  - `assets/images/property-pulse-detail.png`
  - `assets/images/property-pulse-auth.png`
  - `assets/images/taskflow-home.png`
  - `assets/images/portfolio-home.png`
  - `assets/images/ecommerce-home.png`
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

## Notes

- The biggest image files are over 1 MB, so this feature should noticeably improve load performance
- Avoid changing project content or layout beyond image-related fixes
- Source context: `docs/personal-website-optimization-results.md`
