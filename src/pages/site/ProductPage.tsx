import { Platforms, Reveal } from '../../components/Chrome'
import { DashboardMock } from '../../components/DashboardMock'
import { Glass } from '../../components/Glass'
import { Icon } from '../../components/Icons'
import { PageHeroSplit, PageShell } from '../../components/Page'
import { Numbers, ProductGrid, SectionHead, ViewShowcase } from '../../components/Sections'
import { pages } from '../../content'

export default function ProductPage() {
  const p = pages.product
  return (
    <PageShell>
      <PageHeroSplit
        hero={p.hero}
        visual={
          <Glass className="bezel" radius={22} strength={24} chroma={0.4} tint={30} blur={8} depth={18}>
            <div className="bezel-pad">
              <DashboardMock variant="compact" />
            </div>
          </Glass>
        }
      />

      <section className="section tight">
        <div className="container">
          <Platforms />
        </div>
      </section>

      <ViewShowcase />

      <section className="section alt">
        <div className="container zig">
          <div className="zig-copy">
            <SectionHead kicker={p.filter.kicker} title={p.filter.title} lede={p.filter.lede} />
            <ul className="ticks">
              {p.filter.points.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          <Reveal className="filter-demo" delay={120}>
            <div className="fd-bar">
              <span className="fd-pill mono">
                <Icon name="compare" width={14} height={14} /> Oct 1 to Oct 14, 2026
              </span>
              <span className="fd-vs">vs</span>
              <span className="fd-pill mono muted">Same dates, 2025</span>
            </div>
            <div className="fd-seg" role="presentation">
              {['Day', 'Week', 'Month', 'Year'].map((x, i) => (
                <span key={x} className={i === 1 ? 'on' : ''}>
                  {x}
                </span>
              ))}
            </div>
            <div className="fd-rows">
              {[
                ['Dashboard', '4.82x', '+0.51'],
                ['Ads', '212 purchases', '+38'],
                ['Countries', '14 markets', '+2'],
                ['Daily snapshot', 'Oct 14', 'ready'],
              ].map(([v, a, b]) => (
                <div key={v} className="fd-row">
                  <span>{v}</span>
                  <span className="mono">{a}</span>
                  <span className="mono up">{b}</span>
                </div>
              ))}
            </div>
            <span className="fd-note">Demo store. Every number here is illustrative.</span>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: 'grid', gap: 48 }}>
          <SectionHead kicker={p.sources.kicker} title={p.sources.title} center />
          <div className="source-list">
            {p.sources.items.map((x, i) => (
              <Reveal key={x.name} delay={i * 60} className="source-row">
                <strong>{x.name}</strong>
                <span>{x.role}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="alt-wrap">
        <ProductGrid />
      </div>
      <Numbers alt={false} />
    </PageShell>
  )
}
