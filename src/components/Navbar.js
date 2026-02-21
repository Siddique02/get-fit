'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/trainers', label: 'Trainers' },
    { href: '/schedule', label: 'Schedule' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-(--brand-gray)/20 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className=" mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-2xl font-bold uppercase tracking-wider">
          GetFit
        </Link>
        
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium uppercase tracking-wider hover:text-(--brand-lime) transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
            <Link href="/contact#join-now"><button className="hidden md:inline-block bg-(--brand-lime) text-(--brand-gray) font-bold uppercase tracking-wider px-6 py-2.5 rounded-full hover:bg-opacity-90 transition-transform hover:scale-105">
                Join Now
            </button></Link>
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-(--brand-gray)/20 backdrop-blur-md pb-6 px-4">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-lg font-medium uppercase tracking-wider hover:text-(--brand-lime) transition-colors">
                {link.label}
              </Link>
            ))}
            <Link href="/contact#join-now" onClick={() => setIsMenuOpen(false)} className="w-full text-center bg-(--brand-lime) text-(--brand-gray) font-bold uppercase tracking-wider px-6 py-3 rounded-full hover:bg-opacity-90 transition-transform hover:scale-105">
                Join Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
