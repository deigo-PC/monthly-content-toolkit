# Blog Post Generator — Setup Guide

## 1. Install Marketing Skills

```powershell
npx skills add coreyhaines31/marketingskills --global -y
```

## 2. Add the Blog Post Skill

Place the `blog-post-generator` folder in your project's `.agents/skills/` directory:

```
YourProject/.agents/skills/blog-post-generator/SKILL.md
YourProject/.agents/skills/blog-post-generator/SETUP.md
YourProject/.agents/skills/blog-post-generator/references/writing-rules.md
YourProject/.agents/skills/blog-post-generator/references/claims-policy.md
```

If using git, commit `.agents/` — teammates get it on clone.

## 3. Verify

```powershell
npx skills list --global
```

You should see `blog-post-generator` in the list.

## 4. Dependencies

- Requires the marketing skills from `coreyhaines31/marketingskills` at `~/.agents/skills/` (`copywriting`, `seo-audit`, `ai-seo`)
- No Python, no external libraries — output is pure HTML/CSS
