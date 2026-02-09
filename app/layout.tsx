import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import { Providers } from './providers'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Nikolay Bohdanov | Crypto Researcher & Product Manager',
  description: 'Crypto-native Product Manager and DeFi enthusiast with deep expertise in tokenized ecosystems, on-chain analytics, and social-fi platforms.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Nikolay Bohdanov | Crypto Researcher & Product Manager',
    description: 'Crypto-native Product Manager and DeFi enthusiast. Building TwitterScore and exploring the intersection of AI, social graphs, and blockchain.',
    url: baseUrl,
    siteName: 'Nikolay Bohdanov',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nikolay Bohdanov | Crypto Researcher & Product Manager',
    description: 'Crypto-native Product Manager and DeFi enthusiast. Building TwitterScore and exploring the intersection of AI, social graphs, and blockchain.',
    creator: '@nikoxyz',
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
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto transition-colors duration-200">
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
