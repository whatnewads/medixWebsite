# Deploying Medix (Vercel + GitHub)

The site is a standard Next.js App Router app. Vercel auto-detects it — there is
**no `vercel.json`** (security headers live in `next.config.ts`).

## 1. Connect the repo

1. In Vercel: **Add New → Project → Import Git Repository** → select
   `whatnewads/medixWebsite`. Vercel auto-detects Next.js; no build config needed.
2. **Settings → Environment Variables** — add for **Production** and **Preview**:
   | Name | Value |
   |---|---|
   | `NEXT_PUBLIC_SITE_URL` | `https://medix.work` |
   | `NEXT_PUBLIC_FORMSPREE_CONTACT_ID` | `xlgyenjw` |
   | `NEXT_PUBLIC_FORMSPREE_LEAD_ID` | `xkolnbjl` |
3. Push to `main` → production deploy. Open a PR → automatic preview deploy.
   SSL is provisioned automatically.

## 2. Domain — `medix.work` on Vercel DNS

DNS + CDN both live on Vercel (no Cloudflare proxy in the path — fewest failure
modes; Vercel's edge is already a global CDN).

1. **Project → Settings → Domains → Add** `medix.work` and `www.medix.work`
   (redirect `www` → apex; apex as canonical is fine).
2. Point the domain at Vercel — easiest is to set the registrar's **nameservers**
   to the ones Vercel shows when you add the domain. Alternatively add the records
   Vercel lists: apex `A` → Vercel's IP, `www` `CNAME` → `cname.vercel-dns.com`.
3. SSL provisions automatically once DNS resolves.

> Cloudflare is intentionally not in the path. If that ever changes, use Cloudflare
> **DNS-only** (grey cloud) — not the orange-cloud reverse proxy.

## 3. Pre-launch checklist

- [ ] `npm run build` is green locally and on Vercel.
- [ ] All three env vars set for Production **and** Preview.
- [ ] Formspree endpoints receive test submissions (waitlist + lead).
- [ ] `medix.work` resolves and serves over HTTPS; `NEXT_PUBLIC_SITE_URL` matches.
- [ ] Security headers present (check response headers / securityheaders.com).
- [ ] JSON-LD validates (Google Rich Results Test).
- [ ] **Privacy Policy reviewed by a professional** — no compliance badges in copy
      until verified.
