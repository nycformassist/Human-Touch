import { motion } from 'framer-motion';

export default function AboutValentine() {
  return (
    <section id="about" className="py-32 bg-[#F8F5F1] px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="aspect-[4/5] bg-[#ECE6DD] flex items-center justify-center border border-[#2E2E2E]/10"
        >
          <span className="text-[#2E2E2E]/40 font-sans tracking-widest uppercase text-sm">
            [Editorial Portrait]
          </span>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-sm tracking-widest text-[#59604E] uppercase mb-6 block font-sans">
            The Practitioner
          </span>
          <h2 className="text-4xl lg:text-5xl mb-8 text-[#2E2E2E]">Valentine Saint Martin</h2>
          <div className="space-y-6 text-[#2E2E2E]/80 font-sans leading-relaxed">
            <p>
              For nearly two decades I have dedicated my life to understanding the relationship between the mind, body, breath, and human connection.
            </p>
            <p>
              Created by Valentine Saint Martin, The Human Anchor™ is a professional somatic wellness practice helping people regulate stress, reconnect with themselves, and restore emotional balance.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}