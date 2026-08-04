'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { primaryNav, utilityNav } from '@/content/nav'
import { siteCopy } from '@/content/pages'

const ui = siteCopy.ui

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isCurrent = (href) => (pathname === href ? 'page' : undefined)

  return (
    <>
      <div className="utility-bar">
        <div className="shell">
          <Link href="/lead-generation" className="utility-bar__lead">
            {ui.utilityLead}
          </Link>
          <ul className="utility-bar__links">
            {utilityNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={isCurrent(item.href)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <header className="site-header">
        <div className="shell">
          <Link href="/" className="site-header__logo" aria-label={ui.logoLabel}>
            <Image
              src="/image/Ring-india-Logo.gif"
              alt={ui.logoAlt}
              width={223}
              height={81}
              priority
              unoptimized
            />
          </Link>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? ui.menuClose : ui.menuOpen}
          </button>

          <nav aria-label={ui.primaryNavLabel}>
            <ul className="primary-nav" id="primary-nav" data-open={open}>
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} aria-current={isCurrent(item.href)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
