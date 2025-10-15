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

### Running only the web checks

To verify the landing page or run the same lint command used in CI for the
Next.js app, install the dependencies once and then execute the scoped script:

```bash
pnpm install
pnpm --filter web lint
```

If it is the first time you run the command locally, Next.js may prompt to
configure ESLint. The repository already ships with a strict `.eslintrc.json`
under `apps/web/`, so the prompt will be skipped after the initial run.

## FastAPI prototype

A minimal FastAPI service lives in `app/` with a couple of endpoints:

- `GET /` – returns `{"status": "TRU X is alive"}`
- `GET /health` – checks PostgreSQL and Redis connectivity.

Use Docker Compose to start the API together with PostgreSQL 16 and Redis:

```bash
docker compose up --build
```

Once running, access `http://localhost:8000`.
