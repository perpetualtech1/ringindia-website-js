/**
 * Every legacy URL is 301'd to its new slug.
 *
 * These pages have been indexed since the late 1990s; dropping them would throw
 * away the site's entire search footprint. The map mirrors SLUGS in
 * scripts/extract-content.mjs — keep the two in sync if you rename a route.
 */
const LEGACY_ROUTES = {
  '/index.html': '/',
  '/index.php': '/',
  '/Service_and_Support.htm': '/call-center-service',
  '/accident_claims_leads.html': '/accident-claims-leads',
  '/animation.html': '/animation-service',
  '/australia_mortgage_leads.html': '/australia-mortgage-leads',
  '/automotive_leads.html': '/automotive-leads',
  '/back_office_india.html': '/back-office-india',
  '/bankruptcy_leads.html': '/bankruptcy-leads',
  '/business_process_outsourcing_BPO_Services.html': '/business-process-outsourcing',
  '/buy_short_sale_leads.html': '/buy-short-sale-leads',
  '/call_center_india.html': '/call-center-india',
  '/canada_mortgage_leads.html': '/canada-mortgage-leads',
  '/customized_telemarketing_services_india.html': '/outbound-telemarketing-services',
  '/customized_webbase_marketing_india.html': '/web-marketing',
  '/data_entry.html': '/data-entry',
  '/debt_management_leads.html': '/debt-management-leads',
  '/domestic-callcenter.html': '/domestic-call-center',
  '/e_mail_marketing.html': '/email-marketing',
  '/home_foreclosure_leads.html': '/home-foreclosure-leads',
  '/insurance_leads.html': '/insurance-leads',
  '/lead_generation.html': '/lead-generation',
  '/loan_modification_leads.html': '/loan-modification-leads',
  '/loss_mitigation_leads.html': '/loss-mitigation-leads',
  '/mobile_lead_generation.htm': '/mobile-lead-generation',
  '/mortgage_leads_system.htm': '/mortgage-leads',
  '/offshore_collection_services.htm': '/offshore-collection-services',
  '/outsource_to_india.html': '/outsource-to-india',
  '/outsourse_telemarketing.html': '/outsource-telemarketing',
  '/pay_day_loan_leads.html': '/pay-day-loan-leads',
  '/privacy.html': '/privacy',
  '/ring_india_telemarketing_jobs.html': '/careers',
  '/ringindia_call_center_advisors.html': '/advisory-panel',
  '/ringindia_call_center_background.html': '/about',
  '/ringindia_call_center_contact.html': '/contact',
  '/ringindia_call_center_infractruture.html': '/infrastructure',
  '/ringindia_call_center_people.html': '/our-people',
  '/ringindia_call_center_quality.html': '/quality',
  '/ringindia_data_base_management.html': '/database-management',
  '/site_map.html': '/site-map',
  '/site_map.php': '/site-map',
  '/stock_leads.html': '/stock-leads',
  '/survey_leads.html': '/survey-leads',
  '/terms-and-condition.html': '/terms',
  '/transaction_processing.htm': '/transaction-processing',
  '/uk_mortgage_leads.html': '/uk-mortgage-leads',
  // Pages that 404'd on the legacy site too — send them somewhere useful
  // instead of leaving them broken.
  '/customized_care_services_india.html': '/call-center-service',
  '/loan_mitigation_leads.html': '/loss-mitigation-leads',
  '/merchant_account_leads.html': '/lead-generation',
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,

  // This project sits inside the legacy site's repo, which has its own lockfile.
  // Pin the tracing root so Next doesn't walk up and pick the wrong one.
  outputFileTracingRoot: import.meta.dirname,

  async redirects() {
    return Object.entries(LEGACY_ROUTES).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }))
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        ],
      },
    ]
  },
}

export default nextConfig
