'use client'

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
  }
}

export type TrackEventParams = {
  event: string
} & Record<string, string | number | boolean | undefined>

export function trackEvent(params: TrackEventParams): void {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer ?? []
  window.dataLayer.push(params)
}

export function grantConsent(): void {
  trackEvent({ event: 'consent_granted', consent_type: 'analytics' })
}

export function revokeConsent(): void {
  trackEvent({ event: 'consent_revoked', consent_type: 'analytics' })
}
