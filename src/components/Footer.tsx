export default function Footer() {
  return (
    <footer className="bg-[#2E2E2E] text-[#F8F5F1] py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-[#F8F5F1]/10 pb-12">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <h3 className="text-xl tracking-widest uppercase">VSM Institute™</h3>
          <p className="text-[#F8F5F1]/60 text-sm leading-relaxed max-w-xs">
            Evidence-informed somatic wellness, nervous system regulation, and resilience training for modern professionals.
          </p>
        </div>

        {/* Navigation Column */}
        <div className="space-y-4">
          <h4 className="text-sm tracking-widest text-[#B38A58] uppercase">Ecosystem</h4>
          <ul className="space-y-2 text-[#F8F5F1]/70 text-sm">
            <li>The Human Anchor™ Assessment</li>
            <li>Executive Resilience Coaching</li>
            <li>Corporate Wellness (Anchor at Work™)</li>
            <li>Morning Anchor™ Membership</li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="space-y-4">
          <h4 className="text-sm tracking-widest text-[#B38A58] uppercase">Inquiries</h4>
          <ul className="space-y-2 text-[#F8F5F1]/70 text-sm">
            <li>New York City & The Bronx</li>
            <li>healthcarebyvalentine@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#F8F5F1]/40 space-y-4 md:space-y-0">
        <p>&copy; {new Date().getFullYear()} VSM Institute™. All rights reserved.</p>
        <p className="max-w-xl text-right">
          Disclaimer: The VSM Institute™ provides performance, resilience, and wellness coaching. Our services are educational and are not a substitute for professional medical, psychiatric, or psychological care.
        </p>
      </div>
    </footer>
  );
}