# Monthly Content Workflow

Complete step-by-step pipeline for running a month of content production.

---

## Prerequisites

- Repo cloned and setup.ps1 run (see README.md)
- Brand context exists in `Brands/{ClientName}/`
- If first month for this brand: agent has run "Set up product marketing
  context for [ClientName]"

---

## Step 1 — Generate the Content Plan

In your AI coding agent:

> "Generate the content plan for July for [ClientName]"

The agent will:
1. Ask about campaign angle, tone, deliverable mix
2. Load brand context from `Brands/{ClientName}/`
3. Ask for **language** (English or Spanish) if not specified
4. Generate a full monthly plan with all deliverable types
5. Deliver a .md file for review
6. You approve → agent generates .html (dark/light toggle, sidebar nav,
   collapsible weeks, filter chips, search, copy-to-clipboard)

**Output:** `output/[Brand]_Content_Plan_[MONTH]_[YEAR].html`

**If you already ran last month:** the agent will ask if you want to use the
saved config. Say yes to skip the direction interview.

---

## Step 2 — Generate Carousel Image Prompts

> "Now generate the carousel image prompts"

The agent will:
1. Extract carousel entries from the content plan
2. Read the brand guide for visual rules (loads `image` skill)
3. Load `marketing-psychology` skill for slide-role psychology
4. Generate one prompt per slide (preamble + 7-section creative brief)
5. Deliver .md for review
6. You approve → agent generates .html (sidebar nav, copy buttons per slide,
   role-colored badges)

**Output:** `output/[Brand]_Carousel_Prompts_[MONTH]_[YEAR].html`

---

## Step 3 — Write Blog Posts

> "Now write the blog posts"

The agent will:
1. Extract blog entries from the content plan
2. Read knowledgebase and sitemap for facts and internal links
3. Load `copywriting`, `seo-audit`, `ai-seo` skills
4. Write full SEO-optimized posts (metadata + body + CTA + FAQ)
5. Load `claims-policy.md` to verify no invented facts
6. Deliver .md for review
7. You approve → agent generates .html (sidebar nav, "Copy post" button per
   article, metadata panel, QA reference box)

**Output:** `output/[Brand]_Blog_Posts_[MONTH]_[YEAR].html`

---

## Step 4 — Generate Infographic Design Briefs

> "Now generate the infographic design briefs"

The agent will:
1. Extract infographic entries from the content plan
2. Read brand kit for visual direction (loads `image` skill)
3. Generate structured design brief: dimensions, hierarchy, color system,
   typography, data presentation, layout
4. Deliver .md for review
5. You approve → agent generates .html (sidebar nav, color swatches,
   copy-to-clipboard)

**Output:** `output/[Brand]_Infographic_Briefs_[MONTH]_[YEAR].html`

---

## Quick Reference

| Step | Agent command | Loaded skills | Output |
|---|---|---|---|
| Content Plan | "Generate the content plan" | content-strategy, copywriting, marketing-psychology, social, ad-creative, image | .md → .html |
| Carousel Prompts | "Generate the carousel prompts" | image, marketing-psychology | .md → .html |
| Blog Posts | "Write the blog posts" | copywriting, seo-audit, ai-seo | .md → .html |
| Infographic Briefs | "Generate the infographic briefs" | image | .md → .html |

## Tips

- **Save month configs** — when the agent asks at the end, say yes. Next month
  is one command.
- **Review .md files first** — the HTML is generated after your approval.
- **Flag gaps early** — missing brand info, pricing, or sitemaps are easier
  to fix before generation.
- **Run steps sequentially** — each step reads the previous step's output.
