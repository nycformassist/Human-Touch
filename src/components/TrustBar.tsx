
export default function TrustBar() {
  const trustItems = [
    "✔ 18 Years Experience",
    "✔ Certified Meditation Instructor",
    "✔ Fully Clothed Sessions",
    "✔ Consent-Based Practice",
    "✔ Confidential",
    "✔ By Appointment Only"
  ];

  return (
    <section className="bg-[#2E2E2E] text-[#F8F5F1] py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-6 lg:gap-12 text-xs md:text-sm font-sans tracking-widest uppercase">
        {trustItems.map((item, index) => (
          <span key={index} className="text-[#F8F5F1]/90">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}