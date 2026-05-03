# Personal Website Optimization Research Results

## Executive Summary

The current portfolio is already doing the most important thing right: it is simple, visual, and fast to understand. It presents Sheldon Liu as a full-stack web developer, shows real project screenshots, links to live demos/source code, and keeps the page focused on hiring signals.

The main opportunity is not to add a complex app stack immediately. The best next step is to optimize the current static site first, then consider an Astro rebuild if the portfolio grows into multiple project case studies, a blog, reusable components, or markdown-driven content.

Recommended direction:

1. Keep the current static site for short-term improvements.
2. Improve SEO metadata, accessibility, image delivery, copy, and project presentation.
3. Move to Astro later if maintaining one large `index.html` becomes annoying.

## Current Project Assessment

## What works well

- The site has a clear audience: recruiters, hiring managers, and collaborators.
- The hero quickly communicates full-stack web development.
- Project cards include real screenshots, which gives more credibility than text-only portfolios.
- The site is deployable as plain static files, which is ideal for GitHub Pages.
- There is very little JavaScript, so the page avoids the heavy runtime cost of a full SPA.
- The visual style is consistent: dark background, glass panels, project previews, and simple section navigation.

## What feels fragile or outdated

- `index.html` contains all HTML, CSS, and JavaScript in one file. This is fine now, but it will get harder to maintain as sections grow.
- The page has limited SEO metadata. It has a title and viewport, but no meta description, canonical URL, Open Graph tags, Twitter card tags, or structured data.
- Screenshot assets are large. Current image sizes:
  - `ecommerce-home.png`: 3072 x 1580, about 1.48 MB
  - `portfolio-home.png`: 3040 x 1590, about 1.11 MB
  - `property-pulse-auth.png`: 3042 x 1610, about 1.54 MB
  - `property-pulse-detail.png`: 3039 x 1542, about 158 KB
  - `property-pulse-home.png`: 3043 x 1602, about 485 KB
  - `taskflow-home.png`: 3071 x 1593, about 1.12 MB
- The HTML has a likely extra closing `</div>` after the hero section.
- The footer copyright symbol appears as `漏`, which looks like an encoding issue.
- Animated background effects do not currently respect `prefers-reduced-motion`.
- The filter buttons have visual active state, but no ARIA state such as `aria-pressed`.
- The upcoming e-commerce project is useful for showing direction, but it currently occupies the same visual weight as completed projects.

## Is single-file HTML/CSS/JS still appropriate?

Yes, for the current size. This is a four-section portfolio with a few project cards and minimal interactivity. A framework is not required yet.

The single-file approach should be reconsidered when:

- there are more than 5 to 6 projects
- project case studies need their own pages
- styles become difficult to navigate
- content updates become frequent
- repeated markup starts causing mistakes

## Technology Stack Options

| Option | Best for | Pros | Cons | Recommendation |
|---|---|---|---|---|
| Static HTML/CSS/JS | Current site and quick updates | No build step, simple deploy, very fast, easy GitHub Pages support | Harder to maintain as content grows, no components, no image pipeline | Best short-term choice |
| Vite | Small modern frontend without SSR | Fast dev server, build pipeline, easy asset handling, GitHub Pages deployment support | Still mostly manual content unless paired with a framework | Good if you want tooling but not a content framework |
| Astro | Portfolio, content, case studies, blog | Built for content sites, static output, component structure, markdown/MDX, low JavaScript by default | Requires migration and build workflow | Best next-version choice |
| Next.js | Larger React app or portfolio plus app features | Strong React ecosystem, static export support, can grow into app features | More complexity than needed for a portfolio, static export has unsupported dynamic features | Use only if the portfolio becomes part of a bigger React/Next app |

## Recommended stack for the next version

Astro is the best next-version stack if the portfolio grows.

Why:

- A portfolio is content-driven, and Astro is explicitly designed for content-driven websites.
- Astro renders mostly static HTML and only ships JavaScript for interactive islands.
- It supports Markdown/MDX content collections, which fits project case studies well.
- It keeps the page closer to the current static-site mental model than a full React/Next app.

Short-term recommendation: do not migrate yet. First optimize the current static site. Rebuild in Astro only when adding case studies, blog posts, reusable project data, or multiple pages.

## UI/UX Optimization

## Layout

- Reduce hero complexity slightly so the first viewport focuses on the headline, role, CTA, and one strong project preview.
- Add a resume CTA in the hero or nav if a resume PDF exists.
- Add a compact "Available for junior/full-stack roles" line, but keep the wording professional.
- Consider separating completed projects from planned projects. Upcoming projects should not compete visually with shipped work.

## Typography

- The current Inter choice is good.
- The H1 is strong, but the negative letter spacing is aggressive. Slightly reduce or remove negative tracking for better readability.
- Body copy is readable, but project descriptions are long. Shorten each card to 2 to 3 high-impact sentences.

## Responsive and mobile

- The mobile nav currently stacks vertically. This is acceptable, but a tighter mobile header would look more polished.
- Project cards should keep screenshots readable on mobile. Avoid too-short image crops.
- Test the hero mockup on narrow devices; it may become visually dense.

## Accessibility

- Add `aria-pressed="true/false"` to project filter buttons.
- Add a visible keyboard focus style for buttons and links.
- Add `prefers-reduced-motion` styles to disable or simplify the background and fade animations.
- Confirm contrast for muted text against translucent panels.
- Keep alt text descriptive but not too verbose.
- Avoid using only hover to reveal important actions; mobile and keyboard users need equal access.

## Animation and interaction

- Keep animations subtle. The current visual motion is polished, but background motion plus card fade-ins can be too much for some visitors.
- Add reduced-motion handling before adding more animation.
- Consider a small project filter count or clearer active filter state.

