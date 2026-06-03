/**
 * @component Layout
 * @description Wrapper providing consistent max-width, horizontal padding,
 * and vertical section spacing. Wrap each section's inner content with this.
 */
import PropTypes from 'prop-types';

export default function Layout({ children, className = '' }) {
  return (
    <div className={`section-container w-full ${className}`}>
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
