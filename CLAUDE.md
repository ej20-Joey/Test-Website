# TradeCore B2B Portal — Claude Code Context

## What this project is
A B2B wholesale distribution portal for trade customers to browse products,
place orders, and manage their account. Built in plain HTML/CSS/JS — no framework,
no build step. Opens directly in a browser.

## Tech stack
- Plain HTML5, CSS3, vanilla JavaScript
- No framework (no React, Vue, Angular)
- No build step — files run directly in browser
- Google Fonts via CDN (Sora, DM Sans, JetBrains Mono)
- No package.json / no npm required

## File structure
```
b2b-demo/
├── index.html              # Dashboard (homepage)
├── css/
│   └── styles.css          # All styles — single stylesheet
├── js/
│   └── catalogue.js        # Catalogue page interactivity (qty stepper, add to order)
├── pages/
│   ├── catalogue.html      # Product catalogue with grid + filters
│   ├── orders.html         # Order history table
│   └── account.html        # Account settings
└── tokens.json             # Design tokens — source of truth for all values
```

## Design system
All design values are defined in `tokens.json` and mirrored as CSS custom
properties in `css/styles.css` under the `:root` block.

**Always use CSS variables — never hardcode hex values or pixel values.**

Key variables:
- Colors: `--color-primary`, `--color-secondary`, `--color-accent`
- Text: `--color-text-primary`, `--color-text-secondary`, `--color-text-muted`
- Status: `--color-success`, `--color-warning`, `--color-danger`
- Status backgrounds: `--color-success-bg`, `--color-warning-bg`, `--color-danger-bg`
- Spacing: `--space-1` through `--space-20`
- Radius: `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-xl`, `--radius-pill`
- Shadows: `--shadow-sm`, `--shadow-md`, `--shadow-lg`
- Fonts: `--font-display` (Sora), `--font-body` (DM Sans), `--font-mono` (JetBrains Mono)

## Existing components and patterns
These components already exist in `css/styles.css` — use them, don't reinvent:

- `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-ghost`, `.btn-sm`, `.btn-lg`
- `.btn-fav` — absolute-positioned favourite button; place as a direct child of `.product-card` (not inside `.product-card-footer`); sits top-right over the product image
- `.label`, `.label-success`, `.label-warning`, `.label-danger`, `.label-info`, `.label-neutral`
- `.card`, `.card-body`, `.card-footer`
- `.product-card`, `.product-card-image`, `.product-card-body`, `.product-card-footer`
- `.product-grid` — CSS grid, auto-fill columns at 260px min
- `.qty-stepper` — quantity stepper; contains `.qty-stepper__btn` (×2, with `data-action="minus"/"plus"`) and `.qty-stepper__input` (number input); disable all three elements for unavailable products
- `.stat-card`, `.stats-row` — 4-column grid of KPI cards
- `.table-wrap`, `table`, `th`, `td`, `.td-sku`
- `.nav`, `.nav-inner`, `.nav-logo`, `.nav-links`, `.nav-cart`
- `.page-header`, `.page-header-inner`, `.page-header-breadcrumb`
- `.layout-sidebar` — 240px sidebar + 1fr main grid
- `.sidebar-link`, `.sidebar-label`
- `.search-bar`, `.search-input-wrap`
- `.empty-state`
- `.footer`, `.footer-inner`
- `.section-title`
- Utilities: `.container`, `.flex`, `.items-center`, `.gap-2/3/4`, `.mb-2/4/6/8`

## HTML conventions
- Every page includes the nav, page-header, main content, and footer
- Nav uses `class="active"` on the current page link
- Breadcrumb sits inside `.page-header-breadcrumb`
- Main content wrapped in `<div class="container page-content">`
- Font path for sub-pages: `../css/styles.css`; for root: `css/styles.css`

## Naming rules
- CSS classes: kebab-case (e.g. `product-card-name`)
- New JS files: camelCase (e.g. `backorderPanel.js`)
- New HTML pages: kebab-case in `/pages/` (e.g. `backorders.html`)

## What NOT to do
- Do not introduce npm, webpack, Vite, or any build tool
- Do not add CSS frameworks (Tailwind, Bootstrap)
- Do not hardcode colors or spacing — always reference CSS variables
- Do not modify the nav or footer structure — extend only
- Do not use inline styles for anything covered by the design system

## Git and GitHub
- Remote: `https://github.com/ej20-Joey/Test-Website.git`
- Default branch: `main`
- All changes must be made on a feature branch — never commit directly to `main`
- Merge to `main` via pull request

## Enhancement instructions
When adding a new enhancement:
1. New UI components → add CSS to `css/styles.css` at the bottom, grouped with a comment
2. New interactivity → create a new JS file in `js/` and link it at the bottom of the relevant HTML page
3. New pages → create in `pages/` following the existing page structure exactly
4. Always check existing components before creating new CSS

## Context for current enhancement work
The site currently has no backorder feature. Planned enhancements include:
- Backorder labels on product cards (catalogue.html)
- A dedicated backorders screen (pages/backorders.html)
- Backorder status in order history (orders.html)
These do not yet exist — they are the target prototype to build.
