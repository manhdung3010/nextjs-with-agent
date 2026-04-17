# Architecture

This repository is a reusable Next.js base focused on maintainability, scalability, and agent-assisted development.

## Core principles

1. **Server-first**: prefer Server Components; use Client Components only when needed.
2. **Typed boundaries**: validate input/output with Zod at API and config boundaries.
3. **Composable features**: organize feature code by domain.
4. **Tooling-first quality**: lint, typecheck, test, and build are mandatory gates.
5. **Agent-ready workflows**: repeatable processes live in `.agents/skills`.

## Directory structure

```txt
src/
  app/                  # Next.js routes, layouts, route handlers
    api/health/route.ts
  components/
    ui/                 # shadcn/ui primitives
    shared/             # app-level reusable components
  config/               # env and app/site config
  lib/                  # utilities, http client, query keys
  providers/            # React Query + Theme providers
  types/                # shared types/contracts

tests/                  # unit/integration tests (Vitest)
e2e/                    # end-to-end tests (Playwright)

.agents/skills/         # repository-specific agent skills
.github/workflows/      # CI pipelines
```

## Data & API flow

- Route handlers live in `src/app/api/**/route.ts`.
- Validate payloads with Zod.
- Client requests go through `src/lib/http-client.ts`.
- React Query manages cache and async state in client components.

## Non-goals for base

- No fixed DB/ORM in base template.
- No fixed auth provider in base template.
- No project-specific business domain logic.

These are intentionally added per product repository.
