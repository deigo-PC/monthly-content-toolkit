# Infographic Brief Generator — Setup Guide

## 1. Install Marketing Skills

```powershell
npx skills add coreyhaines31/marketingskills --global -y
```

## 2. Add the Infographic Brief Skill

Place the `infographic-brief-generator` folder in your project's `.agents/skills/` directory:

```
YourProject/.agents/skills/infographic-brief-generator/SKILL.md
YourProject/.agents/skills/infographic-brief-generator/SETUP.md
```

If using git, commit `.agents/` — teammates get it on clone.

## 3. Verify

```powershell
npx skills list --global
```

You should see `infographic-brief-generator` in the list.

## 4. Dependencies

- Requires the `image` marketing skill from `coreyhaines31/marketingskills` at `~/.agents/skills/`
- No external libraries — output is pure HTML/CSS
