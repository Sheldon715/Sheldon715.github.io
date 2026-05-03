# Portfolio Accessibility and Motion

## Overview

Improve the portfolio's accessibility and motion behavior without changing the overall visual direction. This feature focuses on keyboard usability, reduced-motion support, semantic states, and readable interactions.

## Requirements

- Add visible `:focus-visible` styles for links, buttons, and project controls
- Add `aria-pressed="true/false"` to project filter buttons
- Update the filter JavaScript so `aria-pressed` stays in sync with the active filter
- Add `prefers-reduced-motion` CSS to reduce or disable:
  - background orb motion
  - grid motion
  - fade-up entrance animation
  - hover movement if needed
- Review alt text for project screenshots and hero preview images
- Ensure hover-only information is also accessible through visible text or focus behavior
- Check color contrast for muted text on translucent panels
- Keep the current design style intact
- Verify keyboard navigation through nav links, filter buttons, project links, and contact cards

## Notes

- This feature should not add a new accessibility library
- Keep JavaScript minimal and vanilla
- Source context: `docs/personal-website-optimization-results.md`

