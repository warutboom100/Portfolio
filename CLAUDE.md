# CLAUDE.md — Warut.M Portfolio

> Personal portfolio site used to interview for fullstack developer roles.
> Goal: be the polished, fast, professional first impression for recruiters and engineering managers.

---

## 1. Project Overview

**Type:** Single-page React portfolio (static, no backend).
**Stack:** React 18 + Vite 5 + CSS Modules. No TypeScript, no router, no state library — flat component tree rendered from `App.jsx`.
**Owner:** Warut M. (warutboom300@gmail.com) — fullstack developer (~1 yr experience) targeting frontend/fullstack roles.
**Deploy target:** Static host (Vercel / Netlify / GitHub Pages).

### Sections (rendered in this order in [src/App.jsx](src/App.jsx))
1. `Navbar` — top nav
2. `Hero` — intro + "Download Resume" CTA
3. `Skills` — Frontend / Backend / Other skill grids
4. `About` — work experience timeline (drives from [src/data/history.json](src/data/history.json))
5. `Projects` — project cards (drives from [src/data/project.json](src/data/project.json))
6. `Certificates`
7. `Contact`

Data is JSON-driven under [src/data/](src/data/). Images served from `assets/` via `getImageUrl()` in [src/utils.js](src/utils.js).

---

## 2. Commands

```bash
npm run dev      # Vite dev server on http://localhost:5173
npm run build    # Production build → dist/
npm run preview  # Serve the built dist/ locally
npm run lint     # ESLint, 0 warnings allowed
```

Always run `npm run lint && npm run build` before committing — the lint config has `--max-warnings 0`.

---

## 3. Conventions

- **Components:** one folder per component under [src/components/](src/components/) with `Component.jsx` + `Component.module.css`. Match existing pattern when adding new ones.
- **Styling:** CSS Modules only. Shared tokens (colors, fonts) live in [src/vars.css](src/vars.css). Don't introduce Tailwind / styled-components — keep the dependency tree small.
- **Data:** prefer JSON files in [src/data/](src/data/) over hardcoding strings inside components. Recruiters read these — keep copy tight and proofread.
- **Images:** put under `assets/<section>/` and reference via `getImageUrl("section/file.png")`. Never import images directly.
- **Exports:** mixed today (named `export const Hero` vs default `export default Certificates`). Prefer **named exports** going forward; convert `Certificates` if you touch it.
- **No emojis** in code or copy unless I explicitly ask.

---

## 4. Known Issues To Fix (interview-readiness checklist)

These are real bugs / weak spots a reviewer will spot. Fix order = priority.

### P0 — embarrassing if a recruiter sees it
- [ ] [src/components/Hero/Hero.jsx:25](src/components/Hero/Hero.jsx#L25) — "Download Resume" button is a `mailto:myemail@email.com` link, not a resume download. Replace with a real PDF in `public/` or a working mailto with the actual address.
- [ ] [src/components/Hero/Hero.jsx:16](src/components/Hero/Hero.jsx#L16) — `class={styles.leading}` should be `className=` (React will warn in console).
- [ ] [README.md](README.md) — still the Vite template. Rewrite as a real project README (what it is, stack, how to run, deploy URL).
- [ ] Folder name typo: `src/components/Contract/` should be `Contact/` — the component is the contact form, not a contract. Rename folder + import in [src/App.jsx:8](src/App.jsx#L8).
- [ ] `<title>` and `<meta description>` in [index.html](index.html) — make sure they say "Warut M. — Fullstack Developer" or similar, not "Vite + React".
- [ ] [public/favicon.ico](public/favicon.ico) — replace the default Vite favicon with a personal mark.

### P1 — quality bar
- [ ] No mobile testing visible — verify every section at 375px width and fix overflow.
- [ ] Lighthouse pass: target 95+ on Performance, Accessibility, Best Practices, SEO. Likely wins: image `width`/`height` attrs, `alt` text audit, semantic landmarks (`<main>`, `<nav>`, `<section aria-labelledby>`).
- [ ] Add Open Graph + Twitter Card meta tags so the link previews well when shared with recruiters.
- [ ] Add `loading="lazy"` to project / certificate images below the fold.
- [ ] Hero image — preload it (`<link rel="preload" as="image">`) since it's LCP.

### P2 — nice-to-have polish
- [ ] Smooth-scroll behaviour for nav anchors + active-section highlight.
- [ ] Dark mode toggle (the `vars.css` setup makes this cheap).
- [ ] Animate sections in on scroll (IntersectionObserver, no library needed).
- [ ] Add a 1-2 sentence "what I learned" per project — recruiters want narrative, not just links.
- [ ] Replace Freelance entries with concrete metrics ("reduced X by Y%", "served Z users").
- [ ] Consider adding a small **case study** page for the strongest project — this is the single biggest interview multiplier.

### P3 — strategic improvements (post-interview-cycle)
- [ ] Migrate to TypeScript — the project is small enough that this is a 1-day job and signals seniority.
- [ ] Add a contact form that actually sends (Formspree / Resend / Vercel serverless function). Today it's likely just a `mailto:`.
- [ ] CI: GitHub Action that runs `lint` + `build` on PR.
- [ ] Deploy to Vercel with a custom domain (warut.dev / warutm.com). A `.com` domain is worth the $12.

---

## 5. Interview-Specific Talking Points

When this portfolio comes up in an interview, be ready to discuss:
- **Why CSS Modules over Tailwind?** Scoped styles, no build-step lock-in, smaller bundle, learn the fundamentals before reaching for utilities.
- **Why no router?** It's a single-page marketing site — anchor links are the right tool. A router would be over-engineering.
- **Why JSON-driven content?** Separates content from presentation, makes future CMS migration trivial.
- **Performance:** mention LCP target, image lazy-loading, route-free single bundle.
- **Trade-offs:** acknowledge what's missing (TS, tests, CMS) and explain *why* it isn't there yet — that shows judgement, which is what interviewers actually probe for.

---

## 6. When Working In This Repo

- **Before any UI change:** run `npm run dev` and verify in a browser. Don't claim "done" without seeing the rendered page.
- **Before commit:** `npm run lint && npm run build`. Both must pass.
- **Don't add dependencies** without checking with me first. Each new package is bundle weight a recruiter's Lighthouse audit will see.
- **Don't refactor adjacent files** when fixing a bug. Minimal diffs. The repo is a portfolio, not a refactor playground.
- **Copy edits matter more than code edits here** — the audience is humans reading prose, not engineers reading source. If you spot a typo in JSON, fix it.
