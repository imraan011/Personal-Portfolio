/**
 * @component NavbarMobile
 * @description Mobile slide-out drawer menu for navigation links and resume CTA.
 */
import PropTypes from 'prop-types';

export default function NavbarMobile({ links, activeId, closeMenu }) {
  return (
    <div className="md:hidden nav-glass border-t border-surface-3 bg-surface-2/95 backdrop-blur-md">
      <ul className="flex flex-col px-6 py-4 gap-2" role="list">
        {links.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              onClick={closeMenu}
              className={`block py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                activeId === href.slice(1)
                  ? 'bg-primary/10 text-primary'
                  : 'text-text-muted hover:text-text hover:bg-text-muted/5'
              }`}
            >
              {label}
            </a>
          </li>
        ))}
        <li className="pt-4 flex items-center justify-center border-t border-surface-3 mt-2">
          <a
            href="/resume.pdf"
            download
            onClick={closeMenu}
            className="w-full text-center py-2 rounded-[4px] border border-primary/30 text-primary text-sm font-medium hover:bg-primary/5 transition-[background-color,border-color] duration-200"
          >
            Download Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

NavbarMobile.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href:  PropTypes.string.isRequired,
    })
  ).isRequired,
  activeId:  PropTypes.string.isRequired,
  closeMenu: PropTypes.func.isRequired,
};
