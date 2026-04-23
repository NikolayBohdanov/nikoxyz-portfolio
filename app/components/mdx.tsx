import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeMermaid from 'rehype-mermaid'
import { DiagramHero } from './diagram-hero'

function Table({ data }: { data: { headers: string[]; rows: string[][] } }) {
  const headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ))
  const rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ))

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

function CustomLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const href = props.href ?? ''

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function RoundedImage(props: React.ComponentProps<typeof Image>) {
  return <Image {...props} className="rounded-lg" />
}

const components = {
  Image: RoundedImage,
  a: CustomLink,
  Table,
  DiagramHero,
}

const rehypePrettyCodeOptions = {
  theme: {
    light: 'github-light',
    dark: 'github-dark-dimmed',
  },
  keepBackground: false,
  defaultLang: {
    block: 'plaintext',
    inline: 'plaintext',
  },
}

const rehypeMermaidOptions = {
  strategy: 'img-svg' as const,
  dark: true,
  mermaidConfig: {
    fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif',
    flowchart: { htmlLabels: true, curve: 'basis', padding: 12 },
    themeVariables: { fontSize: '14px' },
  },
}

export function CustomMDX(props: React.ComponentProps<typeof MDXRemote>) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
      options={{
        mdxOptions: {
          rehypePlugins: [
            rehypeSlug,
            [
              rehypeAutolinkHeadings,
              {
                behavior: 'append',
                properties: {
                  className: ['anchor'],
                  ariaLabel: 'Link to section',
                },
              },
            ],
            [rehypeMermaid, rehypeMermaidOptions],
            [rehypePrettyCode, rehypePrettyCodeOptions],
          ],
        },
      }}
    />
  )
}
