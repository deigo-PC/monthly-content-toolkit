---
name: infographic-brief-generator
description: >
  Generates a complete design brief for each infographic in a brand's Content
  Plan. Produces a structured brief covering dimensions, visual hierarchy,
  color system, data presentation, typography, and layout — ready to hand to
  a designer. Integrates the `image` skill for visual direction. Output is a
  .md file for review, then a styled .html file (dark/light toggle).
  Brand-agnostic.
compatibility: >
  Requires the `image` marketing skill from coreyhaines31/marketingskills
  installed at ~/.agents/skills/. No external dependencies — output is pure
  HTML/CSS.
---

# Infographic Brief Generator

Turns a Content Plan's infographic entries into structured design briefs —
the kind a graphic designer can take and produce a finished infographic from
without needing to ask for clarification. Briefs cover dimensions, color
assignments, typography rules, data presentation style, layout structure, and
visual hierarchy.

---

## How Skill Integration Works

| Step | Skill to load | Why |
|---|---|---|
| Step 2 | `image` | Inform infographic visual direction: layout density, color treatment, imagery style per brand |

---

## What you need before starting

1. **The Content Plan** — specifically its infographic entries (title, topic,
   persona, key data points to visualize, any visual direction hints).
2. **The brand guide** — color palette, typography, visual density preference,
   imagery rules. Any readable format (text, MD, HTML, PDF, image).

If the Content Plan has no infographic entries, flag it and stop — there's
nothing to generate.

---

## Step 0 — Language

If the user has not specified a language, ask:

> "Should these briefs be in **English** or **Spanish**?"

Default to English.

---

## Step 1 — Extract infographic entries from the Content Plan

Pull out each infographic's title, topic, persona, and any data points or
visual hints noted in the plan. If a persona is listed, note it — the visual
style should appeal to that persona's preferences.

---

## Step 2 — Read the brand guide and load the image skill

Load the `image` skill:

```
skill("image")
```

This gives you context on infographic best practices: information density
guidelines, color theory for data visualization, typography hierarchy for
readability at various sizes.

Extract from the brand guide:
- **Color palette** — hex values for background, accent, and text
- **Typography** — typeface family, weights, case treatment
- **Visual density** — minimal/clean vs. rich/data-dense
- **Imagery style** — icons, illustrations, photography, or abstract graphics
- **Any existing infographic examples** in the brand's past content

---

## Step 3 — Generate one brief per infographic

For each infographic entry, produce a structured design brief with the
following sections:

### Overview
- **Title** — the infographic's name
- **Persona** — target audience (if listed)
- **Purpose** — educate, compare, persuade, explain a process, etc.
- **Format** — static image (Instagram, LinkedIn, blog embed) or multi-page PDF

### Dimensions & Format
- **Canvas size** — exact pixel dimensions (e.g., 1080×1920 for Instagram
  Stories, 1200×1800 for Pinterest, 800×2000 for blog embeds)
- **Orientation** — vertical, horizontal, or square
- **Resolution** — 72dpi for web, 300dpi for print
- **Bleed** — if applicable (for print infographics)

### Visual Hierarchy
- **Hero area** — what goes at the top (title, main stat, key visual)
- **Flow direction** — top-to-bottom, left-to-right, or radial/starburst
- **Section structure** — how data points are grouped (sections, panels,
  numbered steps)
- **Reading order** — numbered sections or visual path guidance

### Color System
- **Background** — hex value from brand guide
- **Accent colors** — for data points, highlights, section dividers
- **Text colors** — headings and body
- **Data colors** — if the infographic uses charts, specify the palette
- **Neutral tones** — for grids, borders, subtle background elements

### Typography
- **Headline typeface** — from brand guide, size range for the hero
- **Body typeface** — from brand guide, minimum readable size
- **Data/numbers** — if the infographic presents stats, specify large numeral
  treatment
- **Labels** — for axes, callouts, small print

### Data Presentation
- **Chart types** — bar, pie, line, donut, comparison, map, etc.
- **Data callouts** — how key numbers are highlighted (big number, colored
  badge, icon combo)
- **Comparisons** — side-by-side, before/after, vs. layout
- **Iconography** — icon set style (line icons, filled, illustrated), source
  if the brand has a specific set

### Layout Structure
- **Header section** — title, subtitle, brand logo placement
- **Body sections** — 3-6 content blocks with data or narrative
- **Footer section** — source citations, brand tagline, CTA or QR code
- **White space** — how much breathing room between elements

### Style Summary
- **Density** — clean/minimal vs. data-rich vs. illustrated
- **Tone** — professional, playful, urgent, educational
- **Design reference** — mood board reference if applicable (3-5 keywords
  for the designer to search)

---

## Step 4 — Write the Markdown deliverable

```markdown
# [Brand Name] — Infographic Design Briefs — [Month Year]

---

## [Infographic 1 Title]
_Persona: [persona] · Purpose: [purpose]_

### Overview
...

### Dimensions & Format
...

### Visual Hierarchy
...

### Color System
...

### Typography
...

### Data Presentation
...

### Layout Structure
...

### Style Summary
...

---
```

One `---`-separated section per infographic. Save as:

```
output/[BrandName]_Infographic_Briefs_[Month]_[Year].md
```

---

## Step 5 — Deliver for User Approval

Present the .md to the user:

> "Here are the infographic design briefs: `output/[file].md`
>
> Total infographics: [N] · Brand: [name] · Month: [month]
>
> Review and let me know if anything needs changing. Once approved, I'll
> generate the styled HTML version."

Wait for explicit approval before generating HTML.

---

## Step 6 — Generate the .html File

After approval, generate the styled HTML version directly.

### Design system

Use the same skillui-test design tokens as other content-plan deliverables:
`#000000` bg, `#2a2a2a` surface, `#3b82f6` accent, `#3a3a3a` border,
`#9ca3af` muted text, dark/light toggle via `addEventListener`.

### Structure

- **Sidebar nav** — one link per infographic, scroll-spy active state
- **Each section** — starts with overview header, then each brief field as a
  labeled row or card
- **Color swatches** — render hex values as small colored squares next to the
  hex code (e.g., `<span class="swatch" style="background:#1a2b3c"></span>
  #1a2b3c`)
- **Theme toggle** — same pattern as other deliverables
- **Copy-to-clipboard** — "Copy brief" button per infographic that copies
  the full brief text

### Write the file

```
output/[BrandName]_Infographic_Briefs_[Month]_[Year].html
```

---

## Step 7 — Deliver summary

Present the .html file path and a summary of total infographics and brand/month
covered.

---

## Edge Cases

- **Content Plan has 0 infographics**: flag it and stop — nothing to generate.
- **Brand guide has no color palette**: flag the gap, use generic descriptive
  language (e.g., "dark bg, light text") rather than inventing hex values.
- **No data points listed in the Content Plan**: generate the brief with
  placeholder descriptions (e.g., "Chart area for 3-5 comparison metrics")
  and flag it.
- **User requests a specific orientation or size**: follow the request over
  the defaults.
- **`image` skill not installed**: note the gap and generate briefs using
  general infographic best practices instead.
