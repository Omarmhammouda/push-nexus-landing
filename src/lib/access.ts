/** Sends a request-access submission to the site's Worker, which emails it to the Push Nexus team. */
export type AccessRequest = {
  email: string
  name?: string
  store?: string
  platforms?: string[]
  /** Hidden honeypot. Real people leave it empty. */
  company_website?: string
}

export const FALLBACK_EMAIL = 'hamdy@pushanalytics.com'

export async function sendAccessRequest(req: AccessRequest): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch('/api/access', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...req, page: location.pathname }),
    })
    const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string }
    return res.ok && data.ok ? { ok: true } : { ok: false, error: data.error ?? `Error ${res.status}` }
  } catch (e) {
    return { ok: false, error: (e as Error).message }
  }
}
