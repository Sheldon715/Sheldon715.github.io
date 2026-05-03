# Portfolio Foundation Fixes

## Overview

Fix small correctness and polish issues in the current single-file portfolio before larger optimization work. This feature keeps the existing HTML/CSS/vanilla JS structure and focuses on low-risk cleanup discovered in `docs/personal-website-optimization-results.md`.

## Requirements

- Fix the likely extra closing `</div>` after the hero section
- Fix the footer copyright encoding issue so it displays correctly as copyright text
- Review the HTML nesting around `header`, `main`, `section.hero`, and `footer`
- Keep the page as a single `index.html` file
- Do not introduce a build tool or framework
- Preserve the current visual design unless a small fix is required
- Verify the page still opens correctly in a browser
- Check desktop and mobile widths for obvious layout regressions

## Notes

- This should be the first feature before SEO, accessibility, or content changes
- Keep changes minimal and easy to review
- Source context: `docs/personal-website-optimization-results.md`

