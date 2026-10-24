import { LiquidGlass, type LiquidGlassProps } from '@liquidglassjs/react'
import type { CSSProperties, ReactNode } from 'react'

type Props = Omit<LiquidGlassProps, 'children'> & {
  children: ReactNode
  /** Live DOM the glass bends (rendered under the glass, refracted at the rim). */
  scene?: ReactNode
  contentClassName?: string
  contentStyle?: CSSProperties
}

/**
 * Thin wrapper over @liquidglassjs/react.
 * - With `scene`: the scene is real DOM inside the glass and refracts at the rim
 *   (works in every browser).
 * - Without: frosted glass over whatever sits behind it (refractive on Chromium,
 *   a clean blur in Safari/Firefox).
 */
export function Glass({ children, scene, contentClassName, contentStyle, className, style, mode, ...opts }: Props) {
  return (
    <LiquidGlass
      className={className}
      style={style}
      mode={mode ?? (scene ? 'svg' : 'frost')}
      profile="circle"
      {...opts}
    >
      {scene ? (
        <div className="ps-glass__refract">
          <div className="ps-glass__refract-inner">{scene}</div>
        </div>
      ) : null}
      <div className={['ps-glass__content', contentClassName].filter(Boolean).join(' ')} style={contentStyle}>
        {children}
      </div>
    </LiquidGlass>
  )
}
