/**
 * @component SkillCategory
 * @description Renders a single skill category group of badges with hover effects and staggered entrance.
 */
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const LEVEL_DOT = {
  Proficient:   'bg-green-400',
  Intermediate: 'bg-yellow-400',
  Beginner:     'bg-red-400',
};

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const pillVariants = {
  hidden:  { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
};

export default function SkillCategory({ category, skills }) {
  return (
    <div>
      {/* Category label */}
      <p className="text-xs uppercase tracking-widest text-text-muted/80 mb-3 border-b border-surface-3/50 pb-2">
        {category}
      </p>

      {/* Pills */}
      <motion.div
        className="flex flex-wrap gap-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {skills.map(({ name, level, icon }) => (
          <motion.span
            key={name}
            variants={pillVariants}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm
                       border bg-surface-2 border-surface-3 text-text
                       hover:border-primary/50 hover:shadow-md hover:shadow-primary/10
                       transition-all duration-200 cursor-default select-none shadow-sm"
          >
            <span aria-hidden="true">{icon}</span>
            <span className="font-medium">{name}</span>
            <span
              className={`w-2 h-2 rounded-full ml-1 shrink-0 ${LEVEL_DOT[level]}`}
              title={level}
              aria-label={level}
            />
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

SkillCategory.propTypes = {
  category: PropTypes.string.isRequired,
  skills:   PropTypes.arrayOf(
    PropTypes.shape({
      name:     PropTypes.string.isRequired,
      level:    PropTypes.oneOf(['Proficient', 'Intermediate', 'Beginner']).isRequired,
      icon:     PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};
