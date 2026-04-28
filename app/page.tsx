import Image from 'next/image'
import WorkExperience from './components/work'
import { Skills } from './components/skills'
import { Stack } from './components/stack'
import { Contact } from './components/contact'
import { Projects } from './components/projects'
import { JsonLd } from './components/json-ld'
import { baseUrl } from './sitemap'

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Nikolay Bohdanov',
  url: baseUrl,
  image: `${baseUrl}/avatar.png`,
  jobTitle: 'Senior Product Manager',
  worksFor: {
    '@type': 'Organization',
    name: 'TwitterScore',
    url: 'https://twitterscore.io',
  },
  description:
    'Product Manager building autonomous AI agents for crypto research and automation. Currently PM at TwitterScore.io. Runs a 5-agent personal system on Claude Code + MCP.',
  sameAs: [
    'https://twitter.com/nikolayxyz',
    'https://github.com/NikolayBohdanov',
    'https://www.linkedin.com/in/nikolayxyz/',
  ],
  knowsAbout: [
    'Product Management',
    'AI Agents',
    'Crypto Research',
    'Claude Code',
    'Model Context Protocol',
    'Tokenomics',
    'On-chain Analytics',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Nikolay Bohdanov',
  url: baseUrl,
  publisher: { '@type': 'Person', name: 'Nikolay Bohdanov' },
  inLanguage: 'en',
}

export default function Page() {
  return (
    <section className="relative">
      <JsonLd id="ld-person" data={personSchema} />
      <JsonLd id="ld-website" data={websiteSchema} />
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="mb-8 text-center">
          <div className="inline-block mb-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <Image
                src="/avatar.png"
                alt="Nikolay Bohdanov"
                width={128}
                height={128}
                className="relative rounded-full border-2 border-border"
                priority
              />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Hi, I&apos;m <span className="gradient-text">Nikolay Bohdanov</span>
          </h1>

          <p className="text-xl font-bold text-foreground mb-4">
            Product Manager · Crypto Research · AI Automation
          </p>

          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            4+ years of blockchain market analysis and 3+ years leading product growth at TwitterScore.io.
          </p>
        </div>

        <div className="max-w-none px-4 md:px-0 prose mb-8">
          <p className="mb-4 text-base text-foreground">
            Product Manager and Business Development Lead at TwitterScore.io, where I scaled the platform to 35K+ accounts
            under daily monitoring and launched API products serving 250+ clients with 80%+ retention.
          </p>

          <p className="mb-4 text-base text-foreground">
            As an Investment Research &amp; Risk Analyst, I&apos;ve evaluated 200+ Web3 projects across tokenomics,
            ICO structures, and smart contract risk. Alongside that, I run a 5-agent AI system in production —
            research, finance, jobs, and fitness — built on Claude Code and MCP.
          </p>
        </div>

        {/* Stats Cards */}
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-lg border-border bg-card p-6">
              <p className="text-3xl font-bold text-card-foreground">200+</p>
              <p className="text-sm text-muted-foreground mt-1">Projects Analyzed</p>
            </div>
            <div className="rounded-lg border-border bg-card p-6">
              <p className="text-3xl font-bold text-card-foreground">35K+</p>
              <p className="text-sm text-muted-foreground mt-1">Accounts Monitored</p>
            </div>
            <div className="rounded-lg border-border bg-card p-6">
              <p className="text-3xl font-bold text-card-foreground">250+</p>
              <p className="text-sm text-muted-foreground mt-1">API Clients</p>
            </div>
            <div className="rounded-lg border-border bg-card p-6">
              <p className="text-3xl font-bold text-card-foreground">4+</p>
              <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
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
