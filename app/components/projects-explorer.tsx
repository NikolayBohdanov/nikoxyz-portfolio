'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

type Category = 'crypto' | 'agents' | 'products'

type Project = {
  name: string
  description: string
  link?: string
  /** Deep-dive blog post linked as "proof in production". */
  relatedPost?: { href: string; label: string }
  tech: string[]
  status?: 'live' | 'in-progress' | 'private'
}

const projects: Record<Category, { label: string; items: Project[] }> = {
  crypto: {
    label: 'Crypto Research',
    items: [
      {
        name: 'Web3 Due Diligence Framework',
        description:
          'Proprietary DD framework used across 200+ Web3 projects — tokenomics, vesting schedules, emission models, on-chain liquidity, wallet concentration, and smart-contract risk. Backs capital allocation memos across DeFi, Layer 2, RWAs, and derivatives.',
        tech: ['Tokenomics', 'On-chain Analytics', 'Dune', 'Nansen', 'Arkham'],
        status: 'private',
      },
      {
        name: 'Crypto Twitter Digest',
        description:
          'Daily automated research pipeline: scraper.tech list-timelines → Claude analysis → Telegram digest. Tracks high-signal accounts, narrative rotation, and smart-money moves. Runs at 09:25 every morning.',
        tech: ['scraper.tech', 'Claude Sonnet', 'Telegram', 'LaunchAgent'],
        status: 'live',
      },
      {
        name: 'AI × On-chain Experiments',
        description:
          'Weekend builds combining LLMs with Blockscout MCP: natural-language queries over on-chain data, wallet reasoning, contract inspection. Ongoing series of small demos.',
        tech: ['Blockscout MCP', 'Claude', 'Base', 'Solana'],
        status: 'in-progress',
      },
      {
        name: 'Tokenomics & Risk Memos',
        description:
          'Structured investment memos for a private crypto investment office — supply pressure models, incentive design review, protocol-level risk assessment. Anonymised aggregates available on request.',
        tech: ['Due Diligence', 'Risk Modeling', 'Research Writing'],
        status: 'private',
      },
    ],
  },
  agents: {
    label: 'AI Agents',
    items: [
      {
        name: 'Jordan — 5-agent Orchestrator',
        description:
          'Autonomous multi-agent system in production. Orchestrator + 4 domain agents (research, finance, jobs, fitness) with shared semantic memory, supervisors, crash recovery, write-ahead logging. Runs my operating week 24/7.',
        link: 'https://app.nikoxyz.com',
        relatedPost: {
          href: '/blog/5-agents-running-my-life',
          label: 'Read the 3-month production write-up',
        },
        tech: ['Claude Code', 'MCP', 'Anthropic SDK', 'bge-m3 RAG', 'SQLite'],
        status: 'live',
      },
      {
        name: 'Memory Search v3',
        description:
          'Hybrid FTS5 + bge-m3 semantic search across 144 files / 1707 chunks. Section-aware chunking, recency boost, instant reindex. Shared memory layer for all 5 agents + Jordan.',
        tech: ['bge-m3', 'Ollama', 'SQLite FTS5', 'MCP'],
        status: 'live',
      },
      {
        name: 'Claude Code Cookbook',
        description:
          'OSS repo of real patterns from running 5 agents in production — supervisor design, micro-flush checkpointing, memory flushing, permission bypass. Each pattern also a Twitter thread.',
        tech: ['Claude Code', 'TypeScript/Bun', 'MCP'],
        status: 'in-progress',
      },
    ],
  },
  products: {
    label: 'Shipped Products',
    items: [
      {
        name: 'TwitterScore.io',
        description:
          'Crypto research platform combining social-graph signals with on-chain data. As PM & BD Lead: scaled to 35K+ monitored accounts, launched API serving 250+ paying clients at 80%+ retention, drove 40% YoY growth.',
        link: 'https://twitterscore.io',
        tech: ['Product Management', 'API Strategy', 'B2B SaaS', 'Social Graph'],
        status: 'live',
      },
      {
        name: 'Dashboard Hub',
        description:
          'Unified gateway for all my personal agents — Jobs kanban, fitness recovery, finance ops. One public URL, two modes: strangers see an aspirational demo, I see my real data after email sign-in. Shadcn monochrome UI, Python gateway, Cloudflare Access.',
        link: 'https://app.nikoxyz.com',
        tech: ['Python', 'Cloudflare Access', 'Shadcn', 'SQLite'],
        status: 'live',
      },
      {
        name: 'TwitterScoreAI — Twitter content suite',
        description:
          'Twitter management product: 7-handler content pipeline (smart drops, airdrop radar, funding rounds, deep dives, leaderboard, reply manager, daily report) plus Smart Drop Cards — a visual generator with 5 layouts and dynamic glassmorphism. Typefully integration + Telegram approval flow for safe autoposting.',
        link: 'https://cards.nikoxyz.com',
        tech: ['Typefully API', 'Claude', 'Telegram Bot', 'Next.js', 'Canvas API'],
        status: 'live',
      },
      {
        name: 'AI Product Analyzer',
        description:
          'Turns product URLs into structured teardowns — deterministic scoring, supplier parser, economics model. Public demo deployed on Vercel.',
        link: 'https://analyzer.nikoxyz.com',
        tech: ['Next.js', 'Claude API', 'Playwright', 'Python'],
        status: 'live',
      },
      {
        name: 'Extraction',
        description:
          'Open dataset of every notable crypto exploit, hack, and major collapse since 2014. 1,189 incidents · $115B stolen · 34 Lazarus / DPRK attributed (tiered by source confidence). Bubble visualization sized by USD, colored by attack vector. Search, year-scrubber, attacker-address links to chain explorers, CSV export. Free, ad-free, no paywall.',
        link: 'https://extraction.work',
        relatedPost: {
          href: '/blog/extraction-launch',
          label: 'How I built it in a weekend →',
        },
        tech: ['Next.js', 'd3-force', 'Tavily', 'DefiLlama API', 'Claude Code'],
        status: 'live',
      },
    ],
  },
}

