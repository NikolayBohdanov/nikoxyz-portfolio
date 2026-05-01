/**
 * Companies-comparison table for the HBM post.
 * Avoids MDX's broken-table-after-JSX-component quirk by being a JSX component itself.
 * Pattern matches shadcn/ui editorial table — minimal borders, hover muted, source line.
 */
const ROWS = [
  {
    name: 'SK Hynix',
    cap: '~$620B',
    revenue: 'KRW 97.15T (~$68B)',
    share: '62%',
    pe: '5–7×',
    highlight: true,
  },
  {
    name: 'Samsung Electronics',
    cap: '~$1T',
    revenue: 'KRW 314T (~$220B)',
    share: '17% (target >30% EOY 2026)',
    pe: '6–8×',
  },
  {
    name: 'Micron',
    cap: '~$600B+',
    revenue: '$37.4B (+49% YoY)',
    share: '21% (overtook Samsung Q2 2025)',
    pe: '8–10×',
  },
  {
    name: 'Huawei',
    cap: 'private',
    revenue: 'n/a',
    share: 'China-only',
    pe: 'n/a',
  },
]

export function HbmCompaniesTable() {
  return (
    <figure
      className="not-prose my-10 overflow-x-auto"
      // Explicit foreground anchor — same reason as charts/chart.tsx:
      // .prose uses --tw-prose-body (mid-gray) which makes table rows
      // washed out in BOTH themes. Binding to --foreground HSL var
      // gives correct contrast that flips with theme toggle.
      style={{ color: 'hsl(var(--foreground))' }}
    >
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-border text-left text-xs uppercase tracking-wider">
            <th className="py-3 pr-4 font-semibold opacity-70">Company</th>
            <th className="py-3 pr-4 font-semibold opacity-70">Market cap (Apr 2026)</th>
            <th className="py-3 pr-4 font-semibold opacity-70">FY revenue</th>
            <th className="py-3 pr-4 font-semibold opacity-70">HBM share</th>
            <th className="py-3 font-semibold opacity-70">Forward P/E</th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((r) => (
            <tr key={r.name} className="border-b border-border/60">
              <td className={`py-3 pr-4 ${r.highlight ? 'font-semibold' : 'font-medium'}`}>
                {r.name}
              </td>
              <td className="py-3 pr-4 tabular-nums">{r.cap}</td>
              <td className="py-3 pr-4 tabular-nums">{r.revenue}</td>
              <td className="py-3 pr-4">{r.share}</td>
              <td className="py-3 tabular-nums">{r.pe}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <figcaption className="mt-3 text-xs opacity-70">
        Source: CompaniesMarketCap + issuer FY25 filings, April 2026.
      </figcaption>
    </figure>
  )
}
