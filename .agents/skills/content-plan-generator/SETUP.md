# Content Plan Generator — Setup Guide

## 1. Install Marketing Skills

```powershell
npx skills add coreyhaines31/marketingskills --global -y
```

## 2. Add the Content Plan Skill

Place the `content-plan-generator` folder in your project's `.agents/skills/` directory:

```
YourProject/.agents/skills/content-plan-generator/SKILL.md
```

If using git, commit `.agents/` — teammates get it on clone.

The skill directory must contain `references/content-plan-template.html` (dark/light toggle HTML template).

## 3. Verify

```powershell
npx skills list --global
```

You should see `content-plan-generator` in the list.

## 4. Set Up Brand Context

Each brand needs this structure:

```
Brands/{BrandName}/
  .agents/product-marketing.md     ← Run this in opencode:
                                     "Set up product marketing context for {brand}"
  Knowledgebase/                   ← Your strategy docs, message blocks, personas
  BrandKit/                        ← Brand guide, logos, visual assets
```

## 5. Use It

```powershell
# In your project directory, ask opencode:
"Generate the content plan for July"
```
