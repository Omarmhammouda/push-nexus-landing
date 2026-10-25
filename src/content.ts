// Product facts come from Push Nexus's own landing page.
// Positioning: Push Nexus is the brain / operating system for an ecommerce store.

export const hero = {
  eyebrow: 'From the team that runs Shopify brands',
  titleLead: 'Built around how an ecommerce business',
  titleAccent: 'should be run.',
  lede:
    'Push Nexus comes from years of running paid media for Shopify brands. It ranks your ads the way we rank them, sets the target, paces you against it, and shows you every morning where efficiency went, so you move spend today instead of weeks from now.',
  ledeShort:
    'It ranks your ads the way we rank them, sets the target, paces you against it, and shows you every morning where efficiency went, so you move spend today instead of weeks from now.',
  trust: "Read-only connections through each platform's official API. Revoke any time.",
  category: 'The ecommerce operating system',
  primary: 'Request access',
  secondary: 'See the method',
}

/** Each review direction tests a different line from the same idea. */
export const positioning = {
  a: {
    eyebrow: 'The ecommerce operating system',
    titleLead: 'The operating system for your',
    titleAccent: 'ecommerce store.',
    lede:
      'Push Nexus pulls Meta, TikTok, Google, GA4, Shopify and Klaviyo into one place, measures them the same way, and tells you every morning where to move spend.',
    note: 'Built by the team that runs paid media for Shopify brands.',
  },
  b: {
    eyebrow: 'Built by operators who run Shopify brands',
    titleLead: 'The brain behind your',
    titleAccent: 'Shopify store.',
    lede:
      'Push Nexus connects every channel you run, ranks your ads by what they actually sell, paces you against target, and gives you the call for today, every morning.',
  },
  c: {
    eyebrow: 'For Shopify brands and the agencies that run them',
    titleLead: 'One brain for every',
    titleAccent: 'store you run.',
    lede:
      'Push Nexus gives brands and agencies one operating system for paid media: every platform connected, every number defined the same way, and a clear call each morning.',
  },
}

/** Before / after: the problem Push Nexus replaces. */
export const contrast = {
  kicker: 'Why it exists',
  title: 'Your store already has the data. It just doesn’t have a brain.',
  before: {
    label: 'Without Push Nexus',
    points: [
      'Six ad managers, six versions of ROAS that never add up',
      'You find out the month went sideways at month end',
      'Creatives judged on $40 of spend and a gut feeling',
      'Monday mornings spent rebuilding the same spreadsheet',
    ],
  },
  after: {
    label: 'With Push Nexus',
    points: [
      'One view, three blended numbers: MER, conversion rate, AOV',
      'Ahead or behind target, every single morning',
      'Every ad ranked by purchases and cost per purchase',
      'A clear call for today, so you move spend the same day',
    ],
  },
}

export const nav = [
  { label: 'Method', href: '#method' },
  { label: 'Views', href: '#views' },
  { label: 'Product', href: '#product' },
  { label: 'How it works', href: '#how' },
  { label: "Who it's for", href: '#who' },
]

export const platforms = [
  { name: 'Meta', glyph: 'M' },
  { name: 'TikTok', glyph: 'T' },
  { name: 'Google Ads', glyph: 'G' },
  { name: 'GA4', glyph: '4' },
  { name: 'Shopify', glyph: 'S' },
  { name: 'Klaviyo', glyph: 'K' },
]
export const platformsNote = 'Connects to the platforms you already run, plus a custom source for anything else you track'

export const method = {
  kicker: 'How it thinks',
  title: 'It thinks like your best media buyer. Every morning.',
  lede:
    'We spent years running paid media for ecommerce brands and kept the three habits that moved revenue. Push Nexus runs them across every channel, every day.',
  habits: [
    {
      title: 'Rank ads by what they sell',
      body:
        'Every ad lands in a tier by purchases and cost per purchase, scaled to the size of the account. The ones selling at volume and at or under the account average sit on top. Scale those, cut the rest, and stop judging a creative on $40 of spend.',
      short: 'Every ad lands in a tier by purchases and cost per purchase. Scale the top tier, cut the rest, and stop judging a creative on $40 of spend.',
      view: 'ads' as const,
    },
    {
      title: 'Set the target, pace against it',
      body:
        'A revenue and MER target for the month, and every day shows where you stand against it: ahead or behind, by how much, and what today has to do. Not just what happened yesterday.',
      short: 'A revenue and MER target for the month. Every day shows ahead or behind, by how much, and what today has to do.',
      view: 'dashboard' as const,
    },
    {
      title: 'Capture efficiency daily',
      body:
        'When blended MER runs above target, that is budget you can spend today. When it runs below, that is budget to pull today. Push Nexus surfaces it every morning so the change happens the same day, not at the next monthly review.',
      short: 'Above target MER is budget you can spend today. Below it is budget to pull today. You see it every morning.',
      view: 'snapshot' as const,
    },
  ],
}

