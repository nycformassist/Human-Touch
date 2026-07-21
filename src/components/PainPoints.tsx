
import { motion } from 'framer-motion';

export default function PainPoints() {
  const points = [
    "Constantly overwhelmed",
    "Emotionally exhausted",
    "Burned out",
    "Unable to relax",
    "Lonely",
    "Disconnected",
    "Carrying stress in your body"
  ];

  return (
    <section className="py-24 bg-[#ECE6DD] px-6 lg:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm tracking-widest text-[#59604E] uppercase mb-4 block font-sans">
            Understanding Your Experience
          </span>
          <h2 className="text-4xl lg:text-5xl mb-12 text-[#2E2E2E]">If You've Been Feeling...</h2>
          <ul className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-12 font-sans text-lg text-[#2E2E2E]/80">
            {points.map((point, index) => (
              <li key={index} className="flex items-center space-x-3 bg-[#F8F5F1] p-4 border border-[#2E2E2E]/10">
                <span className="text-[#B38A58]">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-xl font-serif text-[#2E2E2E] mb-6 italic">You're not alone.</p>
          <p className="text-base text-[#2E2E2E]/80 font-sans max-w-2xl mx-auto leading-relaxed">
            The Human Anchor™ was created to provide a safe space where you can slow down, reconnect with yourself, and experience the restorative power of compassionate presence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}