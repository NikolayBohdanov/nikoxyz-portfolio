import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  serverExternalPackages: ['rehype-mermaid', 'mermaid-isomorphic', 'playwright', 'playwright-core'],
}

export default nextConfig
