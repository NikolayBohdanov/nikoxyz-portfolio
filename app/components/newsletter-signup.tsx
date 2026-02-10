'use client'

import { useState } from 'react'
import { Mail, Loader2, Check, AlertCircle } from 'lucide-react'

interface NewsletterSignupProps {
  title?: string
  description?: string
  buttonText?: string
  className?: string
}

export function NewsletterSignup({
  title = 'Subscribe to updates',
  description = 'Get the latest crypto research and insights delivered to your inbox.',
  buttonText = 'Subscribe',
  className = '',
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setStatus('success')
        setEmail('')
      } else {
        const data = await response.json()
        setErrorMessage(data.error || 'Failed to subscribe')
        setStatus('error')
      }
    } catch {
      setErrorMessage('Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  return (
    <div className={`rounded-xl border border-slate-800 bg-slate-900/50 p-6 ${className}`}>
      <div className="flex items-center gap-2 mb-2">
        <Mail className="w-5 h-5 text-neutral-400" />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      
      <p className="text-slate-400 text-sm mb-4">{description}</p>

      {status === 'success' ? (
        <div className="flex items-center gap-2 p-4 rounded-lg bg-green-900/20 border border-green-800">
          <Check className="w-5 h-5 text-green-400" />
          <p className="text-green-400 text-sm">
            Thanks for subscribing! Check your inbox for confirmation.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              disabled={status === 'loading'}
              className="flex-1 rounded-lg border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-400 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-500 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-600 disabled:opacity-50"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Subscribing...
                </>
              ) : (
                buttonText
              )}
            </button>
          </div>

          {status === 'error' && (
            <div className="flex items-center gap-2 text-red-400 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>{errorMessage}</span>
            </div>
          )}

          <p className="text-xs text-slate-500">
            No spam. Unsubscribe anytime.
          </p>
        </form>
      )}
    </div>
  )
}

// Alternative: ConvertKit Embed Version
export function NewsletterEmbed({ className = '' }: { className?: string }) {
  return (
    <div className={`rounded-xl border border-slate-800 bg-slate-900/50 p-6 ${className}`}>
      <div className="flex items-center gap-2 mb-2">
        <Mail className="w-5 h-5 text-neutral-400" />
        <h3 className="text-lg font-semibold">Stay updated</h3>
      </div>
      
      <p className="text-slate-400 text-sm mb-4">
        Subscribe to get notified about new posts and projects.
      </p>

      <a
        href="https://twitterscore.substack.com/subscribe"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-500 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-600"
      >
        Subscribe on Substack
        <svg
          className="ml-1 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>
    </div>
  )
}
