import PageLayout from '@/components/PageLayout'
import { company, getPage } from '@/content/pages'

const page = getPage('contact')

export const metadata = {
  title: 'Contact Us',
  description:
    page?.description ||
    'Contact Ring India about business process services, telemarketing and lead generation. Tell us about your requirement and we will route it to the right specialist.',
  alternates: { canonical: '/contact' },
}

const subject = encodeURIComponent('Enquiry from ringindia.net')
const body = encodeURIComponent(
  [
    'Please tell us a little about your requirement:',
    '',
    'Name:',
    'Company:',
    'Phone:',
    'What you need:',
    '',
  ].join('\n'),
)

export default function ContactPage() {
  return (
    <PageLayout heading="Contact Us">
      <div className="contact-grid">
        <div>
          <p>
            <strong>Request a call.</strong> If you have a question about Ring
            India business process services or telemarketing services, or would
            like to speak to one of our consultants, email us. Tell us about
            yourself so we can direct your enquiry to the appropriate
            specialist.
          </p>

          <div className="mailto-cta">
            <p className="mailto-cta__label">Email us at</p>
            <a className="mailto-cta__address" href={`mailto:${company.email}`}>
              {company.email}
            </a>
            <a
              className="button button--primary"
              href={`mailto:${company.email}?subject=${subject}&body=${body}`}
            >
              Write to us
            </a>
            <p className="form__hint">
              Opens your email app with a short template. Include your name,
              company, phone number and what you need, and we will come back to
              you.
            </p>
          </div>
        </div>

        <aside className="contact-panel">
          <h2>Direct contact</h2>
          <dl>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </dd>
            <dt>Headquarters</dt>
            <dd>{company.headquarters}</dd>
            <dt>Operating since</dt>
            <dd>{company.established}</dd>
          </dl>
          <p style={{ marginTop: '1.25rem', marginBottom: 0 }}>
            We work with clients across the US, UK, Europe, Canada and
            Australia, with delivery centres throughout the Asia Pacific region.
          </p>
        </aside>
      </div>
    </PageLayout>
  )
}
