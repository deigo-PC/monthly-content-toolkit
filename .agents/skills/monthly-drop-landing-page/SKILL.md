---
name: monthly-drop-landing-page
description: >
  Generates a fully-branded Monthly Drop landing page (a client content preview) using the
  PayWise — Monthly Drop project as a template bundled in the skill. ALWAYS trigger this skill
  when the user mentions: generating the landing page, building the monthly drop, creating the
  content preview page, "let's build the preview for [brand]", finalizing the monthly deliverables,
  producing the client preview page, or references the Monthly Drop Landing Page together with a
  content plan. This is the terminal skill in the content-production pipeline — it runs after all
  images have been generated and all blog posts have been written. Takes a Content Plan + brand
  hub URL + blog post outputs + all named image files, and produces a fully deployed TanStack Start
  landing page at a Vercel URL. The template is bundled — no external project path needed.
compatibility: >
  Brand-agnostic. Requires a complete set of images (carousels, blog banners, newsletter banners,
  Instagram stories, infographics) named using the conventions documented in the SOP reference
  files. Requires a Content Plan (ideally from content-plan-generator) and blog posts (ideally from
  blog-post-generator). Requires a GitHub account with Vercel integration set up for auto-deployment.
  The template project is bundled inside the skill at `template/` — a copy of the PayWise — Monthly
  Drop landing page project. No external path needed.
---

# Monthly Drop Landing Page Generator

Generates a fully-branded, deployable Monthly Drop landing page — a single-page TanStack
Start + React preview that shows every content deliverable for the month in one place:
carousels with slide-by-slide browsing, blog posts with banner + story pairs, newsletters
with full email copy and CTAs, and an Instagram grid preview.

This is the **final step** of the content-production pipeline. It runs after:

1. `content-plan-generator` → produced the Content Plan
2. `carousel-prompt-generator` → produced slide prompts
3. **Human step** → images are generated in ChatGPT and properly named per SOPs
4. `blog-post-generator` → produced full blog posts
5. **This skill** → generates and deploys the landing page

The template is bundled inside this skill at `template/`. It is a copy of the PayWise — Monthly
Drop project with all PayWise-specific images removed. The code structure (components, UI, routes,
styles, config) is the reusable part; the agent swaps in the brand's content and images.

---

## What you need before starting

Four inputs. Check what's already available before asking the user for anything:

1. **The Content Plan** for the relevant month(s) — the full plan with all deliverable
   titles, carousel slide copy, newsletter bodies, CTAs, etc. Provided as either:
   - An `.md` file (the agent will generate an HTML version for the landing page)
   - An `.html` file (copied directly to `public/content-plan.html`)
   - **No Google Docs or Word docs** — always a local file.

2. **The brand's hub URL** — a public link to the brand's marketing hub, brand guide,
   or Marketing Brain (e.g. a Vercel-hosted Marketing Brain HTML, a Notion page, or
   a Google Doc). This is used as the "Marketing Hub" link on the landing page.

3. **The blog post outputs** — a single `.html` file containing all blog posts, each
   with a unique anchor ID attribute (`id="post-1"`, `id="post-2"`, etc.). The agent
   copies this to `public/blog-posts.html` and links each post via `#post-N` anchors.
   No Google Doc links.

4. **All image files, properly named** — the images generated and named per the SOPs:

   | Content Type | Naming Convention | SOP Reference |
   |---|---|---|
   | Carousel slides | `carousel.N.N.png` (carousel number, slide number) | `references/SOP_Carousel_Slide_Generation.md` |
   | Blog banners | `blog.N.png` (blog number) | `references/SOP_Blog_Banner_Image_Generation.md` |
   | Blog stories | `blog.N-story.png` | `references/SOP_Instagram_Story_Banner_Generation.md` |
   | Newsletter banners | `newsletter.N.png` | `references/SOP_Newsletter_Banner_Image_Generation.md` |
   | Newsletter stories | `newsletter.N-story.png` | `references/SOP_Instagram_Story_Banner_Generation.md` |


   **Important:** The naming must be exact — the agent relies on file naming conventions
   to map images to the correct carousels, slides, blogs, and newsletters. If files have
   non-standard names, ask the user to rename them before proceeding.

---

## Step 1 — Ask for the brand's project folder

Ask the user which brand this is for and where their brand's project folder lives.

The skill creates its output inside a `Monthly_Drops` folder within the brand's project
directory. For example, if the brand is "Frenzy" and their folder is at:
```
C:\Users\User\Documents\opencode_apps\frenzy
```

