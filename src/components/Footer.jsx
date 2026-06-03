/**
 * @component Footer
 * @description Site footer with copyright, social links, and scroll-to-top button.
 */
import { ArrowUp } from 'lucide-react';

const SOCIAL_LINKS = [
  { label: 'GitHub',   href: 'https://github.com/imraan011' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ishtikharkhan/' },
  { label: 'Email',    href: 'mailto:ishtikharkhan.dev@gmail.com' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t border-surface-3 bg-surface-2/40 py-10 transition-colors duration-300">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <p className="font-display font-bold text-text">
          Ishtikhar<span className="gradient-text">.</span>
        </p>

        {/* Copyright */}
        <p className="text-xs text-text-muted/80 text-center">
          © {new Date().getFullYear()} Ishtikhar. Built with React + Vite + Tailwind CSS.
        </p>

        {/* Social + scroll-to-top */}
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="text-xs text-text-muted hover:text-text transition-colors cursor-pointer"
            >
              {label}
            </a>
          ))}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2 rounded-lg border border-surface-3 text-text-muted hover:text-text hover:border-primary transition-all duration-200 ml-2 cursor-pointer"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
