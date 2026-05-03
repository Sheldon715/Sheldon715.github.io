# AI Interaction Guidelines

## Communication

- Be concise and direct.
- Explain non-obvious decisions briefly.
- Ask before large refactors, framework migrations, or structural changes.
- Do not add features outside the active feature spec.
- Do not delete files without clarification, except clearly generated or stale files the user explicitly asked to clean up.
- When a request is about the portfolio, assume the current project is a static personal website unless the user says otherwise.

## Project Direction

- The current site should stay static HTML/CSS/vanilla JavaScript for short-term improvements.
- Optimize the existing site before proposing a rebuild.
- Astro is the preferred future option if the site grows into multiple pages, case studies, blog posts, markdown content, or reusable components.
- Do not introduce Next.js, React, Prisma, databases, auth, or a backend unless the user explicitly asks for a new app direction.

## Workflow

This is the common workflow for every feature/fix:

1. **Document** - Load or create the relevant feature spec in `context/feature/`.
2. **Todo List** - Update `context/current-feature.md` with a feature-specific checklist using markdown checkboxes (`- [ ]` / `- [x]`).
3. **Branch** - Create a new branch for the feature or fix when requested by the user.
4. **Implement** - Implement only the active feature/fix.
5. **Verify** - For the current static site, verify by opening or inspecting the HTML page where practical. Use browser checks for visual, responsive, accessibility, or interaction changes.
6. **Iterate** - Fix issues found during verification.
7. **Commit** - Only commit with permission.
8. **Merge** - Merge only with permission.
9. **Delete Branch** - Ask before deleting a branch after merge.
10. **Review** - Review AI-generated code periodically and on demand.
11. **History** - Mark the feature completed in `context/current-feature.md` and add a short history entry.

Do not commit without permission. If verification fails, fix the issue before asking to commit.

## Feature Specs

- Feature specs live in `context/feature/`.
- Use the existing format:
  - `# Feature Name`
  - `## Overview`
  - `## Requirements`
  - `## Notes`
- Keep feature specs focused and executable.
- Prefer splitting large research results into multiple smaller feature specs.
- Use `docs/personal-website-optimization-results.md` as the source of truth for the current optimization roadmap.

## Research

- Research prompts live in `context/research/`.
- Completed research output should go in `docs/`.
- Research tasks produce documentation only.
- Do not modify source files during a research task unless the user explicitly changes the request.

## Verification

- Current project has no package scripts by default.
- Do not assume `npm run lint`, `npm run test`, or `npm run build` exists.
- For HTML/CSS/JS changes, verify with:
  - browser preview when practical
  - desktop and mobile viewport checks for visual changes
  - keyboard navigation checks for interactive changes
  - link/path checks for metadata and assets
- If tooling is added later, update this file with the new verification commands.

## Branching

- Create a new branch for each feature/fix when requested.
- Use names like:
  - `feature/portfolio-seo-metadata`
  - `feature/portfolio-image-performance`
  - `fix/portfolio-foundation`
- Ask before deleting a branch after merge.

## Commits

- Ask before committing.
- Use conventional commit messages:
  - `feat: add portfolio seo metadata`
  - `fix: repair portfolio html structure`
  - `docs: update portfolio readme`
- Format commit messages with a subject line, a blank line, and short bullet body when useful.
- Keep commits focused.
- Never put "Generated With Codex" in commit messages.

## Code Changes

- Make minimal changes to accomplish the feature.
- Preserve the current single-file structure unless the active feature says to refactor.
- Keep visual changes aligned with the portfolio's existing dark, polished style.
- Do not add dependencies for simple static-site behavior.
- Avoid framework migration unless it is the active feature and the user has approved it.
- Keep completed project work more prominent than planned project work.

## Code Review

Review AI-generated code for:

- broken HTML structure
- stale or broken links
- missing image dimensions or broken image paths
- accessibility regressions
- excessive animation without reduced-motion support
- poor mobile layout
- SEO metadata accuracy
- unnecessary complexity

## When Stuck

- If something is not working after 2-3 focused attempts, stop and explain the issue.
- Do not keep trying random fixes.
- Ask for clarification if requirements are unclear or if a change needs a real asset, live URL, or resume file that is not present.

