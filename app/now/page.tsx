import Link from 'next/link'

export const metadata = {
  title: 'Now',
  description: 'What I am working on this month. Updated monthly so the site stays honest.',
}

// Monthly snapshot. Update the first of each month.
const updatedOn = 'April 2026'

const nowItems = [
  {
    title: 'Hiring search',
    body: 'Actively interviewing for Senior/Staff PM roles at AI-first and crypto-native companies. Remote from Kyiv, open to relocation conversations.',
  },
  {
    title: 'Dashboard Hub',
    body: (
      <>
        Shipped a public demo of my multi-agent dashboard at{' '}
        <a href="https://app.nikoxyz.com" target="_blank" rel="noopener noreferrer" className="underline decoration-muted-foreground/40 underline-offset-4 hover:decoration-foreground">
          app.nikoxyz.com
        </a>
        . One URL, two modes: strangers see aspirational demo data, I see my real jobs pipeline, finance ops, and fitness recovery after sign-in.
      </>
    ),
  },
  {
    title: '5-agent system',
    body: 'Jordan (orchestrator) + Research/Jobs/Finance/Fitness agents are stable on Claude Code with hybrid FTS5 + bge-m3 memory search. Current focus: supervisor reliability after the March Claude outages.',
  },
  {
    title: 'TwitterScoreAI',
    body: 'Forking the content-automation pipeline for my personal @nikolayxyz handle — build-log handler off the daily memory files, reply-scout for warm outreach, LinkedIn adapter for cross-posting.',
  },
  {
    title: 'Writing',
    body: (
      <>
        Drafting two long-form case studies — <Link href="/work/twitterscore-api" className="underline decoration-muted-foreground/40 underline-offset-4 hover:decoration-foreground">TwitterScore API scale</Link> and{' '}
        <Link href="/work/jordan-5-agent" className="underline decoration-muted-foreground/40 underline-offset-4 hover:decoration-foreground">the 5-agent system architecture</Link>.
      </>
    ),
  },
  {
    title: 'Reading',
    body: 'Anthropic\'s "Demystifying evals" + Hamel Husain\'s evals playbook. Thinking about how to expose system evals (not just model evals) in my writing.',
  },
]

export default function NowPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-2">Now</h1>
      <p className="text-muted-foreground mb-1">What I&apos;m working on this month.</p>
      <p className="text-xs text-muted-foreground mb-10">Last updated: {updatedOn}</p>

      <ul className="space-y-6">
        {nowItems.map((item) => (
          <li key={item.title}>
            <h2 className="text-base font-semibold text-foreground mb-1">{item.title}</h2>
            <div className="text-sm text-foreground/90">{item.body}</div>
          </li>
        ))}
      </ul>

      <p className="mt-12 text-xs text-muted-foreground">
        Inspired by{' '}
        <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
          Derek Sivers&apos; /now page convention
        </a>
        .
      </p>
    </section>
  )
}
