export default function WorkExperience() {
  const experiences = [
    {
      company: 'TwitterScore',
      role: 'Product Development & Product Manager',
      period: '2024 — Present',
      details: 'Leading product strategy and execution for a crypto research platform that analyzes social sentiment and on-chain data. Shipped key features including wallet tracking, influencer scoring, and AI-powered market intelligence. Grew user base by 300% and established partnerships with major DeFi protocols.',
    },
    {
      company: 'DeFi Pulse',
      role: 'Senior Product Manager',
      period: '2022 — 2024',
      details: 'Owned product roadmap for DeFi analytics dashboard serving 500K+ monthly users. Launched portfolio tracking, yield aggregator comparisons, and risk assessment tools. Collaborated with Ethereum, Arbitrum, and Optimism ecosystems to integrate real-time TVL and APY data.',
    },
    {
      company: 'Aave Protocol',
      role: 'Product Manager',
      period: '2021 — 2022',
      details: 'Led the V3 market launch initiative, coordinating cross-functional teams across engineering, design, and business development. Implemented e-mode (efficiency mode) and isolated markets features. Contributed to governance proposals and community engagement strategies.',
    },
    {
      company: 'Chainalysis',
      role: 'Associate Product Manager',
      period: '2020 — 2021',
      details: 'Built compliance and investigation tools for cryptocurrency exchanges and government agencies. Developed transaction monitoring dashboards and risk scoring algorithms. Worked closely with clients including major CEXs and federal regulators.',
    },
  ]

  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold">Work Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div key={exp.company} className="">
            <div className="flex items-baseline justify-between">
              <div>
                <p className="font-medium">{exp.company}</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{exp.role}</p>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{exp.period}</p>
            </div>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">{exp.details}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
