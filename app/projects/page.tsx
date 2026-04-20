import { ProjectsExplorer } from '../components/projects-explorer'

export const metadata = {
  title: 'Projects',
  description: 'Crypto research, AI agents, and shipped products by Nikolay Bohdanov.',
}

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-2">Projects</h1>
      <p className="text-muted-foreground mb-8">
        A live selection of what I&apos;ve built across crypto research, agentic systems, and shipped products.
      </p>

      <ProjectsExplorer />
    </section>
  )
}
