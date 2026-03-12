import { ArrowUpRight } from 'lucide-react'

interface Project {
  name: string
  description: string
  link: string
  tech: string[]
}

const projects: Project[] = [
  {
    name: 'TwitterScore',
    description: 'Crypto research platform that combines social sentiment analysis with on-chain data to help investors discover early projects and track smart money movements. Features AI-powered alpha detection and influencer credibility scoring.',
    link: 'https://twitterscore.io',
    tech: ['Next.js', 'AI/ML', 'On-Chain Analytics', 'Social Graph API'],
  },
  {
    name: 'YieldHunter',
    description: 'Cross-chain yield farming aggregator that automatically discovers and compares APYs across 20+ DeFi protocols. Includes impermanent loss calculator and risk assessment matrix for liquidity providers.',
    link: 'https://github.com/NikolayBohdanov/yield-hunter',
    tech: ['Solidity', 'React', 'Ethers.js', 'Subgraph'],
  },
  {
    name: 'TokenSight',
    description: 'Real-time token launch monitoring bot that tracks new pairs on Uniswap, SushiSwap, and PancakeSwap. Alerts users to potential gems with custom filters for liquidity, holder distribution, and contract safety.',
    link: 'https://github.com/NikolayBohdanov/token-sight',
    tech: ['Node.js', 'Web3.js', 'Telegram Bot API', 'MongoDB'],
  },
  {
    name: 'CryptoPortfolio Tracker',
    description: 'Personal DeFi dashboard aggregating positions across multiple chains (Ethereum, Arbitrum, Base, Solana). Tracks P&L, impermanent loss, and auto-compounding yields with beautiful visualizations.',
    link: 'https://github.com/NikolayBohdanov/defi-dashboard',
    tech: ['TypeScript', 'Next.js', 'TailwindCSS', 'Dune Analytics API'],
  },
]

export function Projects() {
  return (
    <section>
      <h2 className="section-title">Projects</h2>
      <div className="grid gap-6">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-4 rounded-lg border-border hover:border-ring transition-all bg-card hover:bg-muted card-hover"
          >
            <div className="flex items-start justify-between">
              <h3 className="font-semibold text-lg text-card-foreground group-hover:text-muted-foreground transition-colors">
                {project.name}
              </h3>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              {project.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground border-border hover:bg-card hover:border-ring hover:-translate-y-0.5 hover:shadow-md transition-all cursor-pointer"
                >
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
