import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { href: 'https://github.com/NikolayBohdanov', icon: Github, label: 'GitHub' },
    { href: 'https://x.com/nikolayxyz', icon: Twitter, label: 'Twitter' },
    { href: 'https://linkedin.com/in/nikolaybohdanov', icon: Linkedin, label: 'LinkedIn' },
    { href: 'mailto:bohdanovmykola@gmail.com', icon: Mail, label: 'Email' },
  ]

  return (
    <footer className="mb-16">
      <div className="mt-16 pt-8 border-t border-border">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <a href="https://nikoxyz.com/" className="font-bold gradient-text hover:-translate-y-0.5 transition-all duration-200 inline-block">
              Nikolay
            </a>
          </div>
          
          {/* Quick Links */}
          <div className="flex gap-6 text-sm">
            <a href="/privacy" className="font-medium text-muted-foreground hover:text-foreground hover:-translate-y-0.5 transition-all duration-200">
              Privacy
            </a>
            <a href="/resume.pdf" className="font-medium text-muted-foreground hover:text-foreground hover:-translate-y-0.5 transition-all duration-200">
              Resume
            </a>
            <a href="mailto:bohdanovmykola@gmail.com" className="font-medium text-muted-foreground hover:text-foreground hover:-translate-y-0.5 transition-all duration-200">
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
                className="p-2 rounded-lg border border-transparent text-muted-foreground hover:text-foreground hover:border-primary hover:bg-muted/30 hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/20 transition-all duration-200"
                aria-label={link.label}
              >
                <link.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        
        <p className="mt-8 text-center text-sm text-muted-foreground">
          © {currentYear} Nikolay Bohdanov. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
