import { getBlogPosts } from 'app/blog/utils'
import { baseUrl } from 'app/sitemap'
import { CATEGORIES } from 'app/blog/categories'

export async function GET() {
  const posts = getBlogPosts().sort((a, b) =>
    new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt) ? -1 : 1,
  )

  const feed = {
    version: 'https://jsonfeed.org/version/1.1',
    title: 'Nikolay Bohdanov — Blog',
    home_page_url: `${baseUrl}/blog`,
    feed_url: `${baseUrl}/feed.json`,
    description:
      'Notes on building and running AI systems in production, crypto research, MCP integrations. Build-in-public, no hype.',
    language: 'en-US',
    authors: [
      {
        name: 'Nikolay Bohdanov',
        url: baseUrl,
      },
    ],
    items: posts.map((post) => {
      const url = `${baseUrl}/blog/${post.slug}`
      const date = post.metadata.publishedAt.includes('T')
        ? new Date(post.metadata.publishedAt)
        : new Date(`${post.metadata.publishedAt}T00:00:00Z`)
      const tags = post.metadata.category ? [CATEGORIES[post.metadata.category]] : undefined
      return {
        id: url,
        url,
        title: post.metadata.title,
        summary: post.metadata.summary,
        content_text: post.metadata.summary,
        date_published: date.toISOString(),
        ...(tags ? { tags } : {}),
      }
    }),
  }

  return Response.json(feed, {
    headers: {
      'Content-Type': 'application/feed+json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
