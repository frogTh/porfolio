import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { SeasonProvider } from './context/SeasonProvider';
import SeasonParticles from './components/SeasonParticles';

function App() {
  return (
    <SeasonProvider>
      <div className="min-h-screen bg-dark-bg relative">
        {/* Global season particles - based on current calendar date */}
        <div className="fixed inset-0 pointer-events-none z-10">
          <SeasonParticles forceSeason='summer'/>
        </div>
        
        <Navbar />
        <main className="relative z-20">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </SeasonProvider>
  );
}

export default App;

