export default function MeetValentine() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="aspect-[4/5] bg-gray-200 overflow-hidden relative">
          {/* Use a warm, professional, editorial-style portrait here */}
          <img src="/images/valentine-portrait.jpg" alt="Valentine Saint Martin" className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700" />
        </div>
        <div className="space-y-6">
          <span className="text-sm tracking-widest text-[#B38A58] uppercase">The Practitioner</span>
          <h2 className="text-3xl font-light">Meet Valentine Saint Martin</h2>
          <div className="space-y-4 text-[#2E2E2E]/80 leading-relaxed">
            <p>
              For more than two decades, my life's work has been understanding the science of human resilience and the profound impact of mindful presence.
            </p>
            <p>
              My approach bridges the clinical and the contemplative. It is built on a foundation of Biology and Exercise Science, combined with 20 years of experience in healthcare administration—giving me a deep understanding of human physiology and the realities of modern medical stress.
            </p>
            <p>
              Complementing this is 18 years of dedicated Qigong practice and certification as a Meditation Instructor. For three years, I lived a monastic life dedicated to the disciplined study of Eastern philosophy, contemplative practice, and mindful living. That immersive experience profoundly shaped how I understand presence, compassion, and the human capacity for recovery.
            </p>
            <p>
              Today, those lessons are integrated with my scientific education to create The Human Anchor™—helping clients transition from chronic overwhelm to deep physiological calm.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}