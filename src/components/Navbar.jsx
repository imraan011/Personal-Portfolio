/**
 * @component Navbar
 * @description Sticky navigation bar with smooth scroll, theme toggles, and mobile hamburger menu.
 */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Menu, X } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { useTextScramble } from '../hooks/useTextScramble';
import NavbarMobile from './NavbarMobile';

const NAV_LINKS = [
  { label: 'Home',           href: '#home' },
  { label: 'About',          href: '#about' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Experience',     href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',        href: '#contact' },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));

function ScrambleNavLink({ label, href, active }) {
  const { displayText, triggerScramble } = useTextScramble(label);
  return (
    <a 
      href={href} 
      onMouseEnter={triggerScramble}
      className={`text-sm font-mono tracking-wider transition-colors duration-200 min-w-[80px] inline-block ${active ? 'text-primary' : 'text-text-muted hover:text-text'}`}
    >
      {displayText}
    </a>
  );
}

ScrambleNavLink.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

function ScrambleResumeLink() {
  const { displayText, triggerScramble } = useTextScramble('Resume');
  return (
    <a 
      href="/resume.pdf" 
      download 
      onMouseEnter={triggerScramble}
      className="px-4 py-2 rounded-[4px] border border-primary/30 text-primary text-sm font-mono tracking-wider hover:bg-primary/5 transition-[background-color,border-color] duration-200 min-w-[70px] text-center" 
      aria-label="Download Resume"
    >
      {displayText}
    </a>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);
  const brandText = useTextScramble('Ishtikhar');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'nav-glass shadow-lg' : 'bg-transparent'}`}>
      <nav className="section-container flex items-center justify-between h-16" aria-label="Main navigation">
        {/* Brand */}
        <a 
          href="#home" 
          className="font-display font-bold text-xl text-text tracking-tight min-w-[120px] inline-block" 
          onClick={closeMenu}
          onMouseEnter={brandText.triggerScramble}
        >
          {brandText.displayText}<span className="text-primary">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <ScrambleNavLink 
                label={label} 
                href={href} 
                active={activeId === href.slice(1)} 
              />
            </li>
          ))}
        </ul>

        {/* Action area (desktop): resume link */}
        <div className="hidden md:flex items-center">
          <ScrambleResumeLink />
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen((o) => !o)} className="md:hidden p-2 rounded-lg text-text-muted hover:text-text focus:outline-none cursor-pointer" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && <NavbarMobile links={NAV_LINKS} activeId={activeId} closeMenu={closeMenu} />}
    </header>
  );
}
