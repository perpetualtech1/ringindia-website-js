import Link from 'next/link'
import LeadCard from '@/components/LeadCard'
import { company, homeLeadCards, primaryServices, siteCopy } from '@/content/pages'

const copy = siteCopy.home

export const metadata = {
  title: siteCopy.metaTitle,
  description: company.description,
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="shell">
          <div className="hero__inner">
            <h1>{copy.heroHeading}</h1>
            <p className="hero__lede">{company.description}</p>
            <div className="hero__actions">
              <Link href="/contact" className="button button--primary">
                {copy.primaryAction}
              </Link>
              <Link href="/lead-generation" className="button button--secondary">
                {copy.secondaryAction}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <h2>{copy.servicesHeading}</h2>
          <p className="section__intro">{company.intro}</p>
          <ul className="pill-list">
            {primaryServices.map((service) => (
              <li key={service.href}>
                <Link href={service.href}>{service.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--sunken">
        <div className="shell">
          <h2>{copy.leadsHeading}</h2>
          <p className="section__intro">{company.facilities}</p>
          <ul className="card-grid">
            {homeLeadCards.map((card) => (
              <LeadCard key={card.href} {...card} cta={copy.cardCta} />
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <h2>{copy.ctaHeading}</h2>
          <p className="section__intro">{copy.ctaBody}</p>
          <div className="hero__actions">
            <Link href="/contact" className="button button--primary">
              {copy.contactAction}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
