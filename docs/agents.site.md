# Site guidance

## Paths

- `.eleventy.js` calls the installed preset with its defaults. Eleventy reads from the repository root and writes to `_site/`. Layouts live in `_includes/layouts/`, reusable markup in `_includes/`, and site data in `_data/site.yaml`.
- `styles/styles.scss` holds the theme settings and imports `styles/_dunes.scss`. Built CSS, JavaScript, and USWDS assets go under `_site/assets/`. The site uses the default asset configuration and watches `styles/` and `js/`. The preset copies site inputs including `admin/`, `img/`, and `favicon.ico`.
- Public entries are `js/uswds-init.js` and `js/app.js`, loaded by `_includes/meta.html` and `_includes/scripts.html`. Decap CMS starts at `admin/index.html` through `js/admin.js` and reads `admin/config.yml`.
- Edit standalone content in `pages/`, announcements in `collections/announcements/`, and videos in `collections/media/`. Their listing pages are in `pages/announcements/` and `pages/media/`.

## Commands and URLs

- Use Node.js 22 or newer and install locked dependencies with `npm ci`. Run `npm run build` for production output or `npm run dev` for local serving and watching. Both scripts synchronize agent guidance first. Neither needs environment variables or flags for a root deployment. Cloud.gov Pages and the link-check workflow use `npm run pages`, which calls the build.
- The production site is served at the root of `https://www.restorethegulf.gov`, the canonical origin in `_data/site.yaml`. For a prefixed preview, pass the deployment path in `BASEURL`, for example `BASEURL=/preview npm run build`. Write internal links and asset references as root-relative paths so the HTML base plugin can apply that prefix. Links under `/~assets/` refer to files on the production host. The link checker rewrites those URLs to that host when checking local output.
- The PR link check uses Linkinator against `_site/`. See `.github/workflows/link-check.yml` for the exact flags and report environment variables. `scripts/format-linkinator-results.mjs` formats the report. `npm test` is a failing placeholder and there is no configured code-formatting command.

## Content and CMS contracts

- Give pages a `title`. `pages/pages.json` defaults to `layouts/default` with `sidenav: true`. The layout supplies the H1 and renders optional `lead` and `featured-image` fields (`filename`, `alt-text`, `caption-text`). `pages/pages.11tydata.js` derives clean URLs from paths beneath `pages/`. Preserve explicit permalinks and redirects when editing published pages.
- Use unique `eleventyNavigation.key` values and set `parent` to an existing navigation key. `title` overrides the navigation label and `order` controls sibling order. The menu reads `hideChildrenFromTopNav`. Decap folder collections filter on `cms_hidden: false` and store uploads under `img/` with public URLs under `/img/`.
- The homepage uses `hero` and four `topics` entries from the CMS schema. The site alert reads `site.alert.enabled`, `heading`, and `text` from `_data/site.yaml`. The council members page renders `members` and their nested `delegates` from its front matter.
- Announcements use `title` and `date`, with CMS filenames based on date and slug. `announcements.json` assigns the `announcements` tag for the listing and `press-release` for the `postsByYear` archive. `_includes/collection-item.html` uses an optional `url` to send listing visitors to an external source.
- Media directory data assigns the `media` tag and `/media/{{ page.fileSlug }}/` permalinks. The gallery uses `title`, `thumbnail`, `thumbnail_alt` (falls back to the title), and `description` (falls back to the excerpt). `_includes/layouts/media.html` passes `vimeoId`, `title`, `video_caption`, `aspect_ratio`, and playback flags (`autoplay`, `muted`, `loop`, `playsinline`) to `_includes/vimeo.html`.

## Search

- Search.gov settings are in `_data/site.yaml` under `searchgov`. `_includes/menu.html` renders `_includes/searchgov/form.html`, which sends `query` and `affiliate` to `/search/` in inline mode or to `endpoint` in hosted mode.
- `pages/search.md` supplies the results container. `_includes/layouts/search.html` reads the `query` parameter, calls the configured `api` with `affiliate` and `access_key`, and renders `web.results` entries using `url`, `title`, and `snippet`.
