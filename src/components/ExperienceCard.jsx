/**
 * @component ExperienceCard
 * @description Card representing a single experience timeline node (work, training, education).
 */
import PropTypes from 'prop-types';
import { Briefcase, GraduationCap, Code } from 'lucide-react';

const TYPE_ICON = {
  education: <GraduationCap size={15} />,
  training:  <Code size={15} />,
  work:      <Briefcase size={15} />,
};

const TYPE_NODE = {
  education: 'bg-primary border-primary/20 text-white shadow-md shadow-primary/20',
  training:  'bg-accent border-accent/20 text-white shadow-md shadow-accent/20',
  work:      'bg-surface-3 border-surface-3 text-text-muted shadow-sm',
};

const TYPE_LABEL = {
  education: { text: 'Education', cls: 'text-primary border-primary/20 bg-primary/5' },
  training:  { text: 'Training',  cls: 'text-accent border-accent/20 bg-accent/5' },
  work:      { text: 'Work',      cls: 'text-text-muted border-surface-3 bg-surface-3/30' },
};

export default function ExperienceCard({ type, title, organization, location, period, description }) {
  const label = TYPE_LABEL[type] ?? TYPE_LABEL.work;
  const icon = TYPE_ICON[type] ?? TYPE_ICON.work;
  const nodeCls = TYPE_NODE[type] ?? TYPE_NODE.work;

  return (
    <div className="relative pl-8">
      {/* Timeline node */}
      <span
        className={`absolute -left-[17px] top-1 w-8 h-8 rounded-full border-2 flex items-center justify-center ${nodeCls}`}
        aria-hidden="true"
      >
        {icon}
      </span>

      {/* Card */}
      <div className="glass-card rounded-2xl p-6 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
          {/* Left: title + org + location */}
          <div className="flex flex-col gap-0.5 min-w-0">
            <h3 className="font-display font-bold text-lg text-text leading-snug">
              {title}
            </h3>
            <p className="text-primary text-sm font-medium">{organization}</p>
            {location && <p className="text-text-muted text-xs">{location}</p>}
          </div>

          {/* Right: type label + period */}
          <div className="flex flex-col items-end gap-1.5 shrink-0">
            <span className={`text-[10px] font-bold uppercase tracking-wider border px-2 py-0.5 rounded-full ${label.cls}`}>
              {label.text}
            </span>
            <span className="text-xs font-semibold text-text-muted border border-surface-3 px-2.5 py-1 rounded-lg">
              {period}
            </span>
          </div>
        </div>

        <p className="text-text-muted text-sm leading-relaxed font-light mt-3">
          {description}
        </p>
      </div>
    </div>
  );
}

ExperienceCard.propTypes = {
  type:         PropTypes.oneOf(['education', 'training', 'work']).isRequired,
  title:        PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
  location:     PropTypes.string,
  period:       PropTypes.string.isRequired,
  description:  PropTypes.string.isRequired,
};