## Project cards

Each completed project card should show:

- what the app is
- what you personally built
- stack
- one or two technical highlights
- live demo
- GitHub link

The project screenshot should show the actual product state, not just a decorative crop.

## Content Optimization

## Hero section

Current hero is solid but generic. Recruiter-facing copy can be stronger if it names the target role and concrete strengths.

Possible direction:

> Full-stack JavaScript developer building responsive React and Next.js applications with real authentication, APIs, databases, and deployment workflows.

This is stronger because it directly names the job profile and implementation surface.

## Project descriptions

Project descriptions should shift from "developed a project" to proof of engineering judgment.

For each project, include:

- problem/use case
- key features
- architecture choices
- technical integration
- deployment/database/auth details
- what makes it production-like

Example structure:

- One sentence: what the project is.
- One sentence: what technical systems it includes.
- One sentence: one engineering decision or challenge.

## Upcoming project handling

Do not let planned work look equal to finished work. Good options:

- Move upcoming project into a smaller "Currently building" section.
- Keep it below completed projects.
- Make it visually quieter.
- Replace "Coming Soon" link with "In progress" or remove the dead `href="#"`.

## Sections to consider adding

- Resume download
- Featured technical highlights
- Short case study pages for 2 strongest projects
- Work eligibility / location / availability if relevant
- "Currently building" section

Avoid adding too many generic sections. A portfolio is stronger when it makes the best work obvious.

## SEO and Performance

## Metadata recommendations

Add:

- meta description
- canonical URL
- Open Graph title/description/image
- Twitter card metadata
- favicon/app icons
- author metadata
- theme color

Suggested description:

> Sheldon Liu is a full-stack JavaScript developer building responsive React, Next.js, Node.js, Express, PostgreSQL, and MongoDB web applications.

## Structured data

Consider JSON-LD for `Person` and `WebSite`, including:

- name
- job title
- URL
- GitHub
- LinkedIn
- sameAs links

## Image optimization

The largest immediate performance win is image handling.

Recommended:

- Convert large PNG screenshots to WebP or AVIF.
- Generate multiple widths for responsive delivery.
- Use `srcset` and `sizes`.
- Add explicit `width` and `height` attributes to images to reduce layout shift.
- Use `loading="lazy"` for below-the-fold project screenshots.
- Use `fetchpriority="high"` only for the most important above-the-fold image.

MDN and web.dev both recommend responsive images with `srcset`/`sizes` so the browser can choose an appropriate asset for the viewport and device.

## Lighthouse checklist

Check:

- Performance
- Accessibility
- Best Practices
- SEO

High-priority checks:

- image transfer size
- missing meta description
- contrast
- focus visibility
- document structure
- tap targets
- layout shift
- unused CSS is less important while the page is single-file, but the stylesheet is already large

## Portfolio Strategy

## What recruiters usually look for

- a clear role target
- evidence of shipped work
- live demos that load
- source code links
- clean UI and responsive behavior
- authentication/database/API experience for full-stack roles
- readable explanations of technical decisions
- easy contact path

## Recommended portfolio structure

Keep the one-page structure, but make the hierarchy:

1. Hero: role, strongest skill signal, CTA
2. Featured projects: completed work first
3. Technical strengths: short and specific
4. About: concise personal/professional summary
5. Contact: email, GitHub, LinkedIn, resume

The current site has About before Projects. For hiring, projects may deserve to come earlier because they are the strongest proof.

## Implementation Plan

## Quick wins

- Add meta description, canonical, Open Graph, and Twitter card tags.
- Fix the footer copyright encoding issue.
- Fix the extra closing `</div>` in the hero area.
- Add focus-visible styles.
- Add reduced-motion CSS.
- Add `aria-pressed` updates to filter buttons.
- Optimize the PNG screenshots to WebP/AVIF.
- Add `width`, `height`, `loading`, and responsive image attributes.
- Improve README with a more complete portfolio summary and local preview instructions.

## Medium-size improvements

- Refactor CSS into clearer sections inside the same file.
- Make project data easier to edit by moving repeated project information into a small JavaScript data array, or migrate to multiple partial files if tooling is introduced.
- Rewrite project descriptions into stronger case-study style summaries.
- Reorder sections so projects appear earlier.
- Add resume CTA.
- Add a "Currently building" section for the e-commerce project.

## Larger rebuild options

If the site grows, rebuild with Astro:

```text
src/
  pages/
    index.astro
    projects/
      property-pulse.astro
      taskflow.astro
  components/
    Hero.astro
    ProjectCard.astro
    ContactLinks.astro
  content/
    projects/
```

Use content collections for project metadata and case studies.

## Suggested order of work

1. Fix small correctness/accessibility issues in the current file.
2. Optimize image assets and metadata.
3. Improve hero and project copy.
4. Reconsider section order.
5. Add resume/case-study content if available.
6. Move to Astro only when content growth justifies a build step.

## Source Notes

- Local files reviewed: `index.html`, `README.md`, `context/project-overview.md`, local PNG assets.
- Astro docs position Astro as a content-driven framework with mostly static HTML and JavaScript only for interactive islands: https://docs.astro.build/en/concepts/why-astro/ and https://docs.astro.build/ar/concepts/islands/
- Vite docs show simple static deployment support and GitHub Pages build workflow assumptions: https://vite.dev/guide/static-deploy.html
- Next.js docs confirm static export support, but also list server/dynamic features that are unsupported in export mode: https://nextjs.org/docs/app/guides/static-exports
- MDN and web.dev responsive image guidance supports using `srcset`, `sizes`, and `picture` for efficient image delivery: https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images and https://web.dev/learn/images/responsive-images

