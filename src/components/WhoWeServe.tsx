export default function WhoWeServe() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-5xl mx-auto">
        <div className="border-l-2 border-[#B38A58] pl-6 md:pl-10 mb-16">
          <span className="text-sm tracking-widest text-[#B38A58] uppercase font-semibold block mb-4">
            Clinical-Grade Support
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-[#2E2E2E] leading-tight max-w-2xl">
            Designed for those who cannot afford to lose their composure.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          <div className="space-y-6">
            <p className="text-lg text-[#2E2E2E]/80 font-light leading-relaxed">
              The VSM Institute™ does not provide generic life coaching or basic wellness advice. We operate exclusively with leaders managing high-stakes environments, complex teams, and relentless decision-making. 
            </p>
            <p className="text-lg text-[#2E2E2E]/80 font-light leading-relaxed">
              When executive fatigue, chronic stress, or nervous system dysregulation threaten your operational baseline, we provide the architecture to restore it.
            </p>
          </div>

          <div className="bg-[#F8F5F1] p-8 md:p-10 border border-[#2E2E2E]/10">
            <h3 className="text-xl text-[#2E2E2E] font-medium mb-6">Our Core Demographics:</h3>
            <ul className="space-y-4">
              {[
                "Healthcare Leaders & Administrators",
                "Corporate Executives & C-Suite",
                "Founders & Entrepreneurs",
                "HR Directors & People Ops Leaders",
                "High-Volume Legal Professionals"
              ].map((role, idx) => (
                <li key={idx} className="flex items-center text-[#2E2E2E]/80">
                  <span className="w-1.5 h-1.5 bg-[#B38A58] rounded-full mr-4"></span>
                  <span className="font-light tracking-wide">{role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}