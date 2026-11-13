# Agent instructions

Use this file as the working contract for future coding sessions in this repository. For a concise project briefing, read `context.md`; for visual decisions, read `style.md`.

## Change discipline

- Read the directly related component, data, translations, and styles before editing.
- Make small, focused changes that preserve existing behavior and current user edits.
- Do not overwrite or revert unrelated worktree changes.
- Keep content data-driven in `src/data/portfolio.js`; avoid hard-coding portfolio copy into templates.
- Keep all user-visible strings in `src/data/translations.js`, with both `en` and `vi` values.
- Follow existing Vue Composition API and CSS patterns. Prefer existing tokens and helpers over new abstractions.
- Keep the site responsive, keyboard-accessible, and consistent with `style.md`.

## Content accuracy and privacy

- Treat statuses such as “expected” or “planned” as distinct from completed credentials or achievements.
- Do not invent dates, outcomes, certificates, roles, or project metrics.
- Do not copy signed Vercel Blob URLs, delegation tokens, signatures, or other credentials into documentation, logs, or new public-facing locations. Existing signed media URLs in portfolio data may expire; prefer stable, appropriately accessible URLs when updating them.
- Do not add large media binaries to the Git repository. Use an external media host and only store the intended URL in project data.

## Validation

Run the smallest relevant project checks after a change:

```powershell
npm run check
npm run build
```

`npm run check` validates required EN/VI translation keys and the app mount point. `npm run build` validates the Vite production build. Report checks that were not run and their reason.

## Repository boundaries

- Source of truth is under `src/`, with static public files under `public/`.
- Do not edit generated `dist/` output or dependency files under `node_modules/`.
- Do not change dependencies unless required by the task; if a manifest changes, keep the lockfile consistent.
- Deployment is configured for Vercel and static hosting. Do not add backend assumptions to this frontend-only app.
