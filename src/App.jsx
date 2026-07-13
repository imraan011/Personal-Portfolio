/**
 * @component App
 * @description Root application. Assembles all sections in order.
 * To add/remove a section: import it here and add/remove from <main>.
 */
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollBackgroundVisuals from './components/ScrollBackgroundVisuals';
import EntryAnimation from './components/EntryAnimation';

export default function App() {
  return (
    <EntryAnimation>
      <div className="relative min-h-screen bg-surface text-text font-sans">
        {/* Custom Magic Cursor */}
        <CustomCursor />

        {/* Global Background Grid & Animated Visuals */}
        <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
          <div className="absolute inset-0 grid-overlay" />
          <ScrollBackgroundVisuals />
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </EntryAnimation>
  );
}
