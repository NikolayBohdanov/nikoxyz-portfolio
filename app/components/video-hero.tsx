type Props = {
  slug: string
  alt: string
  width?: number
  height?: number
  poster?: string
}

export function VideoHero({
  slug,
  alt,
  width = 1920,
  height = 1080,
  poster,
}: Props) {
  return (
    <div className="video-hero">
      <video
        src={`/videos/${slug}.mp4`}
        width={width}
        height={height}
        poster={poster}
        controls
        preload="metadata"
        playsInline
        aria-label={alt}
        className="video-hero-video"
      />
    </div>
  )
}
