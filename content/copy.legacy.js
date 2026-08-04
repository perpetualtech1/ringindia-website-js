/**
 * The original site copy — the 'legacy' content version.
 *
 * This is exactly what `content/pages.js` exported before the rewrite: company
 * facts lifted from the legacy footer and contact page, the fifteen homepage
 * lead cards taken verbatim from the legacy homepage grid, and the strings the
 * hand-built pages used to hardcode.
 *
 * Do not "improve" anything here. Its only job is to make
 * NEXT_PUBLIC_CONTENT_VERSION=legacy render the site as it was, so the rewrite
 * can be backed out without touching code.
 */

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

/**
 * Strings the hand-built pages (home, contact, careers) and the root metadata
 * used to hardcode. Extracted so the content switch reaches them too.
 */
export const siteCopy = {
  metaTitle:
    'Ring India — Outbound Telemarketing, Call Center Services & Lead Generation',

  home: {
    heroHeading: 'Quality, efficiency and dedication — on every call',
    servicesHeading: 'What we do',
    leadsHeading: 'Leads we generate',
    ctaHeading: 'Ready to talk?',
    ctaBody:
      'Tell us what you need and we will route your enquiry to the right specialist.',
    primaryAction: 'Get a free quote',
    secondaryAction: 'Explore lead generation',
    contactAction: 'Contact us',
    cardCta: 'Get a free quote →',
  },

  contact: {
    heading: 'Contact Us',
    metaDescription:
      'Contact Ring India about business process services, telemarketing and lead generation. Tell us about your requirement and we will route it to the right specialist.',
    lead: 'Request a call.',
    body: 'If you have a question about Ring India business process services or telemarketing services, or would like to speak to one of our consultants, email us. Tell us about yourself so we can direct your enquiry to the appropriate specialist.',
    emailLabel: 'Email us at',
    action: 'Write to us',
    hint: 'Opens your email app with a short template. Include your name, company, phone number and what you need, and we will come back to you.',
    panelHeading: 'Direct contact',
    panelNote:
      'We work with clients across the US, UK, Europe, Canada and Australia, with delivery centres throughout the Asia Pacific region.',
    mailSubject: 'Enquiry from ringindia.net',
    mailBody: [
      'Please tell us a little about your requirement:',
      '',
      'Name:',
      'Company:',
      'Phone:',
      'What you need:',
      '',
    ],
  },

  careers: {
    heading: 'Careers at Ring India',
    metaDescription:
      'Build a career with Ring India — a global service company involved in changing and improving lives. Send us your application.',
    intro:
      'We invite you to join us in creating an exciting future and to build a career in a global service company involved in a unique mission of changing and improving lives.',
    body: 'Email us your application, telling us the role you are after and what you have done. Please attach your résumé or include a link to it.',
    emailLabel: 'Send applications to',
    action: 'Apply by email',
    hint: 'Opens your email app with a short template. Remember to attach your résumé before sending.',
    mailSubject: 'Application — [position you are applying for]',
    mailBody: [
      'Name:',
      'Phone:',
      'Position applied for:',
      'Link to your résumé:',
      '',
      'A little about your experience:',
      '',
    ],
  },

  siteMap: {
    heading: 'Site Map',
    metaDescription:
      'Every page on ringindia.net — call center services, lead generation, telemarketing, BPO and company information.',
    companyGroup: 'Company',
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
    contactHqLabel: 'Headquarters',
    contactSinceLabel: 'Operating since',
  },

  notFound: {
    metaTitle: 'Page not found',
    heading: "We couldn't find that page",
    body: 'The link may be out of date. A number of pages moved when the site was rebuilt.',
    homeAction: 'Go to the homepage',
    siteMapAction: 'Browse the site map',
  },
}
