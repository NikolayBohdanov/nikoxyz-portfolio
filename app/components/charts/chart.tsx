'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
  LabelList,
  PieChart,
  Pie,
  ReferenceLine,
} from 'recharts'
import { chartTokens as t, type AccentKey } from './tokens'

type ChartType = 'bar' | 'bar-horizontal' | 'donut'

type Datum = Record<string, string | number>

interface ChartProps {
  type: ChartType
  data: Datum[]
  category: string
  value: string
  highlight?: number
  accent?: AccentKey
  /** Floating annotation overlay. Use for narrative add-on; do NOT duplicate
   * a value already shown on the bar. */
  annotation?: string
  source?: string
  title?: string
  aspect?: 'normal' | 'tall'
  /** Suffix on value labels (e.g. '%' or '×'). Default: ''. */
  unit?: string
}

export function Chart({
  type,
  data,
  category,
  value,
  highlight,
  accent = 'purple',
  annotation,
  source,
  title,
  aspect = 'normal',
  unit = '',
}: ChartProps) {
  const accentColor = t.accents[accent]
  const height = aspect === 'tall' ? 380 : 320

  return (
    <figure
      className="not-prose my-10"
      // 1. `color: hsl(var(--foreground))` — establishes a theme-aware
      //    `currentColor` for every SVG text node inside (ticks, value
      //    labels, captions). Without this, currentColor inherits from
      //    `.prose` which uses --tw-prose-body (medium gray) and looks
      //    washed out in BOTH themes.
      // 2. `outline: none` — kills the focus ring Recharts adds on click.
      style={{ color: 'hsl(var(--foreground))', outline: 'none' }}
    >
      {title && (
        <figcaption
          className="mb-3"
          style={{
            fontFamily: t.font,
            fontSize: t.size.title,
            fontWeight: t.weight.title,
            color: 'currentColor',
          }}
        >
          {title}
        </figcaption>
      )}

      <div
        style={{
          height,
          position: 'relative',
          // Suppress focus ring on inner SVG (Recharts adds tabIndex).
          outline: 'none',
        }}
        // Subtle hover affordance — brightens the bar/sector under the cursor
        // without tooltips or snapping, keeping the editorial feel intact.
        className="
          [&_svg]:outline-none [&_*]:outline-none
          [&_.recharts-bar-rectangle_path]:transition-all
          [&_.recharts-bar-rectangle_path]:duration-200
          [&_.recharts-bar-rectangle_path]:cursor-default
          [&_.recharts-bar-rectangle_path:hover]:brightness-110
          [&_.recharts-pie-sector_path]:transition-all
          [&_.recharts-pie-sector_path]:duration-200
          [&_.recharts-pie-sector_path]:cursor-default
          [&_.recharts-pie-sector_path:hover]:brightness-110
        "
      >
        <ResponsiveContainer width="100%" height="100%">
          {type === 'bar' ? (
            <BarPrimitive
              data={data}
              category={category}
              valueKey={value}
              accentColor={accentColor}
              highlight={highlight}
              unit={unit}
            />
          ) : type === 'bar-horizontal' ? (
            <BarHorizontalPrimitive
              data={data}
              category={category}
              valueKey={value}
              accentColor={accentColor}
              highlight={highlight}
              unit={unit}
            />
          ) : (
            <DonutPrimitive
              data={data}
              category={category}
              valueKey={value}
              colors={t.categorical}
            />
          )}
        </ResponsiveContainer>

        {annotation && (
          <span
            className="absolute right-0 top-0 pointer-events-none"
            style={{
              fontFamily: t.font,
              fontSize: t.size.annot,
              fontWeight: t.weight.annot,
              color: accentColor,
            }}
          >
            {annotation}
          </span>
        )}
      </div>

      {source && (
        <figcaption
          className="mt-3 text-left"
          style={{
            fontFamily: t.font,
            fontSize: t.size.source,
            fontWeight: t.weight.source,
            color: 'currentColor',
            opacity: t.sourceOpacity,
          }}
        >
          Source: {source}
        </figcaption>
      )}
    </figure>
  )
}

/* ─────────── Primitives ─────────── */

interface BarPrimitiveProps {
  data: Datum[]
  category: string
  valueKey: string
  accentColor: string
  highlight?: number
  unit?: string
}

