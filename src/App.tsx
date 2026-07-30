import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import MeetValentine from './components/MeetValentine';
import FourPillars from './components/FourPillars';
import ServicesMenu from './components/ServicesMenu';
import CorporateCTA from './components/CorporateCTA';
import IntakeForm from './components/IntakeForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden bg-[#F8F5F1] text-[#2E2E2E] font-sans">
      <main className="flex-grow">
        <Hero />
        <ProblemSection />
        <MeetValentine />
        <FourPillars />
        <ServicesMenu />
        <CorporateCTA />
        <IntakeForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;