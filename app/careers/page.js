import PageLayout from '@/components/PageLayout'
import { company, siteCopy } from '@/content/pages'

const copy = siteCopy.careers

export const metadata = {
  title: 'Careers',
  description: copy.metaDescription,
  alternates: { canonical: '/careers' },
}

const subject = encodeURIComponent(copy.mailSubject)
const body = encodeURIComponent(copy.mailBody.join('\n'))

export default function CareersPage() {
  return (
    <PageLayout heading={copy.heading} path="/careers">
      <div className="prose">
        <p>{copy.intro}</p>
        <p>{copy.body}</p>
      </div>

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
    </PageLayout>
  )
}
