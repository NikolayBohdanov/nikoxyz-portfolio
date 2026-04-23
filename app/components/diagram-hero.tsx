import Image from 'next/image'

type Props = {
  slug: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
}

export function DiagramHero({
  slug,
  alt,
  width = 1600,
  height = 900,
  priority = true,
}: Props) {
  const lightSrc = `/diagrams/${slug}-hero.png`
  const darkSrc = `/diagrams/${slug}-hero.dark.png`
  return (
    <div className="diagram-hero">
      <Image
        src={lightSrc}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="diagram-hero-light"
      />
      <Image
        src={darkSrc}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="diagram-hero-dark"
      />
    </div>
  )
}
