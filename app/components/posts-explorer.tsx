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
        <div>
          {visible.map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                  {formatDate(post.publishedAt, false)}
                </p>
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                  {post.title}
                  {post.category && (
                    <span className="ml-2 text-xs text-muted-foreground">
                      · {CATEGORIES[post.category]}
                    </span>
                  )}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
