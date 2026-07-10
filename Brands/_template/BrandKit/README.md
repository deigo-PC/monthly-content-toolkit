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
```

See `design_sheets/MAIN.md` for the structured design-sheet format. See
`AGENT.md` for brand identity fields (positioning, audience, voice).

## Directory layout

```
BrandKit/
├── brand_guide.md       # Visual identity: colors, fonts, imagery style
├── logos/               # Full logo, icon-only, wordmark — SVG / PNG / AI
├── fonts/               # Brand typefaces (licensed files or links)
└── design_sheets/
    ├── MAIN.md          # Primary visual reference: logo, colors, fonts, generic look/feel
    └── negative_prompt_block.md  # Living list of exclusions for image generation
```
