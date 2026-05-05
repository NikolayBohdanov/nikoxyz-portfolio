type Props = {
  slug: string
  alt: string
  width?: number
  height?: number
  /** Override poster path; defaults to /videos/<slug>-poster.jpg */
  poster?: string
  /** Seconds to skip into the file when playback starts. Poster image is unaffected. */
  startAt?: number
}

export function VideoHero({
  slug,
  alt,
  width = 1920,
  height = 1080,
  poster,
  startAt,
}: Props) {
  const src =
    startAt != null
      ? `/videos/${slug}.mp4#t=${startAt}`
      : `/videos/${slug}.mp4`
  return (
    <div className="video-hero">
      <video
        src={src}
        width={width}
        height={height}
        poster={poster ?? `/videos/${slug}-poster.jpg`}
        controls
        preload="metadata"
        playsInline
        aria-label={alt}
        className="video-hero-video"
      />
    </div>
  )
}
