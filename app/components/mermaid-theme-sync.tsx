'use client'

import { useEffect } from 'react'

export function MermaidThemeSync() {
  useEffect(() => {
    const apply = () => {
      const isDark = document.documentElement.classList.contains('dark')
      const pictures = document.querySelectorAll<HTMLPictureElement>('picture')
      pictures.forEach((picture) => {
        const source = picture.querySelector<HTMLSourceElement>(
          'source[media*="prefers-color-scheme: dark"]',
        )
        const img = picture.querySelector<HTMLImageElement>('img')
        if (!source || !img) return
        if (!img.dataset.lightSrc) img.dataset.lightSrc = img.src
        const target = isDark ? source.srcset : img.dataset.lightSrc
        if (img.src !== target) img.src = target
      })
    }

    apply()
    const observer = new MutationObserver(apply)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })
    return () => observer.disconnect()
  }, [])

  return null
}
