export default function Programs() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-sm tracking-widest text-[#B38A58] uppercase font-semibold">
            The Ecosystem
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-[#2E2E2E] mt-4">
            Evolve Your Baseline
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Program 1 */}
          <div className="bg-[#F8F5F1] p-10 border border-[#2E2E2E]/10 flex flex-col h-full hover:border-[#B38A58] transition-colors duration-300">
            <h3 className="text-2xl text-[#2E2E2E] font-medium mb-2">The Human Anchor™<br/>Assessment</h3>
            <div className="text-[#B38A58] text-sm font-semibold tracking-widest mb-6">CLINICAL AUDIT — $225</div>
            <p className="text-[#2E2E2E]/70 font-light text-sm leading-relaxed mb-8 flex-grow">
              A comprehensive 90-minute evaluation of your current nervous system baseline, operational bottlenecks, and physiological stress markers. You will leave with a clear diagnostic understanding and a preliminary regulation protocol.
            </p>
            <a href="#intake" className="text-xs uppercase tracking-widest text-[#2E2E2E] font-semibold hover:text-[#B38A58] transition-colors border-b border-[#2E2E2E] hover:border-[#B38A58] pb-1 self-start">
              Apply For Assessment
            </a>
          </div>

          {/* Program 2 */}
          <div className="bg-[#2E2E2E] text-[#F8F5F1] p-10 flex flex-col h-full transform lg:-translate-y-4 shadow-lg shadow-black/10">
            <h3 className="text-2xl font-medium mb-2">Executive Resilience<br/>Program</h3>
            <div className="text-[#B38A58] text-sm font-semibold tracking-widest mb-6">PRIVATE CONSULTING</div>
            <p className="text-[#F8F5F1]/70 font-light text-sm leading-relaxed mb-8 flex-grow">
              A multi-week, highly intensive 1-on-1 architecture designed for sustained transformation. We integrate somatic regulation techniques with contemplative discipline to rebuild your capacity to lead without burning out.
            </p>
            <a href="#intake" className="text-xs uppercase tracking-widest text-[#F8F5F1] font-semibold hover:text-[#B38A58] transition-colors border-b border-[#F8F5F1] hover:border-[#B38A58] pb-1 self-start">
              Submit Inquiry
            </a>
          </div>

          {/* Program 3 */}
          <div className="bg-[#F8F5F1] p-10 border border-[#2E2E2E]/10 flex flex-col h-full hover:border-[#B38A58] transition-colors duration-300">
            <h3 className="text-2xl text-[#2E2E2E] font-medium mb-2">Anchor at Work™<br/>Workshops</h3>
            <div className="text-[#B38A58] text-sm font-semibold tracking-widest mb-6">CORPORATE DEPLOYMENT</div>
            <p className="text-[#2E2E2E]/70 font-light text-sm leading-relaxed mb-8 flex-grow">
              Scalable resilience training for high-performing teams. Partner with VSM Institute to bring evidence-based stress regulation to your staff, lowering attrition and enhancing collective operational clarity.
            </p>
            <a href="#intake" className="text-xs uppercase tracking-widest text-[#2E2E2E] font-semibold hover:text-[#B38A58] transition-colors border-b border-[#2E2E2E] hover:border-[#B38A58] pb-1 self-start">
              Contact for Proposal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}