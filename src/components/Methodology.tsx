export default function Methodology() {
  const pillars = [
    {
      title: "Somatic Regulation",
      desc: "Bypassing cognitive loops to address stress where it is stored: the nervous system. We utilize evidence-informed breath mechanics and structural realignment to down-regulate the sympathetic response."
    },
    {
      title: "Cognitive Resilience",
      desc: "Drawing from disciplined contemplative practices, we train executive focus. You will learn to observe high-stress stimuli without immediate, reactive neurological cascading."
    },
    {
      title: "Operational Capacity",
      desc: "Wellness is useless if it doesn't translate to performance. Our protocols are designed to integrate seamlessly into a 60-hour work week, maximizing energy efficiency and decision-making clarity."
    }
  ];

  return (
    <section className="py-24 bg-[#2E2E2E] text-[#F8F5F1] px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm tracking-widest text-[#B38A58] uppercase font-semibold">
            The VSM Methodology
          </span>
          <h2 className="text-3xl md:text-5xl font-light mt-4">
            Performance Through Regulation
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 border-t border-[#F8F5F1]/10 pt-16">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="space-y-4">
              <div className="text-[#B38A58] text-sm font-mono tracking-widest">
                PHASE 0{idx + 1}
              </div>
              <h3 className="text-2xl font-light">{pillar.title}</h3>
              <p className="text-[#F8F5F1]/60 font-light leading-relaxed text-sm">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}