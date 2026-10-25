import { useId } from 'react'

/** The Push Nexus mark — hub + four nodes, from their site's #pn-mark symbol. */
export function Mark({ size = 28, tile = false }: { size?: number; tile?: boolean }) {
  const id = useId().replace(/:/g, '')
  if (tile) {
    return (
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id={`hub-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#a78bfa" />
            <stop offset="1" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="14" fill="#0c0a09" />
        <g stroke="#8b5cf6" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.55">
          <line x1="32" y1="34" x2="18" y2="16" />
          <line x1="32" y1="34" x2="46" y2="19" />
          <line x1="32" y1="34" x2="17" y2="47" />
          <line x1="32" y1="34" x2="45" y2="49" />
        </g>
        <circle cx="18" cy="16" r="4.6" fill="#a78bfa" />
        <circle cx="46" cy="19" r="4.6" fill="#a78bfa" />
        <circle cx="17" cy="47" r="4.6" fill="#7c3aed" />
        <circle cx="45" cy="49" r="4.6" fill="#7c3aed" />
        <circle cx="32" cy="34" r="7" fill={`url(#hub-${id})`} />
      </svg>
    )
  }
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={`hub-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#a78bfa" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <g stroke="#8b5cf6" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.55" fill="none">
        <line x1="32" y1="34" x2="16" y2="14" />
        <line x1="32" y1="34" x2="48" y2="18" />
        <line x1="32" y1="34" x2="14" y2="48" />
        <line x1="32" y1="34" x2="46" y2="50" />
        <line x1="48" y1="18" x2="46" y2="50" strokeOpacity="0.3" />
        <line x1="16" y1="14" x2="14" y2="48" strokeOpacity="0.3" />
      </g>
      <circle cx="16" cy="14" r="5" fill="#a78bfa" />
      <circle cx="48" cy="18" r="5" fill="#a78bfa" />
      <circle cx="14" cy="48" r="5" fill="#7c3aed" />
      <circle cx="46" cy="50" r="5" fill="#7c3aed" />
      <circle cx="32" cy="34" r="7.5" fill={`url(#hub-${id})`} />
    </svg>
  )
}

export function Brand({ size = 28 }: { size?: number }) {
  return (
    <span className="brand">
      <Mark size={size} />
      <span>Push Nexus</span>
    </span>
  )
}
