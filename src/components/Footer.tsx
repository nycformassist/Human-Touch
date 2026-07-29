export default function Footer() {
  return (
    <footer className="bg-[#2E2E2E] text-[#F8F5F1]/70 py-16 px-6 text-sm font-sans">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        <div>
          <h4 className="text-[#F8F5F1] text-lg mb-4 font-light">The Human Anchor™</h4>
          <p className="leading-relaxed">
            Professional Somatic Wellness, Qigong, and Certified Meditation Instruction in New York City.
          </p>
        </div>
        <div>
          <h4 className="text-[#F8F5F1] text-lg mb-4 font-light">Locations</h4>
          <p className="leading-relaxed">
            By appointment only.<br/>
            Serving private clientele across Manhattan, Brooklyn, Queens, and the Bronx.
          </p>
        </div>
        <div>
          <h4 className="text-[#F8F5F1] text-lg mb-4 font-light">Practice Policies</h4>
          <ul className="space-y-2">
            <li>Fully Clothed Sessions</li>
            <li>Consent-Based Practice</li>
            <li>Confidentiality Guaranteed</li>
            <li>No Unscheduled Walk-ins</li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-[#F8F5F1]/10 text-center text-xs opacity-50">
        <p>© {new Date().getFullYear()} The Human Anchor™. All Rights Reserved.</p>
        <p className="mt-2">The services provided are educational and somatic in nature and are not a substitute for medical care, licensed psychotherapy, or licensed massage therapy.</p>
      </div>
    </footer>
  );
}