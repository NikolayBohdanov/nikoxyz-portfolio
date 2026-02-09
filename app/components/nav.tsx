import Link from 'next/link'
import { Github, Twitter } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  },
}

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
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
              >
                {name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-1">
            <a
              href="https://github.com/nikoxyz"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com/nikoxyz"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            
            <div className="w-px h-4 bg-neutral-300 dark:bg-neutral-700 mx-1"></div>
            
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </aside>
  )
}
