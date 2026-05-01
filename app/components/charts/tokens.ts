// Single source of truth for chart visuals.
// Recharts charts AND inline-SVG charts both consume these tokens, so
// every visualization on the site looks like it came from the same studio.

export const chartTokens = {
  // Theme-aware via CSS variables. The chart figure sets
  // `color: hsl(var(--foreground))` so every `currentColor` consumer
  // gets the right contrast in BOTH light and dark themes.
  // (next-themes leaves both `light` and `dark` classes on <html> in
  //  this codebase; relying on Tailwind `dark:` cascade is unreliable —
  //  CSS vars are the only thing that flips correctly.)
  axis: 'currentColor',
  axisOpacity: 1,
  grid: 'currentColor',
  gridOpacity: 0.18,
  textPrimary: 'currentColor',
  /** Neutral fill for non-highlighted bars. Slate-500 reads well on both
   * white and near-black backgrounds without needing theme-aware logic. */
  neutralFill: 'rgb(100, 116, 139)',
  neutralFillOpacity: 0.85,
  sourceOpacity: 0.85,

  accents: {
    purple: 'rgb(139, 92, 246)', // primary protagonist (default highlight)
    green: 'rgb(34, 197, 94)', // positive
    red: 'rgb(239, 68, 68)', // negative / outlier
    amber: 'rgb(245, 158, 11)', // zone / annotation
    teal: 'rgb(20, 184, 166)', // secondary
  },

  // Categorical sequence for multi-series. Use the first 2-3; reach
  // for 4+ deliberately. Designed to read as "1 protagonist + supporting
  // cast" rather than rainbow.
  categorical: [
    'rgb(139, 92, 246)', // purple — protagonist
    'rgb(20, 184, 166)', // teal
    'rgb(245, 158, 11)', // amber
    'rgb(34, 197, 94)', // green
    'rgb(239, 68, 68)', // red
  ],

  font: 'var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif',
  size: {
    title: 18,
    label: 14,
    value: 14,
    tick: 12,
    annot: 13,
    source: 12,
  },
  weight: {
    title: 600,
    label: 500,
    value: 600,
    tick: 400,
    annot: 500,
    source: 400,
  },
  margin: { top: 24, right: 16, bottom: 16, left: 0 },
} as const

export type AccentKey = keyof typeof chartTokens.accents
