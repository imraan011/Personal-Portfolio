/**
 * @component ProjectCard
 * @description Project card with screenshot, tech tag pills, and action links.
 */
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import ProjectScreenshot from './ProjectScreenshot';
import ProjectLinks from './ProjectLinks';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function ProjectCard({ title, description, tech, github, live, image }) {
  return (
    <motion.article
      variants={cardVariants}
      className="glass-card rounded-2xl flex flex-col h-full overflow-hidden
                 border border-surface-3 transition-all duration-300"
    >
      <ProjectScreenshot image={image} title={title} live={live} />

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-display font-bold text-base text-text leading-snug mb-2">
          {title}
        </h3>

        <p className="text-text-muted text-sm leading-relaxed font-light line-clamp-2 flex-grow">
          {description}
        </p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-semibold text-text border border-surface-3
                         bg-surface-3/30 px-2 py-0.5 rounded-md"
            >
              {t}
            </span>
          ))}
        </div>

        <ProjectLinks github={github} live={live} title={title} />
      </div>
    </motion.article>
  );
}

ProjectCard.propTypes = {
  title:       PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tech:        PropTypes.arrayOf(PropTypes.string).isRequired,
  github:      PropTypes.string.isRequired,
  live:        PropTypes.string,
  image:       PropTypes.string,
};
