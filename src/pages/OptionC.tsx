import { Footer, Nav, Platforms, Reveal } from '../components/Chrome'
import { Icon } from '../components/Icons'
import { CountUp, useInView } from '../components/CountUp'
import { AccessCard, HowItWorks, NumbersTable, SectionHead, Security, WhoTabs } from '../components/Sections'
import { closing, hero, pacing } from '../content'
import { Gradient } from '../three/Lazy'

/** Option C — Audience & Access-Led: who it's for, why to trust it, a real form. */
export default function OptionC() {
  const [paceRef, paceLive] = useInView<HTMLDivElement>(0.4)
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
          <div className="zig-copy">
            <SectionHead kicker={pacing.kicker} title={pacing.title} />
            <p className="lede">
              Set the month in plain terms, including promo days with their own target. Every view compares to target by default.
            </p>
            <p className="body">{pacing.body}</p>
          </div>

          <div className={`pace-card ${paceLive ? 'is-live' : ''}`} ref={paceRef}>
            <div className="pace-card-head">
              <span className="kicker" style={{ color: 'var(--muted-fg)' }}>October pacing</span>
              <span className="pace-pill">
                <CountUp value={pacing.ahead} play={paceLive} duration={1600} delay={900} />
              </span>
            </div>
            <div className="pace-card-total">
              <span className="mono pace-card-big">
                <CountUp value={pacing.monthToDate} play={paceLive} duration={1700} delay={150} />
              </span>
              <span className="muted">of {pacing.monthTarget} target</span>
            </div>
            <div className="pace-track" aria-hidden="true">
              <i className="pace-fill" style={{ width: '50.3%' }} />
              <b className="pace-mark" style={{ left: '45.2%' }}>
                <span>Day {pacing.day} target</span>
              </b>
            </div>
            <dl className="pace-stats">
              <div>
                <dt>Day</dt>
                <dd className="mono">
                  <CountUp value={`${pacing.day} of ${pacing.days}`} play={paceLive} delay={300} />
                </dd>
              </div>
              <div>
                <dt>MER</dt>
                <dd className="mono">
                  <CountUp value={pacing.mer} play={paceLive} delay={400} />
                </dd>
              </div>
              <div>
                <dt>Target</dt>
                <dd className="mono">
                  <CountUp value={pacing.merTarget} play={paceLive} delay={500} />
                </dd>
              </div>
            </dl>
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
