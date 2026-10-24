import { Link } from 'react-router-dom'
import { Brand } from '../components/Logo'
import { Icon } from '../components/Icons'

const options = [
  { to: '/a', name: 'Option A', title: 'Dashboard-First', body: 'The product is the hero. Live dashboard in a liquid-glass bezel over a warm shader gradient.', tags: ['ShaderGradient', 'Liquid glass', 'R3F closing'] },
  { to: '/b', name: 'Option B', title: 'Request-Access Led', body: 'Dark and immersive. Your platforms orbit the Push Nexus hub in 3D while you drop your email.', tags: ['React Three Fiber', 'Liquid glass', 'ShaderGradient CTA'] },
  { to: '/c', name: 'Option C', title: 'Audience & Access-Led', body: 'Who it is for, why to trust it, and a real access form floating in glass over a gradient orb.', tags: ['ShaderGradient orb', 'Liquid glass form', 'Animated pacing card'] },
]

export default function Index() {
  return (
    <div className="page index-page">
      <div className="container" style={{ padding: '72px 24px 96px', display: 'grid', gap: 40 }}>
        <Brand />
        <div style={{ display: 'grid', gap: 12, maxWidth: 640 }}>
          <span className="kicker">Landing page directions</span>
          <h1 className="h1" style={{ fontSize: 'clamp(34px,5vw,52px)' }}>
            Three ways to tell the Push Nexus story.
          </h1>
          <p className="lede">Same brand, same copy, three different paths to a request for access.</p>
        </div>
        <div className="grid-3">
          {options.map((o) => (
            <Link key={o.to} to={o.to} className="card option-card">
              <span className="kicker">{o.name}</span>
              <h2 className="h3" style={{ fontSize: 22 }}>
                {o.title}
              </h2>
              <p className="body">{o.body}</p>
              <div className="option-tags">
                {o.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <span className="option-go">
                Open <Icon name="arrow" width={16} height={16} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
