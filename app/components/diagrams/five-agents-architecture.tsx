import {
  Send,
  Compass,
  Search,
  Wallet,
  Dumbbell,
  Briefcase,
  FolderOpen,
  Database,
} from 'lucide-react'

/**
 * 5-agent system architecture diagram.
 *
 * Aesthetic: Vercel/Cloudflare blog tier — minimal palette, Geist font
 * inherited from page, 1.5px strokes, 8px corner radius, whitespace-dominant.
 * Inline SVG rather than a raster/static-SVG file so it picks up currentColor
 * and the page's CSS for clean light/dark theme switching.
 */
export function FiveAgentsArchitecture() {
  return (
    <div className="five-agents-architecture not-prose my-10">
      <svg
        viewBox="0 0 1200 720"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-labelledby="fa-arch-title fa-arch-desc"
        className="w-full h-auto"
      >
        <title id="fa-arch-title">5-agent architecture</title>
        <desc id="fa-arch-desc">
          A Telegram-connected orchestrator named Jordan routes requests to
          four specialist agents (Research, Finance, Fitness, Jobs), all of
          which read and write a shared layer containing a file-based message
          hub and a semantic memory MCP.
        </desc>

        <defs>
          <marker
            id="fa-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
          </marker>
        </defs>

        {/* --- Row 1: User (top) --- */}
        <Node x={500} y={40} width={200} height={56} icon={Send} label="Me via Telegram" muted />

        {/* --- Row 2: Jordan (orchestrator, accent) --- */}
        <Node
          x={460}
          y={170}
          width={280}
          height={72}
          icon={Compass}
          label="Jordan"
          sublabel="orchestrator"
          accent
        />

        {/* --- Row 3: Four specialist agents --- */}
        <Node x={60} y={340} width={220} height={72} icon={Search} label="Research" sublabel="daily digests + alpha" />
        <Node x={330} y={340} width={220} height={72} icon={Wallet} label="Finance" sublabel="budget + crypto PnL" />
        <Node x={600} y={340} width={220} height={72} icon={Dumbbell} label="Fitness" sublabel="workouts + nutrition" />
        <Node x={870} y={340} width={220} height={72} icon={Briefcase} label="Jobs" sublabel="career-ops pipeline" />

        {/* --- Row 4: Shared layer zone with two sinks --- */}
        <StorageZone x={200} y={500} width={800} height={180}>
          <Node x={290} y={580} width={260} height={72} icon={FolderOpen} label="shared hub" sublabel="file-based message bus" insideZone />
          <Node x={650} y={580} width={260} height={72} icon={Database} label="memory MCP" sublabel="FTS5 + bge-m3 + recency" insideZone />
        </StorageZone>

        {/* --- Edges --- */}
        {/* User → Jordan */}
        <Edge from={{ x: 600, y: 96 }} to={{ x: 600, y: 170 }} />

        {/* Jordan → each agent */}
        <Edge from={{ x: 540, y: 242 }} to={{ x: 170, y: 340 }} />
        <Edge from={{ x: 580, y: 242 }} to={{ x: 440, y: 340 }} />
        <Edge from={{ x: 620, y: 242 }} to={{ x: 710, y: 340 }} />
        <Edge from={{ x: 660, y: 242 }} to={{ x: 980, y: 340 }} />

        {/* Agents → Storage zone top */}
        <Edge from={{ x: 170, y: 412 }} to={{ x: 420, y: 500 }} />
        <Edge from={{ x: 440, y: 412 }} to={{ x: 500, y: 500 }} />
        <Edge from={{ x: 710, y: 412 }} to={{ x: 680, y: 500 }} />
        <Edge from={{ x: 980, y: 412 }} to={{ x: 770, y: 500 }} />
      </svg>
    </div>
  )
}

/* ---------- Atoms ---------- */

type IconType = typeof Search

function Node({
  x,
  y,
  width,
  height,
  icon: Icon,
  label,
  sublabel,
  accent = false,
  muted = false,
  insideZone = false,
}: {
  x: number
  y: number
  width: number
  height: number
  icon: IconType
  label: string
  sublabel?: string
  accent?: boolean
  muted?: boolean
  insideZone?: boolean
}) {
  const fill = accent ? 'rgb(139, 92, 246)' /* purple-500 */ : 'transparent'
  const stroke = accent ? 'rgb(139, 92, 246)' : 'currentColor'
  const strokeOpacity = accent ? 1 : muted ? 0.4 : 0.7
  const textColor = accent ? '#ffffff' : 'currentColor'

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={10}
        ry={10}
        fill={fill}
        stroke={stroke}
        strokeOpacity={strokeOpacity}
        strokeWidth={1.5}
      />
      <g transform={`translate(${x + 18}, ${y + height / 2 - 10})`} color={textColor}>
        <Icon size={20} strokeWidth={1.75} />
      </g>
      <text
        x={x + 50}
        y={sublabel ? y + height / 2 - 4 : y + height / 2 + 5}
        fontSize={16}
        fontWeight={600}
        fill={textColor}
        style={{ fontFamily: 'var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif' }}
      >
        {label}
      </text>
      {sublabel && (
        <text
          x={x + 50}
          y={y + height / 2 + 14}
          fontSize={12}
          fill={textColor}
          fillOpacity={accent ? 0.85 : 0.6}
          style={{ fontFamily: 'var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif' }}
        >
          {sublabel}
        </text>
      )}
    </g>
  )
}

function StorageZone({
  x,
  y,
  width,
  height,
  children,
}: {
  x: number
  y: number
  width: number
  height: number
  children: React.ReactNode
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={14}
        ry={14}
        fill="rgba(245, 158, 11, 0.08)" /* amber-500 @ 8% */
        stroke="rgb(245, 158, 11)"
        strokeOpacity={0.55}
        strokeWidth={1.5}
        strokeDasharray="4 4"
      />
      <text
        x={x + 18}
        y={y + 26}
        fontSize={13}
        fontWeight={500}
        fill="rgb(245, 158, 11)"
        fillOpacity={0.9}
        style={{
          fontFamily:
            'var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
        }}
      >
        shared layer
      </text>
      {children}
    </g>
  )
}

function Edge({
  from,
  to,
}: {
  from: { x: number; y: number }
  to: { x: number; y: number }
}) {
  return (
    <line
      x1={from.x}
      y1={from.y}
      x2={to.x}
      y2={to.y}
      stroke="currentColor"
      strokeOpacity={0.5}
      strokeWidth={1.5}
      markerEnd="url(#fa-arrow)"
    />
  )
}
