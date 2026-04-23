import { getBlogPosts } from 'app/blog/utils'
import { PostsExplorer, PostListItem } from 'app/components/posts-explorer'

export const metadata = {
  title: 'Blog',
  description:
    'Notes on building and running AI systems in production — a 5-agent personal OS, crypto research pipelines, MCP integrations. Build-in-public, no hype.',
}

export default function Page() {
  const posts: PostListItem[] = getBlogPosts()
    .map((p) => ({
      slug: p.slug,
      title: p.metadata.title,
      publishedAt: p.metadata.publishedAt,
      summary: p.metadata.summary,
      category: p.metadata.category,
    }))
    .sort((a, b) =>
      new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1,
    )

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-4 tracking-tighter">Blog</h1>

      <div className="mb-10 p-5 rounded-lg border border-border bg-card">
        <p className="text-sm text-card-foreground leading-relaxed">
          <strong className="font-semibold">I just restarted this blog.</strong>{' '}
          From here, I&apos;ll share concrete notes from building and running AI
          systems in production — the 5-agent personal OS that actually runs my
          life, crypto research pipelines, MCP integrations, what breaks, what I
          learned. Build-in-public, no hype. New post every ~2 weeks.
        </p>
      </div>

      <PostsExplorer posts={posts} />
    </section>
  )
}
