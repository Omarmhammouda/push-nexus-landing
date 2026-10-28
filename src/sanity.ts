/**
 * Pulls published copy from Sanity (project jubvblnz, dataset production) and
 * merges it over the built-in copy in content.ts. If Sanity is slow or
 * unreachable, the site renders with the built-in copy instead.
 *
 * Editor: https://push-nexus.sanity.studio
 */
import * as content from './content'

export const SANITY = { projectId: 'jubvblnz', dataset: 'production', apiVersion: '2026-10-27' }

// Newest edit of each type wins, so a duplicate document never breaks the site.
const one = (type: string) => `*[_type == "${type}"] | order(_updatedAt desc)[0]`
const QUERY = `{
  "hero": ${one('hero')},
  "positioning": ${one('positioning')},
  "contrast": ${one('contrastSection')},
  "ai": ${one('aiSection')},
  "method": ${one('methodSection')},
  "viewsSection": ${one('viewsSection')},
  "numbers": ${one('numbersSection')},
  "product": ${one('productSection')},
  "how": ${one('howSection')},
  "who": ${one('whoSection')},
  "pacing": ${one('pacingSection')},
  "security": ${one('securitySection')}.items,
  "closing": ${one('closingSection')},
  "footer": ${one('siteSettings')}.footer,
  "results": ${one('resultsPage')},
  "stories": *[_type == "resultStory"] | order(coalesce(order, 999) asc, _createdAt asc){brand, category, stat, statLabel, title, body, platforms}
}`

type Obj = Record<string, unknown>
const isObj = (v: unknown): v is Obj => !!v && typeof v === 'object' && !Array.isArray(v)
const empty = (v: unknown) => v === null || v === undefined || v === '' || (Array.isArray(v) && v.length === 0)

/** Copy values from `src` onto `target` in place, skipping Sanity system fields and empty values. */
function merge(target: Obj, src: unknown) {
  if (!isObj(src)) return
  for (const [k, v] of Object.entries(src)) {
    if (k.startsWith('_') || empty(v)) continue
    const cur = target[k]
    if (Array.isArray(v)) {
      const prev = Array.isArray(cur) ? cur : []
      // Keep code-only fields (icons, screenshot keys) from the matching built-in item.
      target[k] = v.map((item, i) => (isObj(item) ? mergeInto({ ...(isObj(prev[i]) ? prev[i] : {}) }, item) : item))
    } else if (isObj(v) && isObj(cur)) {
      merge(cur, v)
    } else if (isObj(v)) {
      target[k] = mergeInto({}, v)
    } else {
      target[k] = v
    }
  }
}
function mergeInto(target: Obj, src: Obj) {
  merge(target, src)
  return target
}
/** Replace an exported array's items in place so existing imports see the new copy. */
function replaceArray(target: unknown[], src: unknown) {
  if (!Array.isArray(src) || src.length === 0) return
  const next = src.map((item, i) => (isObj(item) ? mergeInto({ ...(isObj(target[i]) ? (target[i] as Obj) : {}) }, item) : item))
  target.splice(0, target.length, ...next)
}

export async function loadContent(timeoutMs = 2500) {
  const { projectId, dataset, apiVersion } = SANITY
  const url = `https://${projectId}.apicdn.sanity.io/v${apiVersion}/data/query/${dataset}?query=${encodeURIComponent(QUERY)}&perspective=published`
  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), timeoutMs)
  try {
    const res = await fetch(url, { signal: ctrl.signal })
    if (!res.ok) throw new Error(`Sanity ${res.status}`)
    const { result: r } = (await res.json()) as { result: Record<string, any> }
    if (!r) return false
    const c = content as unknown as Record<string, any>
    merge(c.hero, r.hero)
    merge(c.positioning, r.positioning)
    merge(c.contrast, r.contrast)
    merge(c.ai, r.ai)
    merge(c.method, r.method)
    if (r.viewsSection) {
      const { views, ...head } = r.viewsSection
      merge(c.viewsHead, head)
      replaceArray(c.views, views)
    }
    merge(c.numbers, r.numbers)
    merge(c.product, r.product)
    merge(c.how, r.how)
    merge(c.who, r.who)
    merge(c.pacing, r.pacing)
    replaceArray(c.security, r.security)
    merge(c.closing, r.closing)
    merge(c.footer, r.footer)
    if (r.results) merge(c.results, r.results)
    if (Array.isArray(r.stories) && r.stories.length) c.results.stories = r.stories
    // An emptied sample notice means the stories are real: hide the notice and tags.
    if (r.results && empty(r.results.sampleNote)) c.results.sampleNote = ''
    return true
  } catch (e) {
    console.info('[content] using built-in copy:', (e as Error).message)
    return false
  } finally {
    clearTimeout(timer)
  }
}