Then the structure will be:
```
C:\Users\User\Documents\opencode_apps\frenzy\Monthly_Drops\
    01-JUN26-Monthly_Drop\
    02-JUL26-Monthly_Drop\
    ...
```

If the brand's folder already has a `Monthly_Drops` directory, use it. If not, create it.

---

## Step 2 — Determine the output folder name

Scan the existing `Monthly_Drops` directory (if any) to determine the next sequence number:

```
01-JUN26-Monthly_Drop
02-JUL26-Monthly_Drop
```

- **Sequence number:** Count existing folders, add 1, pad to 2 digits (01, 02, 03…).
  If the folder is empty or doesn't exist yet, start at `01`.
- **Date:** The month and year of the content plan in `MMMYY` format, ALL CAPS
  (e.g. `JUN26`, `JUL26`, `AUG26`).

The final folder name is: `[NN]-[MMMYY]-Monthly_Drop`

Example: `03-AUG26-Monthly_Drop`

Create the output directory:
```
[brand_folder]\Monthly_Drops\[NN]-[MMMYY]-Monthly_Drop\
```

---

## Step 3 — Copy the template into the output directory

The template lives inside this skill at:
```
@skill_root/template/
```

Copy its entire contents to the output directory:
```
[brand_folder]\Monthly_Drops\[NN]-[MMMYY]-Monthly_Drop\
```

This copies:
- Root config files (`package.json`, `vite.config.ts`, `tsconfig.json`, etc.)
- `api/`, `public/`, `src/` directories with all components, routes, styles
- The PayWise-specific content config (`src/lib/paywise-content.ts`) is included as
  a reference — the agent will create a brand-specific one and update the routes.

**Remove the existing `.git` directory** if any was copied (the template shouldn't have one,
but verify).

**Reinstall dependencies:** Run `npm install` in the output directory to get a clean
`node_modules`.

---

## Step 4 — Create the brand's asset directory structure

Inside `src/assets/`, create a directory named after the brand (lowercase, no spaces):
```
src/assets/[brandname]/
  carousels/
    c1/
    c2/
    ...
  blogs/
  newsletters/
```

The template already has an empty `src/assets/paywise/` directory from the template — you
can either reuse the directory structure or create a new one next to it.

---

## Step 5 — Place all images into the correct directories

Map the named image files to their correct locations:

**Carousel slides:**
- `carousel.N.M.png` → `src/assets/[brandname]/carousels/cN/slide-(M-1).png`
  (e.g. `carousel.1.1.png` → `c1/slide-0.png`, `carousel.1.2.png` → `c1/slide-1.png`)

**Blog banners and stories:**
- `blog.N.png` → `src/assets/[brandname]/blogs/blog{N}-banner.png`
- `blog.N-story.png` → `src/assets/[brandname]/blogs/blog{N}-story.png`

**Newsletter banners and stories:**
- `newsletter.N.png` → `src/assets/[brandname]/newsletters/newsletter.N.png`
- `newsletter.N-story.png` → `src/assets/[brandname]/newsletters/email{N}-story.png`

If any images are missing, flag the gap to the user and ask them to provide the missing
files before proceeding. Do not generate placeholder content for missing images.

---

## Step 5b — Handle Content Plan & Blog HTML files

**Content Plan:**
- If provided as an `.md` file: generate `public/content-plan.html` from it. Style it with
  the brand's accent color, clean typography, a back link to `/`, and proper HTML tables for
  the calendar. Include all sections from the Content Plan.
- If provided as an `.html` file: copy it directly to `public/content-plan.html`.

**Blog posts:**
- Copy the blog `.html` file to `public/blog-posts.html`.
- **Verify** each blog article has a unique `id` attribute (e.g. `id="post-1"`,
  `id="post-2"`, etc.). If any are missing, add them during the copy.
- Each blog's `docUrl` in the content config will point to `/blog-posts.html#post-{id}`.

The `public/` directory already has `favicon.png` (brand-agnostic default) from the
template. Keep it as-is.

---

## Step 6 — Create the brand's content config file

Create `src/lib/[brandname]-content.ts` modeled after the bundled `paywise-content.ts`
reference file. This is the core data file for the landing page.

Structure it with the same types (`CarouselItem`, `BlogItem`, `NewsletterItem`) and
the same `meta` export, but populated with the brand's actual data:

