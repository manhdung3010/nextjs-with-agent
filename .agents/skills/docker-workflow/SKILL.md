---
name: docker-workflow
description: >
  Docker development and production workflow for this Next.js project.
  Use when building images, running containers locally, debugging Docker issues,
  or setting up a production deployment with docker-compose.
---

# Docker Workflow Skill

## Files in this project

| File                      | Purpose                                                  |
| ------------------------- | -------------------------------------------------------- |
| `Dockerfile`              | Multi-stage production image (`deps → builder → runner`) |
| `Dockerfile.dev`          | Development image with `pnpm dev`                        |
| `docker-compose.yml`      | Local dev with hot-reload via volume mounts              |
| `docker-compose.prod.yml` | Production compose with healthcheck + resource limits    |
| `.dockerignore`           | Excludes `node_modules`, `.next`, env files, test files  |

## Development workflow

```bash
# First time or after dependency changes
docker compose up --build

# Normal start (uses cached image)
docker compose up

# Stop
docker compose down

# View logs
docker compose logs -f app

# Shell into container
docker compose exec app sh
```

## Production workflow

```bash
# Build and start in background
docker compose -f docker-compose.prod.yml up --build -d

# Check health
docker compose -f docker-compose.prod.yml ps

# View logs
docker compose -f docker-compose.prod.yml logs -f

# Stop
docker compose -f docker-compose.prod.yml down
```

## Manual image build

```bash
# Build
docker build -t nextjs-with-agent:latest .

# Run
docker run -p 3000:3000 --env-file .env nextjs-with-agent:latest

# Check image size
docker images nextjs-with-agent
```

## Environment variables

1. Copy `.env.example` to `.env`
2. Fill in values
3. `docker-compose.yml` reads `env_file: .env` automatically

**Never** bake secrets into the image. For production, inject via:

- Kubernetes Secrets / ConfigMaps
- AWS ECS Task Definition secrets
- Docker Swarm secrets
- Cloud Run environment variables

## Standalone output

`next.config.ts` sets `output: "standalone"`. This means `pnpm build` produces:

- `.next/standalone/server.js` — standalone Node server
- `.next/static/` — static assets

The production `Dockerfile` copies only these files, not the full `node_modules`.
Result: **smaller images** (~100–150 MB vs 500 MB+).

## Troubleshooting

| Problem                     | Fix                                                                               |
| --------------------------- | --------------------------------------------------------------------------------- |
| Container exits immediately | Check logs: `docker compose logs app`                                             |
| Port 3000 already in use    | Stop other dev server or change port in compose                                   |
| Changes not reflecting      | For prod image, rebuild with `--build`. For dev, check volume mounts              |
| Healthcheck failing         | Verify `/api/health` returns 200 and `wget` is in the image                       |
| Large image size            | Ensure `.dockerignore` is correct; check `output: "standalone"` in next.config.ts |
