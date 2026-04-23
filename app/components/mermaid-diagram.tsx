type Props = {
  slug: string
  alt: string
}

export function MermaidDiagram({ slug, alt }: Props) {
  const lightSrc = `/diagrams/mermaid/${slug}-light.svg`
  const darkSrc = `/diagrams/mermaid/${slug}-dark.svg`
  return (
    <div className="mermaid-diagram">
      <img src={lightSrc} alt={alt} className="mermaid-diagram-light" />
      <img src={darkSrc} alt={alt} className="mermaid-diagram-dark" />
    </div>
  )
}
