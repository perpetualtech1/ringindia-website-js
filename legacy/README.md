# legacy/ — the original ringindia.net

A frozen copy of the static site this project replaced, recovered from the
deployed server in July 2026. **Nothing here is served.** It is kept for two
reasons:

1. `scripts/extract-content.mjs` reads these files to produce
   `content/pages.generated.json`. Keeping them in-repo means the content import
   is reproducible by anyone who clones this project, with no external
   dependency.
2. It is the reference for what the site used to say and look like, which
   matters when someone asks why a page is worded the way it is.

## What's here

| | |
|---|---|
| `*.html`, `*.htm` | 44 pages of the Ring India site |
| `image/` | 14 images, including the only favicon that ever existed |
| `style/` | the original stylesheets |
| `sitemap.xml`, `feed.xml` | as they were served |

## What was deliberately left out

The live server also hosted a second, unrelated **TeleLeads**-branded site — 17
`.php` pages with their own stylesheet, images and navigation, linking out to
teleleads.net. It shared the same root directory but was a different brand and
was not reachable from the Ring India homepage. It is not ported and not
archived here; it remains in the original recovery repo.

## Known faults in the original

These are reproduced as-is. They were real on the live site and are fixed in the
rebuild, not here.

- `lead_generation.html` links five times to `file:///E:/Ringindia/…` — a
  developer's local drive. Dead for every visitor.
- `customized_care_services_india.html`, `loan_mitigation_leads.html` and
  `merchant_account_leads.html` are linked from the navigation but 404.
- `lead_generation.html#CPA` is linked site-wide but the anchor was never
  defined.
- `index.html` contains one `href` with two URLs concatenated together.
- The contact form posts to PHP that the host never executed, so submissions
  were silently discarded.
