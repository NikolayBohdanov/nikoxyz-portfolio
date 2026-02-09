const categories = [
  {
    name: 'Analytics & Research',
    tools: ['Dune Analytics', 'Nansen', 'DeFiLlama', 'Token Terminal', 'Messari'],
  },
  {
    name: 'Development',
    tools: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Python'],
  },
  {
    name: 'Web3 Tools',
    tools: ['Ethers.js', 'Viem', 'Hardhat', 'IPFS', 'The Graph', 'WalletConnect'],
  },
  {
    name: 'Productivity',
    tools: ['Notion', 'Figma', 'Linear', 'Discord', 'Telegram'],
  },
]

export function Stack() {
  return (
    <section id="stack" className="py-12">
      <h2 className="text-2xl font-bold mb-4">Tools & Stack</h2>
      <p className="text-slate-400 mb-8">Technologies and platforms I work with daily</p>
      
      <div className="space-y-8">
        {categories.map((category) => (
          <div key={category.name}>
            <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-3">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 text-sm rounded-md bg-slate-900/50 border border-slate-800 text-slate-300 hover:border-indigo-500/30 hover:text-indigo-400 transition-colors cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
