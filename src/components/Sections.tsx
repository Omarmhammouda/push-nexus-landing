import { GlassLoupe } from '@liquidglassjs/react'
import { useState, type FormEvent } from 'react'
import { Glass } from './Glass'
import { Icon, type IconName } from './Icons'
import { Reveal, TrustNote } from './Chrome'
import { closing, hero, how, method, numbers, platforms, product, security, views, viewsHead, who, type ViewKey } from '../content'

const shot = (k: ViewKey) => `./views/${k}.jpg`

export function SectionHead({ kicker, title, lede, center = false }: { kicker: string; title: string; lede?: string; center?: boolean }) {
  return (
    <Reveal className={`section-head ${center ? 'center' : ''}`}>
      <span className="kicker">{kicker}</span>
      <h2 className="h2">{title}</h2>
      {lede && <p className="lede">{lede}</p>}
    </Reveal>
  )
}

/* ---------------- The method ---------------- */
const habitIcons: IconName[] = ['rank', 'target', 'sun']
export function MethodCards() {
  return (
    <section className="section" id="method">
      <div className="container" style={{ display: 'grid', gap: 56 }}>
        <SectionHead kicker={method.kicker} title={method.title} lede={method.lede} center />
        <div className="grid-3">
          {method.habits.map((h, i) => (
            <Reveal key={h.title} delay={i * 90} className="card">
              <span className="num">0{i + 1}</span>
              <span className="icon-tile">
                <Icon name={habitIcons[i]} />
              </span>
              <h3 className="h3">{h.title}</h3>
              <p className="body">{h.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/** Alternating rows: each habit paired with the screen that shows it. */
export function MethodRows() {
  return (
    <section className="section" id="method">
      <div className="container" style={{ display: 'grid', gap: 96 }}>
        <SectionHead kicker={method.kicker} title={method.title} lede={method.lede} center />
        {method.habits.map((h, i) => (
          <div key={h.title} className={`zig ${i % 2 ? 'zig--flip' : ''}`}>
            <Reveal className="zig-copy">
              <span className="kicker">Habit 0{i + 1}</span>
              <h3 className="h2" style={{ fontSize: 'clamp(26px,2.8vw,34px)' }}>
                {h.title}
              </h3>
              <p className="lede">{h.body}</p>
            </Reveal>
            <Reveal delay={120} className="shot">
              <img src={shot(h.view)} alt={views.find((v) => v.key === h.view)!.alt} loading="lazy" width={1400} height={851} />
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ---------------- Key views (with liquid-glass loupe) ---------------- */
export function ViewShowcase() {
  const [active, setActive] = useState<ViewKey>('dashboard')
  const v = views.find((x) => x.key === active)!
  return (
    <section className="section" id="views">
      <div className="container" style={{ display: 'grid', gap: 36, justifyItems: 'center' }}>
        <SectionHead kicker={viewsHead.kicker} title={viewsHead.title} lede={viewsHead.lede} center />
        <div className="tabs" role="tablist" aria-label="Product views">
          {views.map((x) => (
            <button key={x.key} role="tab" className="tab" aria-selected={x.key === active} onClick={() => setActive(x.key)}>
              {x.tab}
            </button>
          ))}
        </div>
        <div style={{ width: '100%', display: 'grid', gap: 12 }}>
          <div className="shot loupe-frame">
            {/* keyed wrapper: the loupe adds DOM next to its source, so React swaps the whole box */}
            <div key={active}>
              <GlassLoupe trigger="hover" zoom={1.9} width={260} height={130} radius={65} strength={14} chroma={0.35}>
                <img src={shot(active)} alt={v.alt} width={1400} height={851} />
              </GlassLoupe>
            </div>
          </div>
          <span className="hint">
            <Icon name="target" /> Hover the screen to inspect the numbers
          </span>
        </div>
        <p className="shot-caption">
          <strong>{v.title}</strong> {v.text}
        </p>
      </div>
    </section>
  )
}

/* ---------------- Numbers ---------------- */
export function Numbers({ alt = true }: { alt?: boolean }) {
  return (
    <section className={`section ${alt ? 'alt' : ''}`}>
      <div className="container" style={{ display: 'grid', gap: 56 }}>
        <SectionHead kicker={numbers.kicker} title={numbers.title} lede={numbers.lede} />
        <div className="grid-3" style={{ gap: 40 }}>
          {numbers.metrics.map((m, i) => (
            <Reveal key={m.name} delay={i * 90} className="metric">
              <span className="kicker" style={{ color: 'var(--muted-fg)' }}>
                {m.name}
              </span>
              <span className="big">{m.value}</span>
              <span className="formula">{m.formula}</span>
              <p className="body">{m.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/** Same three numbers as a definition table. */
export function NumbersTable() {
  return (
    <section className="section alt">
      <div className="container" style={{ display: 'grid', gap: 48 }}>
        <SectionHead kicker={numbers.kicker} title={numbers.title} lede={numbers.lede} center />
        <Reveal className="def-table" as="div">
          <div className="def-row def-head">
            <span>Metric</span>
            <span>Formula</span>
            <span>What it tells you</span>
          </div>
          {numbers.metrics.map((m) => (
            <div className="def-row" key={m.name}>
              <span className="def-name">
                {m.name}
                <span className="mono accent">{m.value}</span>
              </span>
              <span className="mono">{m.formula}</span>
              <span className="body">{m.body}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

/* ---------------- Product features ---------------- */
export function ProductGrid() {
  return (
    <section className="section" id="product">
      <div className="container" style={{ display: 'grid', gap: 56 }}>
        <SectionHead kicker={product.kicker} title={product.title} lede={product.lede} center />
        <div className="grid-4">
          {product.features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 70} className="card" >
              <span className="icon-tile">
                <Icon name={f.icon} />
              </span>
              <h3 className="h3" style={{ fontSize: 16 }}>
                {f.title}
              </h3>
              <p className="body" style={{ fontSize: 14 }}>
                {f.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- How it works ---------------- */
export function HowItWorks({ alt = false }: { alt?: boolean }) {
  return (
    <section className={`section ${alt ? 'alt' : ''}`} id="how">
      <div className="container" style={{ display: 'grid', gap: 56 }}>
        <SectionHead kicker={how.kicker} title={how.title} center />
        <div className="steps">
          {how.steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100} className="step">
              <span className="index">{s.n}</span>
              <h3 className="h3">{s.title}</h3>
              <p className="body">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- Who it's for ---------------- */
export function WhoCards({ alt = false }: { alt?: boolean }) {
  return (
    <section className={`section ${alt ? 'alt' : ''}`} id="who">
      <div className="container" style={{ display: 'grid', gap: 56 }}>
        <SectionHead kicker={who.kicker} title={who.title} center />
        <div className="grid-2">
          {who.audiences.map((a, i) => (
            <Reveal key={a.key} delay={i * 100} className="card" >
              <h3 className="h3" style={{ fontSize: 22 }}>
                {a.title}
              </h3>
              <p className="body" style={{ fontSize: 16 }}>
                {a.lead}
              </p>
              <ul className="ticks">
                {a.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WhoTabs() {
  const [k, setK] = useState(who.audiences[0].key)
  const a = who.audiences.find((x) => x.key === k)!
  return (
    <section className="section" id="who">
      <div className="container" style={{ display: 'grid', gap: 48 }}>
        <div style={{ display: 'grid', gap: 24, justifyItems: 'center' }}>
          <SectionHead kicker={who.kicker} title={who.title} center />
          <div className="tabs" role="tablist" aria-label="Audience">
            {who.audiences.map((x) => (
              <button key={x.key} role="tab" className="tab" aria-selected={x.key === k} onClick={() => setK(x.key)}>
                {x.title}
              </button>
            ))}
          </div>
        </div>
        <div className="zig" key={k}>
          <div className="zig-copy fade-in">
            <h3 className="h2" style={{ fontSize: 'clamp(26px,2.8vw,34px)' }}>
              {a.lead}
            </h3>
            <ul className="ticks">
              {a.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <a className="btn btn-lg" href="#method" style={{ justifySelf: 'start', marginTop: 8 }}>
              {hero.secondary} <Icon name="arrow" className="arrow" width={16} height={16} />
            </a>
          </div>
          <div className="shot fade-in">
            <img src={shot(a.view)} alt={views.find((v) => v.key === a.view)!.alt} loading="lazy" width={1400} height={851} />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------- Security ---------------- */
const secIcons: IconName[] = ['key', 'shield', 'unplug']
export function Security() {
  return (
    <section className="section">
      <div className="container" style={{ display: 'grid', gap: 48 }}>
        <SectionHead kicker="Secure by design" title="Your data stays yours." center />
        <div className="grid-3">
          {security.map((s, i) => (
            <Reveal key={s.title} delay={i * 90} className="card">
              <span className="icon-tile">
                <Icon name={secIcons[i]} />
              </span>
              <h3 className="h3">{s.title}</h3>
              <p className="body">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- Access forms ---------------- */
export function InlineAccess({ dark = false, id }: { dark?: boolean; id?: string }) {
  const [sent, setSent] = useState(false)
  const submit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
  }
  return (
    <Glass className="inline-access" radius={14} strength={20} tint={dark ? 30 : 60} blur={4} depth={12}>
      {sent ? (
        <div className="sent" role="status">
          <Icon name="shield" /> Thanks. We will get you connected.
        </div>
      ) : (
        <form onSubmit={submit} className="inline-access-form" id={id}>
          <label className="sr-only" htmlFor={`${id ?? 'ia'}-email`}>
            Work email
          </label>
          <input id={`${id ?? 'ia'}-email`} className="field field--bare" type="email" required placeholder="you@yourbrand.com" autoComplete="email" />
          <button className="btn btn-primary btn-lg" type="submit">
            {hero.primary}
          </button>
        </form>
      )}
    </Glass>
  )
}

export function AccessCard() {
  const [picked, setPicked] = useState<string[]>(['Meta', 'Shopify'])
  const [sent, setSent] = useState(false)
  const toggle = (p: string) => setPicked((x) => (x.includes(p) ? x.filter((y) => y !== p) : [...x, p]))
  const submit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
  }
  return (
    <Glass className="access-card" radius={22} strength={22} chroma={0.35} tint={62} blur={10} depth={18}>
      <div className="access-inner" id="access">
        {sent ? (
          <div className="sent sent--big" role="status">
            <span className="icon-tile">
              <Icon name="shield" />
            </span>
            <h3 className="h3" style={{ fontSize: 22 }}>
              Request received.
            </h3>
            <p className="body">We will reach out to get {picked.length ? picked.join(', ') : 'your platforms'} connected.</p>
          </div>
        ) : (
          <form onSubmit={submit} style={{ display: 'grid', gap: 12 }}>
            <div style={{ display: 'grid', gap: 6, marginBottom: 6 }}>
              <h3 className="h3" style={{ fontSize: 22 }}>
                {hero.primary}
              </h3>
              <p className="body">{closing.lede}</p>
            </div>
            <input className="field" required placeholder="Full name" autoComplete="name" aria-label="Full name" />
            <input className="field" type="email" required placeholder="Work email" autoComplete="email" aria-label="Work email" />
            <input className="field" placeholder="Store URL" aria-label="Store URL" />
            <fieldset className="pick">
              <legend>Platforms you run</legend>
              <div className="pick-chips">
                {platforms.map((p) => (
                  <button
                    type="button"
                    key={p.name}
                    className="pick-chip"
                    aria-pressed={picked.includes(p.name)}
                    onClick={() => toggle(p.name)}
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            </fieldset>
            <button className="btn btn-primary btn-lg btn-block" type="submit">
              {hero.primary}
            </button>
            <TrustNote>{hero.trust}</TrustNote>
          </form>
        )}
      </div>
    </Glass>
  )
}
