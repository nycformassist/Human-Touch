export default function CorporateCTA() {
  return (
    <section className="py-20 bg-[#2E2E2E] text-[#F8F5F1] px-6 text-center">
      <div className="max-w-4xl mx-auto space-y-6">
        <span className="text-sm tracking-widest text-[#B38A58] uppercase">Enterprise & Healthcare</span>
        <h2 className="text-3xl md:text-5xl font-light">Anchor at Work™ & Executive Coaching</h2>
        <p className="text-[#F8F5F1]/70 max-w-2xl mx-auto leading-relaxed">
          Reducing healthcare worker burnout, executive fatigue, and absenteeism through structured resilience workshops, full-day immersions, and retainer programs.
        </p>
        <div className="pt-4">
          <a 
            href="#intake" 
            className="inline-block border border-[#B38A58] text-[#B38A58] px-8 py-4 text-xs tracking-widest uppercase hover:bg-[#B38A58] hover:text-[#2E2E2E] transition-all"
          >
            Inquire For Corporate Wellness
          </a>
        </div>
      </div>
    </section>
  );
}