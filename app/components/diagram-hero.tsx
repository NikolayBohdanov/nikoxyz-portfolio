type Props = {
  slug: string
  alt: string
  width?: number
  height?: number
  /**
   * Which rendering engine produced the diagram.
   * - 'mermaid' (default): SVG pair via mmdc v11 + ELK + look:handDrawn + colored palette.
   * - 'excalidraw': PNG pair via excalidraw-architect-mcp or mermaid-to-excalidraw + label-shift.
   * Both live under /diagrams/<slug>-hero.<ext> + <slug>-hero.dark.<ext>.
   */
  engine?: 'mermaid' | 'excalidraw'
}

export function DiagramHero({
  slug,
  alt,
  width = 1200,
  height = 700,
  engine = 'mermaid',
}: Props) {
  const ext = engine === 'mermaid' ? 'svg' : 'png'
  const lightSrc = `/diagrams/${slug}-hero.${ext}`
  const darkSrc = `/diagrams/${slug}-hero.dark.${ext}`
  return (
    <div className="diagram-hero">
      <img
        src={lightSrc}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        className="diagram-hero-light"
      />
      <img
        src={darkSrc}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        className="diagram-hero-dark"
      />
    </div>
  )
}
