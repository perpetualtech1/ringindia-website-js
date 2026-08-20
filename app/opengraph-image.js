import { ImageResponse } from 'next/og'
import { company } from '@/content/pages'

/**
 * Sitewide default Open Graph image (SEO overhaul §8 — there was previously
 * no OG image anywhere, so every social/chat share rendered bare).
 *
 * Generated at build time from the site's own brand colours and the same
 * company name/tagline already rendered in the header — no new claims, no
 * stock photography, nothing that isn't already on the site.
 *
 * Route-specific pages don't get a bespoke image in this pass (that would
 * mean per-page art direction, out of scope here); this file covers every
 * route that doesn't define its own opengraph-image.
 */

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#00265c',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            letterSpacing: -2,
          }}
        >
          {company.name}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 36,
            color: '#f7931e',
          }}
        >
          {company.tagline}
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 26,
            color: '#e8f0fb',
          }}
        >
          Telemarketing · Lead Generation · Call Centre &amp; BPO Services
        </div>
      </div>
    ),
    { ...size },
  )
}
