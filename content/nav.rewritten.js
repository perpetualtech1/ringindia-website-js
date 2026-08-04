/**
 * Site navigation — the 'rewrite' content version.
 *
 * Labels only. Every `href` here is identical to `nav.legacy.js`, and the
 * grouping is unchanged, so no URL moves and the site map still mirrors the
 * taxonomy the business actually used. What changes is the wording: consistent
 * "centre" spelling, plain-English group titles, and labels that read as
 * things a visitor wants rather than internal service names.
 */

/** Utility bar above the header. */
export const utilityNav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
  { label: 'Site Map', href: '/site-map' },
]

/** Primary header nav — the short list a visitor actually needs. */
export const primaryNav = [
  { label: 'Call Centre Services', href: '/call-center-service' },
  { label: 'Lead Generation', href: '/lead-generation' },
  { label: 'Telemarketing', href: '/outsource-telemarketing' },
  { label: 'BPO Services', href: '/business-process-outsourcing' },
  { label: 'Outsourcing to India', href: '/outsource-to-india' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

/**
 * Full service taxonomy — drives the sidebar and the site map.
 * Anchors (`#…`) point at named sections that exist inside the target page.
 */
export const serviceNav = [
  {
    title: 'Lead Generation — US',
    links: [
      { label: 'US Mortgage Leads', href: '/mortgage-leads' },
      { label: 'Refinance Leads', href: '/mortgage-leads#refinance_leads' },
      { label: 'Bankruptcy Leads', href: '/bankruptcy-leads' },
      { label: 'Home Foreclosure Leads', href: '/home-foreclosure-leads' },
      { label: 'Loss Mitigation Leads', href: '/loss-mitigation-leads' },
      { label: 'Loan Modification Leads', href: '/loan-modification-leads' },
      { label: 'Short Sale Leads', href: '/buy-short-sale-leads' },
      { label: 'Automotive Leads', href: '/automotive-leads' },
      { label: 'Auto Warranty Leads', href: '/automotive-leads#auto_warranty_leads' },
      { label: 'Auto Purchase Leads', href: '/automotive-leads#auto_purchase_leads' },
      { label: 'Auto Loan Leads', href: '/automotive-leads#auto_loan_leads' },
    ],
  },
  {
    title: 'Lead Generation — UK',
    links: [
      { label: 'UK Mortgage Leads', href: '/uk-mortgage-leads' },
      { label: 'Accident Claims Leads', href: '/accident-claims-leads' },
    ],
  },
  {
    title: 'Mortgage Leads — Other Markets',
    links: [
      { label: 'Australia Mortgage Leads', href: '/australia-mortgage-leads' },
      { label: 'Canada Mortgage Leads', href: '/canada-mortgage-leads' },
    ],
  },
  {
    title: 'Debt Management Leads',
    links: [
      { label: 'Credit Card Debt Leads', href: '/debt-management-leads#credit_card_debt_leads' },
      { label: 'Tax Debt Relief Leads', href: '/debt-management-leads#tax_debt_relief_leads' },
      { label: 'Pay Day Loan Leads', href: '/pay-day-loan-leads' },
    ],
  },
  {
    title: 'Insurance Leads',
    links: [
      { label: 'Insurance Leads', href: '/insurance-leads' },
      { label: 'Health Insurance Leads', href: '/insurance-leads#health_insurance_leads' },
      { label: 'Life Insurance Leads', href: '/insurance-leads#life_insurance_leads' },
      { label: 'Auto Insurance Leads', href: '/insurance-leads#auto_insurace_leads' },
    ],
  },
  {
    title: 'Survey & Investor Leads',
    links: [
      { label: 'Stock Investor Leads', href: '/stock-leads' },
      { label: 'Survey Leads', href: '/survey-leads' },
      { label: 'Weight Loss Leads', href: '/survey-leads#weight_loss_leads' },
      { label: 'Education Loan Leads', href: '/survey-leads#education_loan_lead' },
      { label: 'Mobile Lead Generation', href: '/mobile-lead-generation' },
    ],
  },
  {
    title: 'Telemarketing & Outsourcing',
    links: [
      { label: 'Call Centres in India', href: '/call-center-india' },
      { label: 'Outsourcing to India', href: '/outsource-to-india' },
      { label: 'Domestic Call Centre', href: '/domestic-call-center' },
      { label: 'Outsource Telemarketing', href: '/outsource-telemarketing' },
      { label: 'Business Process Outsourcing', href: '/business-process-outsourcing' },
      { label: 'Transaction Processing', href: '/transaction-processing' },
      { label: 'Back Office Services', href: '/back-office-india' },
      { label: 'Offshore Collections', href: '/offshore-collection-services' },
      { label: 'Telemarketing for CPA Firms', href: '/lead-generation#CPA' },
    ],
  },
  {
    title: 'Other Services',
    links: [
      { label: 'Email Marketing', href: '/email-marketing' },
      { label: 'Data Entry', href: '/data-entry' },
      { label: 'Animation Services', href: '/animation-service' },
      { label: 'Database Management', href: '/database-management' },
      { label: 'Web Marketing', href: '/web-marketing' },
    ],
  },
  {
    title: 'About Ring India',
    links: [
      { label: 'Quality', href: '/quality' },
      { label: 'Our People', href: '/our-people' },
      { label: 'Infrastructure', href: '/infrastructure' },
      { label: 'Advisory Panel', href: '/advisory-panel' },
      { label: 'Our Background', href: '/about' },
    ],
  },
]

/** Footer link row. */
export const footerNav = [
  { label: 'Home', href: '/' },
  { label: 'Email Marketing', href: '/email-marketing' },
  { label: 'Data Entry', href: '/data-entry' },
  { label: 'Animation Services', href: '/animation-service' },
  { label: 'Database Management', href: '/database-management' },
  { label: 'Web Marketing', href: '/web-marketing' },
  { label: 'Mobile Lead Generation', href: '/mobile-lead-generation' },
  { label: 'Back Office Services', href: '/back-office-india' },
  { label: 'BPO Services', href: '/business-process-outsourcing' },
  { label: 'Call Centres in India', href: '/call-center-india' },
  { label: 'Transaction Processing', href: '/transaction-processing' },
  { label: 'Offshore Collections', href: '/offshore-collection-services' },
  { label: 'Telemarketing for CPA Firms', href: '/lead-generation#CPA' },
  { label: 'Outsource Telemarketing', href: '/outsource-telemarketing' },
]

export const legalNav = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
]
