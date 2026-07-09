# Monthly Content Toolkit

A complete AI-powered system for generating monthly content plans and
producing every deliverable type — carousel prompts, blog posts, infographic
briefs, and more. Works with any AI coding agent that supports the skills
system (OpenCode, Claude Code, Gemini CLI, Copilot CLI).

---

## Quick Start (3 minutes)

**Prerequisites:** [Node.js](https://nodejs.org/) (v18 or later) · PowerShell

```powershell
git clone https://github.com/coordenadas-co/monthly-content-toolkit.git
cd monthly-content-toolkit
.\setup.ps1
```

That's it. The script installs all marketing skills and verifies everything is
in place. You're ready to run your first month.

---

## Best Install Practices

### First-time setup

- Run PowerShell **as your normal user** (not Administrator) — the skills
  system installs to your user directory
- Ensure `npx` is available (comes with Node.js — verify with `npx --version`)
- If behind a corporate proxy, `npm config set proxy` may be needed before
  `npx skills add`

### Updating

When the toolkit is updated, pull the latest skills:

```powershell
cd monthly-content-toolkit
git pull
```

Skills update in place — no reinstall needed.

### Troubleshooting

| Problem | Fix |
|---|---|
| `npx: command not found` | Install Node.js from nodejs.org and restart PowerShell |
| `skills: command not found` | Run `npx skills@latest` instead, or `npm install -g @anthropic-ai/skills` |
| Marketing skills missing after install | Re-run: `npx skills add coreyhaines31/marketingskills --global -y` |
| Agent can't find custom skills | Verify you're running the agent from inside `monthly-content-toolkit/` — skills auto-discover from `.agents/skills/` |

### Verifying your setup

```powershell
npx skills list --global
```

You should see these custom skills in the list:
- `content-plan-generator`
- `carousel-prompt-generator`
- `blog-post-generator`
- `infographic-brief-generator`

Plus the 46 marketing skills from `coreyhaines31/marketingskills`.

---

## System Overview

The toolkit chains 4 custom skills, each producing one output type:

```
content-plan-generator   →  Monthly plan (carousels, blogs, emails, etc.)
    ↓
carousel-prompt-generator  →  AI image prompts per carousel slide
blog-post-generator        →  Full SEO blog posts with copy-to-WordPress
infographic-brief-generator →  Design briefs per infographic
```

Each skill follows the same workflow:
1. Read input (content plan, brand guide, knowledgebase)
2. Generate .md deliverable
3. Present for review
4. Generate styled .html with dark/light toggle after approval

---

## Monthly Workflow

### Month 1 (full setup)

```powershell
cd monthly-content-toolkit
```

In your AI coding agent:

```
1. "Set up product marketing context for [ClientName]"
   (Creates Brands/ClientName/.agents/product-marketing.md)

2. "Generate the content plan for July"
   → Production of the .md file.
   → You review and approve (or request changes).
   → Agent generates .html with dark/light toggle.
   → File: output/[Brand]_Content_Plan_JULY_2026.html

3. "Now generate the carousel image prompts"
   → Reads from the content plan.
   → .md produced, you approve, .html generated.
   → File: output/[Brand]_Carousel_Prompts_JULY_2026.html

4. "Now write the blog posts"
   → Reads from the content plan + knowledgebase.
   → .md produced, you approve, .html with "Copy post" buttons.
   → File: output/[Brand]_Blog_Posts_JULY_2026.html

5. "Now generate the infographic design briefs"
   → Reads from the content plan.
   → .md produced, you approve, .html with color swatches.
   → File: output/[Brand]_Infographic_Briefs_JULY_2026.html
```

### Month 2+ (repeat with saved config)

If you saved the config in Month 1 (the content-plan-generator asks you at the
end):

```
"Run the same plan for August"
```

The agent reads the saved config from last month and regenerates with the new
month's dates and any direction changes you specify.

---

## Adding a New Brand

```powershell
Copy-Item -Path "Brands\_template" -Destination "Brands\NewClient" -Recurse
```

Then fill in:
- `.agents/product-marketing.md` — ICP, positioning, voice, differentiators
- `Knowledgebase/` — strategy docs, buyer psychology, message blocks, FAQs
- `BrandKit/` — brand guide, color palette, typography, logo, imagery rules

Once context is set, ask the agent:

```
"Set up product marketing context for NewClient"
```

This loads the product-marketing.md into agent context so all skills can
reference it.

---

## Git Workflow

```powershell
# First time
git clone https://github.com/coordenadas-co/monthly-content-toolkit.git

# Your monthly work
cd monthly-content-toolkit
# ... run content plans, generate outputs ...

# Commit brand context changes
git add Brands/ output/
git commit -m "July content plan for ClientA + ClientB"
git push

# Pull teammate updates
git pull
```

Skills live in `.agents/skills/` and are tracked in git. When you `git pull`,
you get the latest skill versions. Brand contexts live in `Brands/` and are
per-client.
