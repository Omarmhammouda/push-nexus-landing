import { Canvas, useFrame } from '@react-three/fiber'
import { Float, RoundedBox } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { usePrefersReducedMotion } from './motion'

/**
 * Month pacing as a 3D gauge: the ring is the month, the orange arc is sales to
 * date (50.3% of target), the dark tick is where you *should* be by day 14 (45.2%).
 * Ahead of the tick = ahead of pace.
 */
const PROGRESS = 0.503
const EXPECTED = 14 / 31
const START = Math.PI / 2 // 12 o'clock

function Gauge({ play }: { play: boolean }) {
  const arc = useRef<THREE.Mesh>(null)
  const grow = useRef(0)
  const reduced = usePrefersReducedMotion()
  const R = 1.55
  const tube = 0.17

  const gradientTex = useMemo(() => {
    const c = document.createElement('canvas')
    c.width = 256
    c.height = 1
    const ctx = c.getContext('2d')!
    const g = ctx.createLinearGradient(0, 0, 256, 0)
    g.addColorStop(0, '#ffb454')
    g.addColorStop(1, '#ff8a1f')
    ctx.fillStyle = g
    ctx.fillRect(0, 0, 256, 1)
    const t = new THREE.CanvasTexture(c)
    t.colorSpace = THREE.SRGBColorSpace
    return t
  }, [])

  const tickAngle = START - EXPECTED * Math.PI * 2

  const done = useRef(false)
  useFrame((_, delta) => {
    if (done.current || !play) return
    grow.current = reduced ? 1 : Math.min(1, grow.current + delta * 0.55)
    if (grow.current >= 1) done.current = true
    const e = 1 - Math.pow(1 - grow.current, 3)
    const m = arc.current
    if (!m) return
    const len = Math.max(0.0001, PROGRESS * e) * Math.PI * 2
    m.geometry.dispose()
    m.geometry = new THREE.TorusGeometry(R, tube, 32, 160, len)
  })

  return (
    <group rotation={[0, 0, 0]}>
      {/* the month */}
      <mesh>
        <torusGeometry args={[R, tube * 0.72, 24, 200]} />
        <meshStandardMaterial color="#e4e4e7" roughness={0.6} metalness={0} />
      </mesh>
      {/* sales to date — drawn clockwise from 12 o'clock */}
      <group rotation={[0, Math.PI, START]}>
        <mesh ref={arc}>
          <torusGeometry args={[R, tube, 32, 160, 0.0001]} />
          <meshPhysicalMaterial map={gradientTex} emissive="#ff8a1f" emissiveIntensity={0.25} roughness={0.25} clearcoat={1} clearcoatRoughness={0.2} />
        </mesh>
      </group>
      {/* where you should be by today */}
      <group rotation={[0, 0, tickAngle]}>
        <RoundedBox args={[0.56, 0.05, 0.3]} radius={0.02} position={[R, 0, 0]}>
          <meshStandardMaterial color="#09090b" roughness={0.4} />
        </RoundedBox>
      </group>
    </group>
  )
}

export default function PacingGauge({ play = true }: { play?: boolean }) {
  const reduced = usePrefersReducedMotion()
  return (
    <div className="canvas-fill">
      <Canvas camera={{ position: [0, 0, 5.2], fov: 40 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.85} />
        <directionalLight position={[2, 3, 5]} intensity={1.8} />
        <directionalLight position={[-3, -2, 2]} intensity={0.5} color="#ffb454" />
        <Float speed={reduced ? 0 : 1.4} rotationIntensity={reduced ? 0 : 0.35} floatIntensity={reduced ? 0 : 0.4}>
          <group rotation={[-0.32, 0.38, 0]}>
            <Gauge play={play} />
          </group>
        </Float>
      </Canvas>
    </div>
  )
}
