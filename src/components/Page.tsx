import type { ReactNode } from 'react'
import { Eyebrow, Footer, Nav, Reveal, SmartLink } from './Chrome'
import { Icon } from './Icons'
import { InlineAccess } from './Sections'
import { closing, hero } from '../content'
import { Gradient, Nexus } from '../three/Lazy'

type Hero = { eyebrow: string; titleLead: string; titleAccent: string; lede: string }

/** Shell for the individual pages: nav, content, closing call to action, footer. */
export function PageShell({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`page page-site ${className}`}>
      <Nav />
      {children}
      <PageCTA />
      <Footer />
    </div>
  )
}

/** Centered page hero over the dawn gradient. */
export function PageHero({ hero: h, children }: { hero: Hero; children?: ReactNode }) {
  return (
    <header className="hero-r">
      <Gradient preset="dawn" className="hero-a-gradient fade-bottom" />
      <div className="container hero-r-inner">
        <Eyebrow>{h.eyebrow}</Eyebrow>
        <h1 className="h1">
          {h.titleLead} <span className="accent">{h.titleAccent}</span>
        </h1>
        <p className="lede">{h.lede}</p>
        {children}
      </div>
    </header>
  )
}

/** Split hero: copy left, a product visual right. */
export function PageHeroSplit({ hero: h, visual }: { hero: Hero; visual: ReactNode }) {
  return (
    <header className="hero-a">
      <Gradient preset="dawn" className="hero-a-gradient fade-bottom" />
      <div className="container hero-a-grid">
        <div className="hero-a-copy">
          <Eyebrow>{h.eyebrow}</Eyebrow>
          <h1 className="h1">
            {h.titleLead} <span className="accent">{h.titleAccent}</span>
          </h1>
          <p className="lede">{h.lede}</p>
          <div className="cta-row">
            <a className="btn btn-primary btn-lg" href="#access">
              {hero.primary} <Icon name="arrow" className="arrow" width={16} height={16} />
            </a>
          </div>
        </div>
        <div className="hero-a-visual">{visual}</div>
      </div>
    </header>
  )
}

export function HeroButtons({ secondary }: { secondary?: { label: string; href: string } }) {
  return (
    <div className="cta-row" style={{ justifyContent: 'center' }}>
      <a className="btn btn-primary btn-lg" href="#access">
        {hero.primary} <Icon name="arrow" className="arrow" width={16} height={16} />
      </a>
      {secondary && (
        <SmartLink className="btn btn-lg" href={secondary.href}>
          {secondary.label}
        </SmartLink>
      )}
    </div>
  )
}

/** Dark closing section with the request-access form. */
export function PageCTA() {
  return (
    <section className="cta-dark section page-cta" id="access">
      <Nexus labels={false} className="layer cta-a-scene" />
      <div className="container page-cta-inner">
        <Reveal className="section-head center">
          <h2 className="h2">{closing.title}</h2>
          <p className="lede">{closing.lede}</p>
        </Reveal>
        <InlineAccess dark id="page-access" />
        <span className="note" style={{ color: '#a1a1aa' }}>
          <Icon name="shield" /> {hero.trust}
        </span>
      </div>
    </section>
  )
}
