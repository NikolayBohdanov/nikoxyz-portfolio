import { Chart } from '../charts/chart'

const DATA = [
  { period: 'Memory industry\n2015-2023 avg', margin: 22 },
  { period: 'SK Hynix\nFY 2023', margin: -28 },
  { period: 'SK Hynix\nFY 2024', margin: 35 },
  { period: 'SK Hynix\nFY 2025', margin: 49 },
  { period: 'SK Hynix\nQ1 2026', margin: 72 },
]

export function SkHynixMargin() {
  return (
    <Chart
      type="bar"
      data={DATA}
      category="period"
      value="margin"
      highlight={4}
      accent="purple"
      unit="%"
      source="SK Hynix IR releases · KED Global, Apr 2026"
    />
  )
}
