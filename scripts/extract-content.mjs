/**
 * One-shot migration script.
 *
 * Reads the archived legacy site in `legacy/` and lifts each page's real
 * content out of the surrounding table-soup chrome, writing it to
 * content/pages.generated.json.
 *
 * The legacy pages are all built the same way: a `<td width="70%">` cell holds
 * a breadcrumb div, an `<h1>`, and the body copy. Everything outside that cell
 * is header/sidebar/footer chrome that the new components render instead.
 *
 * Run once with `npm run extract`. The committed content/pages.js is derived
 * from its output; you should not need to run it again.
 */

import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { join, dirname, extname, basename } from 'node:path'
import { fileURLToPath } from 'node:url'
import * as cheerio from 'cheerio'

const HERE = dirname(fileURLToPath(import.meta.url))
// The original site is archived inside this project, so the import is
// reproducible without depending on anything outside the repo.
const LEGACY = join(HERE, '..', 'legacy')
const OUT = join(HERE, '..', 'content', 'pages.generated.json')

/** Legacy filename -> new route slug. */
const SLUGS = {
  'index.html': '',
  'Service_and_Support.htm': 'call-center-service',
  'accident_claims_leads.html': 'accident-claims-leads',
  'animation.html': 'animation-service',
  'australia_mortgage_leads.html': 'australia-mortgage-leads',
  'automotive_leads.html': 'automotive-leads',
  'back_office_india.html': 'back-office-india',
  'bankruptcy_leads.html': 'bankruptcy-leads',
  'business_process_outsourcing_BPO_Services.html': 'business-process-outsourcing',
  'buy_short_sale_leads.html': 'buy-short-sale-leads',
  'call_center_india.html': 'call-center-india',
  'canada_mortgage_leads.html': 'canada-mortgage-leads',
  'customized_telemarketing_services_india.html': 'outbound-telemarketing-services',
  'customized_webbase_marketing_india.html': 'web-marketing',
  'data_entry.html': 'data-entry',
  'debt_management_leads.html': 'debt-management-leads',
  'domestic-callcenter.html': 'domestic-call-center',
  'e_mail_marketing.html': 'email-marketing',
  'home_foreclosure_leads.html': 'home-foreclosure-leads',
  'insurance_leads.html': 'insurance-leads',
  'lead_generation.html': 'lead-generation',
  'loan_modification_leads.html': 'loan-modification-leads',
  'loss_mitigation_leads.html': 'loss-mitigation-leads',
  'mobile_lead_generation.htm': 'mobile-lead-generation',
  'mortgage_leads_system.htm': 'mortgage-leads',
  'offshore_collection_services.htm': 'offshore-collection-services',
  'outsource_to_india.html': 'outsource-to-india',
  'outsourse_telemarketing.html': 'outsource-telemarketing',
  'pay_day_loan_leads.html': 'pay-day-loan-leads',
  'privacy.html': 'privacy',
  'ring_india_telemarketing_jobs.html': 'careers',
  'ringindia_call_center_advisors.html': 'advisory-panel',
  'ringindia_call_center_background.html': 'about',
  'ringindia_call_center_contact.html': 'contact',
  'ringindia_call_center_infractruture.html': 'infrastructure',
  'ringindia_call_center_people.html': 'our-people',
  'ringindia_call_center_quality.html': 'quality',
  'ringindia_data_base_management.html': 'database-management',
  'site_map.html': 'site-map',
  'stock_leads.html': 'stock-leads',
  'survey_leads.html': 'survey-leads',
  'terms-and-condition.html': 'terms',
  'transaction_processing.htm': 'transaction-processing',
  'uk_mortgage_leads.html': 'uk-mortgage-leads',
}

/** Legacy hrefs that 404 on the live server — see README "Known issues". */
const DEAD_LINKS = new Set([
  'customized_care_services_india.html',
  'loan_mitigation_leads.html',
  'merchant_account_leads.html',
])

