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
      <h1 className="font-semibold text-2xl mb-6 tracking-tighter">Blog</h1>

      <div className="mb-12 max-w-xl">
        <p className="text-base font-semibold text-foreground mb-3">
          I just restarted this blog.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          Concrete notes on building and running AI systems in production — the
          5-agent personal OS that actually runs my life, crypto research
          pipelines, MCP integrations. What breaks, what I learn.
        </p>
        <p className="text-xs text-muted-foreground/70">
          Build-in-public, no hype · new post every ~2 weeks
        </p>
      </div>

      <PostsExplorer posts={posts} />
    </section>
  )
}
