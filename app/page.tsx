import WorkExperience from './components/work'

export default function Page() {
  return (
    <section>
      <div className="mb-8">
        <img
          src="/meme.png"
          alt="Meme"
          className="w-full max-w-md mx-auto rounded shadow-md mb-6"
        />
        <h1 className="text-2xl font-semibold tracking-tighter">
          Nikolay Bohdanov
        </h1>
      </div>

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
