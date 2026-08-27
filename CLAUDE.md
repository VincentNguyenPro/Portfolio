# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # start Vite dev server on port 8080
npm run build      # production build (outputs to dist/)
npm run build:dev  # build in development mode (unminified, useful for debugging build output)
npm run lint        # run ESLint
npm run preview     # preview the production build locally
```

There is no test suite configured in this project.

## Architecture

This is a personal portfolio site for Vincent Nguyen (Product Manager / Product Owner), built with Vite + React + TypeScript + Tailwind + shadcn/ui. It originated from a Lovable-generated photography portfolio template ("Frame Portfolio", see `SPECIFICATION.md` / `PLAN.md`) that was repurposed for a PM/PO portfolio — this shows up in a few naming holdovers (see Data layer below).

### Routing & page composition

All routes are declared in `src/App.tsx`. Pages are lazy-loaded (`lazy(() => import(...))`) and wrapped in `PageTransition` + `AnimatePresence` for route transitions. Route map:

- `/` → `Index` (renders `Home`)
- `/projets` → `Portfolio` (project list)
- `/projet/:slug` → `ProjectDetail`
- `/parcours` → `About`
- `/contact` → `Contact`
- `/blog` → `Blog` (list)
- `/blog/:slug` → `BlogPost`
- `*` → `NotFound`

`App.tsx` also wires up the global providers, in nesting order: `ErrorBoundary` → `QueryClientProvider` (react-query, present but no active queries — data is static) → `ThemeProvider` (next-themes, `defaultTheme="light"`, `enableSystem={false}`) → `TooltipProvider` → `BrowserRouter` → `ScrollToTop` + `SkipToContent` + `Layout` (header/footer) wrapping the routed pages.

### Data layer

There is no backend/API — all content lives as static typed data in `src/data/`:

- `projects.ts` — case studies shown on `/projets` and `/projet/:slug`, typed by `Project` in `src/types/index.ts`
- `blog.ts` — blog posts, typed by `BlogPost`/`BlogSection`/`BlogImage` (defined in the same file). Each post is a list of `sections`, each optionally carrying paragraphs, bullets, a quote, a single image, or an image `gallery` — `BlogPost.tsx` renders sections generically based on which fields are present.
- `photographer.ts` — despite the name (a holdover from the original photography-portfolio template), this holds Vincent's own bio/contact/social data, typed by `PhotographerInfo`. Site-wide copy (name, tagline, contact info) is sourced from here.

Images referenced by `projects.ts`/`blog.ts` are imported from `src/assets/` (Vite asset imports, not public paths), so adding a new project/post means adding the image under `src/assets/` and importing it at the top of the relevant data file.

### SEO

`src/components/seo/SEOHead.tsx` is a headless component (renders `null`) that pages include to set `document.title` and meta/OG/Twitter tags via a `useEffect` keyed on the current route — there is no `react-helmet`/SSR; tags are patched into `document.head` client-side after the component mounts, so the title update is not visible in the very first paint of a page navigation.

### Styling / components

shadcn/ui components live in `src/components/ui/`, configured via `components.json` (aliases `@/components`, `@/lib`, `@/hooks`, etc., resolved through the `@` → `src` path alias in `vite.config.ts`/`tsconfig.json`). `tailwind-plus/` at the repo root (examples, ui-blocks, ui-kits) is reference material only — it is not imported by anything under `src/`.

### Mobile navigation & contact CTA

The mobile header menu (`Header.tsx`) is a bottom-sheet (`Sheet` with `side="bottom"`), not a side drawer — grouped into a "Navigation" list (all routes except `/projets`) and a "Projets" list (one row per entry in `src/data/projects.ts`, each with a per-slug icon from a `projectIcons` map and a shortened label from `projectShortTitles`, both keyed by slug).

`MobileContactBar.tsx` is a global floating bar rendered once in `Layout.tsx` (mobile only), showing a CV download link and a "Me contacter" trigger (`MobileContactSheet.tsx`, a second bottom sheet with the actual contact form). It hides itself on `/contact` and whenever any on-page element carries a `data-contact-cta` attribute and is in the viewport (see `Home.tsx`), so the floating bar never duplicates a CTA the page is already showing; it also slides out on scroll-down and back in on scroll-up.

### Deployment

`.github/workflows/deploy.yml` builds the app and FTP-deploys `dist/` to Hostinger on every push to `main` (no staging environment/preview deploys).

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
