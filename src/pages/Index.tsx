import { Link } from 'react-router-dom'
import { Brand } from '../components/Logo'
import { Icon } from '../components/Icons'

export const directions = [
  {
    to: '/a',
    letter: 'A',
    title: 'Dashboard-First',
    body: 'Leads with the product. The live dashboard sits front and center so visitors see exactly what they get before they scroll.',
    best: 'Visitors who want to see the product first',
  },
  {
    to: '/b',
    letter: 'B',
    title: 'Request-Access Led',
    body: 'Dark and immersive. Your platforms orbit the Push Nexus hub in 3D, with the email signup right in the opening screen.',
    best: 'Capturing as many access requests as possible',
  },
  {
    to: '/c',
    letter: 'C',
    title: 'Audience & Access-Led',
    body: 'Speaks to brands and agencies directly, explains the numbers, and puts a full access form beside the headline.',
    best: 'Fewer, better-qualified requests',
  },
]

export default function Index() {
  return (
    <div className="page index-page">
      <div className="container index-wrap">
        <div className="index-top">
          <Brand />
          <span className="index-by">Prepared by OMH Studios</span>
        </div>
        <div className="index-head">
          <span className="kicker">Landing page directions · Review</span>
          <h1 className="h1">Three ways to tell the Push Nexus story.</h1>
          <p className="lede">
            Same brand, same message, three different paths to a request for access. Open each one, scroll through it, and try it on your phone too.
          </p>
        </div>
        <div className="grid-3 index-grid">
          {directions.map((o) => (
            <Link key={o.to} to={o.to} className="card option-card">
              <span className="option-letter">{o.letter}</span>
              <h2 className="h3" style={{ fontSize: 22 }}>
                {o.title}
              </h2>
              <p className="body">{o.body}</p>
              <p className="option-best">
                <span>Best for</span>
                {o.best}
              </p>
              <span className="option-go">
                Open direction {o.letter} <Icon name="arrow" width={16} height={16} />
              </span>
            </Link>
          ))}
        </div>
        <p className="body index-foot">
          Numbers shown in the product views come from a demo store and are illustrative. Forms are for preview only and do not send anything.
        </p>
      </div>
    </div>
  )
}
