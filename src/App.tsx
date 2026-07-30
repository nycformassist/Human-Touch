import Hero from './components/Hero';
import WhoWeServe from './components/WhoWeServe';
import Methodology from './components/Methodology';
import Programs from './components/Programs';
import MeetValentine from './components/MeetValentine';
import IntakeForm from './components/IntakeForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#F8F5F1] selection:bg-[#B38A58] selection:text-white">
      {/* 1. Introduction */}
      <Hero />
      
      {/* 2. Disqualify the wrong people, attract the right ones */}
      <WhoWeServe />
      
      {/* 3. Prove how it works conceptually */}
      <Methodology />
      
      {/* 4. Show the deliverables/offerings */}
      <Programs />
      
      {/* 5. Build authority with the founder bio */}
      <MeetValentine />
      
      {/* 6. Close the deal with the application */}
      <IntakeForm />
      
      {/* 7. Legal/Navigation */}
      <Footer />
    </div>
  );
}

export default App;