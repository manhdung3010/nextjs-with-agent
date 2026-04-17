---
name: testing-playwright-vitest
description: >
  Testing workflow for this repository using Vitest and Playwright.
  Use when adding unit tests in tests/, component tests, or e2e specs in e2e/.
---

# Testing Workflow

## Steps

1. Add unit/integration tests in `tests/`.
2. Add e2e coverage in `e2e/` for key user flows.
3. Use Testing Library for DOM assertions.
4. Keep tests deterministic and avoid network flakiness.

## Verification

- `pnpm test`
- `pnpm test:e2e`
