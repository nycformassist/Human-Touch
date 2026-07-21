export default function Experiences() {
  return (
    <section id="experiences" className="py-32 bg-[#F8F5F1] px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl mb-6 text-[#2E2E2E]">The Human Anchor Experience</h2>
        <p className="text-lg text-[#2E2E2E]/80 font-sans max-w-2xl mx-auto mb-16">
          Every experience is personalized to your needs and comfort.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-[#2E2E2E]/10 p-10 flex flex-col bg-[#F8F5F1]">
            <h3 className="text-2xl mb-2 text-[#2E2E2E]">Introductory</h3>
            <p className="text-[#B38A58] font-sans mb-8">60 Minutes — $175</p>
          </div>
          <div className="border border-[#2E2E2E]/10 p-10 flex flex-col bg-white shadow-sm">
            <h3 className="text-2xl mb-2 text-[#2E2E2E]">Signature</h3>
            <p className="text-[#B38A58] font-sans mb-8">90 Minutes — $250</p>
          </div>
          <div className="border border-[#2E2E2E]/10 p-10 flex flex-col bg-[#F8F5F1]">
            <h3 className="text-2xl mb-2 text-[#2E2E2E]">Deep Reset</h3>
            <p className="text-[#B38A58] font-sans mb-8">2 Hours — $325</p>
          </div>
        </div>
      </div>
    </section>
  );
}