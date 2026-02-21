'use client'

import Link from 'next/link'
import { MessageSquare } from 'lucide-react' // Using a generic message icon

export default function WhatsAppButton() {
  // Replace with your phone number in international format
  const phoneNumber = '15551234567'
  const message = encodeURIComponent("Hello! I'm interested in joining GetFit Health Club.")

  return (
    <Link 
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 z-50"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare size={32} />
    </Link>
  )
}
