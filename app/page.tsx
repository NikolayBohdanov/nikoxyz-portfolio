import WorkExperience from './components/work'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Nikolay Bohdanov
      </h1>
      <p className="mb-4">
        DeFi protocol analyst & smart contract auditor. 
        Specialize in tokenomics, security audits, and blockchain research. 
        Building tools for crypto due diligence.
      </p>

      <div className="my-8">
        <WorkExperience />
      </div>
    </section>
  )
}
