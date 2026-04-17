# nextjs-with-agent

A reusable **Next.js App Router base** with modern defaults and agent-ready skill scaffolding.

## Included

- Next.js 16 + React 19 + TypeScript (strict)
- Tailwind CSS 4 + shadcn/ui bootstrap
- React Query provider setup
- Zod-based env validation
- Reusable HTTP client + typed API response pattern
- Security headers baseline in `next.config.ts`
- ESLint + Prettier + Husky + lint-staged + Commitlint
- Vitest + Testing Library + Playwright
- CI + Release workflows (`.github/workflows/*`)
- Sentry + Vercel Analytics + Speed Insights wiring
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
pnpm changeset
pnpm version-packages
pnpm release
```

## Project structure

```txt
src/
  app/
    api/health/route.ts
    global-error.tsx
    loading.tsx
    not-found.tsx
  components/
    providers/
    shared/
    ui/
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
- Update `CODEOWNERS` and release config (`.changeset/config.json`) before team rollout.
