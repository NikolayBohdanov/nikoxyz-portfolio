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
    <div className={`rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 p-6 ${className}`}>
      <div className="flex items-center gap-2 mb-2">
        <Mail className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
        <h3 className="text-lg font-semibold text-black dark:text-white">{title}</h3>
      </div>
      
      <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">{description}</p>

      {status === 'success' ? (
        <div className="flex items-center gap-2 p-4 rounded-lg bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
          <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
          <p className="text-green-700 dark:text-green-400 text-sm">
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
              className="flex-1 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-4 py-2.5 text-sm text-black dark:text-white placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-400 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary"
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
            <div className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>{errorMessage}</span>
            </div>
          )}

          <p className="text-xs text-neutral-500 dark:text-neutral-500">
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
    <div className={`rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 p-6 ${className}`}>
      <div className="flex items-center gap-2 mb-2">
        <Mail className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
        <h3 className="text-lg font-semibold text-black dark:text-white">Stay updated</h3>
      </div>
      
      <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
        Subscribe to get notified about new posts and projects.
      </p>

      <a
        href="https://twitterscore.substack.com/subscribe"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary"
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
