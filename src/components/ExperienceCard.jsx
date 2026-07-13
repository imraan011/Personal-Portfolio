import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const TYPE_LABEL = {
  education: { text: 'Education', cls: 'text-primary border-primary/20 bg-primary/5' },
  training: { text: 'Training', cls: 'text-primary border-primary/20 bg-primary/5' },
  work: { text: 'Work', cls: 'text-text-muted border-surface-3 bg-surface-3/10' },
};

export default function ExperienceCard({ type, title, organization, location, period, description }) {
  const label = TYPE_LABEL[type] ?? TYPE_LABEL.work;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative pl-8"
    >
      {/* Timeline node */}
      <span
        className="absolute -left-[4.5px] top-[26px] w-2.5 h-2.5 rounded-full border border-surface bg-primary animate-pulse z-20"
        aria-hidden="true"
      />

      {/* Card */}
      <div className="premium-card rounded-[4px] p-6">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          {/* Left: title + org + location */}
          <div className="flex flex-col gap-1 min-w-0">
            <h3 className="font-display font-medium text-lg text-text leading-snug">
              {title}
            </h3>
            <p className="text-primary text-sm font-medium">{organization}</p>
            {location && <p className="text-text-muted text-xs font-mono">{location}</p>}
          </div>

          {/* Right: type label + period */}
          <div className="flex flex-col items-end gap-1.5 shrink-0">
            <span className={`text-[9px] font-mono uppercase tracking-widest border px-2.5 py-0.5 rounded-[3px] ${label.cls}`}>
              {label.text}
            </span>
            <span className="text-xs font-mono text-text-muted border border-surface-3 px-2.5 py-1 rounded-[3px]">
              {period}
            </span>
          </div>
        </div>

        <p className="text-text-muted text-sm leading-[1.6] font-light mt-4">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

ExperienceCard.propTypes = {
  type: PropTypes.oneOf(['education', 'training', 'work']).isRequired,
  title: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
  location: PropTypes.string,
  period: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
