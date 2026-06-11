# Security Policy

## Supported Versions

Only the latest version of this template receives security fixes.

## Reporting a Vulnerability

**Please do not open public GitHub issues for security vulnerabilities.**

Report security issues by emailing the maintainers listed in `CODEOWNERS`.

Include the following information:

- Type of issue (e.g. XSS, CSRF, injection, misconfiguration)
- Full path of the affected file(s)
- Location of the vulnerable code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce
- Proof-of-concept or exploit code (if possible)
- Impact and potential attack scenarios

You should receive a response within **72 hours**. If the issue is confirmed, we will:

1. Acknowledge receipt of the vulnerability report
2. Assess the severity and impact
3. Release a patch as soon as possible
4. Credit the reporter in the changelog (unless you prefer to remain anonymous)

## Security Baseline

This template ships with the following security measures:

- **HTTP security headers** (`X-Frame-Options`, `X-Content-Type-Options`, `Strict-Transport-Security`, `Referrer-Policy`, `Permissions-Policy`) — see `next.config.ts`
- **Environment variable validation** at startup via Zod — see `src/config/env.ts`
- **Non-root Docker user** — the production image runs as `nextjs` (uid 1001)
- **No secrets in Docker images** — env vars are injected at runtime

## Dependency Security

Run `pnpm audit` regularly to check for known vulnerabilities in dependencies.
