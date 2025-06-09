# TRUX

Monorepo scaffold for the TRUX SaaS.

## Structure

- **apps/web** – Next.js front‑end
- **apps/api** – NestJS GraphQL API
- **packages/shared-schema** – Shared TypeScript types

This project uses **pnpm** workspaces together with **Turborepo** to manage
development and build tasks.

## Development

Install dependencies and start both applications in development mode:

```bash
pnpm install
pnpm dev
```

Additional scripts:

```bash
pnpm build # build all packages
pnpm lint  # run ESLint across the monorepo
```

## FastAPI prototype

A minimal FastAPI service lives in `app/` with a couple of endpoints:

- `GET /` – returns `{"status": "TRU X is alive"}`
- `GET /health` – checks PostgreSQL and Redis connectivity.

Use Docker Compose to start the API together with PostgreSQL 16 and Redis:

```bash
docker compose up --build
```

Once running, access `http://localhost:8000`.
