import Image from 'next/image'
import WorkExperience from './components/work'
import { Skills } from './components/skills'
import { Stack } from './components/stack'
import { Contact } from './components/contact'
import { Projects } from './components/projects'

export default function Page() {
  return (
    <section className="relative">
      {/* Background glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="mb-8 text-center">
          {/* Avatar with gradient glow */}
          <div className="inline-block mb-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
              <Image
                src="/avatar.png"
                alt="Nikolay - Crypto Researcher"
                width={128}
                height={128}
                className="relative rounded-full border-2 border-slate-800"
                priority
              />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Hi, I'm <span className="gradient-text">Nikolay</span>
          </h1>
          
          <p className="text-xl text-slate-400 mb-4">
            Crypto Researcher & Product Manager
          </p>
          
          <p className="text-slate-500 max-w-lg mx-auto">
            Specializing in tokenomics, DeFi protocols, and on-chain analytics.
            I help teams build sustainable crypto products.
          </p>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <p className="mb-4 text-lg">
            Crypto-native Product Manager and DeFi enthusiast with deep expertise in tokenized ecosystems, 
            on-chain analytics, and social-fi platforms. Currently leading product development at TwitterScore, 
            where I'm building the next generation of crypto research and due diligence tools that help 
            investors discover alpha through social data.
          </p>
          
          <p className="mb-4">
            Passionate about the intersection of AI, social graphs, and blockchain technology. 
            I believe everything will become tokenized, and I'm dedicated to creating products that 
            bridge the gap between complex on-chain data and actionable insights for both retail and 
            institutional users.
          </p>
          
          <p className="mb-8">
            When I'm not shipping features, you'll find me farming yields across DeFi protocols, 
            analyzing tokenomics, or exploring emerging L2 ecosystems.
          </p>
        </div>

        {/* Stats Strip */}
        <section className="border-y border-slate-800/50 bg-slate-900/30 my-8 -mx-4 px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-cyan-400">50+</p>
              <p className="text-slate-500 text-sm">Protocols</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-cyan-400">5+</p>
              <p className="text-slate-500 text-sm">Years</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-cyan-400">100+</p>
              <p className="text-slate-500 text-sm">Reports</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-cyan-400">10+</p>
              <p className="text-slate-500 text-sm">Projects</p>
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
        
        <Contact />
      </div>
    </section>
  )
}
