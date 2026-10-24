import { Mark } from './Logo'
import './mock.css'

const kpis = [
  { label: 'MER', value: '4.82x', delta: '▲ from 4.31x' },
  { label: 'Sales', value: '$412,380', delta: '▲ 18.2%' },
  { label: 'Conv. rate', value: '2.41%', delta: '▲ from 2.18%' },
  { label: 'Total spend', value: '$85,550', delta: '▲ 5.7%' },
]
const weeks = [
  ['Oct 8 to 14', '5.04x', '$218,910', '2,766', '114,205', '2.42%', '$79.14', '$43,430'],
  ['Oct 1 to 7', '4.59x', '$193,470', '2,448', '102,180', '2.40%', '$79.03', '$42,120'],
  ['Sep 24 to 30', '4.38x', '$176,240', '2,261', '103,650', '2.18%', '$77.95', '$40,240'],
]
const ads = [
  { tier: 'S', name: 'UGC_Sara_Unboxing_15s', p: '212 purchases', cpp: '$18.40 CPP' },
  { tier: 'S', name: 'Static_Bundle_Offer_02', p: '164 purchases', cpp: '$21.10 CPP' },
  { tier: 'A', name: 'Reel_HowToStyle_v2', p: '71 purchases', cpp: '$29.80 CPP' },
]
const channels = [
  ['Online Store', true],
  ['Shop', true],
  ['Facebook & Instagram', true],
  ['TikTok Shop', true],
  ['Point of Sale', false],
  ['Draft orders', false],
] as const
const bars = [38, 44, 41, 52, 49, 58, 55, 63, 60, 68, 66, 74, 71, 79]

type Props = {
  /** 'full' shows table + sidebar; 'compact' drops the sidebar and table. */
  variant?: 'full' | 'compact'
}

export function DashboardMock({ variant = 'full' }: Props) {
  const compact = variant === 'compact'
  return (
    <div className={`mock ${compact ? 'mock--compact' : ''}`} role="img" aria-label="Push Nexus dashboard on a demo store: MER 4.82x, sales $412,380, pacing ahead of target">
      <div className="mock-bar">
        <span className="mock-brand">
          <Mark size={18} />
          Push Nexus
        </span>
        <span className="pill">
          Acme Apparel <span className="caret">▾</span>
        </span>
        <span className="pill mono">Oct 1 to Oct 14, 2026</span>
        {!compact && (
          <span className="pill">
            Compare: target <span className="caret">▾</span>
          </span>
        )}
        <span className="spacer" />
        <span className="pill pill--on">Dashboard</span>
      </div>

      <div className="mock-body">
        <div className="mock-main">
          <div className="kpis">
            {kpis.map((k) => (
              <div className="kpi" key={k.label}>
                <div className="label">{k.label}</div>
                <div className="value mono">{k.value}</div>
                <div className="delta up">{k.delta}</div>
              </div>
            ))}
          </div>

          {compact ? (
            <div className="mock-chart">
              <div className="mock-chart-head">
                <span>Sales vs target</span>
                <span className="mono muted">Day 14 of 31</span>
              </div>
              <div className="bars">
                {bars.map((h, i) => (
                  <i key={i} style={{ height: `${h}%` }} className={i > 11 ? 'today' : ''} />
                ))}
                <b className="target-line" />
              </div>
            </div>
          ) : (
            <div className="mock-table-wrap">
              <table>
                <thead>
                  <tr>
                    {['Week', 'MER', 'Sales', 'Orders', 'Traffic', 'Conv. rate', 'AOV', 'Spend'].map((h) => (
                      <th key={h}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {weeks.map((r) => (
                    <tr key={r[0]}>
                      {r.map((c, i) => (
                        <td key={i} className={i ? 'num mono' : ''}>
                          {c}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="side-sub">Top ads, Oct 1 to 14</div>
          <div className="ads">
            {(compact ? ads.slice(0, 2) : ads).map((a) => (
              <div className="ad" key={a.name}>
                <span className={`tier ${a.tier === 'A' ? 'a' : ''}`}>{a.tier}</span>
                <span className="name mono">{a.name}</span>
                <span className="muted">{a.p}</span>
                <span className="mono">{a.cpp}</span>
              </div>
            ))}
          </div>
        </div>

        {!compact && (
          <aside className="mock-side">
            <div className="side-title">View options</div>
            <div className="side-sub">Sales channels</div>
            {channels.map(([c, on]) => (
              <div className={`check ${on ? '' : 'off'}`} key={c}>
                <span className={`box ${on ? 'on' : ''}`} />
                {c}
              </div>
            ))}
            <div className="side-sub" style={{ marginTop: 18 }}>
              Pacing to target
            </div>
            <Pacing />
          </aside>
        )}
      </div>
      {compact && (
        <div className="mock-foot">
          <Pacing inline />
        </div>
      )}
    </div>
  )
}

function Pacing({ inline = false }: { inline?: boolean }) {
  return (
    <div className={`pacing ${inline ? 'pacing--inline' : ''}`}>
      <div className="pace-row">
        <span className="muted">Month target</span>
        <span className="mono">$820,000</span>
      </div>
      <div className="pace-row">
        <span className="muted">Month to date</span>
        <span className="mono">$412,380</span>
      </div>
      <div className="pace-bar" aria-hidden="true">
        <i style={{ width: '50.3%' }} />
        <b style={{ left: '45.2%' }} />
      </div>
      <div className="pace-row">
        <span className="muted">Day 14 of 31</span>
        <span className="up">Ahead by $42,060</span>
      </div>
      <div className="pace-row">
        <span className="muted">MER vs target</span>
        <span className="mono">4.82x vs 4.50x</span>
      </div>
    </div>
  )
}
