import { Search, BarChart3, Boxes, Users } from 'lucide-react'

const skills = [
  {
    title: 'Blockchain & Investment Research',
    icon: Search,
    description: 'Web3 market research, tokenomics analysis, ICO/IDO evaluation, DeFi protocol analysis',
    tags: ['Token Valuation', 'Smart Contract Risk', 'Layer 2 Analysis', 'On-chain Analytics'],
  },
  {
    title: 'Data & Analytics',
    icon: BarChart3,
    description: 'Python, data analysis, social graph analysis, blockchain analytics, BI tools',
    tags: ['Dune', 'Nansen', 'Arkham', 'Python', 'SQL', 'Excel'],
  },
  {
    title: 'Product & Business Development',
    icon: Boxes,
    description: 'Product management, API strategy, B2B SaaS, subscription models, growth strategy',
    tags: ['API Design', 'B2B SaaS', 'Strategic Partnerships', 'Market Analysis'],
  },
  {
    title: 'Web3 Tools & Platforms',
    icon: Users,
    description: 'CryptoRank, Dropstab, RootData, TwitterScore, DexScreener, DeFiLlama',
    tags: ['BlockchainExplorers', 'DexScreener', 'DeBank', 'OpenClaw', 'Tavily'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-12">
      <h2 className="section-title">Core Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="p-6 rounded-xl border border-border bg-card hover:border-primary hover:bg-muted/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <skill.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{skill.title}</h3>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4">{skill.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {skill.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs rounded-md bg-muted border border-border text-foreground hover:bg-card hover:border-primary hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/20 transition-all duration-200 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