const order: Category[] = ['products', 'agents', 'crypto']

function StatusBadge({ status }: { status?: Project['status'] }) {
  if (!status) return null
  const map: Record<NonNullable<Project['status']>, string> = {
    live: 'Live',
    'in-progress': 'In progress',
    private: 'Private',
  }
  return (
    <span className="text-xs px-2 py-0.5 rounded-md bg-muted border border-border text-muted-foreground">
      {map[status]}
    </span>
  )
}

export function ProjectsExplorer() {
  const [active, setActive] = useState<Category>('products')
  const current = projects[active]

  return (
    <div>
      {/* Tab switcher */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-border pb-2">
        {order.map((key) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={[
              'px-4 py-2 text-sm font-medium rounded-md transition-all',
              active === key
                ? 'bg-card text-foreground border border-border shadow-sm'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted/40',
            ].join(' ')}
          >
            {projects[key].label}
            <span className="ml-2 text-xs text-muted-foreground">{projects[key].items.length}</span>
          </button>
        ))}
      </div>

      {/* Project cards */}
      <div className="grid gap-6">
        {current.items.map((project) => {
          const hasInteractive = Boolean(project.link || project.relatedPost)

          return (
            <div
              key={project.name}
              className={[
                'group block p-5 rounded-lg border border-border bg-card transition-all duration-200',
                hasInteractive
                  ? 'hover:border-primary hover:bg-muted hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1'
                  : '',
              ].join(' ')}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-lg text-card-foreground">{project.name}</h3>
                    <StatusBadge status={project.status} />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} — open live`}
                    className="shrink-0 mt-1"
                  >
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </a>
                )}
              </div>
              {project.relatedPost && (
                <div className="mt-4 pt-4 border-t border-border">
                  <Link
                    href={project.relatedPost.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:underline"
                  >
                    {project.relatedPost.label}
                    <span aria-hidden className="text-muted-foreground">→</span>
                  </Link>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
