import { useEffect, useRef, useState, type RefObject } from 'react'

const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** True once the element has scrolled into view (and stays true). */
export function useInView<T extends Element>(threshold = 0.35): [RefObject<T | null>, boolean] {
  const ref = useRef<T>(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || seen) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { threshold },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [seen, threshold])
  return [ref, seen]
}

type Token = { text: string } | { num: number; decimals: number; commas: boolean }

/** "$412,380" → ["$", 412380, ""]; "4.82x vs 4.50x" → [4.82, "x vs ", 4.5, "x"] */
function tokenize(value: string): Token[] {
  const out: Token[] = []
  const re = /\d{1,3}(?:,\d{3})+(?:\.\d+)?|\d+(?:\.\d+)?/g
  let last = 0
  for (let m = re.exec(value); m; m = re.exec(value)) {
    if (m.index > last) out.push({ text: value.slice(last, m.index) })
    const raw = m[0]
    const dot = raw.indexOf('.')
    out.push({ num: parseFloat(raw.replace(/,/g, '')), decimals: dot < 0 ? 0 : raw.length - dot - 1, commas: raw.includes(',') })
    last = m.index + raw.length
  }
  if (last < value.length) out.push({ text: value.slice(last) })
  return out
}

function render(tokens: Token[], t: number) {
  return tokens
    .map((tk) => {
      if ('text' in tk) return tk.text
      const v = tk.num * t
      return v.toLocaleString('en-US', {
        minimumFractionDigits: tk.decimals,
        maximumFractionDigits: tk.decimals,
        useGrouping: tk.commas,
      })
    })
    .join('')
}

const easeOutExpo = (x: number) => (x >= 1 ? 1 : 1 - Math.pow(2, -10 * x))

type Props = {
  value: string
  duration?: number
  delay?: number
  className?: string
  /** Start the count from the parent instead of on this element's own visibility. */
  play?: boolean
}

/**
 * Counts every number inside `value` up from zero, keeping its format
 * ($, commas, decimals, x, %). Starts when it scrolls into view.
 */
export function CountUp({ value, duration = 1400, delay = 0, className, play }: Props) {
  const [ref, seen] = useInView<HTMLSpanElement>(0.2)
  const active = play ?? seen
  const tokens = useRef(tokenize(value)).current
  const [text, setText] = useState(() => (reducedMotion() ? value : render(tokens, 0)))

  useEffect(() => {
    if (!active) return
    if (reducedMotion()) {
      setText(value)
      return
    }
    let raf = 0
    let start = 0
    const tick = (now: number) => {
      if (!start) start = now + delay
      const p = Math.max(0, Math.min(1, (now - start) / duration))
      setText(render(tokens, easeOutExpo(p)))
      if (p < 1) raf = requestAnimationFrame(tick)
      else setText(value)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, delay, duration, tokens, value])

  return (
    <span ref={ref} className={['countup', className].filter(Boolean).join(' ')}>
      {/* invisible final value holds the width so nothing shifts while counting */}
      <span aria-hidden="true" className="countup-ghost">
        {value}
      </span>
      <span aria-hidden="true" className="countup-live">
        {text}
      </span>
      <span className="sr-only">{value}</span>
    </span>
  )
}
