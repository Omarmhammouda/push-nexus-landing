// Product facts come from Push Nexus's own landing page.
// Positioning: Push Nexus is the brain / operating system for an ecommerce store.

export const hero = {
  eyebrow: 'Made by people who run Shopify ad accounts',
  titleLead: 'Built the way a good ecommerce business',
  titleAccent: 'actually gets run.',
  lede:
    'We’ve spent years running paid media for Shopify brands, and Push Nexus is the tool we built for ourselves. It ranks your ads the way we would, tracks you against a monthly target, and tells you each morning where the money’s working and where it isn’t, so you can move budget while it still matters.',
  ledeShort:
    'It ranks your ads the way we would, tracks you against a monthly target, and tells you each morning where the money’s working and where it isn’t.',
  trust: "Read-only access through each platform’s official login. Disconnect anytime.",
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
      'Push Nexus pulls Meta, TikTok, Google, GA4, Shopify and Klaviyo into one place and measures them all the same way. Each morning its AI tells you what changed and why, and suggests where your budget should go next.',
    note: 'Built by a team that runs paid media for Shopify brands.',
  },
  b: {
    eyebrow: 'Built by operators who run Shopify brands',
    titleLead: 'The brain behind your',
    titleAccent: 'Shopify store.',
    lede:
      'While you sleep, Push Nexus AI checks every channel you run, ranks your ads by what they actually sell and sees how you’re pacing against target. In the morning there’s a short brief telling you what to change.',
  },
  c: {
    eyebrow: 'For Shopify brands and the agencies that run them',
    titleLead: 'One brain for every',
    titleAccent: 'store you run.',
    lede:
      'Connect your platforms once and Push Nexus measures every store the same way. Each morning there’s a short AI-written brief for every store, whether you look after one or twenty.',
  },
}

/** Before / after: the problem Push Nexus replaces. */
export const contrast = {
  kicker: 'Why we built it',
  title: 'You already have the data. It’s just spread across six tabs.',
  before: {
    label: 'Without Push Nexus',
    points: [
      'Six ad managers, each with its own version of ROAS',
      'Finding out the month went badly once it’s already over',
      'Killing creatives after $40 of spend because it felt right',
      'Rebuilding the same spreadsheet every Monday',
    ],
  },
  after: {
    label: 'With Push Nexus',
    points: [
      'MER, conversion rate and AOV on one screen, worked out the same way every time',
      'Knowing whether you’re ahead or behind target, every day',
      'Ads ranked by purchases and cost per purchase',
      'A short brief each morning telling you what to change',
    ],
  },
}

