import { Component, Suspense, lazy, useEffect, useRef, useState, type ReactNode } from 'react'
import { hasWebGL } from './motion'
import type { GradientPreset } from './GradientField'

const NexusScene = lazy(() => import('./NexusScene'))
const GradientField = lazy(() => import('./GradientField'))

class Boundary extends Component<{ fallback: ReactNode; children: ReactNode }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children
  }
}

/** Mounts a WebGL scene only near the viewport, with a CSS fallback for no-WebGL. */
function Gate({ fallback, children, className = '' }: { fallback: ReactNode; children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [near, setNear] = useState(false)
  const [gl] = useState(() => typeof window !== 'undefined' && hasWebGL())
  useEffect(() => {
    const el = ref.current
    if (!el) return
    // mount once when it first comes near, then keep the context alive
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setNear(true)
          io.disconnect()
        }
      },
      { rootMargin: '300px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} className={`canvas-fill ${className}`} aria-hidden="true">
      {fallback}
      {gl && near && (
        <Boundary fallback={null}>
          <Suspense fallback={null}>{children}</Suspense>
        </Boundary>
      )}
    </div>
  )
}

const fallbacks: Record<GradientPreset, string> = {
  dawn: 'radial-gradient(70% 90% at 75% 10%, #ffb454 0%, rgba(255,138,31,.55) 35%, rgba(250,250,250,0) 75%)',
  ember: 'radial-gradient(80% 120% at 70% 110%, rgba(255,138,31,.55) 0%, rgba(42,15,0,.6) 45%, #09090b 80%)',
  orb: 'radial-gradient(closest-side, #ffb454, #ff8a1f 60%, rgba(255,138,31,0) 100%)',
}

export function Gradient({ preset, className }: { preset: GradientPreset; className?: string }) {
  return (
    <Gate className={className} fallback={<div className="canvas-fill" style={{ background: fallbacks[preset] }} />}>
      <GradientField preset={preset} />
    </Gate>
  )
}

export function Nexus({ labels = true, className }: { labels?: boolean; className?: string }) {
  return (
    <Gate
      className={className}
      fallback={<div className="canvas-fill" style={{ background: 'radial-gradient(40% 50% at 50% 50%, rgba(255,138,31,.28), transparent 70%)' }} />}
    >
      <NexusScene labels={labels} />
    </Gate>
  )
}
