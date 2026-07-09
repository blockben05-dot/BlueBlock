@AGENTS.md

# Project: BlueBlock

## What this is

Ben's local digital agency (Newark/Hockessin, DE) building landing pages +
lead capture for blue-collar service businesses (landscapers, power
washers, junk removal, contractors). Revenue model: upfront setup fee +
$150-300/mo retainer for hosting, GBP management, and lead/traffic
reporting.

This repo (`BlueBlock`) is the practice/build repo — currently a single
demo site, not yet the multi-tenant production system.

## Current state

- Stack: Next.js 16 (App Router, Turbopack, React 19.2) + TypeScript +
  Tailwind CSS v4 + lucide-react icons.
- `src/app/page.tsx` assembles a single-page demo site for a fictional
  business, **Diamond State Block Landscaping** (Newark/Hockessin, DE),
  used to learn the stack and as a template shape for real client sites.
  Named "Diamond State Block" (not just "Diamond State Landscaping") to
  avoid colliding with a real Diamond State Landscaping, LLC that already
  operates in Delaware/Arkansas — verified via web search on 2026-07-09.
- Sections/components in `src/components/`: `SiteHeader` (nav + mobile
  menu, client component), `Hero`, `Services`, `Portfolio` (gradient photo
  placeholders — no real/scraped images used), `About`, `Reviews`
  (clearly-labeled sample reviews), `Contact` (wraps `QuoteForm`),
  `SiteFooter`. Nav links are same-page anchors (`#home`, `#portfolio`,
  etc.), matching the original "single-page landing page" pitch.
- `QuoteForm` is a client component with local `useState` only — on
  submit it shows a "demo form, nothing was sent" message. It is **not**
  wired to a real backend/lead database yet.
- GitHub: `blockben05-dot/BlueBlock`, auth via SSH (key already set up on
  this machine). Vercel: no account yet — Hobby tier is fine for this
  practice repo, but must upgrade to **Pro** before any real paying
  client's domain goes live (Vercel's Hobby ToS forbids commercial use).

## Standing rules for this project

- No legacy/deprecated code patterns — current industry-standard code
  only. This is Next.js 16, which has real breaking changes from older
  training data (see `AGENTS.md` above and
  `node_modules/next/dist/docs/01-app/02-guides/upgrading/version-16.md`)
  — check that doc before using any App Router API that might have
  changed (async `params`/`searchParams`, `next/image` config, `proxy`
  vs `middleware`, etc.).
- Keep legal/logistical risk in view, not just code correctness: Vercel
  commercial ToS, domain ownership/transfer terms, honest
  labeling of demo/placeholder content (fake reviews, fake contact
  info), and not overpromising things like Google Business Profile
  ranking as a pure website deliverable.
- Claude Code is the primary day-to-day dev driver for this project (not
  Cursor/Codex).

## Next steps (not yet done)

- Real lead-capture pipeline: form submit → persist to a database first
  (e.g. Supabase/Postgres) → then notify via SMS/email (Twilio/Resend) —
  never notify-only, so a failed notification can't lose a lead.
- Eventually: multi-tenant architecture (one Next.js app, per-client
  config files, hostname-based routing) instead of one repo per client,
  once there's more than one real client.

