// Serves the built site, emails request-access submissions, and keeps non-production hosts out of search.
const TO = ['hamdy@pushanalytics.com', 'moustafa@pushanalytics.com']
const FROM = { email: 'access@pushnexus.ai', name: 'Push Nexus website' }
const json = (body, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } })
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])
const clip = (s, n) => String(s ?? '').trim().slice(0, n)

async function handleAccess(request, env) {
  if (request.method !== 'POST') return json({ ok: false, error: 'Method not allowed' }, 405)
  let d
  try { d = await request.json() } catch { return json({ ok: false, error: 'Invalid request' }, 400) }
  if (d.company_website) return json({ ok: true }) // honeypot
  const email = clip(d.email, 200)
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ ok: false, error: 'Please enter a valid email' }, 400)
  const name = clip(d.name, 120), store = clip(d.store, 300), page = clip(d.page, 80) || '/'
  const platforms = Array.isArray(d.platforms) ? d.platforms.slice(0, 12).map((p) => clip(p, 40)).filter(Boolean) : []
  const rows = [['Name', name], ['Email', email], ['Store URL', store], ['Platforms', platforms.join(', ')], ['Page', 'https://pushnexus.ai' + page], ['Sent', new Date().toUTCString()]].filter(([, v]) => v)
  const text = 'New request for access from pushnexus.ai\n\n' + rows.map(([k, v]) => k + ': ' + v).join('\n')
  const html = '<h2>New request for access</h2><table>' + rows.map(([k, v]) => '<tr><td><b>' + esc(k) + '</b></td><td>' + esc(v) + '</td></tr>').join('') + '</table>'
  try {
    await env.EMAIL.send({ to: TO, from: FROM, replyTo: name ? { email, name } : email, subject: 'Push Nexus access request: ' + (name || email), text, html })
    return json({ ok: true })
  } catch (e) {
    console.error('send failed', e?.code, e?.message)
    return json({ ok: false, error: 'Could not send right now', code: e?.code }, 502)
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    if (url.protocol === 'http:') {
      url.protocol = 'https:'
      return Response.redirect(url.toString(), 301)
    }
    if (url.pathname === '/api/access') return handleAccess(request, env)
    if (url.hostname.startsWith('www.')) {
      url.hostname = url.hostname.slice(4)
      return Response.redirect(url.toString(), 301)
    }
    const res = await env.ASSETS.fetch(request)
    const out = new Response(res.body, res)
    // Only the real domain is indexable; workers.dev and other hosts stay out of search.
    if (url.hostname === 'pushnexus.ai') out.headers.delete('X-Robots-Tag')
    else out.headers.set('X-Robots-Tag', 'noindex, nofollow')
    out.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
    out.headers.set('X-Content-Type-Options', 'nosniff')
    if (url.pathname.startsWith('/assets/')) out.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
    return out
  },
}
