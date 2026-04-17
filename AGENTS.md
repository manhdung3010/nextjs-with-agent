# AGENTS.md

Base guardrails for this Next.js template.

## Always-on rules

- Prefer Server Components; add `"use client"` only when necessary.
- Keep route handlers typed and validate payloads.
- Never commit secrets; keep `.env.example` updated.
- Run quality checks before merge.

## Skill map

- Feature implementation flow: `$nextjs-feature-implementation`
- API schema and contracts: `$api-contract-zod`
- Test workflow: `$testing-playwright-vitest`
- Performance tuning: `$performance-checklist`
- Release quality gate: `$release-ci-checklist`
