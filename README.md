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

## Docker quickstart

Start the API, PostgreSQL and Redis stack with a single command:

```bash
make up
```

Stop the containers with:

```bash
make down
```

View service logs:

```bash
make logs
```

Execute the API test suite:

```bash
make test
```