/** Rewrite a legacy href to a new-project href, or null to unlink it. */
function rewriteHref(href) {
  if (!href) return null
  const trimmed = href.trim()

  // Kill the developer's local drive paths baked into lead_generation.html.
  if (/^file:\/\//i.test(trimmed)) return null
  // Dead ad/tracker and validator badges.
  if (/statcounter|googlesyndication|google\.com\/coop|jigsaw\.w3\.org|validator\.w3\.org/i.test(trimmed)) return null

  // Absolute links back to our own domain become internal.
  let path = trimmed.replace(/^https?:\/\/(www\.)?ringindia\.net\/?/i, '')
  if (path === '') return '/'

  // External links pass through untouched.
  if (/^(https?:|mailto:|tel:)/i.test(path)) return path

  // Split off #fragment so the file part can be mapped.
  const [file, hash] = path.split('#')
  if (file === '' && hash) return `#${hash}`
  if (DEAD_LINKS.has(file)) return null

  // Assets and feeds keep their path.
  if (/^(image|images|style)\//.test(file)) return `/${file}`
  if (file === 'sitemap.xml' || file === 'feed.xml') return `/${file}`

  const slug = SLUGS[file]
  if (slug === undefined) return null
  const base = slug === '' ? '/' : `/${slug}`
  return hash ? `${base}#${hash}` : base
}

/** Pull <head> metadata. */
function readMeta($) {
  const meta = (name) =>
    $(`meta[name="${name}" i]`).attr('content')?.replace(/\s+/g, ' ').trim() || ''
  return {
    title: $('title').text().replace(/\s+/g, ' ').trim(),
    description: meta('description'),
    keywords: meta('Keywords'),
  }
}

/**
 * Find the main content cell.
 *
 * Inner pages: the <td> that contains the page's <h1>.
 * Falls back to the widest content-bearing cell when there is no <h1>.
 */
function findContentCell($) {
  const h1 = $('h1').first()
  if (h1.length) {
    const cell = h1.closest('td')
    if (cell.length) return cell
  }
  // Fallback: the 70%-width cell used by the shared inner-page template.
  const wide = $('td[width="70%"]').first()
  if (wide.length) return wide
  return null
}

/** Strip chrome, ads and legacy attributes; rewrite links. Returns clean HTML. */
function cleanContent($, cell) {
  const $$ = cheerio.load(cell.html() || '', null, false)

  // Ads, counters, inline scripts and the old breadcrumb (we render our own).
  $$('script, noscript, form, iframe').remove()

  // Commented-out markup. Inert, but it's dead weight and some of it still
  // carries the old AdSense publisher id into the page source. A selector
  // won't reach comments that sit at the fragment root, so walk the tree.
  const dropComments = (nodes) => {
    for (const node of [...(nodes || [])]) {
      if (node.type === 'comment') $$(node).remove()
      else dropComments(node.children)
    }
  }
  dropComments($$.root()[0].children)
  $$('div').each((_, el) => {
    const d = $$(el)
    const style = d.attr('style') || ''
    if (/text-align:\s*right/.test(style) && d.find('img[src*="arrow.gif"]').length) {
      d.remove() // breadcrumb
    }
  })
  $$('img[src*="arrow.gif"]').remove()

  // The page's own <h1> is rendered by the layout, not the body.
  $$('h1').first().remove()

  $$('a').each((_, el) => {
    const a = $$(el)

    // `<a name="refinance_leads" id="…"></a>` is a jump target, not a link.
    // The sidebar and cross-page links point at these, so they must survive as
    // real ids — turn them into spans before the unlink branch eats them.
    if (!a.attr('href')) {
      const anchorId = a.attr('id') || a.attr('name')
      if (anchorId) {
        a.replaceWith(`<span id="${anchorId}">${a.html() ?? ''}</span>`)
      } else {
        a.replaceWith(a.text())
      }
      return
    }

    const next = rewriteHref(a.attr('href'))
    if (next === null) {
      a.replaceWith(a.text()) // unlink, keep the words
    } else {
      a.attr('href', next)
      if (/^https?:/i.test(next)) {
        a.attr('target', '_blank')
        a.attr('rel', 'noopener noreferrer')
      }
    }
  })

  $$('img').each((_, el) => {
    const img = $$(el)
    const src = img.attr('src') || ''
    if (/statcounter|googlesyndication|jigsaw|w3\.org|doubleclick/i.test(src)) {
      img.remove()
      return
    }
    img.attr('src', src.replace(/^https?:\/\/(www\.)?ringindia\.net/i, ''))
    if (!img.attr('alt')) img.attr('alt', '')
  })

  // Drop presentational attributes — the new stylesheet handles all of this.
  $$('*').each((_, el) => {
    for (const attr of ['style', 'align', 'bgcolor', 'border', 'cellpadding',
      'cellspacing', 'valign', 'width', 'height', 'hspace', 'vspace',
      'background', 'class', 'face', 'size', 'color']) {
      if (el.tagName === 'img' && (attr === 'width' || attr === 'height')) continue
      $$(el).removeAttr(attr)
    }
  })

  // <font> and <center> carry no meaning once the attributes are gone.
  $$('font, center').each((_, el) => {
    $$(el).replaceWith($$(el).contents())
  })

  // Collapse empty paragraphs left behind by the cleanup — but never drop a
  // node carrying an id, nor one *wrapping* an id. The legacy anchors are
  // empty `<a>` tags inside otherwise-empty `<span>`s, so removing the empty
  // wrapper would take the jump target with it.
  $$('p, span, div').each((_, el) => {
    const n = $$(el)
    if (n.attr('id') || n.find('[id]').length) return
    if (!n.text().trim() && !n.find('img').length) n.remove()
  })

  return $$.html().replace(/\s+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim()
}

/**
 * Anchors the legacy site linked to but never defined.
 *
 * `lead_generation.html#CPA` is referenced from the footer and the sidebar of
 * every page, but no `<a name="CPA">` was ever added — so the link has always
 * dumped visitors at the top of the page. Attach the id to the section heading
 * that the link clearly meant.
 */
const ANCHOR_REPAIRS = {
  'lead-generation': [{ id: 'CPA', matches: /^Telemarketing for CPA Firms$/i }],
}

function repairAnchors(html, slug) {
  const repairs = ANCHOR_REPAIRS[slug]
  if (!repairs) return html

  const $$ = cheerio.load(html, null, false)
  for (const { id, matches } of repairs) {
    if ($$(`#${id}`).length) continue
    const target = $$('strong, b, h2, h3')
      .filter((_, el) => matches.test($$(el).text().trim()))
      .first()
    if (target.length) {
      target.attr('id', id)
    } else {
      console.warn(`  ! anchor repair "${slug}#${id}" found no match`)
    }
  }
  return $$.html()
}

/** Plain-text excerpt, used for cards and as an SEO fallback. */
function excerpt(html, max = 220) {
  const text = cheerio.load(html, null, false).text().replace(/\s+/g, ' ').trim()
  return text.length > max ? `${text.slice(0, max).replace(/\s\S*$/, '')}…` : text
}

const pages = []
const skipped = []

for (const file of readdirSync(LEGACY)) {
  if (!['.html', '.htm'].includes(extname(file))) continue
  const slug = SLUGS[file]
  if (slug === undefined) {
    skipped.push(file)
    continue
  }
  if (file === 'index.html') continue // homepage is hand-built from components

  const raw = readFileSync(join(LEGACY, file), 'utf8')
  const $ = cheerio.load(raw)
  const meta = readMeta($)

  const cell = findContentCell($)
  if (!cell) {
    skipped.push(`${file} (no content cell)`)
    continue
  }

  const heading = $('h1').first().text().replace(/\s+/g, ' ').trim()
  const body = repairAnchors(cleanContent($, cell), slug)

  pages.push({
    slug,
    legacyFile: file,
    heading: heading || meta.title.split(/[-,|]/)[0].trim(),
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    excerpt: excerpt(body),
    body,
  })
}

pages.sort((a, b) => a.slug.localeCompare(b.slug))
writeFileSync(OUT, `${JSON.stringify(pages, null, 2)}\n`)

console.log(`extracted ${pages.length} pages -> ${OUT}`)
const thin = pages.filter((p) => p.body.length < 400)
if (thin.length) {
  console.log(`\n${thin.length} page(s) with a thin body, worth eyeballing:`)
  for (const p of thin) console.log(`  ${p.slug.padEnd(34)} ${p.body.length} chars  (${p.legacyFile})`)
}
if (skipped.length) {
  console.log(`\nskipped ${skipped.length}: ${skipped.join(', ')}`)
}
