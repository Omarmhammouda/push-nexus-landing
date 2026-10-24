# Push Nexus — landing pages

Three landing page directions for Push Nexus, built with React + Vite. They share one brand system lifted from Push Nexus's own site: colors, Inter + JetBrains Mono, the hub-and-nodes logo, copy and product screenshots.

| Route | Direction | Highlights |
| --- | --- | --- |
| `#/a` | **Dashboard-First** | Live dashboard in a liquid-glass bezel over a warm ShaderGradient. 3D network behind the closing CTA. |
| `#/b` | **Request-Access Led** (dark) | The Push Nexus mark rebuilt in 3D: platforms orbit the hub and data pulses flow into it. Glass email capture, product grid, ember gradient CTA. |
| `#/c` | **Audience & Access-Led** | Glass access form floating over a ShaderGradient orb, brands/agencies tabs, metric definitions, animated pacing card. |
| `#/` | Index | Picks between the three. |

## Staging

Live review copy: https://hubcitystudio.com (also https://pushnexus-preview.pages.dev), marked noindex.

Hosted on Cloudflare Pages (project `pushnexus-preview`), which auto-deploys the `deploy` branch of this repo. To publish changes:

```bash
npm run build
# copy dist/ onto the deploy branch and push it; Cloudflare redeploys in about a minute
```

`wrangler.jsonc` + `worker/` are an alternative Workers setup if you ever want `npx wrangler deploy` instead.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static site in dist/
npm run preview  # serve dist/
```

Requires Node 20+. `dist/` is fully static with relative paths and hash routing, so it deploys to Vercel, Netlify, Cloudflare Pages, GitHub Pages or any static host as-is.

## The three libraries

- **[@react-three/fiber](https://github.com/pmndrs/react-three-fiber)** (+ drei): `src/three/NexusScene.tsx`, the logo mark as a live network.
- **[@shadergradient/react](https://github.com/ruucm/shadergradient)**: `src/three/GradientField.tsx`, with three brand presets: `dawn`, `ember` and `orb`.
- **[@liquidglassjs/react](https://github.com/Amir-Abushanab/liquid-glass-js)** ("liquidglass.js"): the floating nav, the dashboard bezel and stat card, the access forms (`src/components/Glass.tsx`), and the hover loupe over product screenshots (`ViewShowcase` in `src/components/Sections.tsx`).

All WebGL is lazy-loaded (`src/three/Lazy.tsx`). It mounts only when a section nears the viewport, falls back to a CSS gradient if WebGL is unavailable, and respects `prefers-reduced-motion`.

Liquid glass refraction is strongest in Chrome and Edge. Safari and Firefox get a clean frosted blur on the nav and forms, which is how the library is designed to degrade. See its README.

## Where things live

```
src/
  content.ts              all copy (edit text here)
  styles/tokens.css       brand tokens from pushnexus.ai (light + .theme-dark)
  styles/*.css            base, sections, page layouts
  components/
    Logo.tsx              the mark (plain + dark tile)
    Glass.tsx             liquid-glass wrapper
    Chrome.tsx            nav, footer, chips, reveal-on-scroll
    DashboardMock.tsx     HTML/CSS product mock (full + compact)
    Sections.tsx          method, numbers, views, product, how, who, security, forms
  three/                  R3F scenes, ShaderGradient, lazy gates
  pages/OptionA|B|C.tsx   the three landing pages
public/
  logo.svg                favicon (from their site)
  views/*.jpg             product screenshots (from their site)
```

## Before launch

- **Forms**: `InlineAccess` and `AccessCard` in `Sections.tsx` only show a success state right now. Point `submit` at your endpoint (Formspree, a Next/Vercel function, HubSpot, etc.).
- **Sign in / Privacy / Terms** links are placeholders (`#signin`, `#privacy`, `#terms`).
- Dashboard numbers are the demo-store figures from their site and are labeled as illustrative.
