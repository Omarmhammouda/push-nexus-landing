import { Reveal } from '../../components/Chrome'
import { HeroButtons, PageHero, PageShell } from '../../components/Page'
import { Contrast } from '../../components/Sections'
import { method, pages, views } from '../../content'

export default function MethodPage() {
  const p = pages.method
  return (
    <PageShell>
      <PageHero hero={p.hero}>
        <HeroButtons />
      </PageHero>

      {method.habits.map((h, i) => {
        const extra = p.habits[i]
        const v = views.find((x) => x.key === h.view)
        return (
          <section key={h.title} className={`section ${i % 2 ? 'alt' : ''}`} id={`habit-${i + 1}`}>
            <div className={`container zig ${i % 2 ? 'zig-flip' : ''}`}>
              <Reveal className="zig-copy">
                <span className="kicker">{extra?.kicker ?? `Habit 0${i + 1}`}</span>
                <h2 className="h2">{h.title}</h2>
                <p className="lede" style={{ fontSize: 17 }}>
                  {h.body}
                </p>
                {extra && (
                  <div className="in-practice">
                    <span className="contrast-label">In practice</span>
                    <ul className="ticks">
                      {extra.inPractice.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </Reveal>
              <Reveal delay={120} className="shot">
                <img src={`./views/${h.view}.jpg`} alt={v?.alt ?? ''} loading="lazy" width={1400} height={851} />
              </Reveal>
            </div>
          </section>
        )
      })}

      <Contrast />
    </PageShell>
  )
}
