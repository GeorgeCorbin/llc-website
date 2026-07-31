# Corbin Software Solutions Website

Marketing site for Corbin Software Solutions built with Next.js 16 (App Router), Tailwind CSS v4 pipelines, Prisma, and PostgreSQL. Includes a portfolio, pricing, services, contact form (Prisma-backed API route), and legal pages, plus feature flags to toggle sections without redeploying.

## Tech Stack

- Next.js 16 + App Router
- TypeScript + Tailwind CSS (new `@import "tailwindcss"` pipeline)
- Prisma ORM + PostgreSQL
- Lucide icons

## Getting Started

1. Install dependencies

   ```bash
   npm install
   ```
2. Copy `.env` and fill in secrets

   ```bash
   cp .env .env.local
   ```
3. Start the dev server

   ```bash
   npm run dev
   ```
4. Optional: push schema to your database

   ```bash
   npx prisma db push
   ```

## Environment Variables

| Variable | Default | Description |
| --- | --- | --- |
| `DATABASE_URL` | `postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public` | Postgres connection used by Prisma. Required for `npx prisma db push` and runtime queries. |
| `NEXT_PUBLIC_SITE_URL` | `https://www.corbinsw.com` | Base URL used in sitemap, robots, `ai.txt`, and canonical links. |
| `NEXT_PUBLIC_ENABLE_SERVICES` | `true` | Toggle `/services` page + navigation link. |
| `NEXT_PUBLIC_ENABLE_PRICING` | `true` | Toggle `/pricing`. |
| `NEXT_PUBLIC_ENABLE_PORTFOLIO` | `true` | Toggle `/portfolio`. |
| `NEXT_PUBLIC_ENABLE_ABOUT` | `true` | Toggle `/about`. |
| `NEXT_PUBLIC_ENABLE_CONTACT` | `true` | Toggle `/contact` and CTA button. |
| `NEXT_PUBLIC_ENABLE_PRIVACY` | `true` | Toggle `/privacy`. |
| `NEXT_PUBLIC_ENABLE_TERMS` | `true` | Toggle `/terms`. |

Set any flag to `"false"` to automatically 404 the corresponding page and hide it from navigation/sitemap.

## Feature Flags

Feature flags live in `src/config/featureFlags.ts`. Use `ensureFeatureEnabled("contact")` inside page files to gate access; navigation links read the config as well. Update `.env` to flip sections on/off.

## SEO / Crawl Files

- `src/app/robots.ts` – standard + GPT crawler rules with sitemap reference.
- `src/app/ai.txt/route.ts` – AI usage policy (`/ai.txt`).
- `src/app/sitemap.ts` – dynamically includes only enabled pages.

## Useful Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start local dev server with Turbopack. |
| `npm run build` | Production build. |
| `npm run start` | Start production server. |
| `npx prisma studio` | Inspect/update DB data via Prisma Studio. |
| `npx prisma db push` | Apply schema changes to your database. |

## PostgreSQL

### Production database

This app does not bundle a Postgres server; it connects to one via `DATABASE_URL`. For production, use a managed Postgres provider such as:

- Vercel Postgres
- Supabase
- Railway
- Neon
- AWS RDS
- Google Cloud SQL

Create a database and set `DATABASE_URL` to a valid Postgres connection string:

```bash
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
```

### Local Postgres without Docker

#### Ubuntu / Debian (AWS Lightsail)

1. Install PostgreSQL:

   ```bash
   sudo apt update
   sudo apt install -y postgresql postgresql-contrib
   ```

2. Start the service:

   ```bash
   sudo systemctl enable postgresql
   sudo systemctl start postgresql
   ```

3. Create the database and set the `postgres` user password. Run `createdb` from a directory the `postgres` user can access (e.g. `/tmp`) to avoid permission errors:

   ```bash
   cd /tmp
   sudo -u postgres psql -c "ALTER USER postgres WITH PASSWORD 'password';"
   sudo -u postgres createdb -O postgres llc_db
   ```

4. Set `DATABASE_URL` and push the schema:

   ```bash
   DATABASE_URL="postgresql://postgres:password@localhost:5432/llc_db?schema=public" npx prisma db push
   ```

#### Homebrew (macOS)

1. Install PostgreSQL:

   ```bash
   brew install postgresql@16
   ```

2. Start the service:

   ```bash
   brew services start postgresql@16
   ```

3. Create a database user and the database:

   ```bash
   createuser -s postgres
   createdb -O postgres llc_db
   ```

4. Set `DATABASE_URL` and push the schema:

   ```bash
   DATABASE_URL="postgresql://postgres@localhost:5432/llc_db?schema=public" npx prisma db push
   ```

#### Postgres.app (macOS)

1. Download and install [Postgres.app](https://postgresapp.com/).
2. Open it and make sure the server is running.
3. Set `DATABASE_URL` to the connection string shown in the app, then push the schema:

   ```bash
   DATABASE_URL="postgresql://localhost:5432/llc_db?schema=public" npx prisma db push
   ```

### Viewing contact messages

If you need to inspect production `ContactInquiry` rows, use Prisma Studio:

```bash
DATABASE_URL="postgresql://..." npx prisma studio
```

Or connect with `psql`:

```bash
psql "$DATABASE_URL" -c "SELECT id, name, email, message, "createdAt" FROM \"ContactInquiry\" ORDER BY \"createdAt\" DESC LIMIT 50;"
```

## Deployment

Deploy to Vercel or any Node-compatible host. Ensure `.env` values are configured in your deployment platform and run `prisma generate`/`prisma db push` as part of your pipeline if needed. Continuous deployment is easiest via Vercel connected to GitHub.
