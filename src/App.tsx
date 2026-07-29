import Hero from './components/Hero';
import TheScience from './components/TheScience';
import TheHumanAnchor from './components/TheHumanAnchor';
import MeetValentine from './components/MeetValentine';
import Framework from './components/Framework';
import Experiences from './components/Experiences';
import Research from './components/Research';
import IntakeForm from './components/IntakeForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden bg-[#F8F5F1] text-[#2E2E2E] font-sans">
      <main className="flex-grow">
        <Hero />
        <TheScience />
        <TheHumanAnchor />
        <MeetValentine />
        <Framework />
        <Experiences />
        <Research />
        <IntakeForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;