export default function Hero() {
  return (
    <header className="relative bg-[#2E2E2E] text-[#F8F5F1] py-32 lg:py-48 px-6 flex items-center justify-center text-center">
      <div className="max-w-4xl mx-auto space-y-8">
        <span className="text-[#B38A58] tracking-widest uppercase text-sm font-semibold">
          The VSM Institute™
        </span>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight">
          Science-Informed.<br/>
          Monastic-Disciplined.<br/>
          Clinical-Grade.
        </h1>
        
        <p className="text-lg md:text-xl text-[#F8F5F1]/80 max-w-2xl mx-auto font-light leading-relaxed">
          Evidence-based nervous system regulation and executive resilience for modern professionals.
        </p>
        
        <div className="pt-8">
          <a href="#intake" className="inline-block bg-[#F8F5F1] text-[#2E2E2E] px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-[#B38A58] hover:text-white transition-colors duration-300">
            Apply for Assessment
          </a>
        </div>
      </div>
    </header>
  );
}