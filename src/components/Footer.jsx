/**
 * @component Footer
 * @description Site footer with copyright, social links, and scroll-to-top button.
 */

const SOCIAL_LINKS = [
  { label: 'GitHub',   href: 'https://github.com/imraan011' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ishtikharkhan/' },
  { label: 'Email',    href: 'mailto:ishtikharkhan.dev@gmail.com' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t border-surface-3 bg-[#0a0a0a] py-12 transition-colors duration-300">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <p className="font-display font-medium text-text">
          Ishtikhar<span className="text-primary">.</span>
        </p>

        {/* Copyright */}
        <p className="text-xs font-mono text-text-muted/60 text-center">
          © {new Date().getFullYear()} Ishtikhar. Built with React + Vite + Tailwind CSS.
        </p>

        {/* Social + scroll-to-top */}
        <div className="flex items-center gap-6">
          {SOCIAL_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="text-xs font-mono text-text-muted hover:text-text transition-colors cursor-pointer hover-underline"
            >
              {label}
            </a>
          ))}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="text-xs font-mono text-text-muted hover:text-primary transition-colors cursor-pointer hover-underline ml-2"
          >
            ↑ Top
          </button>
        </div>
      </div>
    </footer>
  );
}
