// src/components/Hero.tsx
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="min-h-[90vh] flex items-center bg-[#F8F5F1] pt-24 pb-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-xl"
        >
          <span className="text-sm tracking-widest text-[#59604E] uppercase mb-6 block font-sans">
            Stress • Burnout • Constant Overthinking
          </span>
          <h1 className="text-5xl lg:text-7xl leading-tight mb-6 text-[#2E2E2E]">
            When the World Feels Heavy...<br />
            <span className="italic">Find Your Anchor.</span>
          </h1>
          <p className="text-lg text-[#2E2E2E]/80 font-sans mb-10 leading-relaxed">
            Professional Therapeutic Touch, Guided Meditation, Breathwork, and Somatic Wellness in New York City—designed to help you reconnect with yourself and experience deep relaxation in a safe, compassionate environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 mb-8">
            <a href="#book" className="bg-[#B38A58] text-white px-8 py-4 text-center hover:bg-[#59604E] transition-colors duration-300 font-sans tracking-wide text-sm">
              Book Your Complimentary Human Anchor™ Assessment
            </a>
            <a href="#method" className="border border-[#2E2E2E]/20 text-[#2E2E2E] px-8 py-4 text-center hover:border-[#2E2E2E] transition-colors duration-300 font-sans tracking-wide text-sm">
              How It Works
            </a>
          </div>
          <p className="text-xs text-[#2E2E2E]/60 font-sans tracking-wide">
            Serving clients throughout New York City including Manhattan, Brooklyn, Queens, and the Bronx by appointment.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="h-[70vh] bg-[#ECE6DD] relative flex items-center justify-center border border-[#2E2E2E]/10"
        >
          <span className="text-[#2E2E2E]/40 font-sans tracking-widest uppercase text-sm">
            [Editorial Sanctuary Image]
          </span>
        </motion.div>
      </div>
    </section>
  );
}