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
      <h2 className="section-title">Expertise</h2>
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
