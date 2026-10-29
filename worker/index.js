// Serves the built site and keeps the staging copy out of search engines.
export default {
  async fetch(request, env) {
    const url = new URL(request.url)
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
