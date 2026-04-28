'use client'

import { useEffect, useState } from 'react'
import { grantConsent, revokeConsent } from './track-event'

const STORAGE_KEY = 'consent.analytics'
type ConsentState = 'granted' | 'denied' | null

function readStoredConsent(): ConsentState {
  if (typeof window === 'undefined') return null
  const value = window.localStorage.getItem(STORAGE_KEY)
  return value === 'granted' || value === 'denied' ? value : null
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = readStoredConsent()
    if (stored === 'granted') grantConsent()
    if (stored === null) setVisible(true)
  }, [])

  if (!visible) return null

  const decide = (state: 'granted' | 'denied') => {
    window.localStorage.setItem(STORAGE_KEY, state)
    if (state === 'granted') grantConsent()
    else revokeConsent()
    setVisible(false)
  }

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-4 inset-x-4 md:left-auto md:right-4 md:max-w-sm z-50 rounded-lg border border-border bg-background/95 backdrop-blur p-4 shadow-lg text-sm"
    >
      <p className="text-foreground/90 mb-3">
        I use Google Analytics to understand which posts resonate. No ads, no tracking across sites. Vercel Analytics (cookieless) runs either way.
      </p>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => decide('granted')}
          className="flex-1 rounded-md bg-foreground text-background px-3 py-1.5 font-medium hover:opacity-90 transition"
        >
          Accept
        </button>
        <button
          type="button"
          onClick={() => decide('denied')}
          className="flex-1 rounded-md border border-border px-3 py-1.5 font-medium hover:bg-muted transition"
        >
          Decline
        </button>
      </div>
    </div>
  )
}
