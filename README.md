# sun.yiu.co

My online point of presence.

Two hand-authored static pages, styled with Tailwind CSS and progressively
enhanced with [htmx](https://htmx.org) so switching tabs feels instant
without giving up real, directly-loadable URLs.

## Stack

- **Static HTML with htmx** `hx-boost` on `<body>` intercepts clicks on the
  nav links and swaps in the target page via AJAX instead of a full navigation, while
  `/` and `/links` both remain real pages (view-source, no-JS, and direct
  links all still work). The [preload extension](https://htmx.org/extensions/preload/)
  prefetches the other tab on hover so the swap feels instant.
- **Tailwind CSS v4** compiles to `assets/styles.css`.

## Local development

```bash
npm install
npm run dev     # watches src/input.css, rebuilds assets/styles.css on change
```

In another terminal, serve the site so `htmx`/asset paths resolve correctly
(opening `index.html` directly via `file://` won't work):

```bash
npx serve .
```

Run a one-off production build (minified) with:

```bash
npm run build
```

## Deployment

Pushes to `master` trigger `.github/workflows/deploy.yml`, which builds the
CSS, assembles the static output into `_site/` (with `links.html` placed at
`links/index.html` so `/links` resolves via directory index on any static
host), and publishes it via GitHub Pages.

The site is served from the custom domain in `CNAME` (`sun.yiu.co`).
