export default function WorkExperience() {
  let experiences = [
    {
      company: 'Example Protocol / Audits Inc.',
      role: 'Smart Contract Auditor',
      period: '2023 — Present',
      details: 'Audits, security reviews, and post-mortem analyses for EVM protocols.',
    },
    {
      company: 'DeFi Research Lab',
      role: 'Protocol Analyst',
      period: '2021 — 2023',
      details: 'Tokenomics modelling and on-chain research.',
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
