import Link from 'next/link'
import { footerNav, legalNav } from '@/content/nav'
import { company, siteCopy } from '@/content/pages'

const ui = siteCopy.ui

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="shell">
          <h2 className="visually-hidden">{ui.footerLinksHeading}</h2>
          <ul className="site-footer__links">
            {footerNav.map((item) => (
              <li key={item.href + item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="shell">
        <div className="site-footer__meta">
          <p style={{ margin: 0 }}>
            © {company.established}–{new Date().getFullYear()} {company.name} — {ui.footerRights}
          </p>
          <ul className="site-footer__legal">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/sitemap.xml">{ui.footerSitemap}</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
