import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import {
  extractHeadings,
  getBlogPosts,
  getReadingTime,
} from 'app/blog/utils'
import { formatDate } from 'app/blog/format'
import { baseUrl } from 'app/sitemap'
import { CATEGORIES } from 'app/blog/categories'

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPosts().find((p) => p.slug === slug)
  if (!post) return

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  const ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/blog/${post.slug}`,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPosts().find((p) => p.slug === slug)
  if (!post) notFound()

  const { minutes, words } = getReadingTime(post.content)
  const headings = extractHeadings(post.content)
  const showTOC = words >= 800 && headings.length >= 3
  const categoryLabel = post.metadata.category
    ? CATEGORIES[post.metadata.category]
    : null

  const articleUrl = `${baseUrl}/blog/${post.slug}`
  const articleImage = post.metadata.image
    ? `${baseUrl}${post.metadata.image}`
    : `${baseUrl}/og?title=${encodeURIComponent(post.metadata.title)}`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.metadata.title,
    datePublished: post.metadata.publishedAt,
    dateModified: post.metadata.publishedAt,
    description: post.metadata.summary,
    image: articleImage,
    url: articleUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    author: {
      '@type': 'Person',
      name: 'Nikolay Bohdanov',
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nikolay Bohdanov',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/avatar.png`,
      },
    },
  })

  return (
    <section data-blog-post-layout>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />

      <header className="mb-10">
        <h1 className="title font-semibold text-3xl md:text-4xl tracking-tight leading-tight">
          {post.metadata.title}
        </h1>
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
          <span>{formatDate(post.metadata.publishedAt)}</span>
          <span aria-hidden="true">·</span>
          <span>
            {minutes} min read · {words.toLocaleString()} words
          </span>
          {categoryLabel && (
            <>
              <span aria-hidden="true">·</span>
              <span>{categoryLabel}</span>
            </>
          )}
        </div>
      </header>

      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_14rem] lg:gap-10">
        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <CustomMDX source={post.content} />
        </article>

        {showTOC && (
          <aside className="hidden lg:block">
            <nav className="sticky top-20 text-sm">
              <p className="mb-3 font-semibold text-foreground uppercase tracking-wider text-xs">
                On this page
              </p>
              <ul className="space-y-2 border-l border-border">
                {headings.map((h, i) => (
                  <li
                    key={`${h.slug}-${i}`}
                    className={h.level === 3 ? 'pl-6' : h.level === 4 ? 'pl-9' : 'pl-3'}
                  >
                    <a
                      href={`#${h.slug}`}
                      className="block py-1 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {h.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        )}
      </div>
    </section>
  )
}
