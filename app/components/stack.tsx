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
    name: 'AI & Agent Infra',
    tools: ['Claude Code', 'Anthropic SDK', 'MCP', 'Typefully', 'Ollama (bge-m3)', 'Playwright (CDP)', 'Notion'],
  },
]

export function Stack() {
  return (
    <section id="stack" className="py-12">
      <h2 className="section-title">Tools & Stack</h2>
      <p className="text-muted-foreground mb-8">Technologies and platforms I use for blockchain research, data analysis, and product development</p>
      
      <div className="space-y-8">
        {categories.map((category) => (
          <div key={category.name}>
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 text-sm rounded-md bg-muted border border-border text-foreground hover:border-primary hover:bg-card hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 transition-all duration-200 cursor-default"
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
