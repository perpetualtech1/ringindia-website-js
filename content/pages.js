/**
 * Page content — the single place every route reads its copy from.
 *
 * Two complete sets of wording ship side by side:
 *
 *   'legacy'  — `pages.generated.json` + `copy.legacy.js`. The copy as imported
 *               from the original site, unedited.
 *   'rewrite' — `pages.rewritten.json` + `copy.rewritten.js`. The 2026 rewrite,
 *               and what renders by default.
 *
 * `content-version.js` decides which one is live, from
 * NEXT_PUBLIC_CONTENT_VERSION. Nothing downstream — routes, components,
 * sitemap — knows or cares which version it is looking at, so switching back is
 * an environment-variable change and a redeploy.
 *
 * `pages.generated.json` is produced by `npm run extract`, which lifts the copy
 * out of the legacy static HTML. Don't re-run the extractor unless you're
 * re-importing from the legacy tree; it overwrites that file. To change the
 * live wording, edit `pages.rewritten.json`.
 */

import generated from './pages.generated.json'
import rewritten from './pages.rewritten.json'
import { isRewrite } from './content-version'
import * as legacyCopy from './copy.legacy'
import * as rewriteCopy from './copy.rewritten'

export { CONTENT_VERSION } from './content-version'

const activeCopy = isRewrite ? rewriteCopy : legacyCopy

/** Routes that have a hand-built page component and must not be auto-generated. */
export const CUSTOM_ROUTES = new Set(['', 'contact', 'careers', 'site-map'])

/**
 * Overlay the rewritten fields onto the extracted page record.
 *
 * The rewrite only supplies the fields it changes (heading, title, description,
 * keywords, excerpt, body); everything structural — `slug`, `legacyFile` — is
 * carried through from the extraction, so a page with no rewrite entry still
 * renders its original copy rather than disappearing.
 */
function applyRewrite(page) {
  const override = rewritten[page.slug]
  return override ? { ...page, ...override } : page
}

const activePages = isRewrite ? generated.map(applyRewrite) : generated

/** Every page, keyed by slug, in the active content version. */
export const pagesBySlug = new Map(activePages.map((p) => [p.slug, p]))

/** Pages served by the catch-all `[slug]` route. */
export const generatedPages = activePages.filter((p) => !CUSTOM_ROUTES.has(p.slug))

export function getPage(slug) {
  return pagesBySlug.get(slug) ?? null
}

/** All routes in the site, for the sitemap. */
export const allRoutes = [
  '/',
  ...activePages.map((p) => (p.slug === '' ? '/' : `/${p.slug}`)),
].filter((v, i, a) => a.indexOf(v) === i)

/** Company facts, and the copy the hand-built pages render. */
export const company = activeCopy.company
export const homeLeadCards = activeCopy.homeLeadCards
export const primaryServices = activeCopy.primaryServices
export const siteCopy = activeCopy.siteCopy
