# Figma Design System Setup Guide
## TradeCore B2B — Matching your local codebase

This guide walks you through setting up a Figma file that mirrors
the TradeCore design system. Once done, any frame you design here
can be handed to Claude Code and it will generate matching code.

---

## Step 1 — Install these Figma plugins (free)

| Plugin | Purpose |
|--------|---------|
| **Tokens Studio for Figma** | Manage design tokens, sync with tokens.json |
| **Figma Dev Mode** | Built in — export CSS values, inspect spacing |

---

## Step 2 — Set up Local Variables (Colors)

In Figma: Edit menu → Local Variables → + New Collection → name it **"TradeCore"**

Create these Color variables:

### Brand
| Variable name | Value |
|--------------|-------|
| `brand/primary` | `#1B3A6B` |
| `brand/secondary` | `#2E6DB4` |
| `brand/accent` | `#F4A820` |

### Text
| Variable name | Value |
|--------------|-------|
| `text/primary` | `#111827` |
| `text/secondary` | `#374151` |
| `text/muted` | `#6B7280` |
| `text/inverse` | `#FFFFFF` |

### Surface
| Variable name | Value |
|--------------|-------|
| `surface/page` | `#F9FAFB` |
| `surface/card` | `#FFFFFF` |
| `surface/subtle` | `#F3F4F6` |
| `surface/nav` | `#1B3A6B` |

### Border
| Variable name | Value |
|--------------|-------|
| `border/default` | `#E5E7EB` |
| `border/strong` | `#D1D5DB` |

### Status
| Variable name | Value |
|--------------|-------|
| `status/success` | `#059669` |
| `status/warning` | `#D97706` |
| `status/danger` | `#DC2626` |
| `status/info` | `#2E6DB4` |
| `status/success-bg` | `#ECFDF5` |
| `status/warning-bg` | `#FFFBEB` |
| `status/danger-bg` | `#FEF2F2` |

---

## Step 3 — Set up Text Styles

In Figma: right panel → + next to Text Styles → create these:

| Style name | Font | Size | Weight |
|-----------|------|------|--------|
| `display/hero` | Sora | 38 | Bold 700 |
| `display/title` | Sora | 30 | Bold 700 |
| `display/heading` | Sora | 24 | SemiBold 600 |
| `display/subheading` | Sora | 20 | SemiBold 600 |
| `display/card-title` | Sora | 15 | SemiBold 600 |
| `body/base` | DM Sans | 15 | Regular 400 |
| `body/md` | DM Sans | 17 | Regular 400 |
| `body/sm` | DM Sans | 13 | Regular 400 |
| `body/xs` | DM Sans | 11 | Regular 400 |
| `body/label` | DM Sans | 11 | SemiBold 600 |
| `mono/sku` | JetBrains Mono | 12 | Regular 400 |
| `mono/base` | JetBrains Mono | 13 | Regular 400 |

**Font install:** Add Sora, DM Sans, JetBrains Mono via Google Fonts
(figma.com/google-fonts or install locally)

---

## Step 4 — Set up Spacing

Create a Number variable collection called **"Spacing"**:

| Name | Value |
|------|-------|
| `space/1` | 4 |
| `space/2` | 8 |
| `space/3` | 12 |
| `space/4` | 16 |
| `space/5` | 20 |
| `space/6` | 24 |
| `space/8` | 32 |
| `space/10` | 40 |
| `space/12` | 48 |
| `space/16` | 64 |
| `space/20` | 80 |

---

## Step 5 — Create the component library

Build these components in a **"Components" page** in your Figma file.
Each one maps directly to a CSS component in the codebase.

### Buttons (4 variants)
- `.btn-primary` — amber fill `#F4A820`, dark text, 8px radius
- `.btn-secondary` — transparent, `#2E6DB4` border + text
- `.btn-ghost` — transparent, grey text
- Sizes: Default (14px, 12px/20px padding) and Small (13px, 8px/16px)

### Labels / Badges (5 variants)
- `label-success` — `#ECFDF5` bg, `#059669` text
- `label-warning` — `#FFFBEB` bg, `#D97706` text
- `label-danger` — `#FEF2F2` bg, `#DC2626` text
- `label-info` — `#EBF3FF` bg, `#2E6DB4` text
- `label-neutral` — `#F3F4F6` bg, `#6B7280` text
- All: 11px, SemiBold, pill radius, 2px/8px padding

### Product Card
- 260px wide, white bg, 12px radius, 1px `#E5E7EB` border
- Image area: 180px tall, `#F3F4F6` bg
- Label badge: top-left of image (absolute)
- SKU: 11px JetBrains Mono, `#6B7280`
- Name: 15px Sora SemiBold
- Price: 20px Sora Bold `#1B3A6B`
- MOQ: 12px DM Sans `#6B7280`
- Footer: white bg with top border, flex row with buttons

### Stat Card
- White bg, 12px radius, 1px border, 20px padding
- Label: 11px SemiBold uppercase `#6B7280`
- Value: 28px Sora Bold `#1B3A6B`
- Sub: 12px DM Sans `#6B7280`

### Navigation Bar
- 60px tall, `#1B3A6B` background
- Logo: 18px Sora Bold, white + amber accent
- Links: 14px DM Sans Medium, white 75% opacity → white on hover
- Active link: white with amber bottom border

### Page Header
- `#1B3A6B` background
- Breadcrumb: 13px, white 50% opacity
- H1: 30px Sora Bold, white
- Subtitle: 15px DM Sans, white 70%

### Table Row
- Header: 11px SemiBold uppercase `#6B7280`, 2px bottom border
- Row: 14px DM Sans, 1px `#E5E7EB` bottom border
- Hover: `#F3F4F6` row background

---

## Step 6 — Page templates to design

Create a **"Screens" page** with frames for each page at 1280px wide:

1. **Dashboard** — stats row + recent orders table + quick order card
2. **Catalogue** — sidebar + product grid with mixed stock states
3. **Orders** — search bar + full order history table
4. **Account** — sidebar nav + company profile form

These match the 4 HTML pages in the local site exactly, so any
enhancement you design in Figma can be handed straight to Claude Code.

---

## Step 7 — Sync tokens with Tokens Studio

1. Open Tokens Studio plugin
2. Create a new token set called **"tradecore"**
3. Import from `tokens.json` (the file in your local project)
4. Apply the token set to your Figma file
5. Now when you update a token value, it updates across all components

---

## Using this with Claude Code

Once this Figma file is set up, your enhancement workflow is:

1. Design the new screen or component in Figma using these components
2. Screenshot the relevant frame (Cmd+Shift+4 on Mac)
3. Open Claude Code in the `b2b-demo` folder
4. Paste the screenshot + write your prompt referencing CLAUDE.md
5. Claude Code reads the codebase and generates matching HTML/CSS

**Example prompt:**
```
[paste screenshot]

Build the backorder screen shown above.
New page at pages/backorders.html.
Follow the page structure in orders.html.
Use existing label, table, and stat-card components.
Reference CLAUDE.md for all conventions.
Done when: page is navigable from the Orders nav link.
```

---

## File structure recommendation in Figma

```
TradeCore Design System
├── 🎨 Tokens          (color/type/spacing variables)
├── 🧩 Components      (all reusable components)
├── 📄 Screens         (full page designs)
└── 🔄 Enhancements    (new feature flows — one frame set per feature)
```

The **Enhancements** page is where you design new features before
handing them to Claude Code. Keep each enhancement as a named
frame group so you can screenshot the full journey cleanly.
