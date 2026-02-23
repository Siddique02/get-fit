"use client";

import Image from "next/image";
import Link from "next/link";
import { Dumbbell, Users, Zap } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-125 flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-(--brand-gray)/50 z-10" />
        <Image
          src="https://picsum.photos/1920/1080?grayscale&blur=2"
          alt="Gym background"
          fill
          priority
          className="object-cover"
        />
        <div className="relative z-20 max-w-3xl px-4">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-wider high-contrast mb-4"
          >
            Forge Your Legacy
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/90 mb-8 max-w-xl mx-auto"
          >
            Unleash your potential at GetFit, where strength is built, goals are
            crushed, and community thrives.
          </motion.p>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <Link
                href="/contact#join-now"
                className="bg-(--brand-lime) text-(--brand-gray) font-bold uppercase tracking-wider px-10 py-4 rounded-full text-lg hover:opacity-50 transition-transform hover:scale-105"
              >
                Become a Member
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black/30">
        <motion.div 
        className="container mx-auto px-4 md:px-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-wider mb-2">
            Our Programs
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-12">
            From personalized training to high-energy group classes, we have
            what you need to succeed.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Dumbbell size={48} className="text-(--brand-lime)" />}
              title="Personal Training"
              description="Get one-on-one guidance from certified trainers to achieve your specific fitness goals faster."
            />
            <ServiceCard
              icon={<Users size={48} className="text-(--brand-lime)" />}
              title="Group Classes"
              description="Join our motivating group classes like HIIT, Yoga, and Cycling. Fun, energy, and results guaranteed."
            />
            <ServiceCard
              icon={<Zap size={48} className="text-(--brand-lime)" />}
              title="Open Gym Access"
              description="Utilize our state-of-the-art equipment and spacious workout zones on your own schedule."
            />
          </div>
        </motion.div>
      </section>

      {/* Why GetFit Section */}
      <section className="py-20">
        <motion.div 
        className="container mx-auto px-4 md:px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-80 md:h-96 overflow-hidden rounded-2xl">
              <Image
                src="/equipments.webp"
                alt="Gym interior"
                fill
                className="object-cover object-bottom"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4">
                Why Choose GetFit?
              </h2>
              <p className="text-white/70 mb-6">
                We&apos;re more than just a gym; we&apos;re a community
                dedicated to your success. With top-tier equipment, expert
                trainers, and a motivating atmosphere, we provide the perfect
                environment for you to thrive.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Zap size={20} className="text-(--brand-lime) mr-3" />{" "}
                  State-of-the-art equipment
                </li>
                <li className="flex items-center">
                  <Dumbbell size={20} className="text-(--brand-lime) mr-3" />{" "}
                  Expert-led classes & training
                </li>
                <li className="flex items-center">
                  <Users size={20} className="text-(--brand-lime) mr-3" />{" "}
                  Supportive fitness community
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Call to Action / Lead Form */}
      <section id="join-now" className="py-20 bg-(--brand-lime)/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4">
            Start Your Journey Today
          </h2>
          <p className="text-black/70 max-w-2xl mx-auto mb-10">
            Ready to take the first step? Fill out the form below to get in
            touch with our team and learn about our exclusive new member offers.
          </p>
          <LeadForm />
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-lg p-8 hover:border-(--brand-lime) hover:-translate-y-2 transition-all duration-300">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="font-display text-2xl font-bold uppercase mb-3">
        {title}
      </h3>
      <p className="text-white/60">{description}</p>
    </div>
  );
}
