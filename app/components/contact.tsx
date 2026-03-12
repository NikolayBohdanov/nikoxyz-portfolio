import { Mail, ArrowRight, Phone, MapPin } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-12">
      <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 p-8 md:p-12">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black dark:text-white">
            Let's Build Something <span className="text-neutral-500 dark:text-neutral-300">Together</span>
          </h2>
          
          <p className="text-neutral-600 dark:text-neutral-300 text-lg mb-6">
            Open to research collaborations, advisory roles, and product consulting opportunities in Web3.
          </p>
          
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
              <Mail className="w-4 h-4 text-neutral-500" />
              <a href="mailto:bohdanovmykola@gmail.com" className="hover:text-black dark:hover:text-white transition-colors">
                bohdanovmykola@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
              <Phone className="w-4 h-4 text-neutral-500" />
              <a href="tel:+380950021268" className="hover:text-black dark:hover:text-white transition-colors">
                +380 95 002 12 68
              </a>
            </div>
            <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
              <MapPin className="w-4 h-4 text-neutral-500" />
              <span>Odesa, Ukraine</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:bohdanovmykola@gmail.com"
              className="btn-primary"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
            
            <a
              href="https://linkedin.com/in/nikolaybohdanov"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              LinkedIn Profile
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
