# Brand Kit

Place the brand's visual identity files here. These are used by the image
generation and design brief skills to produce on-brand visuals.

## What goes here

| File | What it contains |
|---|---|
| `brand-guide.md` | Visual identity: colors (hex codes), typography (fonts, weights), logo usage, imagery style |
| `colors.png` | Screenshot or export of the brand's color palette |
| `logo-full.*` | Full logo (SVG, PNG, or AI) |
| `logo-icon.*` | Icon-only version of the logo |
| `typography-examples.*` | Screenshots of brand fonts in use |
| `visual-examples/` | Examples of existing brand materials: ads, social posts, brochures |

## How to use

1. Create a `brand-guide.md` with the essential visual rules
2. Add logo files for placement reference
3. The agent reads these when generating design briefs (infographics,
   carousels) and image prompts

## brand-guide.md template

```markdown
# [Brand] Visual Guide

## Color Palette
- Primary: #HEX
- Secondary: #HEX
- Accent: #HEX
- Background: #HEX
- Text: #HEX

## Typography
- Headline font: [Name]
- Body font: [Name]
- Weights used: [e.g., Regular 400, Bold 700]

## Logo
- Full logo: [file path]
- Icon: [file path]
- Clear space: [minimum padding around logo]

## Imagery Style
- Photography style: [e.g., bright lifestyle, moody editorial, clean product]
- Illustration style: [if applicable]
- Dos: [what works visually]
- Don'ts: [what to avoid]
```
