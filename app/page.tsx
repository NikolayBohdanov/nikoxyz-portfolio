import Image from 'next/image'
import WorkExperience from './components/work'
import { NewsletterSignup } from './components/newsletter-signup'

export default function Page() {
  return (
    <section>
      <div className="mb-8">
        <Image
          src="/meme.png"
          alt="Meme"
          width={120}
          height={120}
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
        <NewsletterSignup />
      </div>

      <div className="my-8">
        <WorkExperience />
      </div>
    </section>
  )
}
