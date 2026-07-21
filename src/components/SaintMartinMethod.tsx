
import { motion } from 'framer-motion';

export default function SaintMartinMethod() {
  return (
    <section id="method" className="py-32 bg-[#ECE6DD] px-6 lg:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm tracking-widest text-[#59604E] uppercase mb-4 block font-sans">
            The Framework
          </span>
          <h2 className="text-4xl lg:text-6xl mb-8 text-[#2E2E2E]">The Saint Martin Method™</h2>
          <div className="space-y-6 text-lg text-[#2E2E2E]/80 font-sans max-w-2xl mx-auto leading-relaxed">
            <p>
              The Saint Martin Method™ is a personalized approach that blends guided meditation, breathwork, Qigong principles, somatic awareness, and therapeutic touch to help clients move from chronic stress toward greater calm and resilience.
            </p>
            <p className="font-serif italic text-2xl text-[#2E2E2E] pt-4">
              The goal isn't to "fix" you. It's to create the conditions in which your body can relax, reconnect, and recover.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}