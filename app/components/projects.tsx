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
    description: 'Crypto research platform combining social-graph signals with on-chain data. I led product and BD: scaled to 35K+ monitored accounts, launched API serving 250+ paying clients at 80%+ retention, drove 40% YoY active-user growth.',
    link: 'https://twitterscore.io',
    tech: ['Product Management', 'API Strategy', 'Social Graph', 'B2B SaaS'],
  },
  {
    name: 'Jordan — 5-agent AI system',
    description: 'Autonomous multi-agent system I run in production. Orchestrator + 4 domain agents (research, finance, jobs, fitness) with shared semantic memory, supervisors, crash recovery, and 8 daily digest pipelines. Runs 24/7.',
    link: 'https://app.nikoxyz.com',
    tech: ['Claude Code', 'MCP', 'Anthropic SDK', 'bge-m3 RAG'],
  },
  {
    name: 'TwitterScoreAI',
    description: 'Content automation pipeline for crypto-research posts: 7 handlers (smart drops, funding rounds, deep dives, reply scout), Typefully integration, Telegram approval flow. Built on top of TwitterScore data.',
    link: 'https://twitterscore.io',
    tech: ['Typefully API', 'Claude', 'Telegram Bot', 'SQLite'],
  },
  {
    name: 'AI Product Analyzer',
    description: 'Turns product URLs into structured teardowns — supplier parser, deterministic scoring, economics model. Public demo deployed on Vercel.',
    link: 'https://analyzer.nikoxyz.com',
    tech: ['Next.js', 'Claude API', 'Playwright', 'Python'],
  },
  {
    name: 'Extraction',
    description: 'Open dataset of every notable crypto exploit, hack, and major collapse since 2014 — visualized as bubbles, sized by USD lost, colored by attack vector. 1,189 incidents · $115B total · 34 attributed to Lazarus / DPRK with three-tier source confidence. Vibe-coded with Claude Code over a weekend.',
    link: 'https://extraction.work',
    tech: ['Next.js', 'd3-force', 'Tavily', 'Claude Code'],
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
            className="group block p-4 rounded-lg border border-border hover:border-primary transition-all duration-300 bg-card hover:bg-muted hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
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
                  className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground border border-border hover:bg-card hover:border-primary hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/20 transition-all duration-200 cursor-pointer"
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
