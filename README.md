# Konjed Stories

A Next.js site for Konjed, a cream British Shorthair cat from Tehran.

## Getting Started

Install dependencies and run the local development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Site URL

SEO metadata, the sitemap, robots.txt, and structured data use
`NEXT_PUBLIC_SITE_URL` when it is set. If it is not set, local development
falls back to `http://localhost:3000`.

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example pnpm build
```

## Scripts

```bash
pnpm lint
pnpm build
pnpm start
```
