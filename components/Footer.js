import Link from 'next/link'
import { footerNav, legalNav } from '@/content/nav'
import { company } from '@/content/pages'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="shell">
          <h2 className="visually-hidden">Site links</h2>
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
            © {company.established}–{new Date().getFullYear()} {company.name} — all rights
            reserved.
          </p>
          <ul className="site-footer__legal">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/sitemap.xml">XML Sitemap</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
