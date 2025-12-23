import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { SeasonProvider } from './context/SeasonProvider';
import SeasonParticles from './components/SeasonParticles';
import { LenisProvider } from './hooks/useLenisScroll';

function App() {
  return (
    <LenisProvider duration={1.2}>
      <SeasonProvider>
        <div className="min-h-screen bg-dark-bg relative">
          {/* Global season particles - based on current calendar date */}
          <div className="fixed inset-0 pointer-events-none z-10">
            <SeasonParticles forceSeason='summer' />
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

          {/* Back to Top Button - appears when scrolling down */}
          <BackToTop />
        </div>
      </SeasonProvider>
    </LenisProvider>
  );
}

export default App;

