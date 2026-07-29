export default function Experiences() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-light">Transform Your State of Being</h2>
          <p className="text-[#2E2E2E]/70 max-w-2xl mx-auto">
            We do not sell time; we facilitate transformation. Choose the experience that best supports your current needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#F8F5F1] p-10">
            <h3 className="text-2xl font-light mb-2">The Reconnect Experience</h3>
            <p className="text-sm tracking-widest text-[#B38A58] uppercase mb-6">60 Minutes</p>
            <p className="text-[#2E2E2E]/70 leading-relaxed mb-8">
              A gentle introduction to somatic awareness. Perfect for returning your nervous system to a baseline of calm through guided breathwork and grounded presence.
            </p>
            <a href="#intake" className="text-xs tracking-widest uppercase border-b border-[#2E2E2E] pb-1 hover:text-[#B38A58] hover:border-[#B38A58] transition-colors">Apply for Consultation</a>
          </div>

          <div className="bg-[#F8F5F1] p-10">
            <h3 className="text-2xl font-light mb-2">The Restore Experience</h3>
            <p className="text-sm tracking-widest text-[#B38A58] uppercase mb-6">90 Minutes</p>
            <p className="text-[#2E2E2E]/70 leading-relaxed mb-8">
              Our signature session. A deeper dive into The Five Anchors, allowing ample time for movement, breath, and profound relaxation to counter chronic burnout.
            </p>
            <a href="#intake" className="text-xs tracking-widest uppercase border-b border-[#2E2E2E] pb-1 hover:text-[#B38A58] hover:border-[#B38A58] transition-colors">Apply for Consultation</a>
          </div>
        </div>
      </div>
    </section>
  );
}