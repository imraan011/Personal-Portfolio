/**
 * @component InfoCard
 * @description Sleek interactive glassmorphism card for displaying contact details (email, location).
 */
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export default function InfoCard({ icon: Icon, label, value, href, actionButton, badge }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="glass-card rounded-2xl p-5 border border-glass-border flex items-center justify-between gap-4 group relative overflow-hidden"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      <div className="flex items-center gap-4 relative z-10">
        {/* Icon Container */}
        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-md group-hover:shadow-primary/20 shrink-0">
          <Icon size={20} />
        </div>
        
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted/60 mb-0.5">
            {label}
          </span>
          {href ? (
            <a 
              href={href} 
              className="text-text font-medium text-sm sm:text-base hover:text-primary transition-colors select-all break-all"
            >
              {value}
            </a>
          ) : (
            <span className="text-text font-medium text-sm sm:text-base">
              {value}
            </span>
          )}
        </div>
      </div>

      {actionButton && <div className="relative z-10 shrink-0">{actionButton}</div>}
      {badge && <div className="relative z-10 shrink-0">{badge}</div>}
    </motion.div>
  );
}

InfoCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  href: PropTypes.string,
  actionButton: PropTypes.node,
  badge: PropTypes.node,
};
