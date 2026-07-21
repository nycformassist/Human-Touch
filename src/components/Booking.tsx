export default function Booking() {
  return (
    <section id="book" className="py-32 bg-[#ECE6DD] px-6 lg:px-12 text-center">
      <div className="max-w-3xl mx-auto">
        <span className="text-sm tracking-widest text-[#59604E] uppercase mb-4 block font-sans">
          Take the First Step
        </span>
        <h2 className="text-4xl lg:text-5xl mb-6 text-[#2E2E2E]">Begin Your Journey to Balance</h2>
        <p className="text-lg text-[#2E2E2E]/80 font-sans mb-10 leading-relaxed">
          Schedule a discovery call with Valentine Saint Martin to discuss your needs, ask questions, and determine the right path forward.
        </p>
        <a 
          href="mailto:valentine@thehumananchor.com" 
          className="inline-block bg-[#2E2E2E] text-[#F8F5F1] px-10 py-4 font-sans tracking-wide text-sm hover:bg-[#B38A58] transition-colors duration-300"
        >
          Book Discovery Call
        </a>
      </div>
    </section>
  );
}