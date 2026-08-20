import { notFound } from 'next/navigation'
import PageLayout from '@/components/PageLayout'
import { generatedPages, getPage, CUSTOM_ROUTES, company } from '@/content/pages'

/**
 * Every content page from the legacy site that doesn't need bespoke behaviour.
 * The body HTML comes from content/pages.generated.json — see scripts/extract-content.mjs.
 */

const BASE = 'https://www.ringindia.net'

/**
 * Pages that describe the company itself rather than a specific service —
 * Service schema doesn't fit these. Everything else in generatedPages is a
 * genuine service or lead-generation offering Ring India runs campaigns for,
 * per content/copy.rewritten.js (primaryServices, homeLeadCards) and
 * content/nav.rewritten.js (serviceNav) — no new claim, just marking up what
 * the site already asserts.
 */
const NOT_A_SERVICE = new Set([
  'about',
  'advisory-panel',
  'our-people',
  'quality',
  'infrastructure',
  'terms',
  'privacy',
])

export function generateStaticParams() {
  return generatedPages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const page = getPage(slug)
  if (!page || CUSTOM_ROUTES.has(slug)) return {}

  return {
    title: page.heading,
    description: page.description || page.excerpt,
    keywords: page.keywords || undefined,
    alternates: { canonical: `/${page.slug}` },
    openGraph: {
      title: page.heading,
      description: page.description || page.excerpt,
      url: `/${page.slug}`,
    },
  }
}

export default async function ContentPage({ params }) {
  const { slug } = await params
  const page = getPage(slug)

  if (!page || CUSTOM_ROUTES.has(slug)) notFound()

  const serviceSchema = !NOT_A_SERVICE.has(slug) && {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.heading,
    description: page.description || page.excerpt,
    url: `${BASE}/${slug}`,
    provider: {
      '@type': 'Organization',
      name: company.name,
      url: BASE,
    },
  }

  return (
    <PageLayout heading={page.heading} path={`/${slug}`}>
      <div className="prose prose__scroll">
        {/*
          Trusted content: this HTML was extracted at build time from the
          legacy site by our own script, sanitised of scripts, forms and
          inline styles. No user input reaches it.
        */}
        <div dangerouslySetInnerHTML={{ __html: page.body }} />
      </div>

      {serviceSchema && (
        <script
          type="application/ld+json"
          // Static, developer-authored JSON-LD — no user input reaches this.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      )}
    </PageLayout>
  )
}
