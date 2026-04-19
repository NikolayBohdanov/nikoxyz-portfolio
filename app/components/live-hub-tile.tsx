'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

/**
 * Live proof tile — embeds the public dashboard demo at app.nikoxyz.com.
 *
 * Desktop: iframe with graceful fallback to a link + screenshot if the load
 * times out or errors. Mobile (<768px) always renders the screenshot to
 * avoid iframe sandboxing issues on iOS Safari.
 */
export function LiveHubTile() {
  const [isMobile, setIsMobile] = useState(false)
  const [loadFailed, setLoadFailed] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)

    // Timeout fallback — if iframe hasn't signalled load within 6s, assume failure
    const timeout = setTimeout(() => {
      if (!loaded) setLoadFailed(true)
    }, 6000)

    return () => {
      window.removeEventListener('resize', check)
      clearTimeout(timeout)
    }
  }, [loaded])

  return (
    <section>
      <div className="mb-4 flex items-baseline justify-between">
        <h2 className="text-2xl font-semibold text-foreground">Live: my agent dashboard</h2>
        <a
          href="https://app.nikoxyz.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
        >
          Open app.nikoxyz.com
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
      <p className="text-sm text-muted-foreground mb-4">
        Public demo of the dashboard that fronts my 5-agent system — jobs pipeline, fitness recovery, finance ops.
        Anonymised data shown; sign-in swaps in my real feeds. This is not a mock: the Python server is the same one I use daily.
      </p>

      <div className="relative rounded-lg border border-border overflow-hidden bg-card aspect-[16/10]">
        {!isMobile && !loadFailed ? (
          <iframe
            src="https://app.nikoxyz.com"
            title="Dashboard Hub — app.nikoxyz.com"
            className="w-full h-full"
            loading="lazy"
            onLoad={() => setLoaded(true)}
            onError={() => setLoadFailed(true)}
            sandbox="allow-scripts allow-same-origin"
          />
        ) : (
          <a
            href="https://app.nikoxyz.com"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center hover:bg-muted/30 transition-colors"
          >
            <div className="text-sm font-medium text-foreground">app.nikoxyz.com</div>
            <div className="text-xs text-muted-foreground max-w-sm">
              {isMobile
                ? 'Tap to open the live dashboard in a new tab — embeds disabled on mobile for best rendering.'
                : 'Embed unavailable — tap to open the live dashboard in a new tab.'}
            </div>
            <div className="inline-flex items-center gap-1 text-sm text-foreground">
              Open dashboard
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </a>
        )}
      </div>
    </section>
  )
}
