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

## Progress log (what's actually been done, in order)

1. Set up local dev environment: configured git identity (name/email),
   generated an SSH key, added it to GitHub (`blockben05-dot`), verified
   `ssh -T git@github.com` auth works.
2. Created the empty `BlueBlock` GitHub repo, scaffolded the project
   locally with `create-next-app` (Next.js 16, TypeScript, Tailwind,
   App Router, ESLint), connected the remote, pushed the initial commit.
3. Built the full demo landing page for a fictional business — originally
   "Diamond State Landscaping," then renamed to **Diamond State Block
   Landscaping** after a web search turned up a real "Diamond State
   Landscaping, LLC" operating in DE/AR (avoiding client-facing name
   collision). Sections: header/mobile nav, hero, services, portfolio
   (gradient placeholders, no scraped photos), about, reviews (clearly
   labeled as sample), contact + quote form, footer. Verified visually at
   desktop + mobile widths and tested real interactions (mobile menu,
   form submit) in a live preview browser, not just type-checked.
4. Created a Vercel account (Hobby tier — fine for a non-commercial demo,
   must upgrade to Pro before any real paying client goes live per
   Vercel's ToS), installed the GitHub App, imported `BlueBlock`, and
   deployed it. Live at `blue-block-lovat.vercel.app`, auto-deploys on
   every push to `main`.
5. Wired the quote form to send a real email instead of a fake client-only
   "thanks" message: added the `resend` npm package, built
   `src/app/api/quote/route.ts` (a Next.js Route Handler that calls
   Resend's API), updated `QuoteForm.tsx` to actually `fetch()` that route
   and show real success/error states. Fixed `.gitignore` so `.env.example`
   (documents the required vars) is tracked while `.env.local` (the real
   secret key) stays untracked.
6. Created a Resend account, generated an API key, added
   `RESEND_API_KEY` + `LEAD_NOTIFICATION_EMAIL` to local `.env.local` and
   to the Vercel project's Environment Variables, redeployed production,
   and confirmed the live API endpoint actually sends email
   (`curl -X POST https://blue-block-lovat.vercel.app/api/quote` →
   `{"ok":true}`, 200).
7. Confirmed Vercel Web Analytics is free on Hobby up to 50,000
   events/month — safe to enable without cost risk.

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
- `QuoteForm` is a client component that POSTs to `src/app/api/quote/route.ts`,
  which sends a real email via Resend (`RESEND_API_KEY` +
  `LEAD_NOTIFICATION_EMAIL` in `.env.local`, documented in `.env.example`).
  It does **not** yet persist to a database — a failed email send today
  means a lost lead, which is still the gap to close before a real client
  (see "Next steps" below).
- GitHub: `blockben05-dot/BlueBlock`, auth via SSH (key already set up on
  this machine). Vercel: account created (`blockben05-4743`, Hobby tier),
  project `blue-block` deployed and live at `blue-block-lovat.vercel.app`,
  auto-deploying on every push to `main`. Must upgrade to **Pro** before
  any real paying client's domain goes live (Vercel's Hobby ToS forbids
  commercial use).

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

## Next steps (backlog, roughly in order)

Still on this demo repo, no real client yet:

- Basic local-SEO plumbing: meta/Open Graph tags, `LocalBusiness`
  schema.org structured data — the actual mechanism behind "rank locally
  on Google," worth baking into the template now.
- Real lead-capture persistence: form submit → write to a database first
  (e.g. Supabase/Postgres) → then notify via SMS/email (Twilio/Resend) —
  never notify-only, so a failed email send can't silently lose a lead.
  This is the biggest remaining gap before a real client could rely on it.
- Business-side, in parallel (not blocking code work, but don't skip):
  draft a short client agreement — setup fee, monthly retainer terms, who
  owns the domain, what happens on cancellation.

Only once there's a real paying client:

- Buy *their* domain, point DNS at a Vercel project for their site.
- Upgrade Vercel to **Pro** before their site goes live.
- Set that project's `LEAD_NOTIFICATION_EMAIL` to their phone/email (see
  "Multi-client environment variables" below for the Shared Variable
  trick for `RESEND_API_KEY`).
- Edit `QuoteForm.tsx`'s `SERVICE_OPTIONS` and `route.ts`'s `from` name
  to match their actual business/services — this is currently a
  per-client manual edit, not a config file (see next bullet).

Eventually, once there's more than ~2-3 real clients:

- Multi-tenant architecture: one Next.js app, per-client config files
  (business name, service list, notification email), hostname-based
  routing — replacing one-repo/one-Vercel-project-per-client so a single
  `git push` updates every client site at once.
- Automate monthly traffic/lead reporting (e.g. Vercel Cron aggregating
  analytics + lead counts) instead of building it by hand per client.

## Multi-client environment variables (for when there's more than one client project)

With today's one-Vercel-project-per-client setup, each new client's project
needs its own `LEAD_NOTIFICATION_EMAIL` set to *that* client's phone/email —
this is client-specific data and has to be entered by hand per project.

But `RESEND_API_KEY` does **not** need to be re-entered per client — it's
Ben's own Resend account sending on behalf of everyone, so it should be set
once as a Vercel **Shared Environment Variable** (Environment Variables page
→ "Link Shared Variable") and linked into every client project, instead of
copy-pasting the same key into each new project's settings.

This per-project env var editing is exactly the scaling pain point behind
the multi-tenant architecture noted above: in that eventual model, each
client's notification email would just be a field in their config file in
the codebase, and there'd be zero Vercel dashboard visits per client at all.
Not worth building for one demo site, but it's the reason that
architecture pays off once there's more than 2-3 real clients.

