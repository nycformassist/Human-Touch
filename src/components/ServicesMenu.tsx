export default function ServicesMenu() {
  const offers = [
    {
      title: "Foundations Assessment",
      time: "90 Minutes",
      price: "$225",
      desc: "Comprehensive stress & breathing intake, Qigong/meditation introduction, and your written Personal Practice Plan.",
      cta: "Book Assessment"
    },
    {
      title: "Essential Reset",
      time: "4-Week Program",
      price: "$497",
      desc: "Four 60-minute private sessions, personalized breathing mechanics, guided recordings, and continuous email support.",
      cta: "Apply For Reset"
    },
    {
      title: "Signature Transformation",
      time: "8-Week Program",
      price: "$997",
      desc: "Complete somatic overhaul: 8 private sessions, habit coaching, custom daily practice design, priority scheduling.",
      cta: "Apply For Transformation"
    }
  ];

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-sm tracking-widest text-[#B38A58] uppercase">Outcomes & Transformation</span>
          <h2 className="text-3xl md:text-4xl font-light">The Human Anchor™ Programs</h2>
          <p className="text-[#2E2E2E]/70 max-w-2xl mx-auto">
            We do not sell isolated hours. We partner with you to rebuild your baseline resilience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, idx) => (
            <div key={idx} className="bg-[#F8F5F1] p-8 flex flex-col justify-between border border-transparent hover:border-[#B38A58] transition-all">
              <div>
                <span className="text-xs tracking-widest text-[#59604E] uppercase">{offer.time}</span>
                <h3 className="text-2xl font-light mt-2 mb-1">{offer.title}</h3>
                <p className="text-3xl font-normal text-[#B38A58] mb-6">{offer.price}</p>
                <p className="text-[#2E2E2E]/70 text-sm leading-relaxed mb-8">{offer.desc}</p>
              </div>
              <a 
                href="#intake" 
                className="block text-center py-3 bg-[#2E2E2E] text-[#F8F5F1] text-xs tracking-widest uppercase hover:bg-[#B38A58] transition-colors"
              >
                {offer.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}