function BarPrimitive({ data, category, valueKey, accentColor, highlight, unit = '' }: BarPrimitiveProps) {
  const hasNegatives = data.some((d) => Number(d[valueKey]) < 0)
  return (
    <BarChart data={data} margin={{ top: 28, right: 16, bottom: hasNegatives ? 56 : 24, left: 0 }}>
      <CartesianGrid stroke={t.grid} strokeOpacity={t.gridOpacity} vertical={false} />
      {hasNegatives && (
        <ReferenceLine
          y={0}
          stroke={t.axis}
          strokeOpacity={0.6}
          strokeWidth={1}
        />
      )}
      <XAxis
        dataKey={category}
        axisLine={false}
        tickLine={false}
        interval={0}
        // When there are negative values, the negative-bar value labels sit
        // BELOW the x-axis baseline (in the chart area below 0). Bumping
        // tickMargin pushes the category tick labels further down so they
        // don't collide with negative value labels.
        tickMargin={hasNegatives ? 32 : 8}
        tick={{
          fontFamily: t.font,
          fontSize: t.size.tick,
          fontWeight: t.weight.tick,
          fill: t.axis,
          fillOpacity: t.axisOpacity,
        }}
      />
      <YAxis hide />
      <Bar
        dataKey={valueKey}
        radius={[4, 4, 0, 0]}
        isAnimationActive
        animationDuration={1100}
        animationEasing="ease-out"
      >
        {data.map((_d, i) => (
          <Cell
            key={i}
            fill={highlight === i ? accentColor : t.neutralFill}
            fillOpacity={highlight === i ? 1 : t.neutralFillOpacity}
          />
        ))}
        <LabelList
          dataKey={valueKey}
          position="top"
          offset={8}
          style={{
            fontFamily: t.font,
            fontSize: t.size.value,
            fontWeight: t.weight.value,
            fill: 'currentColor',
          }}
          formatter={(v: number) => `${v}${unit}`}
        />
      </Bar>
    </BarChart>
  )
}

function BarHorizontalPrimitive({
  data,
  category,
  valueKey,
  accentColor,
  highlight,
  unit = '',
}: BarPrimitiveProps) {
  return (
    <BarChart data={data} layout="vertical" margin={{ top: 16, right: 60, bottom: 24, left: 56 }}>
      <CartesianGrid stroke={t.grid} strokeOpacity={t.gridOpacity} horizontal={false} />
      <XAxis
        type="number"
        axisLine={false}
        tickLine={false}
        tick={{
          fontFamily: t.font,
          fontSize: t.size.tick,
          fontWeight: t.weight.tick,
          fill: t.axis,
          fillOpacity: t.axisOpacity,
        }}
      />
      <YAxis
        type="category"
        dataKey={category}
        axisLine={false}
        tickLine={false}
        width={88}
        tick={{
          fontFamily: t.font,
          fontSize: t.size.label,
          fontWeight: t.weight.label,
          fill: 'currentColor',
        }}
      />
      <Bar
        dataKey={valueKey}
        radius={[0, 4, 4, 0]}
        isAnimationActive
        animationDuration={1100}
        animationEasing="ease-out"
      >
        {data.map((_d, i) => (
          <Cell
            key={i}
            fill={highlight === i ? accentColor : t.neutralFill}
            fillOpacity={highlight === i ? 1 : t.neutralFillOpacity}
          />
        ))}
        <LabelList
          dataKey={valueKey}
          position="right"
          offset={8}
          style={{
            fontFamily: t.font,
            fontSize: t.size.value,
            fontWeight: t.weight.value,
            fill: 'currentColor',
          }}
          formatter={(v: number) => `${v}${unit}`}
        />
      </Bar>
    </BarChart>
  )
}

interface DonutPrimitiveProps {
  data: Datum[]
  category: string
  valueKey: string
  colors: readonly string[]
}

function DonutPrimitive({ data, category, valueKey, colors }: DonutPrimitiveProps) {
  return (
    <PieChart>
      <Pie
        data={data}
        dataKey={valueKey}
        nameKey={category}
        cx="50%"
        cy="50%"
        innerRadius={92}
        outerRadius={140}
        paddingAngle={2}
        startAngle={90}
        endAngle={-270}
        isAnimationActive
        animationDuration={1300}
        animationEasing="ease-out"
        labelLine={false}
        label={(p: {
          name?: string
          value?: number
          percent?: number
          cx?: number
          cy?: number
          midAngle?: number
          outerRadius?: number
        }) => {
          const RADIAN = Math.PI / 180
          const r = (p.outerRadius ?? 140) + 18
          const x = (p.cx ?? 0) + r * Math.cos(-(p.midAngle ?? 0) * RADIAN)
          const y = (p.cy ?? 0) + r * Math.sin(-(p.midAngle ?? 0) * RADIAN)
          return (
            <text
              x={x}
              y={y}
              textAnchor={x > (p.cx ?? 0) ? 'start' : 'end'}
              dominantBaseline="central"
              style={{
                fontFamily: t.font,
                fontSize: t.size.label,
                fontWeight: t.weight.label,
                fill: 'currentColor',
              }}
            >
              {`${p.name ?? ''} ${p.value ?? 0}%`}
            </text>
          )
        }}
      >
        {data.map((_d, i) => (
          <Cell
            key={i}
            fill={colors[i % colors.length]}
            stroke="var(--background)"
            strokeWidth={2}
          />
        ))}
      </Pie>
    </PieChart>
  )
}
