import { useEffect, useState } from 'react'
import { Reveal } from '../components/Chrome'
import { CountUp, useInView } from '../components/CountUp'
import { Icon } from '../components/Icons'
import { PageHero, PageShell } from '../components/Page'
import { SectionHead } from '../components/Sections'
import { results, type CaseStudy } from '../content'

const SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'start', label: 'Starting point' },
  { id: 'work', label: 'What we did' },
  { id: 'results', label: 'Results' },
  { id: 'takeaways', label: 'Takeaways' },
] as const

const sid = (slug: string, part: string) => `${slug}-${part}`

/** Tracks which case study section is on screen: the last one whose top has passed the nav. */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 140) current = id
      }
      setActive(current)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    addEventListener('scroll', onScroll, { passive: true })
    addEventListener('resize', onScroll)
    return () => {
      removeEventListener('scroll', onScroll)
      removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [ids.join('|')])
  return active
}

function GrowthChart({ g }: { g: CaseStudy['growth'] }) {
  const [ref, seen] = useInView<HTMLDivElement>(0.3)
  const max = Math.max(...g.bars.map((b) => b.value))
  return (
    <div ref={ref} className={`cs-chart ${seen ? 'is-live' : ''}`} role="img" aria-label={`${g.label}: ${g.bars.map((b) => `${b.label} +${b.value}%`).join(', ')}`}>
      <div className="cs-chart-head">
        <span className="kicker" style={{ color: 'var(--muted-fg)' }}>{g.label}</span>
      </div>
      <div className="cs-bars" style={{ gridTemplateColumns: `repeat(${g.bars.length}, minmax(0, 1fr))` }}>
        {g.bars.map((b, i) => (
          <div key={b.label} className={`cs-bar ${b.current ? 'current' : ''}`}>
            <span className="cs-fill" style={{ height: `${Math.max(4, (b.value / max) * 100)}%`, transitionDelay: `${i * 80}ms` }}>
              <b className="mono">+{b.value}%</b>
            </span>
            <span className="cs-bar-label">{b.label}</span>
          </div>
        ))}
      </div>
      <p className="cs-chart-note">{g.note}</p>
    </div>
  )
}

function Study({ cs, index }: { cs: CaseStudy; index: number }) {
  return (
    <article className="cs" id={cs.slug} aria-labelledby={sid(cs.slug, 'title')}>
      <header className="cs-head" id={sid(cs.slug, 'overview')}>
        <div className="cs-brand">
          <span className="r-mark">{cs.brand[0]}</span>
          <div>
            <strong>{cs.brand}</strong>
            <span>{cs.category}</span>
          </div>
          <span className="cs-count mono">Case study {String(index + 1).padStart(2, '0')}</span>
        </div>
        <h2 className="h2" id={sid(cs.slug, 'title')}>{cs.headline}</h2>
        <p className="lede">{cs.summary}</p>
        <div className="cs-channels">
          {cs.channels.map((c) => (
            <span key={c} className="chip">{c}</span>
          ))}
        </div>
        <dl className="cs-kpis">
          {cs.kpis.map((k, i) => (
            <div key={k.label}>
              <dt className="mono">
                <CountUp value={k.value} delay={150 + i * 120} duration={1500} />
              </dt>
              <dd>{k.label}</dd>
            </div>
          ))}
        </dl>
      </header>

      <section className="cs-block" id={sid(cs.slug, 'start')}>
        <span className="cs-step mono">Starting point</span>
        <div className="cs-start">
          <Reveal>
            <h3 className="h3">{cs.start.title}</h3>
            <p className="body">{cs.start.body}</p>
          </Reveal>
          <Reveal delay={100} className="contrast-col contrast-before">
            <span className="contrast-label">Before</span>
            <ul>
              {cs.start.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="cs-block" id={sid(cs.slug, 'work')}>
        <span className="cs-step mono">What we did</span>
        <ol className="cs-timeline">
          {cs.phases.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 60}>
              <span className="cs-dot mono">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="cs-block" id={sid(cs.slug, 'results')}>
        <span className="cs-step mono">Results</span>
        <div className="cs-highlights">
          {cs.highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 70} className="cs-hl">
              <span className="cs-hl-value mono">
                <CountUp value={h.value} delay={120} duration={1500} />
              </span>
              <strong>{h.title}</strong>
              <p>{h.body}</p>
            </Reveal>
          ))}
        </div>
        <GrowthChart g={cs.growth} />
      </section>

      <section className="cs-block" id={sid(cs.slug, 'takeaways')}>
        <span className="cs-step mono">Takeaways</span>
        <h3 className="h3 cs-take-title">What other brands can take from this</h3>
        <div className="cs-takeaways">
          {cs.takeaways.map((t, i) => (
            <Reveal key={t.title} delay={i * 60} className="cs-take">
              <span className="mono accent">{String(i + 1).padStart(2, '0')}</span>
              <strong>{t.title}</strong>
              <p>{t.body}</p>
            </Reveal>
          ))}
        </div>
        <details className="faq-item cs-measured">
          <summary>
            How we measured this
            <span className="faq-plus" aria-hidden="true" />
          </summary>
          <ul>
            {cs.measured.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </details>
      </section>
    </article>
  )
}

/** Results: client case studies with a sticky side index. */
export default function Results() {
  const studies = results.caseStudies
  const ids = studies.flatMap((cs) => SECTIONS.map((s) => sid(cs.slug, s.id)))
  const active = useActiveSection(ids)
  const activeStudy = studies.find((cs) => active.startsWith(cs.slug + '-'))?.slug ?? studies[0]?.slug

  return (
    <PageShell className="page-results">
      <PageHero hero={results.hero}>
        <p className="sample-note">
          <Icon name="shield" width={14} height={14} /> {results.hero.note}
        </p>
      </PageHero>

      <section className="section cs-section">
        <div className="container cs-layout">
          <aside className="cs-index" aria-label="Case studies">
            <span className="kicker">Case studies</span>
            <ol>
              {studies.map((cs) => {
                const open = cs.slug === activeStudy
                return (
                  <li key={cs.slug} className={open ? 'open' : ''}>
                    <a href={`#${sid(cs.slug, 'overview')}`} className="cs-index-study" aria-current={open ? 'true' : undefined}>
                      <span className="r-mark sm">{cs.brand[0]}</span>
                      <span>
                        <strong>{cs.brand}</strong>
                        <small>{cs.category.split(' · ')[0]}</small>
                      </span>
                    </a>
                    <ul>
                      {SECTIONS.map((s) => {
                        const id = sid(cs.slug, s.id)
                        return (
                          <li key={id}>
                            <a href={`#${id}`} aria-current={active === id ? 'location' : undefined}>
                              {s.label}
                            </a>
                          </li>
                        )
                      })}
                    </ul>
                  </li>
                )
              })}
            </ol>
          </aside>

          <div className="cs-main">
            {studies.map((cs, i) => (
              <Study key={cs.slug} cs={cs} index={i} />
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
    </PageShell>
  )
}
