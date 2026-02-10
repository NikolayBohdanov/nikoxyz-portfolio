import { Mail, ArrowRight } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-12">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900/50 to-neutral-900 border border-neutral-400/20 p-8 md:p-12">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-neutral-400/20 rounded-full blur-3xl -tranneutral-y-1/2 tranneutral-x-1/2 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Let's Build Something <span className="text-neutral-300">Together</span>
          </h2>
          
          <p className="text-neutral-500 dark:neutral-400 text-lg mb-8">
            Open to research collaborations, advisory roles, and product consulting opportunities.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:nikolay@twitterscore.io"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-neutral-500 text-white font-medium hover:bg-neutral-600 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
            
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-neutral-700 text-neutral-400 dark:neutral-300 font-medium hover:bg-neutral-800 hover:text-white transition-colors"
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
