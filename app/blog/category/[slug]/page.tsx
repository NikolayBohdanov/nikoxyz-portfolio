import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getBlogPosts, getReadingTime, formatDate } from 'app/blog/utils'
import { CATEGORIES, CATEGORY_ORDER, isCategorySlug, CategorySlug } from 'app/blog/categories'
import { baseUrl } from 'app/sitemap'

export async function generateStaticParams() {
  return CATEGORY_ORDER.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  if (!isCategorySlug(slug)) return
  const label = CATEGORIES[slug]
  const title = `${label} — Posts`
  const description = `Posts in ${label}. Build-in-public notes by Nikolay Bohdanov.`
  return {
    title,
    description,
    alternates: { canonical: `${baseUrl}/blog/category/${slug}` },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/blog/category/${slug}`,
      type: 'website',
    },
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  if (!isCategorySlug(slug)) notFound()
  const categorySlug: CategorySlug = slug
  const label = CATEGORIES[categorySlug]

  const posts = getBlogPosts()
    .filter((p) => p.metadata.category === categorySlug)
    .map((p) => ({
      slug: p.slug,
      title: p.metadata.title,
      summary: p.metadata.summary,
      publishedAt: p.metadata.publishedAt,
      readingMinutes: getReadingTime(p.content).minutes,
    }))
    .sort((a, b) =>
      new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1,
    )

  return (
    <section>
      <nav className="mb-6 text-sm">
        <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
          ← All posts
        </Link>
      </nav>

      <h1 className="font-semibold text-2xl mb-3 tracking-tighter">{label}</h1>
      <p className="mb-10 text-sm text-muted-foreground">
        {posts.length} post{posts.length === 1 ? '' : 's'} in this category
      </p>

      {posts.length === 0 ? (
        <p className="text-muted-foreground">Nothing here yet — first post coming soon.</p>
      ) : (
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="block group"
              >
                <h2 className="font-medium text-lg group-hover:text-foreground/80 transition-colors">
                  {post.title}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {post.summary}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  {formatDate(post.publishedAt)} · {post.readingMinutes} min read
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
