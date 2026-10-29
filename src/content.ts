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
  category: 'The AI operating system for ecommerce',
  primary: 'Request access',
  secondary: 'See the method',
}

/** Each review direction tests a different line from the same idea. */
export const positioning = {
  a: {
    eyebrow: 'The AI operating system for ecommerce',
    titleLead: 'The operating system for your',
    titleAccent: 'ecommerce store.',
    lede:
      'Push Nexus pulls Meta, TikTok, Google, GA4, Shopify and Klaviyo into one place and measures them the same way. Then its AI tells you every morning what moved, why, and where to put spend today.',
    note: 'Built by the team that runs paid media for Shopify brands.',
  },
  b: {
    eyebrow: 'Built by operators who run Shopify brands',
    titleLead: 'The brain behind your',
    titleAccent: 'Shopify store.',
    lede:
      'Push Nexus AI reads every channel you run overnight, ranks your ads by what they actually sell, paces you against target, and has the call for today waiting when you wake up.',
  },
  c: {
    eyebrow: 'For Shopify brands and the agencies that run them',
    titleLead: 'One brain for every',
    titleAccent: 'store you run.',
    lede:
      'Push Nexus gives brands and agencies one AI-powered operating system for paid media: every platform connected, every number defined the same way, and an AI-written brief with a clear call for every store, every morning.',
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
      'An AI-written brief every morning with the call for today',
    ],
  },
}

/** Push Nexus AI: built on the daily snapshot (written narrative + operator review). */
export const ai = {
  kicker: 'Push Nexus AI',
  title: 'An AI analyst that reads your whole store overnight.',
  lede:
    'While you sleep, Push Nexus AI goes through every channel, every ad and every order, works out what changed and why, and has the call for today ready when you open your laptop.',
  capabilities: [
    { icon: 'sun', title: 'Writes your morning brief', body: 'Yesterday in plain English: what sold, what it cost, and what moved the number.' },
    { icon: 'compare', title: 'Explains every move', body: 'When MER, conversion rate or AOV shifts, it traces the change to the channel, country or creative behind it.' },
    { icon: 'rank', title: 'Spots winners and drains early', body: 'Flags the ads ready to scale and the ones quietly burning budget, before the week is gone.' },
    { icon: 'target', title: 'Makes the call for today', body: 'Where to add spend, where to pull it, and how much, measured against your monthly target.' },
  ] as const,
  human: 'AI does the reading. An operator checks the call. You make the move.',
  brief: {
    stamp: 'Morning brief · 7:02 AM',
    lines: [
      'Revenue came in at $31,240 yesterday, 9% above the pace you need for the month.',
      'MER held at 4.82x against a 4.50x target. Most of the lift came from Meta.',
      'Conversion rate slipped in Canada, mostly on mobile. Worth a look at checkout.',
      'Two new UGC ads reached the top tier on under $600 of spend.',
    ],
    callLabel: 'The call for today',
    call: 'Move $1,200 a day from Google Shopping into the two new Meta ads.',
    reviewed: 'Reviewed by your Push Nexus operator',
  },
}

