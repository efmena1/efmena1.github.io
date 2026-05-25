# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Bilingual (EN/ES) single-page portfolio site for Edison Mena. Vite + React 18, no router, no test suite. Deployed to GitHub Pages at https://efmena1.github.io/.

## Commands

```bash
npm install        # install deps
npm run dev        # local dev server at http://localhost:5173
npm run build      # production build to ./dist
npm run preview    # serve the built ./dist locally
```

No linter, formatter, or test runner is configured. The only quality gate is `npm run build` succeeding.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs `npm ci && npm run build` and publishes `./dist` to the `github-pages` environment. There is no staging environment — main is production.

## Architecture

The entire site is content-driven by a single module:

- **`src/content.js`** — exports `CONTENT = { en: {...}, es: {...} }`. Each language block has the same shape (`meta`, `nav`, `hero`, `metrics`, `about`, `work.projects[]`, `experience.roles[]`, `skills`, `contact`, `modal`, `footer`). To add/edit copy or projects, edit both `en` and `es` blocks — the structures must stay parallel because `App.jsx` reads `CONTENT[lang]` and renders the same components regardless of language.
- **`src/App.jsx`** — one file holding every section component (`TopBar`, `Hero`, `Metrics`, `About`, `Work`, `Experience`, `Skills`, `Contact`, `Footer`, `ProjectModal`) plus the app shell. Components are intentionally not split into separate files; they read their slice of `t = CONTENT[lang]` and render.
- **`src/styles.css`** — all styling. Material 3 tokens live under `:root` at the top (blue-seeded palette with steel-teal tertiary). Scroll-reveal animation is driven by `.reveal` → `.is-visible` class swap via an `IntersectionObserver` set up in `useReveal` in `App.jsx`; that observer is re-attached whenever `lang` changes because DOM nodes are replaced on language switch.
- **`src/main.jsx`** — standard Vite/React entrypoint mounting `<App />` on `#root`.

### Language handling

`App` initializes `lang` by reading `localStorage["em-lang"]`, falling back to `navigator.language` (ES if it starts with "es", else EN). Selection is persisted back to `localStorage` and reflected on `<html lang>`. The `TopBar` EN/ES toggle is the only switcher.

### Project case-study modal

`Work` renders each project in `t.work.projects` as a button; clicking calls `onOpen(p)` which sets `openProject` state in `App`, mounting `<ProjectModal>`. The modal reads its labels (`context`, `role`, `impact`, `stack`, `close`) from `t.modal` and the rest from the project object itself. Body scroll is locked via the `modal-open` class on `<body>`; Escape closes.

## Assets

`public/` is copied to the build root verbatim. The hero CTA links to `/Edison_Mena_Resume_2026.pdf`, which must live in `public/` for the link to resolve in production. To change the target, edit `hero.resumeHref` in both language blocks of `src/content.js`.
