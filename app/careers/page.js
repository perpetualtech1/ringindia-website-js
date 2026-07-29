import PageLayout from '@/components/PageLayout'
import { company, getPage } from '@/content/pages'

const page = getPage('careers')

export const metadata = {
  title: 'Careers',
  description:
    page?.description ||
    'Build a career with Ring India — a global service company involved in changing and improving lives. Send us your application.',
  alternates: { canonical: '/careers' },
}

const subject = encodeURIComponent('Application — [position you are applying for]')
const body = encodeURIComponent(
  [
    'Name:',
    'Phone:',
    'Position applied for:',
    'Link to your résumé:',
    '',
    'A little about your experience:',
    '',
  ].join('\n'),
)

export default function CareersPage() {
  return (
    <PageLayout heading="Careers at Ring India">
      <div className="prose">
        <p>
          We invite you to join us in creating an exciting future and to build a
          career in a global service company involved in a unique mission of
          changing and improving lives.
        </p>
        <p>
          Email us your application, telling us the role you are after and what
          you have done. Please attach your résumé or include a link to it.
        </p>
      </div>

      <div className="mailto-cta">
        <p className="mailto-cta__label">Send applications to</p>
        <a className="mailto-cta__address" href={`mailto:${company.email}`}>
          {company.email}
        </a>
        <a
          className="button button--primary"
          href={`mailto:${company.email}?subject=${subject}&body=${body}`}
        >
          Apply by email
        </a>
        <p className="form__hint">
          Opens your email app with a short template. Remember to attach your
          résumé before sending.
        </p>
      </div>
    </PageLayout>
  )
}
