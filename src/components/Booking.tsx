
export default function Booking() {
  return (
    <section id="book" className="py-32 bg-[#ECE6DD] px-6 lg:px-12 text-center">
      <div className="max-w-3xl mx-auto">
        <span className="text-sm tracking-widest text-[#59604E] uppercase mb-4 block font-sans">
          Take the First Step
        </span>
        <h2 className="text-4xl lg:text-5xl mb-6 text-[#2E2E2E]">Complimentary Human Anchor™ Assessment</h2>
        <p className="text-lg text-[#2E2E2E]/80 font-sans mb-8 leading-relaxed">
          Together we'll discuss:
        </p>
        <ul className="text-left max-w-md mx-auto mb-10 space-y-3 font-sans text-[#2E2E2E]/80 bg-[#F8F5F1] p-8 border border-[#2E2E2E]/10">
          <li className="flex items-center space-x-3">
            <span className="text-[#B38A58]">•</span>
            <span>What you're experiencing</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-[#B38A58]">•</span>
            <span>Your wellness goals</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-[#B38A58]">•</span>
            <span>Whether we're the right fit</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-[#B38A58]">•</span>
            <span>Which Human Anchor™ Experience best supports your needs</span>
          </li>
        </ul>
        <a 
          href="mailto:valentine@thehumananchor.com" 
          className="inline-block bg-[#2E2E2E] text-[#F8F5F1] px-10 py-4 font-sans tracking-wide text-sm hover:bg-[#B38A58] transition-colors duration-300"
        >
          Book Your Complimentary Human Anchor™ Assessment
        </a>
      </div>
    </section>
  );
}