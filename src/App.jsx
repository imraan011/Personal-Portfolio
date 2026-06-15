/**
 * @component App
 * @description Root application. Assembles all sections in order.
 * To add/remove a section: import it here and add/remove from <main>.
 */
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import CanvasBackground from './components/CanvasBackground';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <div className="relative min-h-screen bg-surface text-text font-sans transition-colors duration-300">
      {/* Custom Magic Cursor */}
      <CustomCursor />

      {/* Global Background Animation & Grid */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute inset-0 grid-overlay" />
        <CanvasBackground />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
