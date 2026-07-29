export default function Framework() {
  const anchors = [
    { title: "Breath", desc: "Regulating the autonomic nervous system through conscious respiration." },
    { title: "Presence", desc: "Experiencing the profound, grounding safety of undivided, compassionate attention." },
    { title: "Movement", desc: "Utilizing Qigong principles to release stored tension and restore physical flow." },
    { title: "Connection", desc: "Establishing a safe, ethical space to counter isolation (including professional, consent-based supportive touch when appropriate)." },
    { title: "Reflection", desc: "Integrating the experience so you can carry a sense of calm back into your daily life." }
  ];

  return (
    <section className="py-24 bg-[#2E2E2E] text-[#F8F5F1] px-6">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-light">The Human Anchor Framework™</h2>
          <p className="text-[#F8F5F1]/70">The Five Anchors of Somatic Resilience</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {anchors.map((anchor, idx) => (
            <div key={idx} className="border border-[#F8F5F1]/20 p-8 hover:bg-[#F8F5F1]/5 transition-colors">
              <span className="text-[#B38A58] text-sm tracking-widest uppercase mb-4 block">0{idx + 1}</span>
              <h3 className="text-xl mb-3">{anchor.title}</h3>
              <p className="text-[#F8F5F1]/60 text-sm leading-relaxed">{anchor.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}