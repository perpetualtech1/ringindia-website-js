import Link from 'next/link'
import PageLayout from '@/components/PageLayout'
import { serviceNav, utilityNav, legalNav } from '@/content/nav'
import { siteCopy } from '@/content/pages'

export const metadata = {
  title: siteCopy.siteMap.heading,
  description: siteCopy.siteMap.metaDescription,
  alternates: { canonical: '/site-map' },
}

/** Built from the same nav data the sidebar uses, so it can never drift. */
const groups = [
  { title: siteCopy.siteMap.companyGroup, links: [...utilityNav, ...legalNav] },
  ...serviceNav,
]

export default function SiteMapPage() {
  return (
    <PageLayout heading={siteCopy.siteMap.heading} showSidebar={false}>
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
