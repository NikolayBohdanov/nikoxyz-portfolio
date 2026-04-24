'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { formatDate } from 'app/blog/format'
import { CATEGORIES, CATEGORY_ORDER, CategorySlug } from 'app/blog/categories'

export type PostListItem = {
  slug: string
  title: string
  publishedAt: string
  summary: string
  category?: CategorySlug
  readingMinutes: number
}

type Filter = 'all' | CategorySlug

const FILTERS: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All' },
  ...CATEGORY_ORDER.map((slug) => ({ value: slug, label: CATEGORIES[slug] })),
]

export function PostsExplorer({ posts }: { posts: PostListItem[] }) {
  const [active, setActive] = useState<Filter>('all')

  const counts = useMemo(() => {
    const map: Record<Filter, number> = {
      'all': posts.length,
      'ai-agents': 0,
      'crypto-defi': 0,
      'personal': 0,
    }
    for (const post of posts) {
      if (post.category) map[post.category] += 1
    }
    return map
  }, [posts])

  const visible = useMemo(() => {
    if (active === 'all') return posts
    return posts.filter((p) => p.category === active)
  }, [active, posts])

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8 border-b border-border pb-2">
        {FILTERS.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActive(filter.value)}
            className={[
              'px-4 py-2 text-sm font-medium rounded-md transition-all',
              active === filter.value
                ? 'bg-card text-foreground border border-border shadow-sm'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted/40',
            ].join(' ')}
          >
            {filter.label}
            <span className="ml-2 text-xs text-muted-foreground">{counts[filter.value]}</span>
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="text-muted-foreground text-sm py-8">
          Nothing here yet — first post coming soon.
        </p>
      ) : (
        <ul className="grid gap-4">
          {visible.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-xl border border-border bg-card p-5 transition-all hover:border-foreground/40 hover:shadow-sm"
              >
                <div className="mb-2 flex items-start justify-between gap-3">
                  <h3 className="text-lg md:text-xl font-semibold tracking-tight leading-snug text-foreground group-hover:text-foreground">
                    {post.title}
                  </h3>
                  {post.category && (
                    <span className="shrink-0 rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                      {CATEGORIES[post.category]}
                    </span>
                  )}
                </div>
                <p className="mb-3 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {post.summary}
                </p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <time dateTime={post.publishedAt}>{formatDate(post.publishedAt, false)}</time>
                  <span aria-hidden="true">·</span>
                  <span>{post.readingMinutes} min read</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
