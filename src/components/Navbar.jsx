/**
 * @component Navbar
 * @description Sticky navigation bar with smooth scroll, theme toggles, and mobile hamburger menu.
 */
import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import ThemeSwitcher from './ThemeSwitcher';
import NavbarMobile from './NavbarMobile';

const NAV_LINKS = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'nav-glass shadow-lg' : 'bg-transparent'}`}>
      <nav className="section-container flex items-center justify-between h-16" aria-label="Main navigation">
        {/* Brand */}
        <a href="#home" className="font-display font-bold text-xl text-text tracking-tight" onClick={closeMenu}>
          Ishtikhar<span className="gradient-text">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className={`text-sm font-medium transition-colors duration-200 ${activeId === href.slice(1) ? 'text-primary' : 'text-text-muted hover:text-text'}`}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Action area (desktop): theme controls + resume */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeSwitcher />
          <a href="/resume.pdf" download className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/40 text-primary text-sm font-semibold hover:bg-primary/10 transition-all duration-200" aria-label="Download Resume">
            <Download size={14} />
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen((o) => !o)} className="md:hidden p-2 rounded-lg text-text-muted hover:text-text focus:outline-none" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && <NavbarMobile links={NAV_LINKS} activeId={activeId} closeMenu={closeMenu} />}
    </header>
  );
}
