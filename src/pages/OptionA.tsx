import { Eyebrow, Footer, Nav, Platforms, Reveal, TrustNote } from '../components/Chrome'
import { DashboardMock } from '../components/DashboardMock'
import { Glass } from '../components/Glass'
import { CountUp } from '../components/CountUp'
import { Icon } from '../components/Icons'
import { AISection, Contrast, HowItWorks, InlineAccess, MethodCards, Numbers, ViewShowcase, WhoCards } from '../components/Sections'
import { closing, hero, positioning } from '../content'
import { Gradient, Nexus } from '../three/Lazy'

/** Option A — Dashboard-First: the product is the hero. */
export default function OptionA() {
  return (
    <div className="page page-a">
      <Nav />

      <header className="hero-a">
        <Gradient preset="dawn" className="hero-a-gradient fade-bottom" />
        <div className="container hero-a-grid">
          <div className="hero-a-copy">
            <Eyebrow>{positioning.a.eyebrow}</Eyebrow>
            <h1 className="h1">
              {positioning.a.titleLead} <span className="accent">{positioning.a.titleAccent}</span>
            </h1>
            <p className="lede">{positioning.a.lede}</p>
            <div className="cta-row">
              <a className="btn btn-primary btn-lg" href="#access">
                {hero.primary} <Icon name="arrow" className="arrow" width={16} height={16} />
              </a>
              <a className="btn btn-lg" href="#method">
                {hero.secondary}
              </a>
            </div>
            <TrustNote>{hero.trust}</TrustNote>
          </div>

          <div className="hero-a-visual">
            <Glass className="bezel" radius={22} strength={24} chroma={0.4} tint={30} blur={8} depth={18}>
              <div className="bezel-pad">
                <DashboardMock variant="compact" />
              </div>
            </Glass>
            <Glass className="float-stat" radius={16} strength={18} chroma={0.3} tint={58} blur={6} depth={12}>
              <div className="float-stat-inner">
                <span className="kicker" style={{ color: 'var(--muted-fg)' }}>MER vs target</span>
                <span className="mono float-big">
                  <CountUp value="4.82x" delay={500} duration={1600} /> <span className="muted" style={{ fontSize: 14 }}>/ 4.50x</span>
                </span>
                <span className="up" style={{ fontSize: 13, fontWeight: 500 }}>Budget you can spend today</span>
              </div>
            </Glass>
          </div>
        </div>
      </header>

      <section className="section tight">
        <div className="container">
          <Platforms />
        </div>
      </section>

      <Contrast />
      <AISection alt />
      <MethodCards />
      <Numbers />
      <ViewShowcase />
      <HowItWorks alt />
      <WhoCards />

      <section className="cta-dark section" id="access">
        <Nexus labels={false} className="layer cta-a-scene" />
        <div className="container" style={{ display: 'grid', gap: 20, justifyItems: 'center', textAlign: 'center', position: 'relative' }}>
          <Reveal className="section-head center">
            <h2 className="h2">{closing.title}</h2>
            <p className="lede">{closing.lede}</p>
          </Reveal>
          <div style={{ width: 'min(520px, 100%)' }}>
            <InlineAccess dark id="a-access" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
