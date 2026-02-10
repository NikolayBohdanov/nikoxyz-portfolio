import { Search, Coins, Layout, Zap } from 'lucide-react'

const skills = [
  {
    title: 'Crypto Research',
    icon: Search,
    description: 'Deep-dive analysis of emerging protocols, tokenomics, and market trends',
    tags: ['Fundamental Analysis', 'On-chain Metrics', 'Protocol Research'],
  },
  {
    title: 'Tokenomics Design',
    icon: Coins,
    description: 'Designing sustainable token economies with proper incentive alignment',
    tags: ['Vesting Schedules', 'Utility Design', 'Distribution Models'],
  },
  {
    title: 'Product Management',
    icon: Layout,
    description: 'Leading cross-functional teams from concept to launch',
    tags: ['Roadmapping', 'User Research', 'Agile/Scrum'],
  },
  {
    title: 'DeFi Strategy',
    icon: Zap,
    description: 'Building and optimizing decentralized financial products',
    tags: ['Yield Strategies', 'Risk Management', 'Smart Contracts'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-12">
      <h2 className="text-2xl font-bold mb-8 text-neutral-900 dark:text-neutral-100">Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="group p-6 rounded-xl bg-neutral-100 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-400/30 transition-all card-hover card-shimmer hover-lift"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-neutral-200 dark:bg-neutral-800">
                <skill.icon className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
              </div>
              <h3 className="font-semibold text-lg text-neutral-900 dark:text-neutral-100">{skill.title}</h3>
            </div>
            
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">{skill.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {skill.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover-shimmer"
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
