# ringindia.net

A JavaScript rebuild of [ringindia.net](https://www.ringindia.net/), converted
from the original static site — which is archived in [`legacy/`](legacy) so this
project stands entirely on its own.

**Stack:** Next.js 15 (App Router) · React 19 · plain CSS · no build-time CSS
framework. 44 pages — 40 generated from the legacy content, plus a hand-built
homepage, contact, careers and site map. No API keys, no backend services.

---

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm start            # serve the production build
```

Optional checks:

```bash
npm run extract                                   # re-import content from legacy/
node scripts/check-links.mjs http://localhost:3000 # crawl for broken links / anchors
```

---

## What changed from the original

The legacy site was a fixed-width, nested-`<table>` layout from roughly 1998–2007
with no viewport meta tag and no responsive behaviour at all. The brand — logo,
the orange rule, the navy and blue palette — is carried over; the layout is new.

| | Before | After |
|---|---|---|
| Markup | 4-deep nested `<table>` per page, repeated in all 44 files | `Header` / `Sidebar` / `PageLayout` / `Footer` components |
| Layout | fixed ~960px | responsive 320 → 1440px, CSS grid |
| Mobile | none | hamburger nav, single column, no horizontal scroll |
| Styling | inline `style=` on nearly every cell | one stylesheet with custom properties |
| Contact | PHP `mail()` that never executed | published email address + prefilled `mailto:` |
| Content | duplicated in every file | `content/pages.generated.json` + nav data |
| Old URLs | — | 301 redirects, all 49 of them |

Screenshots of the live original and the rebuild are in
[`reference/screenshots/`](reference/screenshots).

---

## Structure

```
app/
├── layout.js               root layout, metadata, JSON-LD
├── page.js                 homepage
├── [slug]/page.js          the 40 generated content pages
├── contact/page.js         hand-built (form)
├── careers/page.js         hand-built (form)
├── site-map/page.js        hand-built (generated from nav data)
├── sitemap.js, robots.js   generated /sitemap.xml and /robots.txt
├── not-found.js
└── globals.css             the whole design system

components/                 Header, Footer, Sidebar, PageLayout, LeadCard
content/
├── pages.js                company facts, homepage cards, page lookup
├── pages.generated.json    ← extracted page copy (source data, edit freely)
└── nav.js                  navigation taxonomy
scripts/
├── extract-content.mjs     one-shot legacy importer
└── check-links.mjs         link + anchor crawler
public/image/               all 14 original images, including favicon.ico
legacy/                     the original site, frozen — input for the importer
reference/screenshots/      before/after
```

### Content is data, not markup

`content/pages.generated.json` holds each page's heading, meta description,
keywords and body HTML. To change wording, **edit that file directly**.

`npm run extract` regenerates it from the archived HTML in `legacy/` and will
overwrite your edits — it's an import tool, not part of the build. It
is committed so the conversion is reproducible and auditable.

The extractor lifts the `<td width="70%">` content cell out of each legacy page
and strips scripts, ad tags, forms, HTML comments and every presentational
attribute, rewriting internal links to the new slugs. A verification pass
confirms none of 12 legacy artefact types survive.

---

## Decisions worth knowing

**The TeleLeads build was dropped.** The legacy root hosted two unrelated sites:
Ring India (`.html`) and a TeleLeads-branded one (`.php`, linking out to
teleleads.net). Only Ring India is ported; the TeleLeads `.php` files are not
carried into this project. See [`legacy/README.md`](legacy/README.md).

**The contact form was replaced by an email address.** The original posted to
`contact-form/html-contact-form.php`, which used PHP `mail()`. Vercel serves
`.php` as static text, so it never ran — every enquiry since deployment was
silently lost. Rather than reintroduce a form (which needs a mail provider, an
API key and DNS records), `/contact` and `/careers` now publish the address
directly with a prefilled `mailto:` link. Nothing to configure and nothing that
can silently fail. Trade-off: no submissions land in a database, and the address
is visible to scrapers — the legacy PHP already exposed it, so this is not new.
If you later want a real form back, see [Adding a form later](#adding-a-form-later).

**Dead links were repaired, not reproduced.** The original had five links to
`file:///E:/Ringindia/…` (a developer's local drive) and three links to pages
that 404. The `file://` links are unlinked with their text kept; the 404s are
redirected somewhere sensible. `lead-generation#CPA` was linked site-wide but
never had a target — it now points at the "Telemarketing for CPA Firms" section.

**Every old URL redirects.** These pages have been indexed for two decades;
`next.config.mjs` maps all 49 legacy paths to their new slugs with 308s.

---

## Adding a form later

If you decide you want submitted forms rather than email, the pieces are:

1. A mail provider — Resend, Postmark or SendGrid. Each needs an API key and
   DNS records to verify `ringindia.net` as a sender.
2. An API route at `app/api/contact/route.js` that validates input, strips CRLF
   from values before they reach mail headers, and calls the provider.
3. Spam handling — a honeypot field plus a minimum fill-in time covers most of
   it; Turnstile or hCaptcha if volume demands it.

A no-backend alternative is a hosted endpoint such as Formspree, which needs no
key in your code but moves submissions to a third party.

---

## Deploying

The original is on Vercel, and this deploys there with no configuration at all
— no environment variables, no secrets, no external services. `next build`, then
point the `ringindia.net` domain at the new project.

No `.htaccess` equivalent is needed: the `index.html` / `index.php` collision
documented in the legacy README doesn't exist here, since there is exactly one
homepage.

---

## Verification

Checks run against a dev server on port 3000, all currently passing:

- production build — 51 prerendered routes, no errors or warnings
- link crawl — 45 pages, 56 anchor links, zero broken
- 49 legacy redirects — all resolve to the intended slug
- responsive — no horizontal overflow at 390px or 768px across 10 routes

Not yet done: no automated test suite, and the copy still contains the original's
typos ("Pogram", "Imrovement", "bankrupcy", "auto_insurace_leads"). Both were
left deliberately — the typos are in indexed content and are the site owner's
call to fix.
