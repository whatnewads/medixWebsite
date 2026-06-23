# Medix — marketing & lead-capture website

Production marketing site for **Medix**, an occupational telemedicine service: a
licensed paramedic connects by video the moment a worker is hurt and guides the
crew's certified responders through the right care. The site explains the service
and captures two kinds of interest — a light **waitlist** signup and a fuller
**lead-qualification** submission.

> **A Medic on Every Jobsite.**

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack), Node 20+ |
| UI | React 19, TypeScript (strict) |
| Styling | Tailwind CSS v4 (CSS-first `@theme` tokens in `src/app/globals.css`) |
| Fonts | `next/font/google` — Archivo (display), IBM Plex Sans (body), IBM Plex Mono (utility) |
| Forms | `@formspree/react` |
| Analytics | `@vercel/analytics` + `@vercel/speed-insights` |
| Hosting | Vercel (Git-connected) |

## Getting started

```bash
npm install
cp .env.example .env.local   # values are public; safe to use as-is for local dev
npm run dev                  # http://localhost:3000
```

### Scripts

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint

## Environment variables

| Name | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (canonicals, sitemap, OG, `metadataBase`). |
| `NEXT_PUBLIC_FORMSPREE_CONTACT_ID` | Formspree ID for the waitlist form. |
| `NEXT_PUBLIC_FORMSPREE_LEAD_ID` | Formspree ID for the lead-qualification form. |

All three are `NEXT_PUBLIC_*` and public by design (Formspree IDs are meant to be
client-side). There are no secrets in this repo.

## Project structure

```
src/
  app/            # routes (Home, About, What We Do, How to Get Started,
                  #   Contact, FAQs, Privacy) + sitemap/robots/not-found
  components/
    layout/       # Header, Footer
    ui/           # Button, Eyebrow, Card, Stat, Numeral, Lifeline, …
    forms/        # WaitlistForm, LeadQualificationForm (+ shared fields)
  lib/            # site constants, logger, SEO/JSON-LD helpers, FAQ source
public/           # logo variants, favicons, OG image
scripts/          # logo-pipeline.mjs (one-off asset generation)
```

## Design system

Clinical near-white ground, near-black ink, the **brand blue `#004AAD`** from the
logo, and a disciplined **brass/amber `#B8862A`** signal for CTAs. No gradients.
The signature element is **"the lifeline"** — a continuous brand-blue hairline that
resolves into a calm brass pulse (respects `prefers-reduced-motion`). The outlined
"M" / hollow-numeral motif echoes the wordmark.

## Brand assets

Generated from the supplied wordmark by `scripts/logo-pipeline.mjs`:

- `medixlogo.png` — original white-background mark (Organization JSON-LD).
- `medixlogo-mark.png` — trimmed, transparent (header, on near-white).
- `medixlogo-mark-white.png` — trimmed, white (navy footer / dark bands).
- `favicon.ico`, `icon-{16,32,192,512}.png`, `apple-touch-icon.png`, `og-image.png`.

> A hand-built transparent **SVG** of the wordmark would be the ideal long-term
> asset; the current transparent PNGs are keyed from the white-background source.

## Forms & privacy

Both forms are PHI-free, B2B-only, and post to Formspree. The lead form reveals a
follow-up question and sets an internal `leadStatus` flag based on the safety-dept
answer (surfaced only in the team email — the lead always sees the same success
state). No protected health information ever flows through this site. See the
Privacy Policy page (needs professional review before launch).

## Deployment

See [`DEPLOY.md`](./DEPLOY.md) for Vercel + GitHub setup and `medix.work` DNS.
