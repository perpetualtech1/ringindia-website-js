import Link from 'next/link'
import { siteCopy } from '@/content/pages'

const copy = siteCopy.notFound

export const metadata = {
  title: copy.metaTitle,
}

export default function NotFound() {
  return (
    <div className="shell">
      <div className="notfound">
        <h1>{copy.heading}</h1>
        <p style={{ color: 'var(--ink-muted)' }}>{copy.body}</p>
        <div className="notfound__actions">
          <Link href="/" className="button button--primary">
            {copy.homeAction}
          </Link>
          <Link href="/site-map" className="button button--secondary">
            {copy.siteMapAction}
          </Link>
        </div>
      </div>
    </div>
  )
}
