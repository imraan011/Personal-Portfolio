import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import ProjectScreenshot from './ProjectScreenshot';
import ProjectLinks from './ProjectLinks';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function ProjectCard({ title, description, tech, github, live, image }) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="premium-card rounded-[4px] flex flex-col h-full overflow-hidden"
    >
      <div className="flex flex-col h-full flex-grow">
        {live ? (
          <a 
            href={live} 
            target="_blank" 
            rel="noopener noreferrer" 
            data-cursor="view"
            className="block w-full overflow-hidden border-b border-surface-3"
          >
            <ProjectScreenshot image={image} title={title} live={live} />
          </a>
        ) : (
          <div className="block w-full overflow-hidden border-b border-surface-3">
            <ProjectScreenshot image={image} title={title} live={live} />
          </div>
        )}

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="font-display font-medium text-lg text-text mb-2 tracking-tight">
            {title}
          </h3>

          <p className="text-text-muted text-sm leading-[1.6] font-light flex-grow">
            {description}
          </p>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-2 mt-6">
            {tech.map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] text-text bg-surface-2 border border-surface-3
                           px-2.5 py-0.5 rounded-[3px]"
              >
                {t}
              </span>
            ))}
          </div>

          <ProjectLinks github={github} live={live} title={title} />
        </div>
      </div>
    </motion.article>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tech: PropTypes.arrayOf(PropTypes.string).isRequired,
  github: PropTypes.string.isRequired,
  live: PropTypes.string,
  image: PropTypes.string,
};
