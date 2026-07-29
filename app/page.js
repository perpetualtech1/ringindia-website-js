import Link from 'next/link'
import LeadCard from '@/components/LeadCard'
import { company, homeLeadCards, primaryServices } from '@/content/pages'

export const metadata = {
  title:
    'Ring India — Outbound Telemarketing, Call Center Services & Lead Generation',
  description: company.description,
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="shell">
          <div className="hero__inner">
            <h1>Quality, efficiency and dedication — on every call</h1>
            <p className="hero__lede">{company.description}</p>
            <div className="hero__actions">
              <Link href="/contact" className="button button--primary">
                Get a free quote
              </Link>
              <Link href="/lead-generation" className="button button--secondary">
                Explore lead generation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <h2>What we do</h2>
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
          <h2>Leads we generate</h2>
          <p className="section__intro">{company.facilities}</p>
          <ul className="card-grid">
            {homeLeadCards.map((card) => (
              <LeadCard key={card.href} {...card} />
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <h2>Ready to talk?</h2>
          <p className="section__intro">
            Tell us what you need and we will route your enquiry to the right
            specialist.
          </p>
          <div className="hero__actions">
            <Link href="/contact" className="button button--primary">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
