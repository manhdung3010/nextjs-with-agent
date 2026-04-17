---
name: performance-checklist
description: >
  Performance checklist for Next.js App Router projects.
  Use when optimizing route performance, cache strategy, bundle size, and client
  component boundaries.
---

# Performance Checklist

## Steps

1. Confirm Server vs Client component boundaries.
2. Add cache strategy (`revalidate`, tags, or `no-store`) intentionally.
3. Lazy-load heavy client modules.
4. Optimize images/fonts and avoid unnecessary JS.
5. Measure before/after with Lighthouse or profiler.

## Verification

- No unnecessary client-side fetches.
- Core web vitals stay within target.
