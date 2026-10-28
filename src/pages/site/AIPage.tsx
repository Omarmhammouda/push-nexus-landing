import { Reveal } from '../../components/Chrome'
import { Icon, type IconName } from '../../components/Icons'
import { HeroButtons, PageHero, PageShell } from '../../components/Page'
import { AISection, SectionHead } from '../../components/Sections'
import { pages } from '../../content'

const guardIcons: IconName[] = ['shield', 'key', 'compare']

export default function AIPage() {
  const p = pages.ai
  return (
    <PageShell>
      <PageHero hero={p.hero}>
        <HeroButtons secondary={{ label: 'See how it works', href: '#flow' }} />
      </PageHero>

      <AISection head={false} />

      <section className="section alt" id="flow">
        <div className="container" style={{ display: 'grid', gap: 56 }}>
          <SectionHead kicker={p.flow.kicker} title={p.flow.title} center />
          <ol className="flow">
            {p.flow.steps.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 90} className="flow-step">
                <span className="flow-n mono">{s.n}</span>
                <h3 className="h3">{s.title}</h3>
                <p className="body">{s.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: 'grid', gap: 48 }}>
          <SectionHead kicker={p.guardrails.kicker} title={p.guardrails.title} center />
          <div className="grid-3">
            {p.guardrails.items.map((g, i) => (
              <Reveal key={g.title} delay={i * 90} className="card">
                <span className="icon-tile">
                  <Icon name={guardIcons[i] ?? 'shield'} />
                </span>
                <h3 className="h3">{g.title}</h3>
                <p className="body">{g.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
