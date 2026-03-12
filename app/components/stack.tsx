const categories = [
  {
    name: 'Blockchain Analytics',
    tools: ['Dune Analytics', 'Nansen', 'Arkham', 'DeFiLlama', 'DexScreener', 'DeBank'],
  },
  {
    name: 'Web3 Research Tools',
    tools: ['CryptoRank', 'Dropstab', 'RootData', 'TwitterScore', 'Discover', 'Blockchain Explorers'],
  },
  {
    name: 'Data & Development',
    tools: ['Python', 'SQL', 'Excel', 'Google Sheets', 'BI Tools', 'Git'],
  },
  {
    name: 'AI & Productivity',
    tools: ['OpenClaw', 'Tavily', 'Perplexity', 'GPT', 'Notion', 'Trello'],
  },
]

export function Stack() {
  return (
    <section id="stack" className="py-12">
      <h2 className="section-title">Tools & Stack</h2>
      <p className="text-neutral-600 dark:text-neutral-400 mb-8">Technologies and platforms I use for blockchain research, data analysis, and product development</p>
      
      <div className="space-y-8">
        {categories.map((category) => (
          <div key={category.name}>
            <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-500 uppercase tracking-wider mb-3">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 text-sm rounded-md bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors cursor-default"
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
