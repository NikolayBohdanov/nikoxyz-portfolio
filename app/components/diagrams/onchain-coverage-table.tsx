/**
 * On-chain coverage results for the HBM thesis.
 * Same MDX-table-after-JSX workaround pattern as HbmCompaniesTable.
 */
const ROWS = [
  {
    venue: 'Hyperliquid',
    type: 'synthetic equity perp',
    ticker: 'xyz:NVDA',
    volume: '$85,007,307',
    href: 'https://app.hyperliquid.xyz/trade/xyz:NVDA',
  },
  {
    venue: 'Hyperliquid',
    type: 'synthetic equity perp',
    ticker: 'xyz:MU',
    volume: '$13,387,767',
    href: 'https://app.hyperliquid.xyz/trade/xyz:MU',
  },
  {
    venue: 'Hyperliquid',
    type: 'synthetic equity perp',
    ticker: 'xyz:SKHX',
    volume: '$2,435,396',
    href: 'https://app.hyperliquid.xyz/trade/xyz:SKHX',
    highlight: true,
  },
  {
    venue: 'Hyperliquid',
    type: 'synthetic equity perp',
    ticker: 'xyz:SMSN',
    volume: '$1,633,785',
    href: 'https://app.hyperliquid.xyz/trade/xyz:SMSN',
  },
  {
    venue: 'xStocks',
    type: 'tokenized equity (Solana)',
    ticker: 'NVDAx, MUx',
    volume: 'spot',
    href: 'https://defi.xstocks.fi/points?ref=NIKOXYZ',
  },
  {
    venue: 'Backed',
    type: 'tokenized equity (Ethereum)',
    ticker: 'bNVDA',
    volume: 'spot',
    href: 'https://backed.fi/',
  },
  {
    venue: 'Polymarket',
    type: 'prediction market',
    ticker: 'NVIDIA close · OpenAI valuation · Anthropic deals · xAI rounds',
    volume: '$5K–$35K, 29 markets',
    href: 'https://polymarket.com/',
  },
]

export function OnchainCoverageTable() {
  return (
    <figure
      className="not-prose my-10 overflow-x-auto"
      style={{ color: 'hsl(var(--foreground))' }}
    >
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-border text-left text-xs uppercase tracking-wider">
            <th className="py-3 pr-4 font-semibold opacity-70">Venue</th>
            <th className="py-3 pr-4 font-semibold opacity-70">Type</th>
            <th className="py-3 pr-4 font-semibold opacity-70">Ticker / Market</th>
            <th className="py-3 font-semibold opacity-70">24h volume</th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((r, i) => (
            <tr key={i} className="border-b border-border/60">
              <td className="py-3 pr-4 font-medium">
                <a
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                  style={{ color: 'hsl(var(--foreground))' }}
                >
                  {r.venue}
                </a>
              </td>
              <td className="py-3 pr-4 opacity-80">{r.type}</td>
              <td
                className={`py-3 pr-4 font-mono text-xs ${r.highlight ? 'font-semibold' : ''}`}
                style={r.highlight ? { color: 'rgb(139, 92, 246)' } : undefined}
              >
                {r.ticker}
              </td>
              <td className="py-3 tabular-nums">{r.volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <figcaption className="mt-3 text-xs opacity-70">
        Source: Hyperliquid HIP-3 metaAndAssetCtxs · xStocks · Backed Finance · Polymarket Gamma API, April 2026.
      </figcaption>
    </figure>
  )
}
