# Project: Monthly Content Toolkit

## Purpose
Working fork/development clone of coordenadas-content-system — same content pipeline, same brand template system. Used to develop skills before merging into canonical repo.

## Tech Stack
- Language/Runtime: Markdown (skill definitions), structured for AI coding agents
- Key frameworks: OpenCode / Claude Code agent skills

## Key File Map
- `.agents/skills/` — 4 skills (blog-post-generator, carousel-prompt-generator, content-plan-generator, infographic-brief-generator)
- `Brands/` — same brand template structure as coordenadas-content-system
- `setup.ps1` — PowerShell setup script (git clone + initial setup)

## Conventions
- This is a working fork — canonical source is coordenadas-content-system
- Two remotes: origin (monthly-content-toolkit) and upstream (coordenadas-content-system)

## Important Decisions
- Skills developed here before merging into canonical system
- Initially scoped to monthly content, later generalized

## External References
- `~/dev/coordenadas-content-system/` — canonical repo
