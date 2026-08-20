import { execSync } from 'child_process'
import { allRoutes } from '@/content/pages'
import { CONTENT_VERSION } from '@/content/content-version'

const BASE = 'https://www.ringindia.net'

/**
 * There's no per-page "last edited" timestamp in the content pipeline (see
 * content/pages.js) — copy for every route lives in one shared JSON file per
 * content version. Rather than fabricate a per-page date (which would be
 * worse than no date at all), this uses the last git commit date of the
 * active content-version file as a single, honest, sitewide value: it only
 * changes when the content actually does.
 *
 * Falls back to `undefined` (omits lastModified for that build) if git isn't
 * available in the build environment, rather than guessing.
 */
function contentLastModified() {
  const file =
    CONTENT_VERSION === 'legacy'
      ? 'content/pages.generated.json'
      : 'content/pages.rewritten.json'
  try {
    const iso = execSync(`git log -1 --format=%cI -- ${file}`, {
      encoding: 'utf8',
      cwd: process.cwd(),
    }).trim()
    return iso || undefined
  } catch {
    return undefined
  }
}

export default function sitemap() {
  const lastModified = contentLastModified()

  return allRoutes.map((route) => ({
    url: `${BASE}${route === '/' ? '' : route}`,
    ...(lastModified ? { lastModified } : {}),
    changeFrequency: 'monthly',
    // `priority` intentionally dropped: Google has said for years it ignores
    // this field, so the arbitrary 1.0 / 0.7 split here was dead weight.
    // See seo/seo-audit.md §7.
  }))
}
