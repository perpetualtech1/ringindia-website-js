/**
 * The rewritten site copy — the 'rewrite' content version, and the default.
 *
 * Same company, same services, same URLs. What changed is the wording: the
 * original text was written between roughly 1998 and 2009 and still argued from
 * that moment ("the mortgage meltdown since 2007"), leaned on volume claims it
 * no longer supports, and carried the typos of a hand-maintained static site.
 *
 * Rules this rewrite follows:
 *   - No new factual claims. Every service, market and capability named here
 *     appears in the legacy copy; nothing was invented to fill space.
 *   - No dated framing. Nothing is pinned to a year that has passed.
 *   - Plain English. Shorter sentences, active voice, British/US spellings kept
 *     consistent with the rest of the site.
 *   - Structure unchanged. Headings, anchors and link targets match the legacy
 *     version one-for-one so no URL or inbound link breaks.
 *
 * The legacy wording is intact in `copy.legacy.js` — see `content-version.js`
 * for how to switch back.
 */

export const company = {
  name: 'Ring India',
  // Left as-is: this strapline is baked into the logo artwork, and the brief
  // was to rewrite copy, not touch the visual identity.
  tagline: 'Customized Customer Care',
  email: 'tmjaswani@gmail.com',
  headquarters: 'New Delhi, India',
  established: 1998,
  description:
    'Ring India is a network of independent third-party contact centres across the Asia Pacific region, with delivery partners in India, the Philippines, Mauritius, Singapore, Hong Kong and Malaysia. From our base in New Delhi we run voice and web-based campaigns for clients in the US, UK, Europe, Canada and Australia.',
  intro:
    'We run inbound and outbound programmes on a pay-per-performance basis, so you pay for outcomes rather than seat hours. Alongside the phone work we handle help desk and technical support, sales lead generation and qualification, order processing, billing, up-selling and cross-selling, market research and surveys, database management, data entry and email campaigns.',
  facilities:
    'Our centres run on standard contact-centre infrastructure — CTI, softphones, predictive dialling, ACD, IVR, call blending and full voice logging — so campaigns can be scaled, routed and audited without you having to build any of it yourself.',
}

/**
 * The fifteen lead-type cards on the homepage.
 * One card per lead category we actually run campaigns for; each links to the
 * page that describes the qualification criteria and sample record format.
 */
export const homeLeadCards = [
  {
    title: 'Bankruptcy Leads',
    href: '/bankruptcy-leads',
    body: 'Bankruptcy leads generated across the US and screened by phone before they reach you. Discharged-bankruptcy records are available as a separate file where you need them.',
  },
  {
    title: 'Home Foreclosure Leads',
    href: '/home-foreclosure-leads',
    body: 'Homeowners at genuine risk of foreclosure, identified and verified by our agents — so your team spends its time on people who need the help you offer.',
  },
  {
    title: 'Loan Modification Leads',
    href: '/loan-modification-leads',
    body: 'Real-time loan modification leads: generated online, then double-verified by phone before delivery. Homeowners who want their existing mortgage restructured, not a cold list.',
  },
  {
    title: 'Stock Investment Leads',
    href: '/stock-leads',
    body: 'B2B and investor leads from our investor relations programme — decision makers who have asked to hear more about your public company.',
  },
  {
    title: 'US Mortgage Leads',
    href: '/mortgage-leads',
    body: 'Telemarketing mortgage leads for lenders and brokers nationwide. Exclusive to you, never resold, and available as live call transfers.',
  },
  {
    title: 'Automotive Leads',
    href: '/automotive-leads',
    body: 'Auto warranty, auto purchase and auto loan leads, each with its own qualification script and record format.',
  },
  {
    title: 'Debt Management Leads',
    href: '/debt-management-leads',
    body: 'Credit card debt and tax debt relief leads across the US, UK, Australia and Canada, qualified against the balance and hardship criteria you set.',
  },
  {
    title: 'Accident Claims Leads',
    href: '/accident-claims-leads',
    body: 'Personal injury and accident claims leads for the UK market — whiplash, road traffic and workplace injury — verified against claim eligibility before delivery.',
  },
  {
    title: 'Insurance Lead Generation',
    href: '/insurance-leads',
    body: 'Health, life and auto insurance leads for the UK, US, Australia and Canada, filtered on the cover type and profile you want to write.',
  },
  {
    title: 'UK Mortgage Leads',
    href: '/uk-mortgage-leads',
    body: 'Exclusive mortgage, remortgage, secured loan and commercial mortgage leads for UK brokers and financial advisers.',
  },
  {
    title: 'Canada Mortgage Leads',
    href: '/canada-mortgage-leads',
    body: 'Targeted telemarketing mortgage and home loan leads for Canadian brokers, lenders and mortgage managers, filtered by province and loan purpose.',
  },
  {
    title: 'Australia Mortgage Leads',
    href: '/australia-mortgage-leads',
    body: 'Home loan and mortgage leads for Australian brokers, lenders and mortgage managers, qualified by our agents before they reach your pipeline.',
  },
  {
    title: 'Loss Mitigation Leads',
    href: '/loss-mitigation-leads',
    body: 'Leads for attorneys and loss mitigation specialists — homeowners actively looking to restructure a mortgage they are struggling to service.',
  },
  {
    title: 'Pay Day Loan Leads',
    href: '/pay-day-loan-leads',
    body: 'Short-term finance applicants across the US and UK, delivered in real time and double-verified against your affordability criteria.',
  },
  {
    title: 'Survey Leads',
    href: '/survey-leads',
    body: 'Market research and survey campaigns that produce qualified leads as a by-product — including weight loss and education loan enquiries.',
  },
]

