import Hero from './components/Hero';
import AboutValentine from './components/AboutValentine';
import SaintMartinMethod from './components/SaintMartinMethod';
import Experiences from './components/Experiences';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden bg-[#F8F5F1]">
      <main className="flex-grow">
        <Hero />
        <AboutValentine />
        <SaintMartinMethod />
        <Experiences />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}

export default App;