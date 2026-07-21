
export default function Footer() {
  return (
    <footer className="bg-[#2E2E2E] text-[#F8F5F1] py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto space-y-6">
        <h3 className="font-serif text-2xl mb-2">The Human Anchor™</h3>
        <p className="text-sm font-sans text-[#F8F5F1]/60 uppercase tracking-widest">
          Developed through nearly two decades of practice by Valentine Saint Martin • Professional Somatic Wellness • New York City
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-xs font-sans text-[#F8F5F1]/80 pt-4">
          <a href="#professional-standards" className="hover:text-white transition-colors">Professional Standards</a>
          <span>•</span>
          <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
          <span>•</span>
          <a href="#terms" className="hover:text-white transition-colors">Terms</a>
          <span>•</span>
          <a href="#disclaimer" className="hover:text-white transition-colors">Disclaimer</a>
        </div>
        <div className="flex justify-center space-x-6 text-xs font-sans text-[#F8F5F1]/80 pt-2">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="mailto:valentine@thehumananchor.com" className="hover:text-white transition-colors">Email</a>
          <span className="text-[#F8F5F1]/40">New York City, NY</span>
        </div>
      </div>
    </footer>
  );
}