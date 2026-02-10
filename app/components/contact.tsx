import { Mail, ArrowRight } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-12">
      <div className="relative overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-8 md:p-12">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black dark:text-white">
            Let's Build Something <span className="text-neutral-500 dark:text-neutral-300">Together</span>
          </h2>
          
          <p className="text-neutral-600 dark:text-neutral-400 text-lg mb-8">
            Open to research collaborations, advisory roles, and product consulting opportunities.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:nikolay@twitterscore.io"
              className="btn-primary"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
            
            <a
              href="/resume.pdf"
              className="btn-secondary"
            >
              Download Resume
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
