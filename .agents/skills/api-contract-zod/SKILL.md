---
name: api-contract-zod
description: >
  Define and enforce API contracts with Zod in Next.js route handlers and clients.
  Use when adding app/api routes, request validation, response typing, or shared
  schemas under src/types and src/lib.
---

# API Contract with Zod

Use this skill when creating or updating API endpoints.

## Steps

1. Define request/response schema with Zod.
2. Parse incoming payload in route handler.
3. Return typed response and standardized error format.
4. Update client-side types and query functions.

## Verification

- Endpoint rejects invalid input.
- Types inferred via `z.infer` where possible.
