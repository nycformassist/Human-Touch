
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import TrustBar from './components/TrustBar';
import AboutValentine from './components/AboutValentine';
import SaintMartinMethod from './components/SaintMartinMethod';
import Experiences from './components/Experiences';
import Booking from './components/Booking';
import IntakeForm from './components/IntakeForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden bg-[#F8F5F1]">
      <main className="flex-grow">
        <Hero />
        <PainPoints />
        <TrustBar />
        <AboutValentine />
        <SaintMartinMethod />
        <Experiences />
        <Booking />
        <IntakeForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;