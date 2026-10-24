import type { SVGProps } from 'react'

const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.75, strokeLinecap: 'round', strokeLinejoin: 'round', viewBox: '0 0 24 24' } as const

export type IconName =
  | 'channels' | 'compare' | 'grid' | 'globe' | 'mail' | 'lock' | 'sync' | 'target'
  | 'rank' | 'pace' | 'sun' | 'arrow' | 'shield' | 'key' | 'unplug'

const paths: Record<IconName, React.ReactNode> = {
  channels: <><rect x="3" y="4" width="18" height="16" rx="3" /><path d="M7 9h10M7 13h6M7 17h3" /></>,
  compare: <><path d="M4 19V9M10 19V5M16 19v-7M22 19H2" /></>,
  grid: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m4 7 8 6 8-6" /></>,
  lock: <><rect x="4" y="10" width="16" height="11" rx="2.5" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
  sync: <><path d="M20 11a8 8 0 0 0-14.6-4.5L4 8" /><path d="M4 4v4h4" /><path d="M4 13a8 8 0 0 0 14.6 4.5L20 16" /><path d="M20 20v-4h-4" /></>,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.2" fill="currentColor" /></>,
  rank: <><path d="M4 20h4V10H4zM10 20h4V4h-4zM16 20h4v-7h-4z" /></>,
  pace: <><path d="M12 13l4-4" /><path d="M3.5 17a9 9 0 1 1 17 0" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
  arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  shield: <><path d="M12 3 4 6v6c0 4.5 3.4 8 8 9 4.6-1 8-4.5 8-9V6z" /><path d="m9 12 2 2 4-4" /></>,
  key: <><circle cx="8" cy="15" r="4" /><path d="m11 12 9-9M17 6l3 3M15 8l2 2" /></>,
  unplug: <><path d="M9 7V3M15 7V3M6 7h12v4a6 6 0 0 1-12 0z" /><path d="M12 17v4" /></>,
}

export function Icon({ name, ...rest }: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} aria-hidden="true" {...rest}>
      {paths[name]}
    </svg>
  )
}