### Carousel items
For each carousel in the Content Plan, import each slide image and populate the `slides` array:
```typescript
import c{N}s{Slide} from "@/assets/[brandname]/carousels/c{N}/slide-{Slide}.png";
```
Set `id`, `title`, `caption` from the Content Plan.

### Blog items
For each blog post from the blog HTML file:
- `id`: blog number (matching the `blog.N` naming)
- `title`: blog title from the blog post output
- `preview`: a short preview/teaser text (first ~120 chars of the blog or Content Plan intro)
- `banner`, `story`: the image imports
- `docUrl`: `/blog-posts.html#post-{id}` (the anchor link to the local blog HTML file)

### Newsletter items
For each newsletter in the Content Plan:
- `id`: newsletter number
- `title`: newsletter subject line
- `preview`: short preview text
- `banner`, `story`: the image imports
- `docUrl`: `"#"` (or specific doc URL if available)
- `body`: full email body copy from the Content Plan (actual copy, not placeholder)
- `ctaUrl`, `ctaText`: from the Content Plan

### Meta
```typescript
export const meta = {
  client: "[Brand Name]",
  period: "Monthly Drop",
  preparedBy: "Content Preview",
};
```

---

## Step 7 — Update the route files

Modify `src/routes/index.tsx`:

1. **Update imports** — replace `@/lib/paywise-content` with `@/lib/[brandname]-content`
2. **Update page title and meta description** — replace "PayWise" with the brand name
3. **Update the hero title** — change "PayWise — Content Preview" to "[Brand Name] — Content Preview"
4. **Update the intro section:**
   - Update the subtitle/description text for the brand
   - Update the "Content Plan" link to `/content-plan.html` (always a local file)
   - Update the "Marketing Hub" link to the brand's hub URL
5. **Update all download filenames** — replace `paywise-` prefix with `[brandname]-` prefix
6. **Update the footer text**

Update `src/routes/__root.tsx`:
1. **Update page title and meta description** — replace "PayWise" with the brand name
2. **Update og:image and twitter:image** — optional, can stay as-is

Do NOT modify:
- `src/styles.css` (unless brand theming is requested — see Step 8)
- UI components in `src/components/ui/`
- Brand-agnostic components in `src/components/paywise/`

---

## Step 8 — Brand-specific design customization (optional)

If the brand has documented color specifications and the user requests brand theming,
update `src/styles.css`. Otherwise skip — the default shadcn theme is neutral and works
for preview.

---

## Step 9 — Verify the build

Run in the output directory:
```bash
npx vite build
```

Fix any import or TypeScript errors. Do NOT proceed until the build succeeds.

---

## Step 10 — Initialize git and deploy

1. **Initialize git:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: [Brand Name] Monthly Drop landing page"
   ```

2. **Create a GitHub repository:**
   ```bash
   gh repo create [brandname]-monthly-drops --public --source=. --remote=origin --push
   ```
   If `gh` is not authenticated, guide the user to create the repo manually on github.com.

3. **Confirm auto-deployment on Vercel:**
   Vercel auto-deploys from GitHub. The URL will be something like
   `https://[brandname]-monthly-drops.vercel.app`.

---

## Step 11 — Deliver the URL

Present the deployed URL with a summary:
- **Brand name and month**
- **Landing page URL** (Vercel)
- **Content summary:** total carousels/slides, blog posts, newsletters
- **GitHub repo URL**
- **Reminders:** client preview, scheduling team download, any gaps flagged

---

## Edge Cases

- **More/fewer carousels, blogs, or newsletters than PayWise:** The template arrays are
  flexible — just add or remove entries in the content config. The types accept any number.
- **Missing stories:** Set `story` to `""` — the component shows a placeholder.
- **No blog HTML provided:** Set `docUrl` to `"#"` — button renders but links nowhere.
- **Blog HTML missing anchor IDs:** The agent must check and add `id="post-N"` attributes to each blog article element during the copy to `public/blog-posts.html`. Add them to the opening tag of each blog post container (e.g. `<article id="post-1">`).
- **Brand theming requested:** Only customize CSS if explicitly asked.
- **GitHub push fails:** Provide manual instructions.
- **Local preview without deploy:** Run `npx vite build --mode development && npx vite preview`.
- **Existing Monthly_Drops folder has non-standard names:** Sequence by counting all folders
  and picking the next number regardless of naming variations.
- **Brand's folder doesn't exist yet:** Ask the user where they want the brand's project
  created, then create both the brand folder and `Monthly_Drops` inside it.
