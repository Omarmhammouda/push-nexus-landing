import { Platforms, Reveal } from '../../components/Chrome'
import { HeroButtons, PageHero, PageShell } from '../../components/Page'
import { HowItWorks, SectionHead, Security } from '../../components/Sections'
import { pages } from '../../content'

export default function HowPage() {
  const p = pages.how
  return (
    <PageShell>
      <PageHero hero={p.hero}>
        <HeroButtons secondary={{ label: 'Read the questions', href: '#faq' }} />
      </PageHero>

      <HowItWorks head={false} />

      <section className="section alt tight-plus">
        <div className="container" style={{ display: 'grid', gap: 40 }}>
          <SectionHead kicker={pages.product.sources.kicker} title={pages.product.sources.title} center />
          <div className="source-list">
            {pages.product.sources.items.map((x, i) => (
              <Reveal key={x.name} delay={i * 60} className="source-row">
                <strong>{x.name}</strong>
                <span>{x.role}</span>
              </Reveal>
            ))}
          </div>
          <Platforms note={false} />
        </div>
      </section>

      <Security />

      <section className="section alt" id="faq">
        <div className="container faq-wrap">
          <SectionHead kicker={p.faq.kicker} title={p.faq.title} />
          <div className="faq">
            {p.faq.items.map((f, i) => (
              <Reveal key={f.q} delay={i * 50}>
                <details className="faq-item">
                  <summary>
                    {f.q}
                    <span className="faq-plus" aria-hidden="true" />
                  </summary>
                  <p>{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
