import Link from 'next/link'
import Sidebar from './Sidebar'
import { siteCopy } from '@/content/pages'

const ui = siteCopy.ui

/**
 * Shared inner-page shell: banner strip, service sidebar, breadcrumb, article.
 * Replaces the four levels of nested tables every legacy page repeated.
 */
export default function PageLayout({ heading, children, showSidebar = true }) {
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
    </>
  )
}
