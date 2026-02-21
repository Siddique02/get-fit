import LeadForm from '@/components/LeadForm'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-black/30 py-16 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-display text-5xl md:text-6xl font-bold uppercase tracking-wider high-contrast">Contact Us</h1>
          <p className="text-lg text-white/70 mt-2 max-w-2xl mx-auto">We&apos;re here to help you get started. Reach out with any questions or drop by the gym.</p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section id="join-now" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-3xl font-bold uppercase tracking-wider mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <ContactInfo 
                  icon={<MapPin size={24} className="text-(--brand-lime)" />} 
                  title="Our Location"
                  text="123 Fitness Street, Gymtown, ST 45678"
                  autocomplete="street-address"
                />
                <ContactInfo 
                  icon={<Phone size={24} className="text-(--brand-lime)" />} 
                  title="Call Us"
                  text="+1 (555) 123-4567"
                />
                <ContactInfo 
                  icon={<Mail size={24} className="text-(--brand-lime)" />} 
                  title="Email Us"
                  text="contact@getfit.club"
                />
              </div>
              <div className="mt-10">
                <h3 className="font-display text-2xl font-bold uppercase tracking-wider mb-4">Find Us Here</h3>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d28944.930707078136!2d67.05034563033145!3d24.928106384620477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d24.9365694!2d67.0822045!4m5!1s0x3eb33ddab99aebe9%3A0x15b58382f7a05ee4!2sGet%20Fit%20Gym%2C%2041%20House%2C%201%202B%2C%20Federal%20B%20Area%20Azizabad%20Block%208%20Gulberg%20Town%2C%20Karachi%2C%2075160%2C%20Pakistan!3m2!1d24.916223499999997!2d67.06641429999999!5e0!3m2!1sen!2s!4v1771649131948!5m2!1sen!2s" width="400" height="200" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className="aspect-w-16 aspect-h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
                   <p className="text-white/50">Google Map Placeholder</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold uppercase tracking-wider mb-6">Send a Message</h2>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ContactInfo({ icon, title, text }) {
  return (
    <div className="flex items-start">
      <div className="shrink-0 mr-4 mt-1">{icon}</div>
      <div>
        <h3 className="font-bold text-xl uppercase">{title}</h3>
        <p className="text-white/70">{text}</p>
      </div>
    </div>
  )
}
