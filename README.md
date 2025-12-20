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

## Deployment

Deploy to Vercel or any Node-compatible host. Ensure `.env` values are configured in your deployment platform and run `prisma generate`/`prisma db push` as part of your pipeline if needed. Continuous deployment is easiest via Vercel connected to GitHub.
