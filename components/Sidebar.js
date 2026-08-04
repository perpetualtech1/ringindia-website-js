'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { serviceNav } from '@/content/nav'
import { siteCopy } from '@/content/pages'

/**
 * The full service taxonomy, carried over from the legacy inner-page sidebar.
 * On narrow screens it drops below the article rather than squeezing it.
 */
export default function Sidebar() {
  const pathname = usePathname()

  return (
    <nav className="sidebar" aria-label={siteCopy.ui.sidebarLabel}>
      {serviceNav.map((group) => (
        <div className="sidebar__group" key={group.title}>
          <h2 className="sidebar__title">{group.title}</h2>
          <ul className="sidebar__links">
            {group.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}
