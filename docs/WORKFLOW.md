# Monthly Content Workflow

Step-by-step pipeline for running a month of content production using the
existing 4 skills. Updated paths reflect the ICM folder structure.

---

## Prerequisites

- Repo cloned and `setup.ps1` run (see README.md)
- Brand template copied: `Copy-Item -Path "Brands\_template" -Destination "Brands\[ClientName]" -Recurse`
- `AGENT.md` filled in (identity, audience, positioning, credentials)
- `BrandKit/brand_guide.md` created
- If first month: agent reads `AGENT.md` for brand context

---

## Stage 1 — Generate the Content Plan

**Folder:** `Monthly_Cycles/[NN]-[MMMYY]/01_content_plan/`

In your AI coding agent:

> "Generate the content plan for July for [ClientName]"

The agent will:
1. Ask about campaign angle, tone, deliverable mix
2. Load brand context from `AGENT.md`, `brand_guide.md`, `_knowledgebase/`
3. Ask for **language** (English or Spanish) if not specified
4. Write `CYCLE_CONTEXT.md` with the month's direction
5. Generate a full monthly plan
6. Deliver .md for review at `01_content_plan/output/content-plan.md`
7. You approve → agent generates .html (dark/light toggle, sidebar nav,
   collapsible weeks, filter chips, search, copy-to-clipboard)

**Output:** `Monthly_Cycles/[NN]-[MMMYY]/01_content_plan/output/content-plan.html`

**Saved config:** stored at `Brands/[ClientName]/content-plan-config.json`
(not inside `.agents/`). Say yes when asked — next month is one command.

---

## Stage 2 — Generate Carousel Image Prompts

**Folder:** `Monthly_Cycles/[NN]-[MMMYY]/02_prompts_and_copy/`

> "Now generate the carousel image prompts"

1. Extracts carousel entries from `01_content_plan/output/content-plan.md`
2. Loads `image` + `marketing-psychology` skills
3. Generates one prompt per slide
4. .md produced for review, you approve → .html generated

**Output:** `02_prompts_and_copy/output/carousel-prompts.html`

---

## Stage 3 — Write Blog Posts

**Folder:** `Monthly_Cycles/[NN]-[MMMYY]/02_prompts_and_copy/`

> "Now write the blog posts"

1. Extracts blog entries from `01_content_plan/output/content-plan.md`
2. Loads `copywriting`, `seo-audit`, `ai-seo` skills
3. Reads `_knowledgebase/` and sitemap for facts and internal links
4. Verifies claims against `claims-policy.md`
5. .md produced for review, you approve → .html generated

**Output:** `02_prompts_and_copy/output/blog-posts.html`

---

## Stage 4 — Generate Infographic Design Briefs

**Folder:** `Monthly_Cycles/[NN]-[MMMYY]/03_infographic_briefs/`

> "Now generate the infographic design briefs"

1. Extracts infographic entries from `01_content_plan/output/content-plan.md`
2. Loads `image` skill, reads `BrandKit/`
3. Produces structured design brief (dimensions, hierarchy, color, typography,
   data presentation, layout)
4. .md produced for review, you approve → .html generated

**Output:** `03_infographic_briefs/output/infographic-briefs.html`

---

## Quick Reference

| Stage | Command | Skills loaded | Output folder |
|---|---|---|---|
| Content Plan | "Generate the content plan" | content-strategy, copywriting, marketing-psychology, social, ad-creative, image | `01_content_plan/output/` |
| Carousel Prompts | "Generate the carousel prompts" | image, marketing-psychology | `02_prompts_and_copy/output/` |
| Blog Posts | "Write the blog posts" | copywriting, seo-audit, ai-seo | `02_prompts_and_copy/output/` |
| Infographic Briefs | "Generate the infographic briefs" | image | `03_infographic_briefs/output/` |

## Tips

- **Review .md files before approving HTML generation** — the HTML is the
  final deliverable
- **Save configs** — when asked at the end of Step 1, say yes
- **Sequential order** — each stage reads the previous stage's output
- **Stages 2 and 3 share a folder** (both are prompts & copy) and can run in
  parallel
