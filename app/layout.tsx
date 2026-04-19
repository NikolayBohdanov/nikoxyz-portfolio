import './theme.css'
import './global.css'
import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import { Providers } from './providers'

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Nikolay Bohdanov — Senior PM, AI agents × crypto research',
    template: '%s | Nikolay Bohdanov',
  },
  description: 'Product Manager building autonomous AI agents for crypto research and automation. Currently PM at TwitterScore.io (35K accounts, 250+ API clients). Runs a 5-agent personal system on Claude Code + MCP. Open to Senior/Staff PM roles — remote from Kyiv or relocation.',
  keywords: ['product manager', 'AI agents', 'crypto research', 'Claude Code', 'MCP', 'Anthropic', 'LLM', 'autonomous agents', 'TwitterScore', 'on-chain analytics', 'web3', 'senior PM', 'staff PM'],
  authors: [{ name: 'Nikolay Bohdanov', url: baseUrl }],
  creator: 'Nikolay Bohdanov',
  publisher: 'Nikolay Bohdanov',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Nikolay Bohdanov — Senior PM, AI agents × crypto research',
    description: 'PM at TwitterScore.io (35K accounts, 250+ API clients). Building a 5-agent system on Claude Code + MCP. Open to Senior/Staff PM roles.',
    url: baseUrl,
    siteName: 'Nikolay Bohdanov',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nikolay Bohdanov — Senior PM, AI agents × crypto research',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nikolay Bohdanov — Senior PM, AI agents × crypto research',
    description: 'PM at TwitterScore.io. 5-agent system on Claude Code + MCP. Open to Senior/Staff PM roles — remote from Kyiv or relocation.',
    creator: '@nikolayxyz',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: baseUrl,
    types: {
      'application/rss+xml': `${baseUrl}/rss`,
    },
  },
}

const cx = (...classes: string[]) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        <link rel="alternate" type="application/rss+xml" title="RSS Feed" href="/rss" />
      </head>
      <body className="antialiased max-w-2xl mx-4 mt-8 lg:mx-auto bg-background text-foreground transition-colors duration-200">
        <Providers>
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Navbar />
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </main>
        </Providers>
      </body>
    </html>
  )
}
