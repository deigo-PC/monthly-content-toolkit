# CONTEXT.md — Task Routing

Layer 1 document. Maps stages to their locations in this brand's folder.
Updated automatically by the pipeline. Hand-edited only when adding a new
stage type.

---

## Layer 0 — Identity

- **AGENT.md:** `Brands/[BRAND_NAME]/AGENT.md`

## Layer 3 — Stable Reference (brand-wide, not per cycle)

| Resource | Path |
|---|---|
| Brand Guide | `BrandKit/brand_guide.md` |
| Design Sheet (MAIN) | `BrandKit/design_sheets/MAIN.md` |
| Negative Prompt Block | `BrandKit/design_sheets/negative_prompt_block.md` |
| Knowledgebase | `_knowledgebase/` |
| Image Gen SOPs | `image_gen_references/` (symlinked from `docs/SOP_reference/`) |
| HL Sub-account Config | `hl_subaccount_config/` |

## Layer 4 — Monthly Cycles

Cycles live under `Monthly_Cycles/`. Each cycle folder contains:

| Stage | Folder | Contents |
|---|---|---|
| 0 | `CYCLE_CONTEXT.md` | Brand manager's direction for this month (or fallback) |
| 1 | `01_content_plan/` | Content plan .md + .html |
| 2 | `02_prompts_and_copy/` | Carousel prompts (raw + improved), blog posts |
| 3 | `03_infographic_briefs/` | Infographic design briefs |
| 4 | `04_image_generation/` | Generated images per SOP |
| 5 | `05_landing_page/` | Deployed landing page URL |
| 6 | `06_scheduling/` | Schedule confirmations |
| 7 | `07_report/` | Performance report |

Ad-hoc cycles use `AH-[YYYYMMDD]-[slug]/` prefix.

## Pipeline Dependencies

```
CYCLE_CONTEXT.md → 01 → 02 → 03 → 04 → 05 → (PM Review Gate) → 06 → 07
```

Stage 03 (infographic briefs) is independent of Stage 02 (prompts & copy) —
they can run in parallel.
