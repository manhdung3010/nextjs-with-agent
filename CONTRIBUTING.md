# Contributing Guide

Thanks for contributing to this base template.

## Prerequisites

- Node.js 22 (see `.nvmrc`)
- pnpm 10+

## Setup

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

## Branch & commit convention

Use conventional commits:

- `feat:` new feature
- `fix:` bug fix
- `refactor:` internal refactor
- `test:` tests
- `docs:` documentation
- `chore:` maintenance

Examples:

```bash
git commit -m "feat: add auth adapter interface"
git commit -m "fix: handle api timeout in http client"
```

## Quality gates

Before opening a PR, run:

```bash
pnpm check
pnpm build
```

## Testing

- Unit/integration: `pnpm test`
- E2E: `pnpm test:e2e`

## Environment rules

- Never commit secrets.
- Keep `.env.example` in sync when adding new variables.

## Agent skills

When adding recurring workflows, prefer adding/updating a skill under:

```txt
.agents/skills/<skill-name>/SKILL.md
```

Keep `AGENTS.md` short and point to skill names using `$skill-name`.
