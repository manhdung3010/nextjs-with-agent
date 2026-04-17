---
name: nextjs-feature-implementation
description: >
  Implement new features in Next.js App Router projects with consistent structure.
  Use when creating new routes, feature folders under src/features, server/client
  components, or integrating forms and server actions.
---

# Next.js Feature Implementation

Use this skill when building a new user-facing feature.

## Steps

1. Create feature folder in `src/features/<feature-name>/`.
2. Add route entry in `src/app/...` and keep UI composition in feature module.
3. Default to Server Components; add `"use client"` only when needed.
4. Validate external inputs with Zod.
5. Add loading/error states and test coverage.

## Verification

- `pnpm lint`
- `pnpm typecheck`
- `pnpm test`
