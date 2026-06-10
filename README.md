# TradeCore B2B Demo — Quick Start

A working wholesale distribution portal for testing the
Claude Code + Figma prototyping workflow.

## Run the site locally (30 seconds)

No install. No npm. Just open a file.

### Option A — Double click
Open `index.html` directly in your browser. Done.

### Option B — Local server (recommended, enables page links to work fully)

If you have Python installed:
```bash
cd b2b-demo
python3 -m http.server 3000
```
Then open: http://localhost:3000

If you have Node installed:
```bash
npx serve .
```
Then open the URL it gives you.

## What's included

| File | What it is |
|------|-----------|
| `index.html` | Dashboard — order stats, recent orders |
| `pages/catalogue.html` | Product catalogue with stock labels |
| `pages/orders.html` | Order history table |
| `pages/account.html` | Account settings |
| `css/styles.css` | Full design system as CSS variables |
| `tokens.json` | Design tokens — source of truth |
| `CLAUDE.md` | Context file for Claude Code |
| `FIGMA-SETUP.md` | Step-by-step Figma setup guide |

## Test with Claude Code

1. Install Claude Code: `npm install -g @anthropic-ai/claude-code`
2. Open this folder: `cd b2b-demo && claude`
3. Try this prompt to test the backorder enhancement:

```
Add a backorder label and a new /pages/backorders.html screen.
The label should appear on product cards where stock is unavailable.
The backorders page should list open backorder items in a table.
Follow CLAUDE.md conventions throughout.
```

## Share with stakeholders

```bash
# Install ngrok (free): https://ngrok.com
ngrok http 3000
```

Share the URL ngrok gives you — anyone can view it, no login needed.
