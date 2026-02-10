import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Nikolay Bohdanov - Crypto Researcher & Product Manager'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #09090b 0%, #18181b 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
          position: 'relative',
        }}
      >
        {/* Metallic gradient overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(228,228,231,0.1) 0%, transparent 50%)',
          }}
        />
        
        {/* Name */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #e4e4e7 0%, #a1a1aa 50%, #71717a 100%)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          Nikolay Bohdanov
        </div>
        
        {/* Title */}
        <div
          style={{
            fontSize: '36px',
            color: '#a1a1aa',
            marginBottom: '30px',
            textAlign: 'center',
          }}
        >
          Crypto Researcher & Product Manager
        </div>
        
        {/* Description */}
        <div
          style={{
            fontSize: '24px',
            color: '#71717a',
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: '1.5',
          }}
        >
          Building TwitterScore · DeFi enthusiast · On-chain analytics
        </div>
        
        {/* Decorative line */}
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            width: '200px',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #d4d4d8, transparent)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
