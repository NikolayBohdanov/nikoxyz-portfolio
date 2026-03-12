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
            className="skills-card card-hover"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800">
                <skill.icon className="w-5 h-5 text-neutral-700 dark:text-neutral-400" />
              </div>
              <h3 className="skills-title">{skill.title}</h3>
            </div>
            
            <p className="skills-description">{skill.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {skill.tags.map((tag) => (
                <span
                  key={tag}
                  className="skills-tag"
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
