# Lahiruni Malshika — Portfolio

A modern, performance-focused portfolio built with Next.js 15, TypeScript, Tailwind CSS, shadcn/ui patterns, and Framer Motion.

## Section order

1. **Hero** — landing intro
2. **About me** — bio + portrait card with key facts
3. **Work experience** — Virstack roles in timeline cards
4. **Services** — Web Dev, Mobile, UI Engineering
5. **Technical skills** — categorized skill cards
6. **Projects** — Anothershot, Wall Art Machine, Image Search
7. **Writing** — Medium blog posts
8. **Contact** — full footer with all links

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + CSS variables for theming
- **Components:** shadcn/ui patterns (Radix primitives + Tailwind)
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Theming:** next-themes (dark + light)
- **Fonts:** Instrument Serif (display) + Geist Sans (body) + Geist Mono
- **Deployment:** Vercel

## Design system

All cards across the site share a unified aesthetic:
- Rounded 2xl borders with subtle border color
- Gradient blob accents (orange/red) that intensify on hover
- Icon badges in `bg-accent/10` that fill to `bg-accent` on hover
- Smooth `-translate-y-1` lift on hover with accent-tinted shadow
- Consistent typography: Instrument Serif italic for display, Geist Sans for body, Geist Mono for meta labels

## Getting started

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Editing content

All copy, projects, experience, services, and links live in **`src/data/content.ts`**.
Edit that one file to change anything.

## Add your CV

Place your CV file at `public/Lahiruni_Malshika__CV.pdf`. Both the nav Resume button and the About section Download CV button link to `/Lahiruni_Malshika__CV.pdf`.

## Deploy to Vercel

```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/LahiruniMalshika/portfolio.git
git push -u origin main
# Then import the repo at https://vercel.com/new
```

## Custom domain

Buy something short (e.g., `lahiruni.dev`) from Namecheap, Porkbun, or Cloudflare, then add it to your Vercel project under Settings → Domains.
