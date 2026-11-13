# Website style guide

## Visual direction

The site uses a dark, editorial/technical visual style: near-black backgrounds, restrained glass-like surfaces, thin borders, cyan/blue accents, monospace labels, and generous spacing. Keep the portfolio polished and readable; avoid introducing unrelated color systems, loud gradients, or decorative UI that competes with the content.

## Design tokens

Tokens live at the top of `src/styles/main.css`. Reuse them rather than hard-coding new colors:

| Token | Value | Use |
| --- | --- | --- |
| `--bg` | `#07080b` | Main page background |
| `--bg-soft` | `#0b0d12` | Modal and component backgrounds |
| `--surface` | `rgba(16, 19, 27, 0.72)` | Translucent cards |
| `--surface-strong` | `#11151e` | Strong surfaces |
| `--line` | `rgba(255, 255, 255, 0.1)` | Dividers and subtle borders |
| `--line-strong` | `rgba(255, 255, 255, 0.18)` | Emphasized borders |
| `--text` | `#f3f6fb` | Primary text |
| `--muted` | `#9aa3b2` | Secondary text |
| `--dim` | `#626c7d` | Metadata and quiet text |
| `--cyan` | `#7ee7ff` | Primary accent, links, section labels |
| `--blue` | `#788cff` | Secondary accent |
| `--green` | `#8af7c2` | Positive/status accent |
| `--orange` | `#ffbd76` | Caution/secondary status accent |

Typography:

- Body and headings: `Manrope`, with system sans-serif fallbacks.
- Technical labels, dates, and small metadata: `IBM Plex Mono`, with monospace fallbacks.
- Keep headings compact with tight letter spacing; body copy should remain comfortable to read.

## Layout and components

- Use the shared `.shell` width and `.section` spacing for page alignment.
- Reuse `.section-heading`, `.section-kicker`, `.reveal`, and existing card patterns where possible.
- Cards use dark surfaces, subtle borders, moderate corner radii, and restrained hover movement.
- Use thin borders and accent color for hierarchy instead of heavy shadows or bright fills.
- For activity photos, preserve the existing 4:3 crop, `object-fit: cover`, dark/cyan/blue tint, and consistent card treatment. Do not apply a strong filter that makes real photos look unnaturally tinted.
- Demo modal videos use a 16:9 responsive frame. Preserve viewport bounds on mobile.

## Responsive behavior

Responsive rules are in `src/styles/main.css`:

- `max-width: 1100px`: switch header navigation to the mobile menu and reduce multi-column layouts.
- `max-width: 820px`: collapse selected grids and reorganize timeline/project layouts.
- `max-width: 580px`: single-column cards and compact spacing.

Use `minmax(0, 1fr)` for shrinkable grid columns, avoid fixed widths that overflow, and check both mobile and desktop when changing layout.

## Motion and accessibility

- Keep transitions short and subtle; follow the existing reveal and hover behavior.
- Respect `prefers-reduced-motion` rules already present in the stylesheet.
- Use semantic sections/headings, visible keyboard focus, descriptive image alt text, and accessible labels for icon-only controls.
- Do not communicate status by color alone.

## Localization

The website supports English and Vietnamese. Any user-facing text added to a component must have matching entries in both locales in `src/data/translations.js`; keep locale keys semantically aligned.
