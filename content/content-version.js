/**
 * Which set of site copy renders.
 *
 * The site ships two complete, parallel sets of wording:
 *
 *   'legacy'  — the copy as it was imported from the original ringindia.net.
 *               Preserved byte-for-byte in `pages.generated.json` and
 *               `copy.legacy.js`. Nothing about it has been edited.
 *   'rewrite' — the 2026 rewrite: same services, same URLs, same anchors,
 *               modern wording. Lives in `pages.rewritten.json` and
 *               `copy.rewritten.js`.
 *
 * Switching is a one-value change, no code edit and no git revert:
 *
 *   NEXT_PUBLIC_CONTENT_VERSION=legacy npm run build
 *
 * On Vercel, set the same variable in Project → Settings → Environment
 * Variables and redeploy. Anything unset falls back to DEFAULT_VERSION.
 *
 * An unrecognised value is a typo, and silently serving the wrong copy for it
 * would be worse than failing — so it throws at module load, which surfaces
 * during `next build` rather than in production.
 */

export const CONTENT_VERSIONS = ['rewrite', 'legacy']

/** What renders when the environment says nothing. */
export const DEFAULT_VERSION = 'rewrite'

function resolve() {
  const raw = (process.env.NEXT_PUBLIC_CONTENT_VERSION || '').trim()
  if (!raw) return DEFAULT_VERSION
  if (!CONTENT_VERSIONS.includes(raw)) {
    throw new Error(
      `NEXT_PUBLIC_CONTENT_VERSION="${raw}" is not a known content version. ` +
        `Use one of: ${CONTENT_VERSIONS.join(', ')}.`,
    )
  }
  return raw
}

export const CONTENT_VERSION = resolve()

export const isRewrite = CONTENT_VERSION === 'rewrite'
