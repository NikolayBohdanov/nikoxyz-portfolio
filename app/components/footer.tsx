import { Github, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { href: 'https://github.com/nikoxyz', icon: Github, label: 'GitHub' },
    { href: 'https://twitter.com/nikoxyz', icon: Twitter, label: 'Twitter' },
    { href: 'https://linkedin.com/in/nikoxyz', icon: Linkedin, label: 'LinkedIn' },
  ]

  return (
    <footer className="mb-16">
      <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          
          {/* Copyright */}
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            © {currentYear} Nikolay Bohdanov. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
