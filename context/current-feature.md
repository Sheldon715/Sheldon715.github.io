# Current Feature: Portfolio Content and Project Presentation

## Status

In Progress

## Goals

- Rewrite the hero copy to more directly communicate full-stack JavaScript development
- Consider adding a concise availability or role-target line
- Keep the tone professional and recruiter-friendly
- Review whether the Projects section should appear before About
- Rewrite completed project descriptions to show the app, personal contribution, core systems, and engineering highlights
- Keep each project card description concise
- Separate completed projects from the upcoming e-commerce project
- Move the upcoming project into a quieter "Currently building" or "In progress" presentation
- Remove or avoid dead `href="#"` links where possible
- Keep all live demo and GitHub links current
- Add a resume CTA only if a resume PDF or reliable resume link is available

## Todo List

- [x] Audit current hero copy, project ordering, project descriptions, and project links
- [x] Rewrite hero copy for full-stack JavaScript positioning
- [x] Decide whether Projects should appear before About
- [x] Rewrite completed project descriptions with concise engineering-focused copy
- [x] Separate completed work from the upcoming e-commerce project
- [x] Move upcoming e-commerce into a quieter in-progress presentation
- [x] Remove or avoid dead `href="#"` links
- [x] Verify live demo and GitHub links are current
- [x] Add resume CTA only if a reliable resume asset/link exists
- [x] Build and verify generated `index.html`

## Notes

- Strengthen the portfolio's recruiter-facing message by improving hero copy, project descriptions, and project hierarchy.
- Completed projects should carry more visual weight than planned work.
- Do not add too many generic sections; the strongest work should stay obvious.
- Source context: `docs/personal-website-optimization-results.md`
- This repo is a personal portfolio site, not a web app product.
- Keep `index.html` as the static site entry point unless a feature explicitly changes the structure.
- Current default stack is HTML, CSS, and vanilla JavaScript.

## History

- Portfolio site kept as a single-page static experience
- Context docs refreshed to match the current portfolio site
- Portfolio project restructure completed with screenshot assets moved into `assets/images/`, updated `index.html` image paths, and context docs aligned to the new structure
- Portfolio Static Refactor Quick Wins completed with shared CSS utilities, filter ARIA state handling, image attributes, feature spec template, external CSS/JS, and build-time HTML section partials; static build/checks passed, manual browser layout and keyboard verification still pending
- Portfolio Accessibility and Motion completed with visible keyboard focus styles, synchronized project filter ARIA states, reduced-motion CSS, improved screenshot alt text, accessible project cover focus behavior, stronger muted-text contrast, and static keyboard-target verification