/** Push Nexus AI: built on the daily snapshot (written narrative + operator review). */
export const ai = {
  kicker: 'Push Nexus AI',
  title: 'An AI analyst that goes through your store overnight.',
  lede:
    'Every night it looks at your channels, ads and orders, works out what changed, and writes down what it would do today. It’s ready before you start work.',
  capabilities: [
    { icon: 'sun', title: 'Writes your morning brief', body: 'A short recap of what sold yesterday, what it cost and why the numbers moved, written the way you’d explain it to a colleague.' },
    { icon: 'compare', title: 'Explains what changed', body: 'If MER, conversion rate or AOV moves, it tracks down the channel, country or ad behind it.' },
    { icon: 'rank', title: 'Catches winners and losers early', body: 'It points out which ads deserve more budget and which ones are wasting it, before another week goes by.' },
    { icon: 'target', title: 'Suggests today’s changes', body: 'Where to add spend, where to cut back and by how much, based on your monthly target.' },
  ] as const,
  human: 'The AI reads the numbers and one of our operators checks its work. What you do with it is up to you.',
  brief: {
    stamp: 'Morning brief · 7:02 AM',
    lines: [
      'Revenue came in at $31,240 yesterday, 9% above the pace you need for the month.',
      'MER held at 4.82x against a 4.50x target. Most of the lift came from Meta.',
      'Conversion rate slipped in Canada, mostly on mobile. Worth a look at checkout.',
      'Two new UGC ads reached the top tier on under $600 of spend.',
    ],
    callLabel: 'Suggested for today',
    call: 'Move $1,200 a day from Google Shopping into the two new Meta ads.',
    reviewed: 'Checked by your Push Nexus operator',
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
export const platformsNote = 'Works with the platforms you already use, plus a custom source for anything else you track'

export const method = {
  kicker: 'The method',
  title: 'It works the way a good media buyer does.',
  lede:
    'We’ve run paid media for ecommerce brands for years, and three habits made more difference than anything else. Push Nexus does all three for you, on every channel.',
  habits: [
    {
      title: 'Rank ads by what they sell',
      body:
        'Each ad goes into a tier based on purchases and cost per purchase, adjusted for the size of the account. The ones selling a lot at or below your average cost rise to the top. Put more behind those, cut the rest, and stop making calls on $40 of spend.',
      short: 'Ads are tiered by purchases and cost per purchase. Put more behind the top tier, cut the rest, and stop making calls on $40 of spend.',
      view: 'ads' as const,
    },
    {
      title: 'Set a target and track against it',
      body:
        'Set a revenue and MER target for the month. Each day you’ll see whether you’re ahead or behind, by how much, and what today needs to look like to stay on track.',
      short: 'Set a monthly revenue and MER target, then see each day whether you’re ahead or behind and by how much.',
      view: 'dashboard' as const,
    },
    {
      title: 'Adjust spend the same day',
      body:
        'When blended MER is above target, you have room to spend more today. When it drops below, it’s time to pull back. Push Nexus shows you which one it is each morning, so you can adjust right away instead of waiting for the monthly review.',
      short: 'MER above target means you can spend more today. Below target means pull back. Push Nexus tells you which each morning.',
      view: 'snapshot' as const,
    },
  ],
}

export type ViewKey = 'dashboard' | 'ads' | 'countries' | 'snapshot'
export const views: { key: ViewKey; tab: string; title: string; text: string; alt: string }[] = [
  {
    key: 'dashboard',
    tab: 'Dashboard',
    title: 'Dashboard with daily pacing.',
    text: 'How much you’ve sold so far compared with where you should be by today, what you need per day for the rest of the month, and the most you can spend while keeping MER on target.',
    alt: 'Push Nexus dashboard with month pacing bar against target',
  },
  {
    key: 'ads',
    tab: 'Ad ranking',
    title: 'Ad ranking.',
    text: 'Meta and Klaviyo in one grid. Top performers are picked by purchases and cost per purchase, and you can sort the rest by spend, ROAS or CPA.',
    alt: 'Push Nexus ads view with S-tier top performers across Meta and Klaviyo',
  },
  {
    key: 'countries',
    tab: 'International',
    title: 'Performance by country.',
    text: 'Buyer country from Shopify, sessions from GA4 and spend from each ad platform, combined for each country with MER, conversion rate and AOV.',
    alt: 'Push Nexus performance by country table',
  },
  {
    key: 'snapshot',
    tab: 'Daily snapshot',
    title: 'Daily snapshot.',
    text: 'A one-page recap of yesterday written by Push Nexus AI, covering what sold, what it cost, why things moved and what to change today. An operator reviews it before it’s sent.',
    alt: 'Push Nexus daily snapshot with narrative, reviewer note and comparison table',
  },
]
export const viewsHead = {
  kicker: 'Key views',
  title: 'The screens you’ll use most.',
  lede: 'This is the real product running on a demo store, so all the numbers are made up.',
}

export const numbers = {
  kicker: 'The numbers',
  title: 'Numbers that actually add up.',
  lede: 'Every ad platform reports its own results, and they never add up. Push Nexus measures everything against your total sales and total spend, using three numbers that explain almost any change in revenue.',
  metrics: [
    { name: 'MER', formula: 'Sales ÷ Total spend', value: '4.82x', body: 'How efficient your marketing is across every platform combined. Higher is better, and it counts all of your spend.' },
    { name: 'Conversion rate', formula: 'Orders ÷ Traffic', value: '2.41%', body: 'Orders divided by sessions, so you can tell whether the site is turning ad traffic into sales.' },
    { name: 'AOV', formula: 'Sales ÷ Orders', value: '$79.14', body: 'How much each order is worth. Read alongside MER and conversion rate, it explains most swings in revenue.' },
  ],
}

export const product = {
  kicker: 'Product',
  title: 'The features we use every day.',
  lede: 'Pick a date range once and every view follows it. MER means the same thing on every screen.',
  features: [
    { title: 'Sales channel selector', body: 'Choose which Shopify channels to include. Traffic and spend stay the same, so MER and conversion rate reflect what’s happening on your site.', icon: 'channels' },
    { title: 'Compare any period', body: 'Break results down by day, week, month or year, and compare them with the previous period or the same dates last year.', icon: 'compare' },
    { title: 'Content performance', body: 'All your ads from Meta, TikTok and Klaviyo in one grid, ranked by purchases and cost per purchase.', icon: 'grid' },
    { title: 'Countries', body: "Sales, orders, traffic and spend broken down by where buyers are, so you can see which markets are worth the money.", icon: 'globe' },
    { title: 'Email and SMS', body: 'Klaviyo campaign and flow revenue right next to your ad spend, rather than in a tab you forget about.', icon: 'mail' },
    { title: 'Safe to connect', body: 'Official sign-in on every platform, read-only access and no stored passwords. Disconnect a source and its access is removed.', icon: 'lock' },
    { title: 'Connection status', body: 'See every connection and when it last synced. You can also send in daily numbers from Pinterest, Snapchat or anything else.', icon: 'sync' },
    { title: 'Targets and pacing', body: 'Set monthly targets in plain terms, including separate targets for promo days. The dashboard opens on whether you’re ahead or behind.', icon: 'target' },
  ] as const,
}

export const how = {
  kicker: 'How it works',
  title: 'Set it up this afternoon and use it tomorrow morning.',
  steps: [
    { n: '01', title: 'Connect', body: 'Log in to each platform with its own sign-in and choose the ad accounts, store and analytics property you want to include.' },
    { n: '02', title: 'Sync', body: 'Push Nexus pulls in daily spend, sales, orders and sessions from every source, keeps them up to date and fills in your history.' },
    { n: '03', title: 'Check in each morning', body: 'Open one dashboard and see where you are against target, which ads paid for themselves and what’s worth changing today.' },
  ],
}

export const who = {
  kicker: "Who it's for",
  title: 'For Shopify brands and the agencies behind them.',
  audiences: [
    {
      key: 'brands',
      title: 'Shopify brands',
      lead: 'Founders and marketing leads who want to know how the business is really doing, without digging for it.',
      points: [
        'Blended MER and conversion rate without building a spreadsheet',
        'Separate views for stores that also sell on TikTok Shop or in person',
        'Country and creative breakdowns built from the same numbers',
      ],
      view: 'dashboard' as ViewKey,
    },
    {
      key: 'agencies',
      title: 'Agencies',
      lead: 'Teams running paid media for several stores at the same time.',
      points: [
        'Every client store under one login',
        'Any date range compared with last period or last year in a few seconds',
        'Numbers that line up with what clients see in Shopify',
      ],
      view: 'countries' as ViewKey,
    },
  ],
}

export const pacing = {
  kicker: 'Targets and pacing',
  title: 'You’ll know right away if you’re ahead or behind.',
  body: 'If MER is above target, you’ve got budget to spend. If it’s below, it’s time to pull back. Either way you’ll know the next morning, not at the end of the month.',
  monthTarget: '$820,000',
  monthToDate: '$412,380',
  day: 14,
  days: 31,
  ahead: 'Ahead by $42,060',
  mer: '4.82x',
  merTarget: '4.50x',
}

export const security = [
  { title: 'Official OAuth', body: 'Log in to each platform with its own sign-in. We never store your passwords.' },
  { title: 'Read access only', body: 'Push Nexus can read your numbers, but it can’t change your ads, store or campaigns.' },
  { title: 'Revoke any time', body: 'Disconnect a source whenever you want and its access is removed straight away.' },
]

export const closing = {
  title: 'See your store in Push Nexus.',
  lede: 'Tell us which platforms you use and we’ll get you set up.',
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
    titleLead: 'How two fashion brands',
    titleAccent: 'grew with us.',
    lede: 'Two very different fashion brands, with ads run by Push Analytics, the team behind Push Nexus. For both, every budget decision is based on total store sales, not on what each ad platform reports.',
    note: 'To protect our clients, we only show results as percentages. Every figure comes from Shopify and the ad platforms.',
  },
  caseStudies: [
    {
      slug: 'veiled',
      brand: 'Veiled',
      category: 'Modest fashion · Shopify',
      channels: ['Meta', 'Google Ads'],
      headline: 'Growing a modest fashion brand in four countries without losing efficiency.',
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
        { title: 'Two big years', body: 'Each of the first two full years with Push Analytics more than tripled sales, as Meta scaled and Google grew into a real second channel across Search and Shopping.' },
        { title: 'Testing Performance Max, then moving back', body: 'When Google released Performance Max, most of the Google budget moved into it. Over time it moved back to standard Shopping and Search for control over which products and searches get budget. Shopping is now the largest Google line.' },
        { title: 'Every budget call runs on MER', body: 'Every decision is judged on blended MER, read every day. A daily report compares the previous day to target, says what moved and why, and lists the changes being made. Meta runs Advantage+ by country plus catalog and creator partnership ads; Google covers brand, Shopping and category search.' },
        { title: 'The Members Sale', body: 'Veiled’s biggest event of the year went from almost no ad support to a full launch across every market: new campaigns built from Veiled’s own sale creative and creator videos, with Google budgets raised for the weekend. Budgets were reset every night based on that day’s sales and came down as demand slowed.' },
      ],
      highlights: [
        { value: '+6,130%', title: 'Sales growth since we started', body: 'Comparing the latest full year with the year before Push Analytics took over the ads.' },
        { value: '+39% / +41%', title: 'Sales vs. spend this year', body: 'Ad spend rose about as fast as sales, and MER moved by just one percent. The extra money earned back about as much as the rest of the budget.' },
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
        { title: 'Base budgets on MER, not platform ROAS', body: 'Meta and Google both take credit for the same orders. Total store sales divided by total spend can’t be double counted.' },
        { title: 'Scale only as fast as MER allows', body: 'Spend went up this year because MER held steady. If it starts dropping, spend stops going up.' },
        { title: 'Back your biggest day properly', body: 'The Members Sale went from almost no ad support to a full launch, and its first day nearly quadrupled.' },
        { title: 'Don’t set and forget new ad products', body: 'Performance Max took over most of the Google budget for a while. Standard Shopping runs the catalog now.' },
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
      headline: 'Growing a New York streetwear retailer online while its stores kept growing too.',
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
        { title: 'Online measured on its own', body: 'Every step up in budget is judged on online MER: online sales against Meta spend. Store sales are reported separately, so a strong week in the stores can’t hide a weak week online.' },
      ],
      highlights: [
        { value: '+694%', title: 'Online sales growth', body: 'The latest full year against the year before we started. The first year alone grew 154%.' },
        { value: '+13%', title: 'The stores grew too', body: 'Online rose from 20% to 58% of sales, but not at the stores’ expense: store sales reached their best year in the period.' },
        { value: '+101%', title: 'Online doubled as Meta scaled', body: 'Online sales doubled in the year Meta spend stepped up, and the extra spend still more than paid for itself.' },
        { value: '+103%', title: 'New storefronts took off', body: 'Facebook Shop sales doubled over three years, and international orders are up 87% this year.' },
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
        { title: 'Report online and in-store separately', body: 'A great week in the stores can hide a slow week online. FSF judges ads on online sales first, then looks at the total.' },
        { title: 'Advertise product lines, not just the store', body: 'Campaigns follow FSF’s drops and product lines, and each one links to the matching collection.' },
        { title: 'Let people buy where they’re already scrolling', body: 'The Facebook Shop has become one of FSF’s biggest storefronts.' },
        { title: 'Know how far MER can drop before you scale', body: 'Online MER dipped as spend went up, which is normal. The extra spend still paid for itself.' },
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
    title: 'Every result uses the same three numbers.',
    lede: 'We don’t rely on the ROAS ad platforms report. Every result is measured against total store sales and total spend, so a good week on one channel can’t hide a bad week on another.',
    items: [
      { name: 'MER', formula: 'Sales ÷ Total spend' },
      { name: 'Conversion rate', formula: 'Orders ÷ Traffic' },
      { name: 'AOV', formula: 'Sales ÷ Orders' },
    ],
  },
  closing: { title: 'Your store could be next.', lede: 'Tell us which platforms you use and we’ll get you set up.' },
}

/* ---------------- Individual pages ----------------
 * Every claim here restates something already on Push Nexus's own site.
 */
export const pages = {
  product: {
    hero: {
      eyebrow: 'Product',
      titleLead: 'All your channels in one place,',
      titleAccent: 'measured the same way.',
      lede: 'Push Nexus brings Meta, TikTok, Google Ads, GA4, Shopify and Klaviyo into one dashboard. The definitions are the same on every screen, and one date filter updates everything.',
    },
    filter: {
      kicker: 'Date filter',
      title: 'Pick your dates once and every screen updates.',
      lede: 'The same date filter controls the dashboard, ad ranking, countries and the daily snapshot, so you’re never comparing numbers from different date ranges by mistake.',
      points: [
        'Any start and end date',
        'Break it down by day, week, month or year',
        'Compare with the previous period or the same dates last year',
        'Include or leave out Shopify sales channels without changing traffic and spend',
      ],
    },
    sources: {
      kicker: 'Where the numbers come from',
      title: 'Each platform brings something different.',
      items: [
        { name: 'Meta, TikTok, Google Ads', role: 'Ad spend, plus purchases and cost per purchase for every ad' },
        { name: 'Shopify', role: 'Sales, orders, sales channels and where each buyer is' },
        { name: 'GA4', role: 'Sessions, so conversion rate is based on real store traffic' },
        { name: 'Klaviyo', role: 'Revenue from campaigns and flows, shown next to ad spend' },
        { name: 'Custom source', role: 'Daily numbers from Pinterest, Snapchat or anything else you track' },
      ],
    },
  },
  ai: {
    hero: {
      eyebrow: 'Push Nexus AI',
      titleLead: 'Your numbers, already read',
      titleAccent: 'before you start your day.',
      lede: 'Each night it reads yesterday’s numbers from every channel, explains what changed and why, and suggests what to do today. One of our operators checks it before you see it.',
    },
    flow: {
      kicker: 'How the brief gets made',
      title: 'What happens between midnight and your morning coffee.',
      steps: [
        { n: '01', title: 'Read', body: 'Overnight, it pulls in yesterday’s spend, sales, orders, sessions and ad results from every connected source.' },
        { n: '02', title: 'Explain', body: 'It compares the day with your target and works out which channel, country or ad caused any change in MER, conversion rate or AOV.' },
        { n: '03', title: 'Recommend', body: 'It suggests what to change today: where to spend more, where to cut back, and which ads to scale or pause.' },
        { n: '04', title: 'Review', body: 'One of our operators reads it before it goes out, so a person has looked at every suggestion.' },
      ],
    },
    guardrails: {
      kicker: 'What it won’t do',
      title: 'It can suggest changes, but only you can make them.',
      items: [
        { title: 'Read-only', body: 'Push Nexus can read your numbers, but it can’t change your ads, store or campaigns.' },
        { title: 'Reviewed by a person', body: 'Every brief is checked by an operator before it goes out.' },
        { title: 'Same definitions as the dashboard', body: 'It uses the same MER, conversion rate and AOV you see in the dashboard, so the brief and the numbers always agree.' },
      ],
    },
  },
  method: {
    hero: {
      eyebrow: 'The method',
      titleLead: 'Three habits that grow revenue,',
      titleAccent: 'done for you every day.',
      lede: 'Years of running ads for Shopify brands taught us that three habits matter most. Push Nexus keeps up with them so you don’t have to.',
    },
    habits: [
      {
        kicker: 'Habit 01',
        inPractice: [
          'Tiers adjust to the size of the account',
          'The top tier sells a lot at or below the account’s average cost per purchase',
          'Meta, TikTok and Klaviyo ranked side by side',
        ],
      },
      {
        kicker: 'Habit 02',
        inPractice: [
          'Set a monthly revenue and MER target in plain terms',
          'Give promo days their own target',
          'See whether you’re ahead or behind, by how much, and what today needs',
        ],
      },
      {
        kicker: 'Habit 03',
        inPractice: [
          'MER above target: you have room to spend more today',
          'MER below target: time to pull back today',
          'You see it each morning instead of at the monthly review',
        ],
      },
    ],
  },
  how: {
    hero: {
      eyebrow: 'How it works',
      titleLead: 'Set it up this afternoon,',
      titleAccent: 'use it tomorrow morning.',
      lede: 'Log in to each platform, choose the accounts you want, and Push Nexus takes it from there. Your data syncs daily and your history is filled in automatically.',
    },
    faq: {
      kicker: 'Questions',
      title: 'Common questions before connecting.',
      items: [
        { q: 'Can Push Nexus change my ads or store?', a: 'No. Connections are read-only, so Push Nexus can see your numbers but never changes your ads, store or campaigns.' },
        { q: 'Do you store my passwords?', a: 'No. You sign in to each platform through its own official login (OAuth). No passwords are stored.' },
        { q: 'Which platforms can I connect?', a: 'Meta, TikTok, Google Ads, GA4, Shopify and Klaviyo, plus a custom source for daily numbers from anything else you track, such as Pinterest or Snapchat.' },
        { q: 'Will I see my past data?', a: 'Yes. History is backfilled when you connect, so comparisons to last period and last year work from day one.' },
        { q: 'How do I disconnect a source?', a: 'You can disconnect it in Push Nexus at any time, and its access is removed as soon as you do.' },
        { q: 'Why will the numbers match Shopify?', a: 'Sales and orders come straight from Shopify, and every view uses the same definitions, so what you see matches what your store reports.' },
      ],
    },
  },
  who: {
    hero: {
      eyebrow: "Who it's for",
      titleLead: 'For whoever has to answer',
      titleAccent: 'for the numbers.',
      lede: 'Shopify brands that want a clear picture of how the business is doing, and the agencies that run their ads.',
    },
    morning: [
      { audience: 'brands', kicker: 'A morning for a brand', title: 'One look tells you if today needs anything.', body: 'Open the dashboard and you’ll see straight away whether you’re ahead or behind target. The daily snapshot explains what changed, and today’s suggestions are already there.' },
      { audience: 'agencies', kicker: 'A morning for an agency', title: 'Check every client before your first call.', body: 'Switch between client stores without rebuilding reports. Compare any date range with last period or last year in seconds, using numbers that match what each client sees in Shopify.' },
    ],
  },
}
