# Next vCard — Full‑Stack Portfolio (Next.js + MongoDB + Tailwind + shadcn‑style)

A production‑ready portfolio template inspired by **vCard** with:
- **Next.js 14 (App Router) + TypeScript**
- **TailwindCSS** with shadcn‑style UI primitives
- **Framer Motion** animations
- **MongoDB (Mongoose)** for the Contact form
- Light/Dark theme via `next-themes`

## Quick Start

```bash
# 1) Install deps
npm install

# 2) Configure env
cp .env.example .env.local
# edit .env.local and set MONGODB_URI

# 3) Run dev server
npm run dev
```

Open http://localhost:3000

## Deploy (Vercel)

1. Push this repo to GitHub.
2. Import to Vercel.
3. Add `MONGODB_URI` in Project → Settings → Environment Variables.
4. Deploy!

## Tech Decisions

- **Clean UI** using Tailwind and minimal shadcn‑style components (Button, Card, Input, Textarea).
- **Optimized**: lazy animations, responsive images with `next/image`, light bundle.
- **Safe API**: validatation with Zod in `/api/contact` + mongoose connection caching.
- **Editable Content**: sections read from `data/*` files — change easily without touching components.