export const nav = [
  { label: 'Product', href: '/product' },
  { label: 'AI', href: '/ai' },
  { label: 'Method', href: '/method' },
  { label: 'How it works', href: '/how-it-works' },
  { label: "Who it's for", href: '/who' },
  { label: 'Results', href: '/results' },
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
    title: 'The AI daily snapshot.',
    text: 'Yesterday in one page, written by Push Nexus AI: what sold, what it cost, why it moved, and the call for today. An operator reviews it before it goes out.',
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

/* ---------------- Results: client case studies ----------------
 * From Push Analytics' own case study drafts. Revenue, spend, orders, dates and
 * names are removed on purpose; only percentage changes are shown as proof.
 * Get the client's written sign-off before publishing.
 */
export type CaseStudy = {
  slug: string
  brand: string
  category: string
  channels: string[]
  headline: string
  summary: string
  kpis: { value: string; label: string }[]
  start: { title: string; body: string; points: string[] }
  phases: { title: string; body: string }[]
  highlights: { value: string; title: string; body: string }[]
  growth: { label: string; note: string; bars: { label: string; value: number; current?: boolean }[] }
  takeaways: { title: string; body: string }[]
  measured: string[]
}

export const results: {
  hero: { eyebrow: string; titleLead: string; titleAccent: string; lede: string; note: string }
  caseStudies: CaseStudy[]
  measure: { kicker: string; title: string; lede: string; items: { name: string; formula: string }[] }
  closing: { title: string; lede: string }
} = {
  hero: {
    eyebrow: 'Results',
    titleLead: 'Real brands. Real growth,',
    titleAccent: 'measured one way.',
    lede: 'How the team behind Push Nexus grew two very different fashion brands by running every budget call on the whole store, not on what each ad platform claims.',
    note: 'To protect our clients, results are shown as percentage changes only. Every figure comes from Shopify and the ad platforms.',
  },
  caseStudies: [
    {
      slug: 'veiled',
      brand: 'Veiled',
      category: 'Modest fashion · Shopify',
      channels: ['Meta', 'Google Ads'],
      headline: 'Growing a modest fashion brand across four markets, at the same efficiency.',
      summary: 'Veiled sells hijabs, abayas, dresses and sets online in the US, Canada, the UK and Australia. Push Analytics has run its paid media on Meta and Google from the early days, and every budget decision is made on blended MER: total store sales against total ad spend.',
      kpis: [
        { value: '+6,130%', label: 'Shopify sales vs. the year before we started' },
        { value: '+39%', label: 'sales this year, with efficiency held steady' },
        { value: '+297%', label: 'first day of the Members Sale, year over year' },
      ],
      start: {
        title: 'Where Veiled started',
        body: 'Most of the year’s sales landed in a single season around Ramadan and Eid. On Meta, no new campaigns had been launched in months, and the business leaned on a small base of loyal customers.',
        points: ['Sales concentrated in one season', 'A paused Meta account', 'No Google Ads campaigns'],
      },
      phases: [
        { title: 'From kickoff to a full funnel', body: 'The first campaigns went live for Veiled’s Eid sale, with daily reporting from day one. Audiences were split into cold, warm and hot groups so each saw its own message, Google Search and Shopping launched that autumn, and a VIP list was built ahead of Black Friday.' },
        { title: 'Two years of tripling', body: 'Each of the first two full years with Push Analytics more than tripled sales, as Meta scaled and Google grew into a real second channel across Search and Shopping.' },
        { title: 'Testing Performance Max, then moving back', body: 'When Google released Performance Max, most of the Google budget moved into it. Over time it moved back to standard Shopping and Search for control over which products and searches get budget. Shopping is now the largest Google line.' },
        { title: 'One number for every budget call', body: 'Every decision is judged on blended MER, read every day. A daily report compares the previous day to target, says what moved and why, and lists the changes being made. Meta runs Advantage+ by country plus catalog and creator partnership ads; Google covers brand, Shopping and category search.' },
        { title: 'The Members Sale', body: 'Veiled’s biggest event of the year went from almost no ad support to a full launch across every market: new campaigns built from Veiled’s own sale creative and creator videos, with Google budgets raised for the weekend. Budgets were reset every night from that day’s sales, stepping down as demand cooled.' },
      ],
      highlights: [
        { value: '+6,130%', title: 'Sales growth since we started', body: 'Comparing the latest full year with the year before Push Analytics took over the ads.' },
        { value: '+39% / +41%', title: 'Sales vs. spend this year', body: 'Ad spend rose about as fast as sales, and MER moved by just one percent. The extra spend paid back at the same rate as the existing spend.' },
        { value: '+297%', title: 'Members Sale, first day', body: 'Year over year, with average order value up 25% and the first four days up 157%.' },
        { value: '68%', title: 'Orders from returning customers', body: 'Up from 41% before we started, while new-customer orders still grew more than twentyfold.' },
      ],
      growth: {
        label: 'Shopify sales, year over year',
        note: 'Each bar is growth on the year before. The last bar is this year to date.',
        bars: [
          { label: 'Yr 1', value: 377 },
          { label: 'Yr 2', value: 145 },
          { label: 'Yr 3', value: 102 },
          { label: 'Yr 4', value: 27 },
          { label: 'Yr 5', value: 25 },
          { label: 'Yr 6', value: 8 },
          { label: 'This yr', value: 39, current: true },
        ],
      },
      takeaways: [
        { title: 'Run budgets on MER, not platform ROAS', body: 'Meta and Google each claim the same orders. Store sales against total spend can’t be double counted.' },
        { title: 'Scale as fast as MER allows, and no faster', body: 'Spend rose this year because MER barely moved. When it starts to fall, spend stops rising.' },
        { title: 'Put real money behind your biggest day', body: 'The Members Sale went from almost no ad support to a full launch, and its first day nearly quadrupled.' },
        { title: 'Re-test new ad products', body: 'Performance Max took most of the Google budget for a while. Standard Shopping now runs the catalog.' },
      ],
      measured: [
        'Sales are Shopify total sales across every Veiled sales channel.',
        'Ad spend is Meta plus Google Ads spend, from each platform’s API.',
        'MER is Shopify total sales divided by total ad spend. It counts every sale, not only the ones an ad platform claims.',
        'The starting point is the twelve months before our first campaigns. Year-to-date comparisons use the same dates in both years.',
        'Results observed while we ran Veiled’s ads, alongside Veiled’s own team, products, email and creative. None is from a holdout test.',
      ],
    },
    {
      slug: 'first-stop-fashion',
      brand: 'First Stop Fashion',
      category: 'Streetwear retail · New York · Shopify + POS',
      channels: ['Meta'],
      headline: 'Growing a New York streetwear retailer online, alongside its stores.',
      summary: 'First Stop Fashion (FSF NYC) sells streetwear in its New York stores and online through its website, a Facebook Shop, a mobile app, an international checkout and TikTok, all on Shopify. Push Analytics runs its Meta advertising and judges every step on online sales, reported separately from the stores.',
      kpis: [
        { value: '+694%', label: 'online sales vs. the year before we started' },
        { value: '20% → 58%', label: 'online share of total sales' },
        { value: '+13%', label: 'store sales over the same period' },
      ],
      start: {
        title: 'Where FSF started',
        body: 'Most of FSF’s sales happened in its stores, and online was a fifth of the business. On Meta, FSF had only ever boosted posts and promoted its page.',
        points: ['Online was a fifth of sales', 'Only boosted posts on Meta', 'One online storefront'],
      },
      phases: [
        { title: 'From setup to Black Friday in weeks', body: 'The first campaign launched for a new product release, followed by a conversion-optimized funnel and a full-funnel campaign for a single hero product. Daily reports started right away, and FSF ran its first Black Friday sale and retargeting campaigns.' },
        { title: 'More places to buy', body: 'FSF went from one online storefront to four: the website, a mobile app, a Facebook Shop and an international checkout. Online sales nearly doubled in the first full year.' },
        { title: 'Scaling Meta by product line', body: 'Budget grew step by step, with campaigns built around FSF’s product lines and drops, each linked to the matching collection. Catalog ads show live prices, and reels from FSF’s own Instagram run as ads, keeping their likes and comments.' },
        { title: 'Online judged on its own', body: 'Every step up in budget is judged on online MER: online sales against Meta spend. Store sales are reported separately, so a strong week in the stores can’t hide a weak week online.' },
      ],
      highlights: [
        { value: '+694%', title: 'Online sales growth', body: 'The latest full year against the year before we started. The first year alone grew 154%.' },
        { value: '+13%', title: 'The stores grew too', body: 'Online rose from 20% to 58% of sales, but not at the stores’ expense: store sales reached their best year in the period.' },
        { value: '+101%', title: 'Online doubled as Meta scaled', body: 'Online sales doubled in the year Meta spend stepped up, and the extra spend still came back at a healthy multiple.' },
        { value: '+103%', title: 'New channels became real', body: 'Facebook Shop sales doubled over three years, and international orders are up 87% this year.' },
      ],
      growth: {
        label: 'Online sales, year over year',
        note: 'Each bar is growth on the year before. The last bar is this year to date.',
        bars: [
          { label: 'Yr 1', value: 95 },
          { label: 'Yr 2', value: 1 },
          { label: 'Yr 3', value: 29 },
          { label: 'Yr 4', value: 12 },
          { label: 'Yr 5', value: 101 },
          { label: 'This yr', value: 38, current: true },
        ],
      },
      takeaways: [
        { title: 'Report online and stores separately', body: 'A strong store week can hide a weak online week. FSF judges ads on online sales, then looks at the total.' },
        { title: 'Advertise product lines, not just the store', body: 'Campaigns follow FSF’s drops and lines, each linked to the matching collection.' },
        { title: 'Let people buy where they scroll', body: 'The Facebook Shop grew into one of FSF’s biggest storefronts.' },
        { title: 'Decide how far MER can fall before you scale', body: 'Online MER eased as spend grew, which is expected. The extra spend still paid back.' },
      ],
      measured: [
        'Online sales are Shopify total sales from the website, Facebook Shop, mobile app, international checkout and TikTok. Draft and wholesale orders are excluded.',
        'Store sales are Shopify POS total sales from FSF’s New York stores.',
        'The starting point is the twelve months before our first campaign. Store comparisons start from the first full year, because the starting year included the spring store closures.',
        'Online MER is online sales divided by Meta ad spend.',
        'Results observed while we ran FSF’s ads, alongside FSF’s own team, products, stores and promotions. None is from a holdout test.',
      ],
    },
  ],
  measure: {
    kicker: 'How we measure',
    title: 'Every result, the same three numbers.',
    lede: 'No platform-reported ROAS. Each result is measured against the whole store and total spend, so a win on one channel cannot hide a loss on another.',
    items: [
      { name: 'MER', formula: 'Sales ÷ Total spend' },
      { name: 'Conversion rate', formula: 'Orders ÷ Traffic' },
      { name: 'AOV', formula: 'Sales ÷ Orders' },
    ],
  },
  closing: { title: 'Your store could be the next one here.', lede: 'Tell us which platforms you run and we will get you connected.' },
}

/* ---------------- Individual pages ----------------
 * Every claim here restates something already on Push Nexus's own site.
 */
export const pages = {
  product: {
    hero: {
      eyebrow: 'Product',
      titleLead: 'Every channel, measured one way,',
      titleAccent: 'on one screen.',
      lede: 'Push Nexus joins Meta, TikTok, Google Ads, GA4, Shopify and Klaviyo into one dashboard, with the same definitions on every view and one date filter that moves them all.',
    },
    filter: {
      kicker: 'One filter, every view',
      title: 'Pick the dates once. Every screen follows.',
      lede: 'One shared date filter runs across the dashboard, ads, countries and the daily snapshot, so you never compare numbers from two different ranges.',
      points: [
        'Any start and end date',
        'Rows by day, week, month or year',
        'Against the previous period or the same dates last year',
        'Shopify sales channels in or out, with traffic and spend held fixed',
      ],
    },
    sources: {
      kicker: 'What each source adds',
      title: 'Each platform does one job. Push Nexus joins them.',
      items: [
        { name: 'Meta, TikTok, Google Ads', role: 'Spend, and every ad with its purchases and cost per purchase' },
        { name: 'Shopify', role: 'Sales, orders, sales channels and the buyer’s country' },
        { name: 'GA4', role: 'Sessions, so conversion rate reflects real store traffic' },
        { name: 'Klaviyo', role: 'Campaign and flow revenue, next to the ad spend' },
        { name: 'Custom source', role: 'Daily numbers from Pinterest, Snapchat or anything else you track' },
      ],
    },
  },
  ai: {
    hero: {
      eyebrow: 'Push Nexus AI',
      titleLead: 'The analyst that has read',
      titleAccent: 'your whole store by 7 AM.',
      lede: 'Push Nexus AI goes through every channel, ad and order overnight, explains what moved and why, and writes the call for today. An operator reviews it before it reaches you.',
    },
    flow: {
      kicker: 'How a brief comes together',
      title: 'From raw numbers to one clear call.',
      steps: [
        { n: '01', title: 'Read', body: 'Overnight, it pulls yesterday from every connected source: spend, sales, orders, sessions and every ad.' },
        { n: '02', title: 'Explain', body: 'It measures the day against your target and traces any move in MER, conversion rate or AOV to the channel, country or creative behind it.' },
        { n: '03', title: 'Recommend', body: 'It writes the call for today: where to add spend, where to pull it, and which ads to scale or cut.' },
        { n: '04', title: 'Review', body: 'An operator checks the brief before it goes out, so the call you read has had a second pair of eyes.' },
      ],
    },
    guardrails: {
      kicker: 'Guardrails',
      title: 'It advises. You decide.',
      items: [
        { title: 'Read-only', body: 'Push Nexus reads your numbers. It never changes your ads, store or campaigns.' },
        { title: 'Reviewed before it lands', body: 'Every brief is checked by an operator before it goes out.' },
        { title: 'Same definitions as the dashboard', body: 'The brief uses the same MER, conversion rate and AOV you see on every screen, so the story and the numbers always match.' },
      ],
    },
  },
  method: {
    hero: {
      eyebrow: 'The method',
      titleLead: 'Three habits that moved revenue,',
      titleAccent: 'running every day.',
      lede: 'Years of running paid media for Shopify brands came down to three habits. Push Nexus runs them across every channel, every morning, so you do not have to.',
    },
    habits: [
      {
        kicker: 'Habit 01',
        inPractice: [
          'Tiers scale with the size of the account',
          'Top tier: selling at volume, at or under the account average cost per purchase',
          'Meta, TikTok and Klaviyo ranked on one grid',
        ],
      },
      {
        kicker: 'Habit 02',
        inPractice: [
          'A revenue and MER target for the month, set in plain terms',
          'Promo days can carry their own target',
          'Ahead or behind, by how much, and what today has to do',
        ],
      },
      {
        kicker: 'Habit 03',
        inPractice: [
          'Blended MER above target means budget you can spend today',
          'Below target means budget to pull today',
          'Surfaced every morning, not at the monthly review',
        ],
      },
    ],
  },
  how: {
    hero: {
      eyebrow: 'How it works',
      titleLead: 'Connected in an afternoon.',
      titleAccent: 'Smarter by the next morning.',
      lede: 'Sign in to each platform through its own login, pick the accounts you want, and Push Nexus does the rest: syncing every day, with history backfilled.',
    },
    faq: {
      kicker: 'Questions',
      title: 'What people ask before they connect.',
      items: [
        { q: 'Can Push Nexus change my ads or store?', a: 'No. Connections are read-only. Push Nexus reads your numbers and never changes your ads, store or campaigns.' },
        { q: 'Do you store my passwords?', a: 'No. You sign in to each platform through its own official login (OAuth). No passwords are stored.' },
        { q: 'Which platforms can I connect?', a: 'Meta, TikTok, Google Ads, GA4, Shopify and Klaviyo, plus a custom source for daily numbers from anything else you track, such as Pinterest or Snapchat.' },
        { q: 'Will I see my past data?', a: 'Yes. History is backfilled when you connect, so comparisons to last period and last year work from day one.' },
        { q: 'How do I disconnect a source?', a: 'Disconnect it in Push Nexus at any time. Its token is gone the moment you do.' },
        { q: 'Why will the numbers match Shopify?', a: 'Sales and orders come straight from Shopify, and every view uses the same definitions, so what you see matches what your store reports.' },
      ],
    },
  },
  who: {
    hero: {
      eyebrow: "Who it's for",
      titleLead: 'Built for the people who',
      titleAccent: 'answer for the numbers.',
      lede: 'Shopify brands that want one honest read on the business each morning, and the agencies that run paid media for them.',
    },
    morning: [
      { audience: 'brands', kicker: 'A morning for a brand', title: 'One look tells you whether today needs anything.', body: 'Open the dashboard and the first thing you read is ahead or behind target. The daily snapshot says what moved and why, and the call for today is already written.' },
      { audience: 'agencies', kicker: 'A morning for an agency', title: 'Every client, one login, the same definitions.', body: 'Move between client stores without rebuilding a report. Any date range, compared to last period or last year, in seconds, with numbers that match what each client sees in Shopify.' },
    ],
  },
}
