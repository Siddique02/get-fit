'use client'

import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'
import { useState } from 'react'

export default function LeadForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const onSubmit = (data) => {
    setIsSubmitting(true)
    setIsSuccess(false)
    setIsError(false)

    // Replace with your EmailJS service ID, template ID, and user ID
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID

    if (!serviceID || !templateID || !userID) {
        console.error('EmailJS environment variables are not set.')
        setIsError(true)
        setIsSubmitting(false)
        return
    }

    emailjs.send(serviceID, templateID, data, userID)
      .then(() => {
        setIsSubmitting(false)
        setIsSuccess(true)
        reset()
        setTimeout(() => setIsSuccess(false), 5000)
      }, (error) => {
        console.log(error.text)
        setIsSubmitting(false)
        setIsError(true)
        setTimeout(() => setIsError(false), 5000)
      })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-lg mx-auto">
      <div>
        <input 
          {...register('name', { required: 'Name is required' })} 
          placeholder="Your Name"
          className="w-full bg-black/10 border border-black/20 rounded-md px-4 py-3 text-black placeholder-black/50 focus:ring-2 focus:ring-(--brand-lime) focus:outline-none transition-shadow"
        />
        {errors.name && <p className="text-red-400 mt-1 text-sm">{errors.name.message}</p>}
      </div>
      <div>
        <input 
          {...register('email', { 
            required: 'Email is required', 
            pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email address' }
          })} 
          placeholder="Your Email"
          className="w-full bg-black/10 border border-black/20 rounded-md px-4 py-3 text-black placeholder-black/50 focus:ring-2 focus:ring-(--brand-lime) focus:outline-none transition-shadow"
        />
        {errors.email && <p className="text-red-400 mt-1 text-sm">{errors.email.message}</p>}
      </div>
      <div>
        <textarea 
          {...register('message')} 
          placeholder="Your Message (optional)"
          rows={4}
          className="w-full bg-black/10 border border-black/20 rounded-md px-4 py-3 text-black placeholder-black/50 focus:ring-2 focus:ring-(--brand-lime) focus:outline-none transition-shadow"
        />
      </div>
      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-(--brand-lime) text-(--brand-gray) font-bold uppercase tracking-wider px-6 py-3.5 rounded-full hover:bg-opacity-90 transition-all hover:scale-105 disabled:bg-gray-500 disabled:cursor-not-allowed cursor-pointer"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
      {isSuccess && <p className="text-green-400 mt-2 text-center">Message sent successfully!</p>}
      {isError && <p className="text-red-400 mt-2 text-center">Failed to send message. Please try again.</p>}
    </form>
  )
}
