import { Eyebrow, Footer, Nav, Platforms, Reveal } from '../components/Chrome'
import { DashboardMock } from '../components/DashboardMock'
import { AISection, Contrast, InlineAccess, MethodRows, Numbers, ProductGrid, ViewShowcase } from '../components/Sections'
import { closing, hero, positioning } from '../content'
import { Gradient, Nexus } from '../three/Lazy'

/** Option B — Request-Access Led: dark, immersive, email capture up front. */
export default function OptionB() {
  return (
    <div className="page page-b theme-dark">
      <Nav dark />

      <header className="hero-b">
        <Nexus className="hero-b-scene" />
        <div className="hero-b-vignette" />
        <div className="container hero-b-copy">
          <Eyebrow>{positioning.b.eyebrow}</Eyebrow>
          <h1 className="h1">
            {positioning.b.titleLead} <span className="accent">{positioning.b.titleAccent}</span>
          </h1>
          <p className="lede">{positioning.b.lede}</p>
          <InlineAccess dark id="access" />
          <p className="note">{hero.trust}</p>
        </div>
      </header>

      <section className="hero-b-mock">
        <div className="container">
          <Reveal>
            <DashboardMock />
          </Reveal>
          <div style={{ marginTop: 56 }}>
            <Platforms />
          </div>
        </div>
      </section>

      <Contrast />
      <AISection alt />
      <MethodRows />
      <ViewShowcase />
      <ProductGrid />
      <Numbers />

      <section className="cta-dark section cta-b">
        <Gradient preset="ember" className="layer" />
        <div className="container cta-b-grid">
          <Reveal className="section-head">
            <h2 className="h2">{closing.title}</h2>
            <p className="lede">{closing.lede}</p>
          </Reveal>
          <InlineAccess dark id="access-end" />
        </div>
      </section>

      <Footer />
    </div>
  )
}
