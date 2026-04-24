/**
 * Two-bar comparison showing the 5× token reduction after moving Finance
 * from Opus to Sonnet. Intentionally simple: two horizontal bars, a 5×
 * annotation between them, and a footnote. No animation needed — static
 * SVG reads correctly when scrolling into view.
 */
export function ModelCostChart() {
  const opusWidth = 880 // arbitrary pixel budget for the "100%" bar
  const sonnetWidth = opusWidth / 5 // 5× less

  return (
    <div className="model-cost-chart not-prose my-10">
      <svg
        viewBox="0 0 1200 260"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Bar chart: Finance agent on Opus consumes five times more tokens per day than on Sonnet, with no loss in output quality."
        className="w-full h-auto"
      >
        {/* Opus row (baseline) */}
        <text
          x={40}
          y={70}
          fontSize={18}
          fontWeight={600}
          fill="currentColor"
          style={{
            fontFamily: 'var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif',
          }}
        >
          Opus
        </text>
        <rect
          x={180}
          y={40}
          width={opusWidth}
          height={56}
          rx={8}
          fill="rgb(168, 85, 247)"
          fillOpacity={0.35}
          stroke="rgb(168, 85, 247)"
          strokeWidth={1.5}
        />
        <text
          x={180 + opusWidth + 20}
          y={76}
          fontSize={16}
          fontWeight={500}
          fill="currentColor"
          fillOpacity={0.7}
          style={{
            fontFamily: 'var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif',
          }}
        >
          baseline
        </text>

        {/* Sonnet row */}
        <text
          x={40}
          y={170}
          fontSize={18}
          fontWeight={600}
          fill="currentColor"
          style={{
            fontFamily: 'var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif',
          }}
        >
          Sonnet
        </text>
        <rect
          x={180}
          y={140}
          width={sonnetWidth}
          height={56}
          rx={8}
          fill="rgb(34, 197, 94)"
          fillOpacity={0.4}
          stroke="rgb(34, 197, 94)"
          strokeWidth={1.5}
        />
        <text
          x={180 + sonnetWidth + 20}
          y={176}
          fontSize={22}
          fontWeight={700}
          fill="rgb(34, 197, 94)"
          style={{
            fontFamily: 'var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif',
          }}
        >
          5× less
        </text>

        {/* Footnote */}
        <text
          x={40}
          y={240}
          fontSize={14}
          fill="currentColor"
          fillOpacity={0.55}
          style={{
            fontFamily: 'var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif',
          }}
        >
          Finance agent, average tokens per day · month-long A/B before switching
        </text>
      </svg>
    </div>
  )
}
