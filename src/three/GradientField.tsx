import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/react'
import { usePrefersReducedMotion } from './motion'

/** Brand-tuned ShaderGradient presets (orange #ff8a1f / amber #ffb454). */
const presets = {
  // soft warm field for light heroes
  dawn: {
    type: 'plane',
    color1: '#ffb454',
    color2: '#ff8a1f',
    color3: '#fff4e8',
    uSpeed: 0.18,
    uStrength: 2.6,
    uDensity: 1.2,
    uFrequency: 5.5,
    brightness: 1.25,
    cDistance: 3.2,
    cAzimuthAngle: 180,
    cPolarAngle: 90,
    positionX: -0.6,
    positionY: 0.2,
    positionZ: 0,
    rotationX: 0,
    rotationY: 10,
    rotationZ: 50,
  },
  // deep ember for dark bands
  ember: {
    type: 'waterPlane',
    color1: '#ff8a1f',
    color2: '#3a1602',
    color3: '#09090b',
    uSpeed: 0.12,
    uStrength: 1.6,
    uDensity: 1.2,
    uFrequency: 5.5,
    brightness: 0.75,
    cDistance: 3.6,
    cAzimuthAngle: 180,
    cPolarAngle: 90,
    positionX: 0,
    positionY: -0.6,
    positionZ: 0,
    rotationX: 50,
    rotationY: 0,
    rotationZ: -40,
  },
  // glowing orb behind a glass card
  orb: {
    type: 'sphere',
    color1: '#ffb454',
    color2: '#ff9d3a',
    color3: '#fff1e2',
    uSpeed: 0.12,
    uStrength: 0.35,
    uDensity: 0.9,
    uFrequency: 5.5,
    uAmplitude: 3.2,
    brightness: 1.15,
    cDistance: 7,
    cameraZoom: 9,
    cAzimuthAngle: 180,
    cPolarAngle: 90,
    positionX: 0,
    positionY: 0,
    positionZ: 0,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
  },
} as const

export type GradientPreset = keyof typeof presets

export default function GradientField({ preset = 'dawn', className = '' }: { preset?: GradientPreset; className?: string }) {
  const reduced = usePrefersReducedMotion()
  const p = presets[preset]
  return (
    <div className={`canvas-fill ${className}`}>
      <ShaderGradientCanvas style={{ position: 'absolute', inset: 0 }} pixelDensity={1} fov={45} pointerEvents="none" lazyLoad={false}>
        <ShaderGradient
          {...(p as Record<string, unknown>)}
          animate={reduced ? 'off' : 'on'}
          lightType="3d"
          grain={preset === 'dawn' ? 'on' : 'off'}
          reflection={0.1}
          wireframe={false}
        />
      </ShaderGradientCanvas>
    </div>
  )
}
