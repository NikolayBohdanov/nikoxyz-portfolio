import Link from 'next/link'
import { Github, Twitter, Linkedin } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'

const navItems = {
  '/': {
    name: 'home',
  },
  '/work': {
    name: 'work',
  },
  '/blog': {
    name: 'writing',
  },
  '/now': {
    name: 'now',
  },
  '/about': {
    name: 'about',
  },
}

const socialLinks = [
  { href: 'https://github.com/NikolayBohdanov', icon: Github, label: 'GitHub' },
  { href: 'https://x.com/nikolayxyz', icon: Twitter, label: 'Twitter' },
  { href: 'https://linkedin.com/in/nikolaybohdanov', icon: Linkedin, label: 'LinkedIn' },
]

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-center justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className="transition-all font-medium text-muted-foreground hover:text-foreground hover:-translate-y-0.5 flex align-middle relative py-1 px-2 m-1"
              >
                {name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-1">
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
            
            <div className="w-px h-4 bg-border mx-1"></div>
            
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </aside>
  )
}
