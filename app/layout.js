import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { company, siteCopy } from '@/content/pages'

export const metadata = {
  metadataBase: new URL('https://www.ringindia.net'),
  title: {
    default: siteCopy.metaTitle,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  applicationName: company.name,
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  icons: {
    icon: '/image/favicon.ico',
    shortcut: '/image/favicon.ico',
  },
  openGraph: {
    type: 'website',
    siteName: company.name,
    url: '/',
    title: siteCopy.metaTitle,
    description: company.description,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#00265c',
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: company.name,
  url: 'https://www.ringindia.net',
  logo: 'https://www.ringindia.net/image/Ring-india-Logo.gif',
  description: company.description,
  foundingDate: String(company.established),
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'New Delhi',
    addressCountry: 'IN',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          {siteCopy.ui.skipLink}
        </a>
        <Header />
        <main id="main" className="page-body">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          // Static, developer-authored JSON-LD — no user input reaches this.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  )
}
