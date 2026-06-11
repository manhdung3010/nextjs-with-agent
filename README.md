# nextjs-with-agent

A production-ready **Next.js App Router** base template with modern defaults, strict type safety, and agent-ready skill scaffolding for AI-assisted development.

[![CI](https://github.com/your-org/nextjs-with-agent/actions/workflows/ci.yml/badge.svg)](https://github.com/your-org/nextjs-with-agent/actions/workflows/ci.yml)
[![Node.js](https://img.shields.io/badge/node-22-brightgreen)](https://nodejs.org)
[![pnpm](https://img.shields.io/badge/pnpm-10%2B-orange)](https://pnpm.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## ✨ Features

| Category     | Stack                                                       |
| ------------ | ----------------------------------------------------------- |
| Framework    | Next.js 16 + React 19 + TypeScript (strict)                 |
| Styling      | Tailwind CSS 4 + shadcn/ui                                  |
| Forms        | React Hook Form + Zod                                       |
| State & Data | TanStack Query v5 + Zustand                                 |
| Auth-ready   | Pluggable — no lock-in                                      |
| DB-ready     | No lock-in (add Prisma / Drizzle / Mongoose per project)    |
| Monitoring   | Sentry + Vercel Analytics + Speed Insights                  |
| Testing      | Vitest + Testing Library + Playwright                       |
| Quality      | ESLint 9 + Prettier + Husky + lint-staged + Commitlint      |
| CI/CD        | GitHub Actions (CI + Release) + Changesets                  |
| Agent        | `.agents/skills/` — reusable AI workflow skills             |
| Security     | CSP / HSTS / security headers baseline via `next.config.ts` |
| Docker       | Multi-stage Dockerfile + `docker-compose.yml`               |

---

## 🚀 Quick Start

### Local (pnpm)

**Prerequisites:** Node.js 22 (`.nvmrc`), pnpm 10+

```bash
# 1. Install dependencies
pnpm install

# 2. Set up environment
cp .env.example .env

# 3. Start dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

### Docker

**Prerequisites:** Docker 24+ and Docker Compose v2

```bash
# Development (hot-reload)
docker compose up

# Production
docker compose -f docker-compose.prod.yml up --build
```

See [Docker section](#-docker) below for details.

---

## 📁 Project Structure

```txt
.
├── src/
│   ├── app/                    # Next.js App Router routes & layouts
│   │   ├── api/
│   │   │   └── health/route.ts # Health check endpoint
│   │   ├── global-error.tsx
│   │   ├── loading.tsx
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── ui/                 # shadcn/ui primitives
│   │   ├── shared/             # App-level reusable components
│   │   └── providers/          # React context providers
│   ├── config/                 # Env + site configuration (Zod-validated)
│   ├── lib/                    # Utilities, HTTP client, query keys
│   ├── providers/              # React Query + Theme providers
│   └── types/                  # Shared types & API contracts
│
├── tests/                      # Unit/integration tests (Vitest)
├── e2e/                        # End-to-end tests (Playwright)
│
├── .agents/skills/             # Repository-specific agent skills
├── .github/workflows/          # CI + Release pipelines
│
├── Dockerfile                  # Multi-stage production image
├── docker-compose.yml          # Dev compose (hot-reload)
└── docker-compose.prod.yml     # Production compose
```

---

## 🛠 Scripts

```bash
# Development
pnpm dev              # Next.js dev server (Turbopack)

# Quality
pnpm lint             # ESLint
pnpm lint:fix         # ESLint with auto-fix
pnpm format           # Prettier write
pnpm format:check     # Prettier check
pnpm typecheck        # tsc --noEmit
pnpm check            # lint + typecheck + test (all-in-one gate)

# Testing
pnpm test             # Vitest (run once)
pnpm test:watch       # Vitest (watch mode)
pnpm test:coverage    # Vitest with V8 coverage
pnpm test:e2e         # Playwright E2E

# Build
pnpm build            # Production build
pnpm start            # Start production server

# Release
pnpm changeset        # Create a changeset
pnpm version-packages # Bump versions from changesets
pnpm release          # Publish release
```

---

## 🐳 Docker

This project ships three Docker-related files:

| File                      | Purpose                                                   |
| ------------------------- | --------------------------------------------------------- |
| `Dockerfile`              | Multi-stage image: `deps` → `builder` → `runner`          |
| `docker-compose.yml`      | Local development with hot-reload via volume mount        |
| `docker-compose.prod.yml` | Production-grade compose (standalone output, no dev deps) |

### Development

```bash
# Build and start (mounts src/ for hot-reload)
docker compose up

# Rebuild after dependency changes
docker compose up --build

# Stop
docker compose down
```

App runs at [http://localhost:3000](http://localhost:3000)

### Production

```bash
# Build production image and start
docker compose -f docker-compose.prod.yml up --build -d

# View logs
docker compose -f docker-compose.prod.yml logs -f

# Stop
docker compose -f docker-compose.prod.yml down
```

### Environment Variables in Docker

Copy `.env.example` and edit before running containers:

```bash
cp .env.example .env
```

`docker-compose.yml` reads `env_file: .env` automatically.
For production, pass secrets via your orchestrator (Kubernetes Secrets, ECS Task Definitions, etc.) — **never bake secrets into the image**.

### Building the image manually

```bash
docker build -t nextjs-with-agent:latest .

docker run -p 3000:3000 --env-file .env nextjs-with-agent:latest
```

---

## 🔐 Environment Variables

Create `.env` from the example:

```bash
cp .env.example .env
```

All environment variables are validated at startup with **Zod** in `src/config/env.ts`. The app will fail-fast with a descriptive error if required variables are missing or malformed.

> **Rule:** Never commit secrets. Keep `.env.example` in sync when adding new variables.

---

## 🤖 Agent Skills

Agent-assisted development workflows live in `.agents/skills/`. Each skill is a reusable instruction set for AI coding agents.

| Skill                           | Purpose                             |
| ------------------------------- | ----------------------------------- |
| `nextjs-feature-implementation` | Consistent feature folder creation  |
| `api-contract-zod`              | API route validation with Zod       |
| `testing-playwright-vitest`     | Test scaffolding workflow           |
| `performance-checklist`         | Route performance review            |
| `release-ci-checklist`          | Pre-merge quality gate              |
| `vercel-react-best-practices`   | React/Next.js performance patterns  |
| `vercel-composition-patterns`   | Component composition architecture  |
| `caveman` / `cavecrew`          | Token-efficient agent communication |

Trigger a skill by referencing it in your agent prompt: `$nextjs-feature-implementation`.

---

## 🏗 Architecture

See [ARCHITECTURE.md](./ARCHITECTURE.md) for a full breakdown of:

- Server-first component model
- Typed API boundaries (Zod)
- Domain-based feature organization
- Data & API flow

**Key decisions:**

- No fixed DB/ORM — add Prisma, Drizzle, or Mongoose per project.
- No fixed auth provider — plug in NextAuth, Clerk, or custom as needed.
- Security headers are set in `next.config.ts` (X-Frame-Options, HSTS, CSP baseline, etc.).

---

## 🧪 Testing Strategy

| Layer              | Tool                     | Location |
| ------------------ | ------------------------ | -------- |
| Unit / Integration | Vitest + Testing Library | `tests/` |
| E2E                | Playwright               | `e2e/`   |
| API mocking        | MSW                      | `tests/` |

```bash
pnpm test             # Unit tests
pnpm test:coverage    # Coverage report (V8)
pnpm test:e2e         # End-to-end
```

---

## 📦 CI/CD

GitHub Actions pipelines in `.github/workflows/`:

| Workflow      | Trigger        | Steps                                     |
| ------------- | -------------- | ----------------------------------------- |
| `ci.yml`      | PR / push      | install → lint → typecheck → test → build |
| `release.yml` | push to `main` | changeset version → publish               |

Releases are managed with [Changesets](https://github.com/changesets/changesets).

---

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for branch conventions, commit format, and quality gate requirements.

---

## 📝 Notes

- Update `CODEOWNERS` before team rollout.
- Update `.changeset/config.json` with your package name and publish settings.
- This base is intentionally minimal — add auth, DB, and business logic per product repository.
