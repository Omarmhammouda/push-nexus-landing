import { Reveal } from '../../components/Chrome'
import { HeroButtons, PageHero, PageShell } from '../../components/Page'
import { Contrast } from '../../components/Sections'
import { pages, views, who } from '../../content'

export default function WhoPage() {
  const p = pages.who
  return (
    <PageShell>
      <PageHero hero={p.hero}>
        <div className="who-jump">
          {who.audiences.map((a) => (
            <a key={a.key} className="btn btn-lg" href={`#who-${a.key}`}>
              {a.title}
            </a>
          ))}
        </div>
      </PageHero>

      {who.audiences.map((a, i) => {
        const m = p.morning.find((x) => x.audience === a.key)
        const v = views.find((x) => x.key === a.view)
        return (
          <section key={a.key} className={`section ${i % 2 ? '' : 'alt'}`} id={`who-${a.key}`}>
            <div className={`container zig ${i % 2 ? 'zig-flip' : ''}`}>
              <Reveal className="zig-copy">
                <span className="kicker">{a.title}</span>
                <h2 className="h2">{a.lead}</h2>
                <ul className="ticks">
                  {a.points.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                {m && (
                  <div className="morning-card">
                    <span className="contrast-label accent">{m.kicker}</span>
                    <strong>{m.title}</strong>
                    <p>{m.body}</p>
                  </div>
                )}
              </Reveal>
              <Reveal delay={120} className="shot">
                <img src={`/views/${a.view}.jpg`} alt={v?.alt ?? ''} loading="lazy" width={1400} height={851} />
              </Reveal>
            </div>
          </section>
        )
      })}

      <Contrast />
      <section className="section tight" style={{ textAlign: 'center' }}>
        <div className="container" style={{ display: 'grid', gap: 18, justifyItems: 'center' }}>
          <p className="lede">See what that looks like for real stores.</p>
          <HeroButtons secondary={{ label: 'View results', href: '/results' }} />
        </div>
      </section>
    </PageShell>
  )
}
