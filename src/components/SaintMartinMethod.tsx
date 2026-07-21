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
          <h2 className="text-4xl lg:text-6xl mb-8 text-[#2E2E2E]">The Saint Martin Method</h2>
          <p className="text-lg text-[#2E2E2E]/80 font-sans max-w-2xl mx-auto leading-relaxed">
            A science-informed approach integrating therapeutic touch, mindfulness, and somatic awareness to support your transition from chronic stress toward balance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}