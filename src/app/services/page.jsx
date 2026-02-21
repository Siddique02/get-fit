import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'

const personalTrainingFeatures = [
  'One-on-One Coaching',
  'Customized Workout Plans',
  'Nutritional Guidance',
  'Body Composition Analysis',
  'Flexible Scheduling',
]

const groupClasses = [
  { name: 'HIIT Blast', description: 'High-intensity interval training to maximize calorie burn.' },
  { name: 'Power Yoga', description: 'Dynamic yoga flow to build strength and flexibility.' },
  { name: 'Cycle Sync', description: 'An intense indoor cycling experience with motivating music.' },
  { name: 'Strength Circuit', description: 'Full-body workout rotating through various strength stations.' },
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-black/30 py-16 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-display text-5xl md:text-6xl font-bold uppercase tracking-wider high-contrast">Our Services</h1>
          <p className="text-lg text-white/70 mt-2 max-w-2xl mx-auto">Tailored programs designed to help you achieve peak performance and optimal health.</p>
        </div>
      </section>

      {/* Personal Training Section */}
      <section id="personal-training" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-display text-4xl font-bold uppercase tracking-wider mb-4">Personal Training</h2>
              <p className="text-black/70 mb-6">Accelerate your results with a dedicated expert by your side. Our certified personal trainers will craft a unique fitness journey for you, providing the accountability and expertise you need to break through plateaus and reach your goals.</p>
              <ul className="space-y-3 mb-8">
                {personalTrainingFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check size={20} className="text-(--brand-lime) mr-3 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact"><button className="bg-(--brand-lime) text-(--brand-gray) font-bold uppercase tracking-wider px-8 py-3 rounded-full text-base hover:bg-opacity-90 transition-transform hover:scale-105 cursor-pointer">
                Book a Consultation
              </button></Link>
            </div>
            <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden order-1 md:order-2">
              <Image 
                src="/trainer.webp" 
                alt="Personal trainer with client"
                width={600}
                height={400}
                className="object-cover"
                referrerPolicy='no-referrer'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Group Classes Section */}
      <section id="group-classes" className="py-20 bg-black/30">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-display text-4xl font-bold uppercase tracking-wider mb-4">Group Classes</h2>
          <p className="text-white/70 max-w-3xl mx-auto mb-12">Feel the energy of a community pushing its limits together. Our group classes are designed to be fun, challenging, and effective for all fitness levels.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {groupClasses.map((item) => (
              <div key={item.name} className="bg-white/5 border border-white/10 rounded-lg p-6 text-left hover:border-(--brand-lime) hover:-translate-y-2 transition-all duration-300">
                <h3 className="font-display text-2xl font-bold uppercase mb-2">{item.name}</h3>
                <p className="text-white/60">{item.description}</p>
              </div>
            ))}
          </div>
           <div className="mt-12">
             <Link href="/schedule"><button className="bg-(--brand-orange) text-white font-bold uppercase tracking-wider px-8 py-3 rounded-full text-base hover:bg-opacity-50 transition-transform hover:scale-105 cursor-pointer">
                View Full Schedule
              </button></Link>
           </div>
        </div>
      </section>
    </div>
  )
}
