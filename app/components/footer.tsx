import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { href: 'https://github.com/nikoxyz', icon: Github, label: 'GitHub' },
    { href: 'https://twitter.com/nikoxyz', icon: Twitter, label: 'Twitter' },
    { href: 'https://linkedin.com/in/nikoxyz', icon: Linkedin, label: 'LinkedIn' },
    { href: 'mailto:nikolay@twitterscore.io', icon: Mail, label: 'Email' },
  ]

  return (
    <footer className="mb-16">
      <div className="mt-16 pt-8 border-t border-slate-800/50">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <span className="font-bold gradient-text">Nikolay</span>
          </div>
          
          {/* Quick Links */}
          <div className="flex gap-6 text-sm">
            <a href="/privacy" className="text-slate-500 hover:text-slate-300 transition-colors">
              Privacy
            </a>
            <a href="/resume.pdf" className="text-slate-500 hover:text-slate-300 transition-colors">
              Resume
            </a>
            <a href="mailto:nikolay@twitterscore.io" className="text-slate-500 hover:text-slate-300 transition-colors">
              Contact
            </a>
          </div>
          
          {/* Social Icons */}
          <div className="flex gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-indigo-400 hover:bg-slate-800 transition-all"
                aria-label={link.label}
              >
                <link.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        
        <p className="mt-8 text-center text-sm text-slate-600">
          © {currentYear} Nikolay Bohdanov. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
