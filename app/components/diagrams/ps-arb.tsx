import { Chart } from '../charts/chart'

const DATA = [
  { name: 'OpenAI', ps: 34 },
  { name: 'NVIDIA', ps: 24 },
  { name: 'Micron', ps: 16 },
  { name: 'SK Hynix', ps: 9 },
]

export function PsArb() {
  return (
    <Chart
      type="bar-horizontal"
      data={DATA}
      category="name"
      value="ps"
      highlight={3}
      accent="purple"
      unit="×"
      annotation="← the trade"
      source="CompaniesMarketCap + issuer filings, Apr 2026"
    />
  )
}
