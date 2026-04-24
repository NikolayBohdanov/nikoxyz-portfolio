import { Skull, ShieldAlert, FileText, RotateCw } from 'lucide-react'

/**
 * 4-step horizontal timeline for the supervisor flush incident.
 * Reads as: launchd kills → supervisor catches → flush to memory → relaunch.
 * Matches the hand-crafted aesthetic of FiveAgentsArchitecture (Geist font
 * inherited, same border + radius, muted palette with one purple accent).
 */
export function IncidentTimeline() {
  const steps = [
    {
      icon: Skull,
      label: 'launchd kill',
      detail: 'inactivity timeout',
    },
    {
      icon: ShieldAlert,
      label: 'supervisor catches',
      detail: 'SIGTERM handler',
      accent: true,
    },
    {
      icon: FileText,
      label: 'flush to memory',
      detail: 'Haiku summary · WAL write',
    },
    {
      icon: RotateCw,
      label: 'relaunch',
      detail: 'launchctl kickstart',
    },
  ] as const

  return (
    <div className="incident-timeline not-prose my-10">
      <svg
        viewBox="0 0 1200 220"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Timeline: launchd kills the agent, the supervisor catches the signal, runs a Haiku flush to memory, then relaunches."
        className="w-full h-auto"
      >
        <defs>
          <marker
            id="timeline-arrow"
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

        {steps.map((step, i) => {
          const Icon = step.icon
          const x = 60 + i * 280
          const accent = 'accent' in step && step.accent
          const stroke = accent ? 'rgb(139, 92, 246)' : 'currentColor'
          const strokeOpacity = accent ? 1 : 0.55
          const fill = accent ? 'rgb(139, 92, 246)' : 'transparent'
          const iconColor = accent ? '#ffffff' : 'currentColor'

          return (
            <g key={i}>
              {/* Step circle */}
              <circle
                cx={x + 100}
                cy={70}
                r={42}
                fill={fill}
                stroke={stroke}
                strokeOpacity={strokeOpacity}
                strokeWidth={1.5}
              />
              <g
                transform={`translate(${x + 78}, ${48})`}
                color={iconColor as string}
              >
                <Icon size={44} strokeWidth={1.75} />
              </g>

              {/* Label + detail */}
              <text
                x={x + 100}
                y={150}
                fontSize={18}
                fontWeight={600}
                textAnchor="middle"
                fill="currentColor"
                style={{
                  fontFamily: 'var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif',
                }}
              >
                {step.label}
              </text>
              <text
                x={x + 100}
                y={180}
                fontSize={14}
                textAnchor="middle"
                fill="currentColor"
                fillOpacity={0.6}
                style={{
                  fontFamily: 'var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif',
                }}
              >
                {step.detail}
              </text>

              {/* Connector arrow to next step */}
              {i < steps.length - 1 && (
                <line
                  x1={x + 150}
                  y1={70}
                  x2={x + 240}
                  y2={70}
                  stroke="currentColor"
                  strokeOpacity={0.45}
                  strokeWidth={1.5}
                  markerEnd="url(#timeline-arrow)"
                />
              )}
            </g>
          )
        })}
      </svg>
    </div>
  )
}
