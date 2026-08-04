/**
 * Site navigation — resolver.
 *
 * Two label sets ship side by side and `content-version.js` picks one:
 *
 *   'legacy'  — `nav.legacy.js`, the labels as carried over from the original
 *               sidebar taxonomy.
 *   'rewrite' — `nav.rewritten.js`, the rewritten labels. Same hrefs, same
 *               grouping, same anchors.
 *
 * Components import from here and never see the version, so switching back is
 * the same one environment variable as the rest of the copy.
 */

import { isRewrite } from './content-version'
import * as legacyNav from './nav.legacy'
import * as rewrittenNav from './nav.rewritten'

const active = isRewrite ? rewrittenNav : legacyNav

/** Utility bar above the header. */
export const utilityNav = active.utilityNav

/** Primary header nav. */
export const primaryNav = active.primaryNav

/** Full service taxonomy — drives the sidebar and the site map. */
export const serviceNav = active.serviceNav

/** Footer link row. */
export const footerNav = active.footerNav

/** Privacy / terms. */
export const legalNav = active.legalNav
