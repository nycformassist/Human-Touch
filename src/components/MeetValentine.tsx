export default function MeetValentine() {
  return (
    <section className="py-24 bg-[#F8F5F1] px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <span className="text-sm tracking-widest text-[#B38A58] uppercase font-semibold">
            The Founder
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-[#2E2E2E] leading-tight">
            Science-Informed.<br />Monastic-Disciplined.<br />Clinical-Grade.
          </h2>
          <div className="w-12 h-[1px] bg-[#B38A58]"></div>
          
          <div className="space-y-6 text-[#2E2E2E]/80 leading-relaxed">
            <p className="text-lg font-medium text-[#2E2E2E]">
              "For more than two decades I've explored one question: Why do some people remain calm under pressure while others become overwhelmed?"
            </p>
            <p>
              My search led me through Biology and Exercise Science, twenty years inside healthcare administration, eighteen years of dedicated Qigong practice, certification as a Meditation Instructor, and three years living a disciplined monastic lifestyle studying Eastern philosophy, contemplative practice, and human development.
            </p>
            <p>
              Today, I integrate those experiences into practical, evidence-informed programs that help modern professionals develop resilience in an increasingly demanding world. 
            </p>
          </div>
        </div>

        <div className="bg-gray-200 h-[600px] w-full relative">
          {/* Replace this with a professional, high-quality portrait of yourself */}
          <img 
            src="/images/valentine-portrait.jpg" 
            alt="Valentine Saint Martin - Founder of VSM Institute" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2E2E2E]/60 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h3 className="text-xl tracking-wide uppercase">Valentine Saint Martin</h3>
            <p className="text-sm text-white/80">Founder, VSM Institute™</p>
          </div>
        </div>
      </div>
    </section>
  );
}