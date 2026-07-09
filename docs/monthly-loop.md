# Monthly Loop — Save & Re-run

The content-plan-generator skill supports saving a month's configuration so
next month can be regenerated with one command.

---

## How it works

At the end of Step 1 (content plan generation), the agent asks:

> "Want to save this month's direction so next month I can regenerate with one
> command? I'll save your deliverable mix, strategic focus, and brand context
> references — you just tell me the month."

If you say yes, a config file is created at:

```
Brands/{ClientName}/.agents/content-plan-config.json
```

This stores:
- Default deliverable mix (carousel count, blog count, etc.)
- Strategic pillars used
- Brand context paths
- Direction answers from the interview

---

## Next month

In your AI coding agent:

> "Run the same plan for August"

The agent reads the saved config and skips the direction interview. It asks
only:
1. **Any new direction for this month?** (new campaign, different focus?)
2. **Any changes to the deliverable mix?**

Then proceeds directly to strategy generation (Step 3 in the content plan
workflow).

---

## Resetting

To start fresh for a brand, delete the config file:

```
Remove-Item -Path "Brands/{ClientName}/.agents/content-plan-config.json"
```

Then run the full generation — the agent will do the direction interview from
scratch.

---

## Per-skill configs

The carousel-prompt-generator, blog-post-generator, and
infographic-brief-generator skills do not save their own configs. They always
read fresh from:
- The current month's content plan (Step 1 output)
- The brand guide in BrandKit/
- The knowledgebase

This means you can change brand context between months and all skills pick up
the changes automatically.
