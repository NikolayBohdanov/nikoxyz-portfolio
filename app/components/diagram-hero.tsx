type Props = {
  slug: string
  alt: string
  width?: number
  height?: number
}

export function DiagramHero({
  slug,
  alt,
  width = 1200,
  height = 700,
}: Props) {
  const lightSrc = `/diagrams/${slug}-hero.svg`
  const darkSrc = `/diagrams/${slug}-hero.dark.svg`
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
