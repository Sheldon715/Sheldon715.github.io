# Current Feature: Portfolio Accessibility and Motion

## Status

In Progress

## Goals

- Add visible `:focus-visible` styles for links, buttons, and project controls
- Add and synchronize `aria-pressed="true/false"` on project filter buttons
- Add `prefers-reduced-motion` support for background, grid, entrance, and hover motion
- Review alt text for project screenshots and hero preview images
- Ensure hover-only information is available through visible text or focus behavior
- Check color contrast for muted text on translucent panels
- Keep the current design style intact
- Verify keyboard navigation through nav links, filter buttons, project links, and contact cards

## Todo List

- [x] Audit current focus, motion, alt text, hover, and contrast behavior
- [x] Add visible `:focus-visible` styles for links, buttons, and project controls
- [x] Add `aria-pressed` states to project filter buttons
- [x] Update filter JavaScript so `aria-pressed` stays synchronized with the active filter
- [x] Add `prefers-reduced-motion` CSS for background, grid, entrance, and hover motion
- [x] Review and improve project screenshot and hero preview alt text
- [x] Ensure hover-only information is available through visible text or focus behavior
- [x] Check muted text contrast on translucent panels
- [x] Verify keyboard navigation through nav links, filters, project links, and contact cards

## Notes

- Improve the portfolio's accessibility and motion behavior without changing the overall visual direction.
- Do not add a new accessibility library.
- Keep JavaScript minimal and vanilla.
- Source context: `docs/personal-website-optimization-results.md`
- Static keyboard-target verification passed for nav links, filter buttons, project links, and contact cards; live browser tab-through was blocked by the approval service in this session.
- This repo is a personal portfolio site, not a web app product.
- Keep `index.html` as the static site entry point unless a feature explicitly changes the structure.
- Current default stack is HTML, CSS, and vanilla JavaScript.

## History

- Portfolio site kept as a single-page static experience
- Context docs refreshed to match the current portfolio site
- Portfolio project restructure completed with screenshot assets moved into `assets/images/`, updated `index.html` image paths, and context docs aligned to the new structure
- Portfolio Static Refactor Quick Wins completed with shared CSS utilities, filter ARIA state handling, image attributes, feature spec template, external CSS/JS, and build-time HTML section partials; static build/checks passed, manual browser layout and keyboard verification still pending
