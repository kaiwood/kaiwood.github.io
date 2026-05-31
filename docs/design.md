# kaiwood Design Guidelines

Extracted from the supplied light and dark theme design guides.

## Brand

- Name: **kaiwood**
- Tagline: **Develop. Share. Inspire.**
- Message: Code is my craft. Building tools, writing about ideas, and sharing knowledge.
- Logo: compact rounded-square **K** mark, used in the header, footer, favicon, and project cards.

## Color Palette

### Shared

| Token       | Hex       | Usage                                                   |
| ----------- | --------- | ------------------------------------------------------- |
| Blue accent | `#2563EB` | Primary buttons, links, focus states, active navigation |
| Dark navy   | `#0F172A` | Dark background / light text                            |
| Slate       | `#334155` | Secondary text, borders in dark theme                   |
| Muted slate | `#64748B` | Captions and subdued UI                                 |

### Light Theme

| Token      | Hex       | Usage                                 |
| ---------- | --------- | ------------------------------------- |
| Background | `#F8FAFC` | Page background                       |
| Surface    | `#FFFFFF` | Cards, header, forms                  |
| Text       | `#0F172A` | Headings and primary copy             |
| Secondary  | `#334155` | Body copy                             |
| Muted      | `#64748B` | Captions, metadata, inactive controls |
| Border     | `#E0E5F0` | Subtle dividers and card borders      |
| Accent     | `#2563EB` | Calls to action and selected states   |

### Dark Theme

| Token      | Hex                   | Usage                               |
| ---------- | --------------------- | ----------------------------------- |
| Background | `#0F172A`             | Page background                     |
| Surface    | `#111827` / `#111C2F` | Cards and raised content            |
| Text       | `#E2E8F0`             | Headings and primary copy           |
| Secondary  | `#CBD5E1`             | Body copy                           |
| Muted      | `#64748B` / `#94A3B8` | Captions and metadata               |
| Border     | `#334155`             | Subtle dividers and card outlines   |
| Accent     | `#2563EB`             | Calls to action and selected states |

## Typography

- Typeface: **Inter** with system sans-serif fallback.
- H1: `56px`, bold / 700.
- H2: `32px`, semi-bold / 600.
- H3: `24px`, semi-bold / 600.
- Body: `16px`, regular / 400.
- Small: `14px`, regular.
- Caption: `12–13px`, regular.
- Style: clean, modern, highly readable, with tight heading letter spacing.

## Layout

- Content-first developer portfolio and blog.
- Desktop screens include:
  - Landing page with hero, code sample card, featured projects, about block, footer.
  - Blog listing with filters, search field, article cards, pagination affordance.
  - Project detail layout with metadata and code block styling.
- Mobile screens prioritize stacked content, compact header, full-width controls, and card-based content.
- Use generous whitespace in light theme and soft shadows/depth in dark theme.

## Components

- Header:
  - Left-aligned K logo and `kaiwood` wordmark.
  - Navigation: Home, Blog, Projects, About.
  - GitHub icon and theme toggle on the right.
- Buttons:
  - Primary button: blue background, white text, rounded `8px` corners.
  - Secondary button: subtle border, transparent/surface background.
- Cards:
  - Rounded corners, 1px subtle border, soft shadow.
  - Used for projects, blog posts, code snippets, and about content.
- Tags:
  - Small rounded chips with muted background and border.
- Code blocks:
  - Monospace font, rounded container, syntax colors for keys/strings/comments.
- Icons:
  - Simple line icons with a technical feel.
  - Consistent stroke and sizing.

## Visual Style

### Light

- Lots of whitespace.
- Subtle borders and dividers.
- Rounded corners around `8px`.
- Soft shadows for depth.
- Calm blue accent.
- Clean, focused, content-first presentation.

### Dark

- Ample whitespace and clean layout.
- Rounded corners around `12px`.
- Subtle 1px borders.
- Soft shadows and depth.
- Blue accent for focus and action.
- Consistent icon style.

## Implementation Notes

- Static-friendly implementation suitable for GitHub Pages with Astro.
- Blog content should be stored in Markdown when real posts are added.
- Keep pages fast, accessible, and SEO-friendly.
- Use GitHub Actions for deploy.
- Maintain consistent light and dark themes with subtle accents.
