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
    default: 'Nikolay Bohdanov | Crypto Researcher & Product Manager',
    template: '%s | Nikolay Bohdanov',
  },
  description: 'Crypto-native Product Manager and DeFi enthusiast with deep expertise in tokenized ecosystems, on-chain analytics, and social-fi platforms. Building TwitterScore.',
  keywords: ['crypto', 'DeFi', 'product manager', 'blockchain', 'web3', 'NFT', 'tokenized ecosystems', 'on-chain analytics', 'TwitterScore', 'crypto research'],
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
    title: 'Nikolay Bohdanov | Crypto Researcher & Product Manager',
    description: 'Crypto-native Product Manager and DeFi enthusiast. Building TwitterScore and exploring the intersection of AI, social graphs, and blockchain.',
    url: baseUrl,
    siteName: 'Nikolay Bohdanov',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nikolay Bohdanov - Crypto Researcher & Product Manager',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nikolay Bohdanov | Crypto Researcher & Product Manager',
    description: 'Crypto-native Product Manager and DeFi enthusiast. Building TwitterScore and exploring the intersection of AI, social graphs, and blockchain.',
    creator: '@nikoxyz',
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
