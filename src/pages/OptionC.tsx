import { Footer, Nav, Platforms, Reveal } from '../components/Chrome'
import { Icon } from '../components/Icons'
import { CountUp, useInView } from '../components/CountUp'
import { AccessCard, HowItWorks, NumbersTable, SectionHead, Security, WhoTabs } from '../components/Sections'
import { closing, hero, pacing } from '../content'
import { Gauge, Gradient } from '../three/Lazy'

/** Option C — Audience & Access-Led: who it's for, why to trust it, a real form. */
export default function OptionC() {
  const [gaugeRef, gaugeLive] = useInView<HTMLDivElement>(0.45)
  return (
    <div className="page page-c">
      <Nav />

      <header className="hero-c">
        <div className="container hero-c-grid">
          <div className="hero-c-copy">
            <span className="kicker">For Shopify brands and the agencies that run them</span>
            <h1 className="h1">
              {hero.titleLead} <span className="accent">{hero.titleAccent}</span>
            </h1>
            <p className="lede">{hero.lede}</p>
            <dl className="stats">
              <div>
                <dt className="mono">
                  <CountUp value={pacing.mer} delay={200} duration={1600} />
                </dt>
                <dd>MER vs {pacing.merTarget} target</dd>
              </div>
              <div>
                <dt className="mono">
                  <CountUp value="2.41%" delay={320} duration={1600} />
                </dt>
                <dd>conversion rate</dd>
              </div>
              <div>
                <dt className="mono">
                  <CountUp value={`Day ${pacing.day}`} delay={440} duration={1600} />
                </dt>
                <dd>of {pacing.days}, ahead of pace</dd>
              </div>
            </dl>
            <span className="note" style={{ fontSize: 12 }}>Demo store. Every number here is illustrative.</span>
          </div>
          <div className="hero-c-visual">
            <Gradient preset="orb" className="hero-c-orb" />
            <AccessCard />
          </div>
        </div>
      </header>

      <section className="section tight" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <Platforms />
        </div>
      </section>

      <WhoTabs />
      <NumbersTable />

      <section className="section" id="pacing">
        <div className="container zig">
          <div className="gauge-wrap" ref={gaugeRef}>
            <Gauge play={gaugeLive} />
            <div className="gauge-read">
              <span className="mono gauge-big">
                <CountUp value={pacing.monthToDate} play={gaugeLive} duration={1900} delay={150} />
              </span>
              <span className="muted" style={{ fontSize: 13 }}>
                of {pacing.monthTarget} target
              </span>
              <span className="up" style={{ fontSize: 13, fontWeight: 600 }}>
                <CountUp value={pacing.ahead} play={gaugeLive} duration={1600} delay={900} />
              </span>
            </div>
          </div>
          <div className="zig-copy">
            <SectionHead kicker={pacing.kicker} title={pacing.title} />
            <p className="lede">
              Set the month in plain terms, including promo days with their own target. Every view compares to target by default.
            </p>
            <div className="legend">
              <span>
                <i style={{ background: 'linear-gradient(90deg,var(--accent-2),var(--accent))' }} /> Sales to date
              </span>
              <span>
                <i style={{ background: 'var(--fg)' }} /> Where you should be by day {pacing.day}
              </span>
            </div>
            <p className="body">{pacing.body}</p>
          </div>
        </div>
      </section>

      <Security />
      <HowItWorks alt />

      <section className="cta-dark section">
        <Gradient preset="ember" className="layer" />
        <div className="container cta-c-row">
          <Reveal className="section-head">
            <h2 className="h2">{closing.title}</h2>
            <p className="lede">{closing.lede}</p>
          </Reveal>
          <div className="cta-row">
            <a className="btn btn-primary btn-lg" href="#access">
              {hero.primary} <Icon name="arrow" className="arrow" width={16} height={16} />
            </a>
            <a className="btn btn-lg btn-on-dark" href="#who">
              {hero.secondary}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
