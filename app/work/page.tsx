import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export const metadata = {
  title: 'Work',
  description: 'Selected case studies — scaling TwitterScore, building a 5-agent AI system, shipping crypto research tools.',
}

type Case = {
  slug: string
  title: string
  period: string
  summary: string
  href: string
  external?: boolean
  status: 'live' | 'draft'
}

const cases: Case[] = [
  {
    slug: 'twitterscore-api',
    title: 'Scaled TwitterScore API from 0 to 250+ paying clients at 80%+ retention',
    period: 'PM & BD Lead // 2023 — Present',
    summary:
      'Led product and BD at TwitterScore.io: expanded indexed DB by 80% to 35K+ monitored crypto accounts, launched API + subscription products serving 250+ clients, secured ecosystem partnerships (CryptoRank, RootData, ChainGPT).',
    href: '/work/twitterscore-api',
    status: 'draft',
  },
  {
    slug: 'jordan-5-agent',
    title: 'Built Jordan — a 5-agent system running my research, finance, jobs, and fitness ops 24/7',
    period: 'AI Systems Architect // 2025 — Present',
    summary:
      'Orchestrator + 4 domain agents, shared semantic memory (bge-m3 + SQLite), supervisors with crash recovery and write-ahead logging, 8 automated daily digest pipelines, MCP server integrations.',
    href: '/work/jordan-5-agent',
    status: 'draft',
  },
  {
    slug: 'twitterscore-ai',
    title: 'Shipped TwitterScoreAI — an agent that drafts, schedules, and publishes crypto content',
    period: 'Solo build // 2026',
    summary:
      '7 content handlers (smart drops, funding rounds, deep dives, reply scout), Typefully integration, Telegram approval flow, SQLite state. First drafts published April 2026.',
    href: '/work/twitterscore-ai',
    status: 'draft',
  },
  {
    slug: 'web3-research',
    title: 'Evaluated 200+ Web3 projects across three market cycles',
    period: 'Research & Risk Analyst // 2022 — Present',
    summary:
      'Built a proprietary due-diligence framework integrating token valuation, tokenomics, on-chain liquidity, wallet concentration, and smart-contract risk. Memos support capital allocation across DeFi, L2, RWAs, and derivatives.',
    href: '/work/web3-research',
    status: 'draft',
  },
]

export default function WorkPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-2">Work</h1>
      <p className="text-muted-foreground mb-10">
        Selected case studies. Longer write-ups land here as they ship — I prefer publishing nothing over publishing half-finished.
      </p>

      <div className="space-y-6">
        {cases.map((c) => (
          <article
            key={c.slug}
            className="group block p-5 rounded-lg border border-border bg-card hover:border-primary hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/10 transition-all duration-200"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{c.period}</p>
                <h2 className="text-lg font-semibold text-card-foreground mb-2 leading-snug">
                  {c.status === 'draft' ? (
                    <span>{c.title}</span>
                  ) : (
                    <Link href={c.href} className="group-hover:text-foreground transition-colors">
                      {c.title}
                    </Link>
                  )}
                </h2>
                <p className="text-sm text-muted-foreground">{c.summary}</p>
                {c.status === 'draft' && (
                  <p className="mt-3 text-xs text-muted-foreground">Case study in progress — reach out for early preview.</p>
                )}
              </div>
              {c.status !== 'draft' && (
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors shrink-0 mt-1" />
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
