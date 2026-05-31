# kaiwood Design Guidelines

Extracted from the supplied light and dark theme design guides.

## Brand

- Name: **kaiwood**
- Tagline: **Develop. Share. Inspire.**
- Message: Code is my craft. Building tools, writing about ideas, and sharing knowledge.
- Logo: compact rounded-square **K** mark, used in the header, footer, favicon, and project cards.

## Color Palette

### Shared

| Token | Hex | Usage |
| --- | --- | --- |
| Primary | `#4F7DF3` | Primary buttons, links, focus states, active navigation |

### Light Theme

| Token | Hex | Usage |
| --- | --- | --- |
| Background | `#F7F6F3` | Page background |
| Surface | `#FFFFFF` | Cards, header, forms |
| Text | `#1B2430` | Headings and primary copy |
| Muted text | `#667085` | Body copy, metadata, inactive controls |
| Primary hover | `#4553E6` | Primary button hover state |
| Border | `#E5E7EB` | Subtle dividers and card borders |
| Code background | `#F3F5F8` | Code blocks and muted surfaces |

### Dark Theme

| Token | Hex | Usage |
| --- | --- | --- |
| Background | `#0D1117` | Page background |
| Surface | `#151B23` | Cards, header, raised content |
| Text | `#E6EDF3` | Headings and primary copy |
| Muted text | `#9AA4B2` | Body copy, metadata, inactive controls |
| Primary hover | `#7D86FF` | Primary button hover state |
| Border | `#2D3642` | Subtle dividers and card outlines |
| Code background | `#0B1220` | Code blocks and muted surfaces |

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
