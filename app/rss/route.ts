import { getBlogPosts } from 'app/blog/utils'
import { baseUrl } from 'app/sitemap'
import { CATEGORIES } from 'app/blog/categories'

const SITE_TITLE = 'Nikolay Bohdanov — Blog'
const SITE_DESC =
  'Notes on building and running AI systems in production, crypto research, MCP integrations. Build-in-public, no hype.'

function escape(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function rfc822(dateStr: string): string {
  const d = dateStr.includes('T') ? new Date(dateStr) : new Date(`${dateStr}T00:00:00Z`)
  return d.toUTCString()
}

export async function GET() {
  const posts = getBlogPosts().sort((a, b) =>
    new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt) ? -1 : 1,
  )

  const lastBuild = posts[0]
    ? rfc822(posts[0].metadata.publishedAt)
    : new Date().toUTCString()

  const items = posts
    .map((post) => {
      const url = `${baseUrl}/blog/${post.slug}`
      const category = post.metadata.category ? CATEGORIES[post.metadata.category] : null
      return [
        '    <item>',
        `      <title>${escape(post.metadata.title)}</title>`,
        `      <link>${url}</link>`,
        `      <guid isPermaLink="true">${url}</guid>`,
        `      <pubDate>${rfc822(post.metadata.publishedAt)}</pubDate>`,
        `      <description>${escape(post.metadata.summary)}</description>`,
        category ? `      <category>${escape(category)}</category>` : '',
        '    </item>',
      ]
        .filter(Boolean)
        .join('\n')
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(SITE_TITLE)}</title>
    <link>${baseUrl}/blog</link>
    <description>${escape(SITE_DESC)}</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <atom:link href="${baseUrl}/rss" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
