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
    default: 'Nikolay Bohdanov | Web3 Data Analyst & Product Manager',
    template: '%s | Nikolay Bohdanov',
  },
  description: 'Web3 Research, Data & Product Professional with 4+ years of blockchain market analysis and 3+ years leading product growth at TwitterScore.io. Specialized in tokenomics evaluation, on-chain analytics, and data-driven product strategy.',
  keywords: ['web3', 'blockchain analytics', 'product manager', 'data analyst', 'tokenomics', 'DeFi', 'on-chain analytics', 'TwitterScore', 'Dune', 'Nansen', 'Arkham', 'crypto research', 'investment research', 'business development'],
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
    title: 'Nikolay Bohdanov | Web3 Data Analyst & Product Manager',
    description: '4+ years blockchain analysis, 3+ years PM at TwitterScore.io. 200+ projects analyzed, 35K+ accounts monitored, 250+ API clients. Specialized in tokenomics, on-chain analytics, and product growth.',
    url: baseUrl,
    siteName: 'Nikolay Bohdanov',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nikolay Bohdanov - Web3 Data Analyst & Product Manager',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nikolay Bohdanov | Web3 Data Analyst & Product Manager',
    description: '4+ years blockchain analysis | PM at TwitterScore.io | 200+ projects analyzed | On-chain analytics specialist (Dune, Nansen, Arkham)',
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
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
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
      <body className="antialiased max-w-2xl mx-4 mt-8 lg:mx-auto bg-white dark:bg-[#09090b] text-black dark:text-white transition-colors duration-200">
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
