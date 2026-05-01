import { Chart } from '../charts/chart'

const DATA = [
  { name: 'SK Hynix', share: 62 },
  { name: 'Micron', share: 21 },
  { name: 'Samsung', share: 17 },
]

export function HbmMarketShare() {
  return (
    <Chart
      type="donut"
      data={DATA}
      category="name"
      value="share"
      source="Counterpoint Research, Q2 2025. Excludes Huawei (China-only)."
    />
  )
}
