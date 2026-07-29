/**
 * Crawls the running site and reports broken internal links and missing
 * anchor targets.
 *
 * Usage: node scripts/check-links.mjs [baseUrl]   (default http://127.0.0.1:3000)
 *
 * The legacy site shipped with a pile of dead links (see the recovery README);
 * this is what keeps them from coming back.
 */

import * as cheerio from 'cheerio'

const BASE = (process.argv[2] || 'http://127.0.0.1:3000').replace(/\/$/, '')

const seen = new Set()
const queue = ['/']
const pageIds = new Map() // path -> Set of ids present on that page
const problems = []
/** where each link was found: "path#anchor" -> Set of source pages */
const sources = new Map()

function note(target, from) {
  if (!sources.has(target)) sources.set(target, new Set())
  sources.get(target).add(from)
}

async function fetchPage(path) {
  const response = await fetch(BASE + path, { redirect: 'manual' })
  return response
}

while (queue.length) {
  const path = queue.shift()
  if (seen.has(path)) continue
  seen.add(path)

  let response
  try {
    response = await fetchPage(path)
  } catch (error) {
    problems.push(`FETCH FAILED  ${path}  (${error.message})`)
    continue
  }

  if (response.status >= 400) {
    problems.push(`HTTP ${response.status}      ${path}`)
    continue
  }

  const html = await response.text()
  const $ = cheerio.load(html)

  pageIds.set(path, new Set($('[id]').map((_, el) => $(el).attr('id')).get()))

  $('a[href]').each((_, el) => {
    const href = $(el).attr('href')
    if (!href || /^(https?:|mailto:|tel:|#)/i.test(href)) {
      if (href?.startsWith('#')) note(`${path}${href}`, path)
      return
    }
    if (!href.startsWith('/')) return

    const [target, hash] = href.split('#')
    const clean = target === '' ? path : target
    if (hash) note(`${clean}#${hash}`, path)
    // Don't crawl generated files; just confirm they respond.
    if (!seen.has(clean) && !queue.includes(clean)) queue.push(clean)
  })
}

// Verify every anchor actually exists on its target page.
for (const [target, from] of sources) {
  const [path, hash] = target.split('#')
  if (!hash) continue
  const ids = pageIds.get(path)
  if (!ids) {
    problems.push(`ANCHOR ON UNVISITED PAGE  ${target}`)
  } else if (!ids.has(hash)) {
    problems.push(`MISSING ANCHOR  ${target}   linked from: ${[...from].join(', ')}`)
  }
}

console.log(`crawled ${seen.size} pages, checked ${sources.size} anchor links`)
if (problems.length) {
  console.log(`\n${problems.length} problem(s):`)
  for (const p of problems) console.log(`  ${p}`)
  process.exitCode = 1
} else {
  console.log('no broken internal links or missing anchors')
}
