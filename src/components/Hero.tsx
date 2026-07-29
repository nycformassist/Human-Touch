export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center items-center text-center px-6 py-20 bg-[#F8F5F1]">
      <div className="max-w-4xl mx-auto z-10 space-y-8">
        <span className="text-sm tracking-widest text-[#59604E] uppercase font-semibold">
          When the World Feels Heavy...
        </span>
        <h1 className="text-5xl md:text-7xl font-light text-[#2E2E2E] tracking-tight">
          Find Your Anchor.
        </h1>
        <p className="text-sm md:text-base text-[#2E2E2E]/70 max-w-2xl mx-auto leading-relaxed uppercase tracking-wider">
          Professional Somatic Wellness • Guided Meditation • Qigong • Breathwork • Human Presence • Nervous System Education
        </p>
        <div className="pt-8">
          <a 
            href="#intake" 
            className="inline-block bg-[#2E2E2E] text-[#F8F5F1] px-8 py-4 text-sm tracking-widest uppercase hover:bg-[#B38A58] transition-colors duration-300"
          >
            Book Your Confidential Consultation
          </a>
        </div>
      </div>
      
      {/* Visual Ambience Grid */}
      <div className="w-full max-w-7xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
        <div className="h-80 bg-gray-200 overflow-hidden relative group">
          <img 
            src="/images/space-regulation.jpg" 
            alt="A space designed for nervous system regulation" 
            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" 
          />
        </div>
        <div className="h-80 bg-gray-200 overflow-hidden relative group">
          <img 
            src="/images/sanctuary-rain.jpg" 
            alt="Sanctuary from the overstimulated world" 
            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" 
          />
        </div>
        <div className="h-80 bg-gray-200 overflow-hidden hidden md:block relative group">
          <img 
            src="/images/presence-safety.jpg" 
            alt="Reconnecting with presence and safety" 
            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" 
          />
        </div>
      </div>
    </section>
  );
}