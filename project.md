# Project overview

## Summary

This repository contains the personal portfolio website of Phạm Duy Anh. It is a bilingual, single-page Vue application showcasing education, technical skills, AI/software projects, extracurricular activities, résumé information, and contact links. The site emphasizes applied AI, Computer Vision, LLM systems, and full-stack engineering.

## Technology

- Vue 3 with Composition API and Single File Components
- Vite 8 for local development and production builds
- Plain CSS in `src/styles/main.css`
- JavaScript ES modules
- Vercel deployment; no application backend

The package scripts are:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local Vite development server |
| `npm run check` | Validate required translations and the HTML app mount point |
| `npm run build` | Create the production bundle in `dist/` |
| `npm run preview` | Preview the production build locally |

## Page structure

`src/App.vue` assembles the page in this order:

1. Hero and profile metrics
2. About
3. Skills
4. Selected projects
5. Education, research, and recognition
6. Social/student activities
7. Résumé
8. Engineering process
9. Contact

The shared header builds its navigation from `navItems` in `src/data/portfolio.js`. The app also provides a scroll-progress indicator, active-section tracking, reveal animations, and a back-to-top control.

## Main source locations

| Path | Responsibility |
| --- | --- |
| `src/App.vue` | Page composition and global scroll/reveal behavior |
| `src/components/` | Header/footer and page sections |
| `src/data/portfolio.js` | Profile, navigation, metrics, skills, projects, journey, activities, and certificates |
| `src/data/translations.js` | English and Vietnamese text |
| `src/composables/useI18n.js` | Shared language state, persistence, and translation lookup |
| `src/styles/main.css` | Design tokens, component styles, responsive rules, and motion |
| `scripts/validate-content.mjs` | Checks translation keys referenced by components/data |
| `public/` | Static files copied to the build output |
| `vercel.json` | SPA rewrite for Vercel |

## Content and behavior notes

- The language toggle supports English (`en`) and Vietnamese (`vi`) and persists the selection in `localStorage`.
- Add portfolio content to `portfolio.js`; add matching copy to both locales in `translations.js`.
- The English metric currently shows a **planned TOEIC score of 500 (R+L), expected January 2027**.
- The GCI 2026 Winter program at The University of Tokyo is listed as **expected/planned for December 17, 2026**, not as a completed certificate.
- The activities section uses empty `imageUrl` fields as photo placeholders. Add image URLs later without changing the existing card layout or color treatment.
- Project demos can be direct video URLs or YouTube URLs. The work modal renders YouTube embeds for YouTube links and native video controls for direct media files.
- Large videos should remain off-repository. Store them with an external media provider and reference an appropriate stable URL.
- Signed/private Blob URLs can expire; use a stable, intentionally accessible URL for production media.

## Deployment

For Vercel, use the Vite framework preset, `npm run build` as the build command, and `dist` as the output directory. `vercel.json` rewrites requests to `index.html` for the SPA.

`index.html` contains the title, description, canonical URL, Open Graph/Twitter metadata, Google Fonts, and Person structured data. Update those deliberately if site identity or domain changes.
