import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Download, Mail } from 'lucide-react'
import WorkExperience from './components/work'
import { Contact } from './components/contact'
import { Projects } from './components/projects'
import { LiveHubTile } from './components/live-hub-tile'

export default function Page() {
  return (
    <section className="relative">
      <div className="relative z-10">
        {/* Hero */}
        <div className="mb-10">
          <div className="mb-6 flex items-center gap-4">
            <Image
              src="/avatar.png"
              alt="Nikolay Bohdanov"
              width={64}
              height={64}
              className="rounded-full border border-border"
              priority
            />
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold leading-tight">Nikolay Bohdanov</h1>
              <p className="text-muted-foreground text-sm sm:text-base">Senior PM — AI agents × crypto research</p>
            </div>
          </div>

          <div className="space-y-4 text-base text-foreground">
            <p>
              I ship autonomous agents, LLM-powered tools, and data products. Currently PM at{' '}
              <a href="https://twitterscore.io" target="_blank" rel="noopener noreferrer" className="underline decoration-muted-foreground/40 underline-offset-4 hover:decoration-foreground">TwitterScore.io</a>{' '}
              — scaled to <strong>35K monitored accounts</strong> and <strong>250+ API clients</strong> at <strong>80%+ retention</strong>.
            </p>
            <p>
              Built <Link href="/work/jordan-5-agent" className="underline decoration-muted-foreground/40 underline-offset-4 hover:decoration-foreground">a 5-agent system</Link> on Claude Code + MCP that runs my research, finance, jobs, and fitness ops 24/7. Every agent ships real work; every post I publish is grounded in something already in production.
            </p>
            <p className="text-muted-foreground">
              Open to Senior/Staff PM roles at AI-first or crypto-native teams. Remote from Kyiv, open to relocation.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/work" className="btn-primary">
              See my work
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="/resume.pdf" className="btn-secondary">
              <Download className="w-4 h-4" />
              Résumé
            </a>
            <a href="mailto:bohdanovmykola@gmail.com" className="btn-secondary">
              <Mail className="w-4 h-4" />
              Get in touch
            </a>
          </div>
        </div>

        {/* Featured Work */}
        <div className="my-10">
          <Projects />
        </div>

        {/* Live proof tile — Hub dashboard */}
        <div className="my-10">
          <LiveHubTile />
        </div>

        {/* Experience */}
        <div className="my-10">
          <WorkExperience />
        </div>

        <Contact />
      </div>
    </section>
  )
}
