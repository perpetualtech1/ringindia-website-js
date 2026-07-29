import Link from 'next/link'

export const metadata = {
  title: 'Page not found',
}

export default function NotFound() {
  return (
    <div className="shell">
      <div className="notfound">
        <h1>We couldn&apos;t find that page</h1>
        <p style={{ color: 'var(--ink-muted)' }}>
          The link may be out of date. A number of pages moved when the site was
          rebuilt.
        </p>
        <div className="notfound__actions">
          <Link href="/" className="button button--primary">
            Go to the homepage
          </Link>
          <Link href="/site-map" className="button button--secondary">
            Browse the site map
          </Link>
        </div>
      </div>
    </div>
  )
}
