export default function FourPillars() {
  const pillars = [
    {
      num: "01",
      title: "Breath",
      desc: "Regulate physiology, stimulate vagal tone, and quiet hypervigilance."
    },
    {
      num: "02",
      title: "Movement",
      desc: "Restore mobility, flow, and physical energy through Qigong."
    },
    {
      num: "03",
      title: "Mind",
      desc: "Cultivate razor-sharp focus, emotional containment, and mental clarity under pressure."
    },
    {
      num: "04",
      title: "Recovery",
      desc: "Optimize sleep patterns, mitigate burnout, and map stress habits."
    }
  ];

  return (
    <section className="py-24 bg-[#2E2E2E] text-[#F8F5F1] px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <span className="text-sm tracking-widest text-[#B38A58] uppercase">The Human Anchor™</span>
          <h2 className="text-3xl md:text-4xl font-light">The Four Pillars</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="border border-[#F8F5F1]/20 p-8 hover:bg-[#F8F5F1]/5 transition-colors">
              <span className="text-[#B38A58] text-sm tracking-widest font-semibold block mb-4">{pillar.num}.</span>
              <h3 className="text-2xl font-light mb-4">{pillar.title}</h3>
              <p className="text-[#F8F5F1]/60 text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}