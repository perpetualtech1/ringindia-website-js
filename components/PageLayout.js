import Link from 'next/link'
import Sidebar from './Sidebar'
import { siteCopy } from '@/content/pages'

const ui = siteCopy.ui
const BASE = 'https://www.ringindia.net'

/**
 * Shared inner-page shell: banner strip, service sidebar, breadcrumb, article.
 * Replaces the four levels of nested tables every legacy page repeated.
 *
 * `path` (e.g. "/about") is optional and, when supplied, emits a
 * BreadcrumbList JSON-LD block matching the breadcrumb UI already rendered
 * here — SEO overhaul §8, the breadcrumb UI existed but the schema didn't.
 */
export default function PageLayout({ heading, children, showSidebar = true, path }) {
  const breadcrumbSchema = path && {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: ui.breadcrumbHome, item: BASE },
      { '@type': 'ListItem', position: 2, name: heading, item: `${BASE}${path}` },
    ],
  }

  return (
    <>
      <div className="page-banner" role="presentation" />
      <div className="shell">
        <div
          className="inner-layout"
          style={showSidebar ? undefined : { gridTemplateColumns: '1fr' }}
        >
          {showSidebar && <Sidebar />}

          <article>
            <nav className="breadcrumb" aria-label={ui.breadcrumbLabel}>
              <ol>
                <li>
                  <Link href="/">{ui.breadcrumbHome}</Link>
                </li>
                <li aria-current="page">{heading}</li>
              </ol>
            </nav>

            <h1>{heading}</h1>
            {children}
          </article>
        </div>
      </div>

      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          // Static, developer-authored JSON-LD mirroring the breadcrumb UI
          // above — no user input reaches this.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
    </>
  )
}
