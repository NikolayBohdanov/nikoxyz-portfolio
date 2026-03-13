export default function WorkExperience() {
  const experiences = [
    {
      company: 'TwitterScore.io',
      role: 'Product Manager & Business Development Lead',
      period: '2023 — Present',
      location: 'Remote',
      details: [
        'Drove 40% year-over-year growth in active users',
        'Expanded indexed database by 80%, scaling to 35,000+ monitored crypto accounts',
        'Launched API and subscription products serving 250+ clients with 80%+ retention',
        'Secured strategic partnerships across Web3 analytics, AI, and SocialFi ecosystems (CryptoRank, RootData, ChainGPT)',
        'Led cross-functional product development across 3+ time zones',
        'Managed end-to-end lifecycle of 5+ major product releases',
        'Designed API specifications and technical documentation',
        'Implemented social graph analytics to improve scoring model accuracy',
      ],
    },
    {
      company: 'Private Crypto Investment Office',
      role: 'Investment Research & Risk Analyst',
      period: '2022 — Present',
      location: 'Remote | Miami, FL',
      details: [
        'Led investment-grade due diligence across 200+ Web3 projects spanning DeFi, Layer 2, RWAs, and derivatives ecosystems',
        'Evaluated tokenomics, vesting schedules, emission models, and unlock risks to assess long-term supply pressure',
        'Conducted smart contract audit analysis and protocol-level risk assessments',
        'Performed on-chain liquidity, wallet concentration, and capital flow analysis using Dune, Nansen, and Arkham',
        'Built proprietary research frameworks integrating token valuation, incentive modeling, and market positioning',
        'Delivered structured investment memos and risk reports supporting capital allocation decisions',
        'Developed automated monitoring systems tracking new launches, liquidity shifts, and narrative rotations',
      ],
    },
  ]

  return (
    <section>
      <h2 className="mb-6 text-2xl font-semibold text-foreground">Professional Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp) => (
          <div key={exp.company} className="border-l-2 border-border pl-6 py-2 -ml-0.5 hover:border-primary hover:bg-muted/30 hover:pl-7 transition-all duration-300 rounded-r-lg">
            <div className="mb-3">
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                <p className="text-sm font-medium text-muted-foreground">{exp.period}</p>
              </div>
              <p className="text-base font-semibold text-foreground mb-1">{exp.role}</p>
              <p className="text-sm text-muted-foreground">{exp.location}</p>
            </div>
            <ul className="mt-3 space-y-2">
              {exp.details.map((detail, idx) => (
                <li key={idx} className="text-sm text-foreground flex">
                  <span className="mr-2 text-muted-foreground">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
