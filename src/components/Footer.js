import { Facebook, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ]

  return (
    <footer className="bg-black/50 border-t border-white/10 py-12">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h3 className="text-3xl font-bold uppercase tracking-wider text-(--brand-lime) high-contrast mb-4">
          GetFit Health Club
        </h3>
        <p className="text-white/60 max-w-md mx-auto mb-6">
          123 Fitness Street, Gymtown, ST 45678
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((link) => (
            <Link key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="text-white/80 hover:text-(--brand-lime) transition-colors">
              <link.icon size={24} />
            </Link>
          ))}
        </div>
        <p className="text-sm text-white/40">
          &copy; {new Date().getFullYear()} One Generation Gym. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
