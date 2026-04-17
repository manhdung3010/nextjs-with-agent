# nextjs-with-agent

A reusable **Next.js App Router base** with modern defaults and agent-ready skill scaffolding.

## Included

- Next.js 16 + React 19 + TypeScript (strict)
- Tailwind CSS 4
- React Query provider setup
- Zod-based env validation
- Reusable HTTP client + typed API response pattern
- ESLint + Prettier + Husky + lint-staged + Commitlint
- Vitest + Testing Library + Playwright
- CI workflow (`.github/workflows/ci.yml`)
- Agent skills under `.agents/skills/`

## Quick start

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Open http://localhost:3000

## Scripts

```bash
pnpm dev
pnpm lint
pnpm typecheck
pnpm test
pnpm test:e2e
pnpm build
pnpm check
```

## Project structure

```txt
src/
  app/
    api/health/route.ts
  components/
    shared/
  config/
  lib/
  providers/
  types/
.agents/
  skills/
```

## Notes

- This base intentionally does **not** lock in any DB/ORM.
- Add Prisma/Drizzle/Mongoose per-project as needed.
