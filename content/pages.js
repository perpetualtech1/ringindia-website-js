/**
 * Page content.
 *
 * `pages.generated.json` is produced by `npm run extract`, which lifts the copy
 * out of the legacy static HTML. Treat it as source data: edit it directly if
 * you want to change wording, and don't re-run the extractor unless you're
 * re-importing from the legacy tree (it would overwrite your edits).
 */

import generated from './pages.generated.json'

/** Routes that have a hand-built page component and must not be auto-generated. */
export const CUSTOM_ROUTES = new Set(['', 'contact', 'careers', 'site-map'])

/** Every extracted page, keyed by slug. */
export const pagesBySlug = new Map(generated.map((p) => [p.slug, p]))

/** Pages served by the catch-all `[slug]` route. */
export const generatedPages = generated.filter((p) => !CUSTOM_ROUTES.has(p.slug))

export function getPage(slug) {
  return pagesBySlug.get(slug) ?? null
}

/** All routes in the site, for the sitemap. */
export const allRoutes = [
  '/',
  ...generated.map((p) => (p.slug === '' ? '/' : `/${p.slug}`)),
].filter((v, i, a) => a.indexOf(v) === i)

/** Company facts, lifted from the legacy footer and contact page. */
export const company = {
  name: 'Ring India',
  tagline: 'Customized Customer Care',
  email: 'tmjaswani@gmail.com',
  headquarters: 'New Delhi, India',
  established: 1998,
  description:
    'Ring India is a network of individual third-party international call centers in Asia Pacific, with affiliates throughout India, the Philippines, Mauritius, Singapore, Hong Kong and Malaysia. Headquartered in New Delhi, we offer customized voice and web-based services to clients across the US, Europe and Australia.',
  intro:
    'We specialize in pay-per-performance inbound and outbound telemarketing services. Our value-added services include help desk, sales lead generation, billing services, technical support, product inquiry, order processing, up-selling and cross-selling, market surveys and research, database management, data entry, email marketing campaigns and fax broadcasting.',
  facilities:
    'Our facilities are equipped with the latest call center technologies — CTI, soft phone, predictive dialer software, ACD, IVR, fax on demand, voice logging and call blending. One stop for your inbound and outbound call center services.',
}

/**
 * The fifteen lead-type cards on the homepage.
 * Copy is taken verbatim from the legacy homepage grid.
 */
export const homeLeadCards = [
  {
    title: 'Bankruptcy Leads',
    href: '/bankruptcy-leads',
    body: 'We generate bankruptcy leads all over the US. With the mortgage meltdown since 2007 the rate of bankruptcy has really skyrocketed. We can also provide you bankruptcy discharged leads.',
  },
  {
    title: 'Home Foreclosure Leads',
    href: '/home-foreclosure-leads',
    body: 'We specialize in generating home foreclosure leads — people who have a high chance of their home being foreclosed. Contact us for highly qualified home foreclosure help services.',
  },
  {
    title: 'Loan Modification Leads',
    href: '/loan-modification-leads',
    body: 'With over 2 million homeowners falling into bankruptcy and foreclosure, now is the time for loan experts to offer a solution. We offer real-time loan modification leads generated online and double-verified by phone.',
  },
  {
    title: 'Stock Investment Leads',
    href: '/stock-leads',
    body: 'We excel in providing business-to-business (B2B) and stock leads. We provide decision makers who have requested more information on your public company through our investor relations program.',
  },
  {
    title: 'US Mortgage Leads',
    href: '/mortgage-leads',
    body: 'We specialize in generating telemarketing mortgage leads for lenders and mortgage brokers nationwide. All our leads are real, exclusive and hot call transfer leads.',
  },
  {
    title: 'Automotive Leads',
    href: '/automotive-leads',
    body: 'We generate all types of auto leads — auto warranty leads, auto purchase leads, auto loan leads and many more.',
  },
  {
    title: 'Debt Management Leads',
    href: '/debt-management-leads',
    body: 'We generate credit card debt leads in the US, UK, Australia and Canada. We also provide tax debt relief leads and many more leads related to debt management.',
  },
  {
    title: 'Accident Claims Leads',
    href: '/accident-claims-leads',
    body: 'We generate accident claim leads in the UK. Whether it is whiplash or auto injury, we specialize in generating all types of leads.',
  },
  {
    title: 'Insurance Lead Generation',
    href: '/insurance-leads',
    body: 'We specialize in generating insurance leads for the UK, US, Australia and Canada — health, life and auto insurance leads and many more.',
  },
  {
    title: 'UK Mortgage Leads',
    href: '/uk-mortgage-leads',
    body: 'We provide mortgage loan officers and financial advisors nationwide with fresh exclusive mortgage leads, secured loan leads, remortgage leads, buy leads and commercial mortgage leads.',
  },
  {
    title: 'Canada Mortgage Leads',
    href: '/canada-mortgage-leads',
    body: 'We specialize in generating high-quality targeted telemarketing mortgage leads and home loan leads for Canadian mortgage brokers, lenders and managers.',
  },
  {
    title: 'Australia Mortgage Leads',
    href: '/australia-mortgage-leads',
    body: 'We specialize in generating home loan leads for Australia — high-quality targeted telemarketing mortgage leads for mortgage managers, brokers and lenders.',
  },
  {
    title: 'Loss Mitigation Leads',
    href: '/loss-mitigation-leads',
    body: 'We generate loss mitigation leads for attorneys and loss mitigation specialists working with homeowners who need to restructure their existing mortgage.',
  },
  {
    title: 'Pay Day Loan Leads',
    href: '/pay-day-loan-leads',
    body: 'We generate pay day loan leads for lenders across the US and UK — real-time, double-verified applicants actively seeking short-term finance.',
  },
  {
    title: 'Survey Leads',
    href: '/survey-leads',
    body: 'We run market surveys and research campaigns that produce qualified survey leads, including weight loss leads and education loan leads.',
  },
]

/** Headline services shown near the top of the homepage. */
export const primaryServices = [
  { label: 'Call Center Service', href: '/call-center-service' },
  { label: 'Outsource to India', href: '/outsource-to-india' },
  { label: 'Domestic Call Center', href: '/domestic-call-center' },
  { label: 'Telemarketing Service', href: '/outsource-telemarketing' },
  { label: 'Loan Modification Leads', href: '/loan-modification-leads' },
  { label: 'Lead Generation Service', href: '/lead-generation' },
  { label: 'Business Process Outsourcing', href: '/business-process-outsourcing' },
  { label: 'Outbound Telemarketing Services', href: '/outbound-telemarketing-services' },
]