export type ViewKey = 'dashboard' | 'ads' | 'countries' | 'snapshot'
export const views: { key: ViewKey; tab: string; title: string; text: string; alt: string }[] = [
  {
    key: 'dashboard',
    tab: 'Dashboard',
    title: 'Dashboard, paced to target.',
    text: 'Sold so far against where you should be by today, what is needed per day for the rest of the month, and the spend limit that keeps MER on target.',
    alt: 'Push Nexus dashboard with month pacing bar against target',
  },
  {
    key: 'ads',
    tab: 'Ad ranking',
    title: 'Ad ranking.',
    text: 'Meta and Klaviyo on one grid, top performers picked by purchases and cost per purchase, the rest sortable by spend, ROAS or CPA.',
    alt: 'Push Nexus ads view with S-tier top performers across Meta and Klaviyo',
  },
  {
    key: 'countries',
    tab: 'International',
    title: 'International performance.',
    text: 'Buyer country from Shopify, sessions from GA4, spend from each ad platform, joined per country with MER, conversion rate and AOV.',
    alt: 'Push Nexus performance by country table',
  },
  {
    key: 'snapshot',
    tab: 'Daily snapshot',
    title: 'The daily snapshot.',
    text: 'Yesterday in one page: what sold, what it cost, why it moved, and the call for today, reviewed before it goes out.',
    alt: 'Push Nexus daily snapshot with narrative, reviewer note and comparison table',
  },
]
export const viewsHead = {
  kicker: 'Key views',
  title: 'The screens you open every morning.',
  lede: 'The live product on a demo store. Every number here is illustrative.',
}

export const numbers = {
  kicker: 'The numbers',
  title: 'One source of truth. Not six versions of ROAS.',
  lede: 'Every ad platform grades its own homework. Push Nexus measures everything against the whole store and total spend, with three numbers that explain every move in revenue.',
  metrics: [
    { name: 'MER', formula: 'Sales ÷ Total spend', value: '4.82x', body: 'Marketing efficiency across every platform at once. Higher is better, and it never pretends spend is smaller than it is.' },
    { name: 'Conversion rate', formula: 'Orders ÷ Traffic', value: '2.41%', body: 'Orders over store sessions, so you know whether the site is converting the traffic the ads bring in.' },
    { name: 'AOV', formula: 'Sales ÷ Orders', value: '$79.14', body: 'What each order is worth. Together with MER and conversion rate it explains every move in revenue.' },
  ],
}

export const product = {
  kicker: 'Product',
  title: 'Clean views. Faster decisions.',
  lede: 'One shared date filter across every view, any start and end date, and the same definitions on every screen.',
  features: [
    { title: 'Sales channel selector', body: 'Tick the Shopify channels you want counted. Traffic and spend stay fixed, so MER and conversion rate snap to on-site performance.', icon: 'channels' },
    { title: 'Compare any period', body: 'Rows by day, week, month or year, against the previous period or the same dates last year.', icon: 'compare' },
    { title: 'Content performance', body: 'Every ad from Meta, TikTok and Klaviyo on one grid, ranked into tiers by purchases and cost per purchase.', icon: 'grid' },
    { title: 'Countries', body: "Sales, orders, traffic and spend by the buyer's country, so you see which markets earn their budget.", icon: 'globe' },
    { title: 'Email and SMS', body: 'Klaviyo campaigns and flows with their revenue next to the ad spend, instead of a tab you forget to open.', icon: 'mail' },
    { title: 'Secure by design', body: 'Official OAuth on every platform, read access only, no passwords stored. Disconnect a source and its token is gone.', icon: 'lock' },
    { title: 'Every source, one status', body: 'Each connection and its last sync at a glance. Push daily numbers from Pinterest or Snapchat as a custom source.', icon: 'sync' },
    { title: 'Targets and pacing', body: 'Set the month in plain terms, including promo days with their own target. Ahead or behind is the first thing you read.', icon: 'target' },
  ] as const,
}

export const how = {
  kicker: 'How it works',
  title: 'Connected in an afternoon. Smarter by the next morning.',
  steps: [
    { n: '01', title: 'Connect', body: 'Sign in to each platform through its own login. Pick the ad accounts, store and property you want in the view.' },
    { n: '02', title: 'Sync', body: 'Push Nexus pulls daily spend, sales, orders and sessions for every source and keeps them current, with history backfilled.' },
    { n: '03', title: 'Decide, every morning', body: 'Open one dashboard with the whole picture: where you stand against target, which ads earned their spend, and what to move today. Then go move it.' },
  ],
}

export const who = {
  kicker: "Who it's for",
  title: 'Brands and the agencies that run them.',
  audiences: [
    {
      key: 'brands',
      title: 'Shopify brands',
      lead: 'Founders and marketing leads who want one honest read on the business each morning.',
      points: [
        'Blended MER and conversion rate without a spreadsheet',
        'Sales channel views for stores that also sell on TikTok Shop or in person',
        'Country and creative breakdowns from the same numbers',
      ],
      view: 'dashboard' as ViewKey,
    },
    {
      key: 'agencies',
      title: 'Agencies',
      lead: 'Teams running paid media for several stores at once.',
      points: [
        'Every client store in one login, same definitions across all of them',
        'Any date range, compared to last period or last year, in seconds',
        'Numbers that match what the client sees in Shopify',
      ],
      view: 'countries' as ViewKey,
    },
  ],
}

export const pacing = {
  kicker: 'Targets and pacing',
  title: 'Ahead or behind is the first thing you read.',
  body: 'Above target MER is budget you can spend. Below it is budget to pull. Either way you see it the next morning, not at month end.',
  monthTarget: '$820,000',
  monthToDate: '$412,380',
  day: 14,
  days: 31,
  ahead: 'Ahead by $42,060',
  mer: '4.82x',
  merTarget: '4.50x',
}

export const security = [
  { title: 'Official OAuth', body: 'Sign in to each platform through its own login. No passwords stored.' },
  { title: 'Read access only', body: 'Push Nexus reads your numbers. It never changes your ads, store or campaigns.' },
  { title: 'Revoke any time', body: 'Disconnect a source and its token is gone.' },
]

export const closing = {
  title: 'Give your store a brain.',
  lede: 'Tell us which platforms you run and we will get you connected.',
}

export const footer = {
  line: 'A Push Analytics product. © 2026 Push Nexus.',
  email: 'hello@pushnexus.ai',
}
