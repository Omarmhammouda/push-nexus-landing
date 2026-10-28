import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Glass } from './Glass'
import { Brand } from './Logo'
import { Icon } from './Icons'
import { nav, footer, platforms, platformsNote } from '../content'

export function Nav({ dark = false, links = nav }: { dark?: boolean; links?: { label: string; href: string }[] }) {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  useEffect(() => setOpen(false), [pathname])
  const current = (href: string) => (href === `#${pathname}` ? 'page' : undefined)
  return (
    <div className={`nav-wrap ${open ? 'is-open' : ''}`}>
      <Glass
        className="nav-glass"
        radius={16}
        strength={18}
        chroma={0.25}
        blur={dark ? 6 : 4}
        tint={dark ? 40 : 55}
        depth={14}
      >
        <nav className="nav-inner" aria-label="Main">
          <Link to="/" aria-label="Push Nexus home">
            <Brand />
          </Link>
          <div className="nav-links">
            {links.map((l) => (
              <a key={l.href} href={l.href} aria-current={current(l.href)}>
                {l.label}
              </a>
            ))}
          </div>
          <div className="nav-right">
            <a className="btn btn-primary" href="#access">
              Request access
            </a>
            <button className="nav-menu-btn" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="nav-sheet" onClick={() => setOpen((o) => !o)}>
              <span />
              <span />
            </button>
          </div>
        </nav>
      </Glass>
      <div id="nav-sheet" className="nav-sheet" hidden={!open}>
        {links.map((l) => (
          <a key={l.href} href={l.href} aria-current={current(l.href)} onClick={() => setOpen(false)}>
            {l.label}
            <Icon name="arrow" width={16} height={16} />
          </a>
        ))}
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Brand size={24} />
        <span>{footer.line}</span>
        <div className="footer-links">
          <a href={`mailto:${footer.email}`}>{footer.email}</a>
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </div>
      </div>
    </footer>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="eyebrow">
      <span className="dot">
        <i />
      </span>
      {children}
    </span>
  )
}

export function Platforms({ note = true }: { note?: boolean }) {
  return (
    <div style={{ display: 'grid', gap: 16, justifyItems: 'center' }}>
      {note && <p className="body" style={{ textAlign: 'center', fontSize: 14 }}>{platformsNote}</p>}
      <div className="chips">
        {platforms.map((p) => (
          <span key={p.name} className="chip">
            <span className="glyph">{p.glyph}</span>
            {p.name}
          </span>
        ))}
        <span className="chip custom">+ Custom source</span>
      </div>
    </div>
  )
}

export function TrustNote({ children }: { children: ReactNode }) {
  return (
    <span className="note">
      <Icon name="shield" />
      {children}
    </span>
  )
}

/** Fades children up the first time they scroll into view. */
export function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }: { children: ReactNode; delay?: number; as?: 'div' | 'section' | 'li'; className?: string }) {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add('in')
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  )
}
