
export default function Experiences() {
  return (
    <section id="experiences" className="py-32 bg-[#F8F5F1] px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl mb-6 text-[#2E2E2E]">The Human Anchor Experience</h2>
        <p className="text-lg text-[#2E2E2E]/80 font-sans max-w-2xl mx-auto mb-16">
          Every experience is personalized to your needs and comfort.
        </p>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="border border-[#2E2E2E]/10 p-10 flex flex-col bg-[#F8F5F1]">
            <h3 className="text-2xl mb-2 text-[#2E2E2E]">Human Anchor Intro Experience</h3>
            <p className="text-[#B38A58] font-sans mb-2 font-medium">60 Minutes</p>
            <p className="text-2xl font-serif mb-6 text-[#2E2E2E]">$175</p>
            <p className="text-[#2E2E2E]/80 font-sans text-sm leading-relaxed mb-8 flex-grow">
              Perfect for first-time clients seeking a gentle introduction to The Human Anchor™ Experience.
            </p>
            <a href="#book" className="text-center border border-[#2E2E2E] text-[#2E2E2E] py-3 text-sm font-sans tracking-wide hover:bg-[#2E2E2E] hover:text-white transition-colors">
              Book Intro Experience
            </a>
          </div>
          <div className="border border-[#2E2E2E]/10 p-10 flex flex-col bg-white shadow-sm relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#B38A58] text-white text-xs px-3 py-1 font-sans uppercase tracking-widest">
              Most Popular
            </span>
            <h3 className="text-2xl mb-2 text-[#2E2E2E]">Human Anchor Signature Experience</h3>
            <p className="text-[#B38A58] font-sans mb-2 font-medium">90 Minutes</p>
            <p className="text-2xl font-serif mb-6 text-[#2E2E2E]">$250</p>
            <p className="text-[#2E2E2E]/80 font-sans text-sm leading-relaxed mb-8 flex-grow">
              Our flagship session integrating full-body therapeutic touch, breathwork regulation, and customized somatic grounding for deeper nervous system reset.
            </p>
            <a href="#book" className="text-center bg-[#B38A58] text-white py-3 text-sm font-sans tracking-wide hover:bg-[#59604E] transition-colors">
              Book Signature Experience
            </a>
          </div>
          <div className="border border-[#2E2E2E]/10 p-10 flex flex-col bg-[#F8F5F1]">
            <h3 className="text-2xl mb-2 text-[#2E2E2E]">The Deep Reset Experience</h3>
            <p className="text-[#B38A58] font-sans mb-2 font-medium">2 Hours</p>
            <p className="text-2xl font-serif mb-6 text-[#2E2E2E]">$325</p>
            <p className="text-[#2E2E2E]/80 font-sans text-sm leading-relaxed mb-8 flex-grow">
              An extended Human Anchor™ Experience allowing more time for guided relaxation, therapeutic touch (when appropriate), breathwork, mindful presence, and personalized integration.
            </p>
            <a href="#book" className="text-center border border-[#2E2E2E] text-[#2E2E2E] py-3 text-sm font-sans tracking-wide hover:bg-[#2E2E2E] hover:text-white transition-colors">
              Book Deep Reset Experience
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}