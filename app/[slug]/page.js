import { notFound } from 'next/navigation'
import PageLayout from '@/components/PageLayout'
import { generatedPages, getPage, CUSTOM_ROUTES } from '@/content/pages'

/**
 * Every content page from the legacy site that doesn't need bespoke behaviour.
 * The body HTML comes from content/pages.generated.json — see scripts/extract-content.mjs.
 */

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

  return (
    <PageLayout heading={page.heading}>
      <div className="prose prose__scroll">
        {/*
          Trusted content: this HTML was extracted at build time from the
          legacy site by our own script, sanitised of scripts, forms and
          inline styles. No user input reaches it.
        */}
        <div dangerouslySetInnerHTML={{ __html: page.body }} />
      </div>
    </PageLayout>
  )
}
