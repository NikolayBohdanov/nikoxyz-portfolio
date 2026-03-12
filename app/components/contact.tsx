import { Mail, ArrowRight, Phone, MapPin } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-12">
      <div className="relative overflow-hidden rounded-2xl bg-card border-border p-8 md:p-12">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-card-foreground">
            Let's Build Something <span className="text-muted-foreground">Together</span>
          </h2>
          
          <p className="text-muted-foreground text-lg mb-6">
            Open to research collaborations, advisory roles, and product consulting opportunities in Web3.
          </p>
          
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <a href="mailto:bohdanovmykola@gmail.com" className="hover:text-card-foreground transition-colors">
                bohdanovmykola@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <a href="tel:+380950021268" className="hover:text-card-foreground transition-colors">
                +380 95 002 12 68
              </a>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="w-4 h-4" />
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
