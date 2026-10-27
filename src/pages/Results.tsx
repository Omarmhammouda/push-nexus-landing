import { Eyebrow, Footer, Nav, Platforms, Reveal } from '../components/Chrome'
import { CountUp, useInView } from '../components/CountUp'
import { Icon } from '../components/Icons'
import { SectionHead } from '../components/Sections'
import { hero, results } from '../content'
import { Gradient, Nexus } from '../three/Lazy'

const links = [
  { label: 'Featured', href: '#featured' },
  { label: 'More results', href: '#stories' },
  { label: 'How we measure', href: '#measure' },
  { label: 'The product', href: '#/a' },
]

function SampleTag({ label = 'Sample story' }: { label?: string }) {
  return <span className="sample-tag">{label}</span>
}

function MerChart() {
  const c = results.featured.chart
  const [ref, seen] = useInView<HTMLDivElement>(0.3)
  const max = 5
  return (
    <div ref={ref} className={`r-chart ${seen ? 'is-live' : ''}`} role="img" aria-label={`${c.label}: ${c.values.map((v, i) => `${c.months[i]} ${v}x`).join(', ')}`}>
      <div className="r-chart-head">
        <span className="kicker" style={{ color: 'var(--muted-fg)' }}>{c.label}</span>
        <span className="r-legend">
          <i /> Push Nexus live
        </span>
      </div>
      <div className="r-bars">
        <span className="r-target" style={{ bottom: `${(c.target / max) * 100}%` }}>
          <em>Target {c.target.toFixed(2)}x</em>
        </span>
        {c.values.map((v, i) => (
          <div key={c.months[i]} className={`r-bar ${i >= c.startIndex ? 'on' : ''}`}>
            <span className="r-fill" style={{ height: `${(v / max) * 100}%`, transitionDelay: `${i * 90}ms` }}>
              <b className="mono">{v.toFixed(1)}x</b>
            </span>
            <span className="r-month">{c.months[i]}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/** Results: proof page, shares the system of directions A–C. */
export default function Results() {
  const f = results.featured
  return (
    <div className="page page-results">
      <Nav links={links} />

      <header className="hero-r">
        <Gradient preset="dawn" className="hero-a-gradient fade-bottom" />
        <div className="container hero-r-inner">
          <Eyebrow>{results.hero.eyebrow}</Eyebrow>
          <h1 className="h1">
            {results.hero.titleLead} <span className="accent">{results.hero.titleAccent}</span>
          </h1>
          <p className="lede">{results.hero.lede}</p>
          <dl className="r-stats">
            {results.hero.stats.map((s, i) => (
              <div key={s.label}>
                <dt className="mono">
                  <CountUp value={s.value} delay={200 + i * 120} duration={1600} />
                </dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
          <p className="sample-note">
            <Icon name="shield" width={14} height={14} /> {results.sampleNote}
          </p>
        </div>
      </header>

      <section className="section alt" id="featured">
        <div className="container r-featured">
          <Reveal className="r-feat-copy">
            <div className="r-brand-row">
              <span className="r-mark">{f.brand[0]}</span>
              <div>
                <strong>{f.brand}</strong>
                <span>{f.category}</span>
              </div>
              <SampleTag />
            </div>
            <h2 className="h2">{f.headline}</h2>
            <div className="r-ba">
              <div>
                <span className="contrast-label" style={{ color: 'var(--muted-fg)' }}>Before</span>
                <p>{f.before}</p>
              </div>
              <div>
                <span className="contrast-label accent">With Push Nexus</span>
                <p>{f.change}</p>
              </div>
            </div>
            <div className="r-plats">
              {f.platforms.map((p) => (
                <span key={p} className="chip">{p}</span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="r-feat-proof">
            <div className="r-metrics">
              {f.metrics.map((m, i) => (
                <div key={m.label} className="r-metric">
                  <span className="r-metric-label">{m.label}</span>
                  <span className="r-metric-row mono">
                    <span className="r-from">{m.from}</span>
                    <Icon name="arrow" width={14} height={14} />
                    <span className="r-to">
                      <CountUp value={m.to} delay={250 + i * 140} duration={1500} />
                    </span>
                  </span>
                </div>
              ))}
            </div>
            <MerChart />
          </Reveal>

          <ol className="r-timeline">
            {f.timeline.map((t, i) => (
              <Reveal as="li" key={t.when} delay={i * 90}>
                <span className="r-when mono">{t.when}</span>
                <p>{t.what}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" id="stories">
        <div className="container" style={{ display: 'grid', gap: 48 }}>
          <div className="r-stories-head">
            <SectionHead kicker="More results" title="Different stores. The same morning habit." center />
            <SampleTag label="Sample stories" />
          </div>
          <div className="grid-3 r-grid">
            {results.stories.map((s, i) => (
              <Reveal key={s.brand} delay={i * 90} className="card r-card">
                <div className="r-card-top">
                  <span className="r-mark sm">{s.brand[0]}</span>
                  <div>
                    <strong>{s.brand}</strong>
                    <span>{s.category}</span>
                  </div>
                </div>
                <div className="r-card-stat">
                  <span className="mono">
                    <CountUp value={s.stat} delay={200} duration={1500} />
                  </span>
                  <small>{s.statLabel}</small>
                </div>
                <h3>{s.title}</h3>
                <p className="body">{s.body}</p>
                <span className="r-card-plats">{s.platforms.join(' · ')}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt" id="measure">
        <div className="container r-measure">
          <SectionHead kicker={results.measure.kicker} title={results.measure.title} lede={results.measure.lede} />
          <div className="r-formulas">
            {results.measure.items.map((m, i) => (
              <Reveal key={m.name} delay={i * 90} className="r-formula">
                <strong>{m.name}</strong>
                <span className="mono">{m.formula}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <Platforms />
        </div>
      </section>

      <section className="cta-dark section" id="access">
        <Nexus labels={false} className="layer cta-a-scene" />
        <div className="container" style={{ display: 'grid', gap: 20, justifyItems: 'center', textAlign: 'center', position: 'relative' }}>
          <Reveal className="section-head center">
            <h2 className="h2">{results.closing.title}</h2>
            <p className="lede">{results.closing.lede}</p>
          </Reveal>
          <a className="btn btn-primary btn-lg" href="mailto:hello@pushnexus.ai?subject=Request%20access">
            {hero.primary} <Icon name="arrow" className="arrow" width={16} height={16} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
