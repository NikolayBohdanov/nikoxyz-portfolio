import Image from 'next/image'
import WorkExperience from './components/work'
import { Skills } from './components/skills'
import { Stack } from './components/stack'
import { Contact } from './components/contact'
import { Projects } from './components/projects'
import { NewsletterSignup } from './components/newsletter-signup'

export default function Page() {
  return (
    <section className="relative">
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="mb-8 text-center">
          <div className="inline-block mb-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <Image
                src="/avatar.png"
                alt="Nikolay Bohdanov - Web3 Research & Product"
                width={128}
                height={128}
                className="relative rounded-full border-2 border-gray-200 dark:border-gray-800"
                priority
              />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Hi, I'm <span className="gradient-text">Nikolay Bohdanov</span>
          </h1>
          
          <p className="text-xl text-gray-700 dark:text-white mb-4">
            Web3 Data Analyst | Product Manager | Business Development
          </p>
          
          <p className="text-gray-600 dark:text-gray-100 max-w-2xl mx-auto mb-8">
            4+ years of blockchain market analysis and 3+ years leading product growth at TwitterScore.io. 
            Specialized in tokenomics evaluation, on-chain analytics, and data-driven product strategy.
          </p>
        </div>

        <div className="max-w-none px-4 md:px-0 prose mb-8">
          <p className="mb-4 text-base text-gray-700 dark:text-gray-100">
            Product Manager and Business Development Lead at TwitterScore.io, where I scaled the platform to 35K+ accounts 
            under daily monitoring and launched API products serving 250+ clients with 80%+ retention.
          </p>
          
          <p className="mb-4 text-base text-gray-700 dark:text-gray-100">
            As an Investment Research & Risk Analyst, I've evaluated 200+ Web3 projects across tokenomics, 
            ICO structures, and smart contract risk using Nansen, Dune, Arkham, SQL, and Python for data-driven insights.
          </p>
        </div>

        {/* Stats Strip */}
        <section className="stats-section my-8 -mx-4 px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="stat-number">200+</p>
              <p className="stat-label">Projects Analyzed</p>
            </div>
            <div className="text-center">
              <p className="stat-number">35K+</p>
              <p className="stat-label">Accounts Monitored</p>
            </div>
            <div className="text-center">
              <p className="stat-number">250+</p>
              <p className="stat-label">API Clients</p>
            </div>
            <div className="text-center">
              <p className="stat-number">4+</p>
              <p className="stat-label">Years Experience</p>
            </div>
          </div>
        </section>

        <Skills />
        
        <Stack />

        <div className="my-8">
          <WorkExperience />
        </div>
        
        <div className="my-8">
          <Projects />
        </div>
        
        <NewsletterSignup />
        
        <Contact />
      </div>
    </section>
  )
}
