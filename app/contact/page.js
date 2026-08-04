import PageLayout from '@/components/PageLayout'
import { company, siteCopy } from '@/content/pages'

const copy = siteCopy.contact

export const metadata = {
  title: copy.heading,
  description: copy.metaDescription,
  alternates: { canonical: '/contact' },
}

const subject = encodeURIComponent(copy.mailSubject)
const body = encodeURIComponent(copy.mailBody.join('\n'))

export default function ContactPage() {
  return (
    <PageLayout heading={copy.heading}>
      <div className="contact-grid">
        <div>
          <p>
            <strong>{copy.lead}</strong> {copy.body}
          </p>

          <div className="mailto-cta">
            <p className="mailto-cta__label">{copy.emailLabel}</p>
            <a className="mailto-cta__address" href={`mailto:${company.email}`}>
              {company.email}
            </a>
            <a
              className="button button--primary"
              href={`mailto:${company.email}?subject=${subject}&body=${body}`}
            >
              {copy.action}
            </a>
            <p className="form__hint">{copy.hint}</p>
          </div>
        </div>

        <aside className="contact-panel">
          <h2>{copy.panelHeading}</h2>
          <dl>
            <dt>{siteCopy.ui.contactEmailLabel}</dt>
            <dd>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </dd>
            <dt>{siteCopy.ui.contactHqLabel}</dt>
            <dd>{company.headquarters}</dd>
            <dt>{siteCopy.ui.contactSinceLabel}</dt>
            <dd>{company.established}</dd>
          </dl>
          <p style={{ marginTop: '1.25rem', marginBottom: 0 }}>{copy.panelNote}</p>
        </aside>
      </div>
    </PageLayout>
  )
}
