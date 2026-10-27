import { Link, useLocation } from 'react-router-dom'
import { directions } from '../pages/Index'

/** Floating review switcher shown on each direction while the client is reviewing. */
export function StageBar() {
  const { pathname } = useLocation()
  const isResults = pathname === '/results'
  const current = isResults ? { title: 'Results' } : directions.find((d) => d.to === pathname)
  if (!current) return null
  return (
    <nav className="stage-bar" aria-label="Review directions">
      <Link to="/" className="stage-home" aria-label="All directions">
        <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
          <path d="M10 3 5 8l5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>All</span>
      </Link>
      <span className="stage-sep" />
      {directions.map((d) => (
        <Link key={d.to} to={d.to} className="stage-opt" aria-current={d.to === pathname ? 'page' : undefined} title={d.title}>
          {d.letter}
        </Link>
      ))}
      <span className="stage-name">{current.title}</span>
    </nav>
  )
}
