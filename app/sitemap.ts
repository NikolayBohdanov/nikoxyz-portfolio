import { getBlogPosts } from 'app/blog/utils'
import { CATEGORY_ORDER } from 'app/blog/categories'
import type { MetadataRoute } from 'next'

export const baseUrl = 'https://nikoxyz.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = getBlogPosts()
  const today = new Date().toISOString().split('T')[0]

  const blogs: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const categoryLatest: Record<string, string> = {}
  for (const post of posts) {
    const cat = post.metadata.category
    if (!cat) continue
    const date = post.metadata.publishedAt
    if (!categoryLatest[cat] || date > categoryLatest[cat]) {
      categoryLatest[cat] = date
    }
  }

  const categories: MetadataRoute.Sitemap = CATEGORY_ORDER.map((slug) => ({
    url: `${baseUrl}/blog/category/${slug}`,
    lastModified: categoryLatest[slug] ?? today,
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  return [
    {
      url: baseUrl,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...categories,
    ...blogs,
  ]
}
