---
name: release-ci-checklist
description: >
  Release and CI quality gate workflow for this repo.
  Use before merging PRs, tagging releases, or checking pipeline regressions.
---

# Release / CI Checklist

## Steps

1. Run `pnpm check` locally.
2. Ensure CI workflow passes (lint, typecheck, tests, build).
3. Confirm env docs and changelog notes are updated.
4. Verify no secrets or debug logs are committed.

## Verification

- Green CI on target branch.
- Build artifact starts without runtime errors.
