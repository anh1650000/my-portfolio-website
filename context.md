# Session context

Short briefing for future sessions; use this instead of reading the whole repository. Read `agent.md` for editing rules and `style.md` for visual conventions.

## What this repo is

Bilingual (English/Vietnamese) personal portfolio for Phạm Duy Anh. Frontend-only Vue 3 + Vite SPA, styled with plain CSS, deployed to Vercel. No backend.

## Essential files

- `src/App.vue`: assembles page sections and global scroll/reveal behavior.
- `src/components/`: one Vue SFC per section; `SiteHeader.vue` uses shared navigation data.
- `src/data/portfolio.js`: all profile and portfolio structures. Add/update content here.
- `src/data/translations.js`: all display copy; maintain matching `en` and `vi` keys.
- `src/composables/useI18n.js`: persisted locale toggle and translation helper.
- `src/styles/main.css`: design tokens, all component styles, breakpoints.
- `scripts/validate-content.mjs`: checks required translation entries.
- `vercel.json`: SPA rewrite; deployment output is `dist/`.

## Current site shape

Page order in `App.vue`: Hero → metrics → About → Skills → Work → Journey/recognition → Activities → Résumé → Process → Contact. Header navigation is data-driven from `navItems`.

Visual identity: dark technical/editorial style (`#07080b` background; cyan `#7ee7ff`, blue `#788cff`; Manrope + IBM Plex Mono). Responsive breakpoints are 1100px, 820px, and 580px. Prefer CSS variables and existing card patterns.

## Content facts to preserve

- The TOEIC metric is planned: **500 (R+L), expected January 2027**.
- The GCI 2026 Winter item from The University of Tokyo is **planned for December 17, 2026**; do not imply completion or confirmed enrollment.
- Activities have three entries with `imageUrl: ""`; fill URLs when the user supplies images.
- Project demo videos should be hosted externally, not committed as large binaries.
- Vercel Blob signed URLs can expire. Never paste delegation tokens/signatures into docs; prefer stable, intentionally accessible media URLs.
- Keep English and Vietnamese text in sync.

## Routine checks

```powershell
npm run check
npm run build
```

`npm run check` validates translation coverage and the HTML mount point; `npm run build` verifies the Vite production build. Check the current worktree before editing and preserve unrelated changes.
