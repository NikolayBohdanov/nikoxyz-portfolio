import Image from 'next/image'
import { Download, MapPin, Mail } from 'lucide-react'

export const metadata = {
  title: 'About',
  description: 'Product Manager building autonomous AI agents for crypto research and automation. Currently PM at TwitterScore.io.',
}

export default function AboutPage() {
  return (
    <section>
      <div className="mb-8 flex items-center gap-5">
        <Image
          src="/avatar.png"
          alt="Nikolay Bohdanov"
          width={96}
          height={96}
          className="rounded-full border border-border"
        />
        <div>
          <h1 className="text-3xl font-bold">Nikolay Bohdanov</h1>
          <p className="text-muted-foreground">Senior PM — AI agents × crypto research</p>
        </div>
      </div>

      <div className="space-y-5 text-base text-foreground leading-relaxed">
        <p>
          I&apos;m a Product Manager who builds things instead of drawing them. For three years I&apos;ve led product and
          business development at <a href="https://twitterscore.io" target="_blank" rel="noopener noreferrer" className="underline decoration-muted-foreground/40 underline-offset-4 hover:decoration-foreground">TwitterScore.io</a> —
          a crypto research platform I helped scale to 35K monitored accounts and 250+ paying API clients.
          Before that, four years running investment-grade due diligence on 200+ Web3 projects across DeFi, L2s, RWAs and derivatives.
        </p>

        <p>
          In parallel, I run a five-agent AI system in production. Orchestrator plus four specialists handle my research digests,
          finance tracking, job pipeline, and fitness — all on top of a shared semantic memory, supervisors with crash recovery,
          and integrations over MCP. It&apos;s not a side-project demo: it&apos;s what keeps my operating week coherent.
        </p>

        <p>
          I write in lowercase and ship in prod. The work I&apos;m proudest of sits at the intersection of systems thinking —
          picked up from a Master&apos;s in Navigation &amp; Maritime Systems Management — and hands-on AI engineering.
          I like ambiguous problems with hard constraints and short feedback loops.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">What I&apos;m looking for</h2>
        <p>
          Senior or Staff PM role at an AI-first product company or crypto-native team. Happy to work fully remote from Kyiv,
          happy to have a relocation conversation. Ideal problems: agents that do real work, developer platforms, research
          tools for analysts, evals infrastructure.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">What I&apos;m not</h2>
        <p className="text-muted-foreground">
          I&apos;m not a hype-cycle crypto shiller, an AI thought-leader who&apos;s never shipped, or a PM who needs a
          designer to open Figma for them. Every number on this site I can defend; every system I describe here runs today.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <a href="/resume.pdf" className="btn-primary">
          <Download className="w-4 h-4" />
          Download résumé (PDF)
        </a>
        <a href="mailto:bohdanovmykola@gmail.com" className="btn-secondary">
          <Mail className="w-4 h-4" />
          bohdanovmykola@gmail.com
        </a>
      </div>

      <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
        <MapPin className="w-4 h-4" />
        Kyiv, Ukraine — open to relocation
      </p>
    </section>
  )
}
