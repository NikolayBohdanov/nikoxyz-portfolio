import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { DiagramHero } from './diagram-hero'
import { MermaidDiagram } from './mermaid-diagram'
import { VideoHero } from './video-hero'
import { FiveAgentsArchitecture } from './diagrams/five-agents-architecture'
import { IncidentTimeline } from './diagrams/incident-timeline'
import { ModelCostChart } from './diagrams/model-cost-chart'
import { HbmMarketShare } from './diagrams/hbm-market-share'
import { SkHynixMargin } from './diagrams/sk-hynix-margin'
import { PsArb } from './diagrams/ps-arb'
import { HbmCompaniesTable } from './diagrams/hbm-companies-table'
import { OnchainCoverageTable } from './diagrams/onchain-coverage-table'

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
  MermaidDiagram,
  VideoHero,
  FiveAgentsArchitecture,
  IncidentTimeline,
  ModelCostChart,
  HbmMarketShare,
  SkHynixMargin,
  PsArb,
  HbmCompaniesTable,
  OnchainCoverageTable,
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
            [rehypePrettyCode, rehypePrettyCodeOptions],
          ],
        },
      }}
    />
  )
}
