# Carousel Prompt Generator — Setup Guide

## 1. Install Marketing Skills

```powershell
npx skills add coreyhaines31/marketingskills --global -y
```

## 2. Add the Carousel Prompt Skill

Place the `carousel-prompt-generator` folder in your project's `.agents/skills/` directory:

```
YourProject/.agents/skills/carousel-prompt-generator/SKILL.md
YourProject/.agents/skills/carousel-prompt-generator/references/master-prompt-structure.md
YourProject/.agents/skills/carousel-prompt-generator/references/brand-extraction-checklist.md
```

If using git, commit `.agents/` — teammates get it on clone.

The skill directory does not require any external dependencies — HTML output is generated directly by the agent.

## 3. Verify

```powershell
npx skills list --global
```

You should see `carousel-prompt-generator` in the list.

## 4. Dependencies

- Requires the marketing skills from `coreyhaines31/marketingskills` at `~/.agents/skills/` (`image`, `marketing-psychology`)
- No Python, no external libraries — output is pure HTML/CSS
