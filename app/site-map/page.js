import Link from 'next/link'
import PageLayout from '@/components/PageLayout'
import { serviceNav, utilityNav, legalNav } from '@/content/nav'

export const metadata = {
  title: 'Site Map',
  description:
    'Every page on ringindia.net — call center services, lead generation, telemarketing, BPO and company information.',
  alternates: { canonical: '/site-map' },
}

/** Built from the same nav data the sidebar uses, so it can never drift. */
const groups = [
  { title: 'Company', links: [...utilityNav, ...legalNav] },
  ...serviceNav,
]

export default function SiteMapPage() {
  return (
    <PageLayout heading="Site Map" showSidebar={false}>
      <div className="sitemap-grid">
        {groups.map((group) => (
          <section key={group.title}>
            <h2 className="sidebar__title">{group.title}</h2>
            <ul>
              {group.links.map((link) => (
                <li key={`${group.title}-${link.href}-${link.label}`}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </PageLayout>
  )
}