/** Headline services shown near the top of the homepage. */
export const primaryServices = [
  { label: 'Call Centre Services', href: '/call-center-service' },
  { label: 'Outsourcing to India', href: '/outsource-to-india' },
  { label: 'Domestic Call Centre', href: '/domestic-call-center' },
  { label: 'Telemarketing', href: '/outsource-telemarketing' },
  { label: 'Loan Modification Leads', href: '/loan-modification-leads' },
  { label: 'Lead Generation', href: '/lead-generation' },
  { label: 'Business Process Outsourcing', href: '/business-process-outsourcing' },
  { label: 'Outbound Telemarketing', href: '/outbound-telemarketing-services' },
]

/**
 * Strings the hand-built pages (home, contact, careers) and the root metadata
 * used to hardcode. Extracted so the content switch reaches them too.
 */
export const siteCopy = {
  metaTitle:
    'Ring India — Outbound Telemarketing, Call Centre Services & Lead Generation',

  home: {
    heroHeading: 'Conversations that turn into customers',
    servicesHeading: 'What we do',
    leadsHeading: 'Leads we generate',
    ctaHeading: 'Tell us what you need',
    ctaBody:
      'Describe the campaign you have in mind — market, volume and what a good lead looks like to you — and we will come back with an approach and a price.',
    primaryAction: 'Request a quote',
    secondaryAction: 'See how lead generation works',
    contactAction: 'Contact us',
    cardCta: 'Request a quote →',
  },

  contact: {
    heading: 'Contact Us',
    metaDescription:
      'Talk to Ring India about telemarketing, lead generation and business process outsourcing. Tell us what you need and we will route it to the right specialist.',
    lead: 'Start a conversation.',
    body: 'Whether you are scoping an outbound campaign, comparing lead suppliers or looking to move a back-office process offshore, write to us. Tell us the market you sell into, the volume you are after and what counts as a qualified lead for your team — that is usually enough for us to come back with something concrete.',
    emailLabel: 'Email us at',
    action: 'Write to us',
    hint: 'Opens your email app with a short template. Include your name, company, phone number and what you need, and we will come back to you.',
    panelHeading: 'Direct contact',
    panelNote:
      'We work with clients in the US, UK, Europe, Canada and Australia, delivered from contact centres across the Asia Pacific region.',
    mailSubject: 'Enquiry from ringindia.net',
    mailBody: [
      'A few lines about what you need:',
      '',
      'Name:',
      'Company:',
      'Phone:',
      'Market / country:',
      'What you are looking for:',
      '',
    ],
  },

  careers: {
    heading: 'Careers at Ring India',
    metaDescription:
      'Work at Ring India — contact centre, lead generation and back-office roles across our Asia Pacific delivery network. Send us your application.',
    intro:
      'We hire agents, team leaders, quality analysts and back-office staff across our delivery network. If you are good on a call, careful with data, or both, we would like to hear from you.',
    body: 'Email us your application. Tell us the role you are after, the campaigns or processes you have worked on, and the shifts you can cover. Attach your résumé or include a link to it.',
    emailLabel: 'Send applications to',
    action: 'Apply by email',
    hint: 'Opens your email app with a short template. Remember to attach your résumé before sending.',
    mailSubject: 'Application — [position you are applying for]',
    mailBody: [
      'Name:',
      'Phone:',
      'Position applied for:',
      'Shifts you can cover:',
      'Link to your résumé:',
      '',
      'A little about your experience:',
      '',
    ],
  },

  siteMap: {
    heading: 'Site Map',
    metaDescription:
      'Every page on ringindia.net — call centre services, lead generation, telemarketing, BPO and company information.',
    companyGroup: 'About the company',
  },

  /** Chrome: header, footer, breadcrumb, skip link, and their aria labels. */
  ui: {
    skipLink: 'Skip to content',
    utilityLead: 'Lead Generation Services',
    logoAlt: 'Ring India',
    logoLabel: 'Ring India — home',
    menuOpen: 'Menu',
    menuClose: 'Close',
    primaryNavLabel: 'Primary',
    sidebarLabel: 'Services',
    breadcrumbLabel: 'Breadcrumb',
    breadcrumbHome: 'Home',
    footerLinksHeading: 'Site links',
    footerRights: 'all rights reserved.',
    footerSitemap: 'XML Sitemap',
    contactEmailLabel: 'Email',
    contactHqLabel: 'Head office',
    contactSinceLabel: 'In business since',
  },

  notFound: {
    metaTitle: 'Page not found',
    heading: 'That page has moved or gone',
    body: 'This site was rebuilt and a number of pages changed address. The site map lists everything, or start again from the homepage.',
    homeAction: 'Go to the homepage',
    siteMapAction: 'Browse the site map',
  },
}
