import Image from 'next/image';

const trainers = [
  {
    name: 'Alex Johnson',
    qualification: 'NASM Certified Personal Trainer',
    specialty: 'Strength & Conditioning',
    bio: 'With a decade of experience, Alex specializes in building raw strength and explosive power. His no-nonsense approach will push you beyond your limits.',
    image: 'https://picsum.photos/400/500?random=1',
  },
  {
    name: 'Jessica Miller',
    qualification: 'ACE Certified Group Fitness Instructor',
    specialty: 'HIIT & Endurance',
    bio: 'Jessica brings infectious energy to every class. She believes that cardio can be fun, and her high-intensity workouts are designed to prove it.',
    image: 'https://picsum.photos/400/500?random=2',
  },
  {
    name: 'Marcus Chen',
    qualification: 'Certified Nutrition Coach, CrossFit L2',
    specialty: 'Functional Fitness & Nutrition',
    bio: 'Marcus focuses on the complete picture of health. He combines functional movements with personalized nutrition plans to help you build a sustainable, healthy lifestyle.',
    image: 'https://picsum.photos/400/500?random=3',
  },
  {
    name: 'Samantha Patel',
    qualification: 'RYT 500 Yoga Instructor',
    specialty: 'Yoga & Mobility',
    bio: 'Samantha will guide you through powerful flows and deep stretches, helping you build a strong mind-body connection, improve flexibility, and find your center.',
    image: 'https://picsum.photos/400/500?random=4',
  },
];

export default function TrainersPage() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-black/30 py-16 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-display text-5xl md:text-6xl font-bold uppercase tracking-wider high-contrast">Meet Our Trainers</h1>
          <p className="text-lg text-white/70 mt-2 max-w-2xl mx-auto">The elite team dedicated to your success. Certified, motivated, and ready to guide you.</p>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainers.map((trainer) => (
              <div key={trainer.name} className="bg-black/50 border border-white/10 rounded-lg overflow-hidden group">
                <div className="relative w-full h-80">
                  <Image
                    src={trainer.image}
                    alt={`Photo of ${trainer.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy='no-referrer'
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold uppercase text-(--brand-gray)">{trainer.name}</h3>
                  <p className="text-sm text-(--brand-gray)/60 font-medium uppercase tracking-wider mt-1">{trainer.specialty}</p>
                  <p className="text-sm text-(--brand-gray)/80 mt-4 border-t border-white/10 pt-4">{trainer.qualification}</p>
                  <p className="text-(--brand-gray)/70 mt-4 text-sm">{trainer.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}