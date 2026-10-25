import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Sparkles } from '@react-three/drei'
import { useMemo, useRef, type RefObject } from 'react'
import * as THREE from 'three'
import { usePrefersReducedMotion } from './motion'

/**
 * The Push Nexus mark, rebuilt in 3D: every platform is a node, every node
 * feeds the hub, and little pulses of data travel inward along the edges.
 */

const VIOLET = new THREE.Color('#7c3aed')
const LAVENDER = new THREE.Color('#a78bfa')
const ORIGIN = new THREE.Vector3(0, 0, 0)
const LABEL_OFFSET = new THREE.Vector3(0, 0.5, 0)

const PLATFORMS = [
  { name: 'Meta', pos: [-4.3, 1.9, 0.3] },
  { name: 'TikTok', pos: [4.2, 1.7, -0.4] },
  { name: 'Google Ads', pos: [-4.7, -0.9, -0.6] },
  { name: 'Shopify', pos: [4.6, -1.1, 0.5] },
  { name: 'Klaviyo', pos: [-2.6, -2.9, 0.7] },
  { name: 'GA4', pos: [2.5, -2.95, -0.5] },
] as const

function seeded(n: number) {
  let s = n
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

type LabelRefs = RefObject<(HTMLSpanElement | null)[]>

function Network({ labelRefs }: { labelRefs?: LabelRefs }) {
  const group = useRef<THREE.Group>(null)
  const pulses = useRef<THREE.InstancedMesh>(null)
  const hub = useRef<THREE.Mesh>(null)
  const reduced = usePrefersReducedMotion()
  const { pointer, camera, size } = useThree()
  const proj = useMemo(() => new THREE.Vector3(), [])

  const { primaries, satellites, edges, faintEdges } = useMemo(() => {
    const rand = seeded(7)
    const primaries = PLATFORMS.map((p) => new THREE.Vector3(...p.pos))
    // satellites: small nodes orbiting each platform (accounts, stores, campaigns)
    const satellites: THREE.Vector3[] = []
    const satParent: number[] = []
    primaries.forEach((p, i) => {
      for (let k = 0; k < 6; k++) {
        const dir = new THREE.Vector3(rand() - 0.5, rand() - 0.5, rand() - 0.5).normalize()
        satellites.push(p.clone().add(dir.multiplyScalar(0.55 + rand() * 0.55)))
        satParent.push(i)
      }
    })
    const hubPos = new THREE.Vector3(0, 0, 0)
    const edges = primaries.map((p) => [p, hubPos] as const)
    const faintEdges: (readonly [THREE.Vector3, THREE.Vector3])[] = satellites.map((s, i) => [s, primaries[satParent[i]]] as const)
    // a ring between neighbours, like the outer strokes of the mark
    for (let i = 0; i < primaries.length; i++) faintEdges.push([primaries[i], primaries[(i + 2) % primaries.length]] as const)
    return { primaries, satellites, edges, faintEdges }
  }, [])

  const edgeGeo = useMemo(() => {
    const g = new THREE.BufferGeometry()
    g.setFromPoints(edges.flatMap(([a, b]) => [a, b]))
    return g
  }, [edges])
  const faintGeo = useMemo(() => {
    const g = new THREE.BufferGeometry()
    g.setFromPoints(faintEdges.flatMap(([a, b]) => [a, b]))
    return g
  }, [faintEdges])

  // data pulses: each travels from a node (primary or satellite) to the hub
  const PULSES = 36
  const pulseState = useMemo(() => {
    const rand = seeded(11)
    return Array.from({ length: PULSES }, (_, i) => ({
      from: i % 3 === 0 ? satellites[Math.floor(rand() * satellites.length)] : primaries[i % primaries.length],
      t: rand(),
      speed: 0.12 + rand() * 0.16,
    }))
  }, [primaries, satellites])
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const tmp = useMemo(() => new THREE.Vector3(), [])

  useFrame((state, delta) => {
    const g = group.current
    if (!g) return
    const t = state.clock.elapsedTime
    if (!reduced) {
      g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, pointer.x * 0.45 + Math.sin(t * 0.15) * 0.25, 0.04)
      g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, -pointer.y * 0.25, 0.04)
      if (hub.current) hub.current.scale.setScalar(1 + Math.sin(t * 2.2) * 0.035)
    }
    // place the DOM labels over their nodes (plain DOM — no extra React roots)
    const els = labelRefs?.current
    if (els) {
      g.updateMatrixWorld()
      primaries.forEach((p, i) => {
        const el = els[i]
        if (!el) return
        proj.copy(p).add(LABEL_OFFSET).applyMatrix4(g.matrixWorld).project(camera)
        const x = ((proj.x + 1) / 2) * size.width
        const y = ((1 - proj.y) / 2) * size.height
        el.style.transform = `translate(-50%, -50%) translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`
        el.style.opacity = '1'
      })
    }
    const m = pulses.current
    if (!m) return
    pulseState.forEach((p, i) => {
      if (!reduced) p.t += delta * p.speed
      if (p.t > 1) p.t -= 1
      // ease in toward the hub
      const k = p.t * p.t
      tmp.copy(p.from).lerp(ORIGIN, k)
      dummy.position.copy(tmp)
      const s = 0.035 + Math.sin(p.t * Math.PI) * 0.03
      dummy.scale.setScalar(s / 0.05)
      dummy.updateMatrix()
      m.setMatrixAt(i, dummy.matrix)
    })
    m.instanceMatrix.needsUpdate = true
  })

  return (
    <group ref={group}>
      {/* hub */}
      <mesh ref={hub}>
        <sphereGeometry args={[0.62, 64, 64]} />
        <meshPhysicalMaterial color={LAVENDER} emissive={VIOLET} emissiveIntensity={0.85} roughness={0.25} clearcoat={1} clearcoatRoughness={0.15} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.95, 32, 32]} />
        <meshBasicMaterial color={VIOLET} transparent opacity={0.08} depthWrite={false} />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.45, 32, 32]} />
        <meshBasicMaterial color={VIOLET} transparent opacity={0.035} depthWrite={false} />
      </mesh>

      {/* edges */}
      <lineSegments geometry={edgeGeo}>
        <lineBasicMaterial color="#8b5cf6" transparent opacity={0.55} />
      </lineSegments>
      <lineSegments geometry={faintGeo}>
        <lineBasicMaterial color="#8b5cf6" transparent opacity={0.16} />
      </lineSegments>

      {/* platform nodes */}
      {primaries.map((p, i) => (
        <group key={i} position={p}>
          <mesh>
            <sphereGeometry args={[0.2, 32, 32]} />
            <meshStandardMaterial color={i < 2 ? LAVENDER : VIOLET} emissive={i < 2 ? LAVENDER : VIOLET} emissiveIntensity={0.55} roughness={0.35} />
          </mesh>
        </group>
      ))}
      {satellites.map((p, i) => (
        <mesh key={`s${i}`} position={p}>
          <sphereGeometry args={[0.055, 12, 12]} />
          <meshBasicMaterial color="#a78bfa" transparent opacity={0.55} />
        </mesh>
      ))}

      {/* data in flight */}
      <instancedMesh ref={pulses} args={[undefined, undefined, PULSES]}>
        <sphereGeometry args={[0.05, 10, 10]} />
        <meshBasicMaterial color="#ddd6fe" toneMapped={false} />
      </instancedMesh>
    </group>
  )
}

export default function NexusScene({ labels = true, className = '' }: { labels?: boolean; className?: string }) {
  const reduced = usePrefersReducedMotion()
  const labelRefs = useRef<(HTMLSpanElement | null)[]>([])
  return (
    <div className={`canvas-fill ${className}`}>
      <Canvas camera={{ position: [0, 0, 9.2], fov: 45 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }} frameloop={reduced ? 'demand' : 'always'}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 4, 5]} intensity={1.6} />
        <pointLight position={[0, 0, 0]} intensity={8} color="#7c3aed" distance={6} />
        <Network labelRefs={labels ? labelRefs : undefined} />
        {!reduced && <Sparkles count={70} scale={[14, 7, 4]} size={2.2} speed={0.25} opacity={0.5} color="#a78bfa" />}
      </Canvas>
      {labels && (
        <div className="node-labels" aria-hidden="true">
          {PLATFORMS.map((p, i) => (
            <span key={p.name} className="node-label" ref={(el) => { labelRefs.current[i] = el }}>
              {p.name}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
