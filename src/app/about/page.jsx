import Image from 'next/image';
import { Users, Zap, Heart } from 'lucide-react';

const coreValues = [
  {
    icon: <Users size={40} className="text-(--brand-lime)" />,
    title: 'Community First',
    description: 'We believe that fitness is a team sport. Our community is our greatest strength, providing support, motivation, and accountability for every member.'
  },
  {
    icon: <Zap size={40} className="text-(--brand-lime)" />,
    title: 'High-Energy Environment',
    description: 'From our trainers to our playlists, every element of our gym is designed to energize and inspire you to push your limits and achieve more.'
  },
  {
    icon: <Heart size={40} className="text-(--brand-lime)" />,
    title: 'Holistic Health',
    description: 'We focus on more than just physical strength. Our approach integrates wellness, nutrition, and mental resilience to build a healthier, happier you.'
  }
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-black/30 py-16 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-display text-5xl md:text-6xl font-bold uppercase tracking-wider high-contrast">About GetFit Club</h1>
          <p className="text-lg text-white/70 mt-2 max-w-3xl mx-auto">We are more than a gym; we are a movement. Born from a passion for transformative fitness, GetFit is dedicated to creating a powerful, supportive, and results-driven environment.</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-80 md:h-112.5 rounded-lg overflow-hidden">
              <Image 
                src="https://picsum.photos/800/600?random=4" 
                alt="Gym interior"
                fill
                className="object-cover"
                referrerPolicy='no-referrer'
              />
            </div>
            <div>
              <h2 className="font-display text-4xl font-bold uppercase tracking-wider mb-4">Our Story</h2>
              <p className="text-black/70 mb-4">Founded in 2020, GetFit Health Club started as a small community of fitness enthusiasts who wanted more than the typical gym experience. We envisioned a place where energy was contagious, support was genuine, and results were inevitable. Today, we've grown into a state-of-the-art facility, but our core mission remains the same: to empower every individual to unlock their full potential.</p>
              <p className="text-black/70">Our philosophy is simple: combine expert guidance with a motivating atmosphere and a supportive community. This is the formula for success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="core-values" className="py-20 bg-black/30">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-display text-4xl font-bold uppercase tracking-wider mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value) => (
              <div key={value.title} className="text-center">
                <div className="inline-block bg-white/5 p-4 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="font-display text-2xl font-bold uppercase mb-2">{value.title}</h3>
                <p className="text-white/60">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}