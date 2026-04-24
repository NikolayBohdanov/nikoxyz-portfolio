import { getBlogPosts, getReadingTime } from 'app/blog/utils'
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
      readingMinutes: getReadingTime(p.content).minutes,
    }))
    .sort((a, b) =>
      new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1,
    )

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-3 tracking-tighter">Blog</h1>

      <p className="mb-10 text-sm text-muted-foreground">
        Just started · build-in-public, no hype · new post every ~2 weeks
      </p>

      <PostsExplorer posts={posts} />
    </section>
  )
}
