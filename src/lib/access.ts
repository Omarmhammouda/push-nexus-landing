/**
 * Sends a request-access submission by email through FormSubmit (formsubmit.co),
 * the same service as the Bodysculpt site. Goes to Hamdy, with Moustafa copied.
 * On pushnexus.ai the site's Worker relays it (POST /api/access), so the visitor's
 * browser never has to talk to FormSubmit directly. Elsewhere it posts to FormSubmit.
 * The first submission sends FormSubmit's one-time "Activate Form" email to Hamdy's inbox.
 */
export type AccessRequest = {
  email: string
  name?: string
  store?: string
  platforms?: string[]
  /** Hidden honeypot. Real people leave it empty. */
  company_website?: string
}

export const FALLBACK_EMAIL = 'hamdy@pushanalytics.com'
const ENDPOINT = 'https://formsubmit.co/ajax/hamdy@pushanalytics.com'
const CC = 'moustafa@pushanalytics.com'

export async function sendAccessRequest(req: AccessRequest): Promise<{ ok: boolean; error?: string }> {
  if (req.company_website?.trim()) return { ok: true } // bot filled the trap: pretend it worked
  // Preferred path: the site's own relay.
  try {
    const res = await fetch('/api/access', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...req, page: location.pathname }),
    })
    if (res.status !== 404 && res.status !== 405 && (res.headers.get('content-type') ?? '').includes('json')) {
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string }
      return data.ok ? { ok: true } : { ok: false, error: data.error ?? `Error ${res.status}` }
    }
  } catch {
    /* fall through to direct FormSubmit */
  }
  return sendDirect(req)
}

/** Direct to FormSubmit, for hosts without the relay (preview copies). */
async function sendDirect(req: AccessRequest): Promise<{ ok: boolean; error?: string }> {
  const name = (req.name ?? '').trim()
  const email = req.email.trim()
  // Readable email: FormSubmit renders these fields as a table.
  const payload: Record<string, string> = {
    Name: name || '—',
    Email: email,
    'Store URL': (req.store ?? '').trim() || '—',
    Platforms: req.platforms?.length ? req.platforms.join(', ') : '—',
    Page: `https://pushnexus.ai${location.pathname}`,
    _subject: `Push Nexus access request: ${name || email}`,
    _replyto: email,
    _cc: CC,
    _template: 'table',
    _captcha: 'false',
  }
  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    })
    const json = (await res.json().catch(() => ({}))) as { success?: string | boolean; message?: string }
    const msg = String(json.message ?? '')
    // One-time activation reply: the request reached FormSubmit and an "Activate Form"
    // email went to the inbox. Treat it as received for the visitor.
    if (/activat/i.test(msg)) {
      console.warn('FormSubmit: the inbox must activate the form first:', msg)
      return { ok: true }
    }
    if (!res.ok || String(json.success) === 'false') return { ok: false, error: msg || `Error ${res.status}` }
    return { ok: true }
  } catch (e) {
    return { ok: false, error: (e as Error).message }
  }
}
