# Deploy notes — efmena1.github.io

This bundle replaces the React app in your existing Vite project. The Vite
config, package.json, and GitHub Actions workflow (`.github/workflows/deploy.yml`)
already in your repo do not need to change — they will build this code and
deploy it automatically on push to `main`.

## What's in this bundle

```
index.html                  ← replaces repo root index.html
public/
  favicon.svg               ← already exists in your repo; included for completeness
src/
  main.jsx                  ← entrypoint (same shape as your existing one)
  App.jsx                   ← new React app (Material 3, EN/ES, modal, scroll reveals)
  content.js                ← bilingual content as an ES module
  styles.css                ← Material 3 styles (blue + steel-teal palette)
```

## How to publish

From the root of a fresh clone of `efmena1.github.io`:

```bash
# 1. Replace the files
cp -R /path/to/this/deploy/index.html ./index.html
cp -R /path/to/this/deploy/src/*       ./src/
cp -R /path/to/this/deploy/public/*    ./public/   # (favicon, optional — same file)

# 2. (Optional) Put your resume PDF where the hero CTA expects it
cp /path/to/Edison_Mena_Resume_2026.pdf ./public/Edison_Mena_Resume_2026.pdf

# 3. (Optional) Verify locally
npm install
npm run dev    # http://localhost:5173

# 4. Commit & push
git add -A
git commit -m "Redesign portfolio (Material 3, bilingual, case-study modal)"
git push origin main
```

The existing GitHub Pages workflow will:
- `npm ci`
- `npm run build`  → outputs to `./dist`
- Deploy `./dist` to the `github-pages` environment.

Final URL: https://efmena1.github.io/

## Resume PDF

The hero button "View Resume" / "Ver CV" points to `/Edison_Mena_Resume_2026.pdf`.
For the link to work in production, drop the PDF in `public/` — Vite copies
`public/*` to the build root as-is.

If you don't have the PDF yet, the button will 404 but won't break the site;
you can also edit `src/content.js` and change `resumeHref` to point elsewhere
(e.g. a Google Drive link).

## Adjustments

- **Colors** live in `src/styles.css` at the top under `:root`. The current
  palette is M3 light, blue-seeded with a steel-teal tertiary.
- **Content** (all text, projects, experience, skills) lives in `src/content.js`,
  split into `en` and `es` blocks. Edit either block freely.
- **Default language**: auto-detected from the browser, then remembered in
  `localStorage` under the key `em-lang`. Toggle is in the top app bar.
