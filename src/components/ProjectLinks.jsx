import PropTypes from 'prop-types';

export default function ProjectLinks({ github, live, title }) {
  return (
    <div className="flex items-center gap-4 mt-6 pt-4 border-t border-surface-3">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`GitHub repository for ${title}`}
        className="text-xs font-mono text-text-muted hover:text-text hover-underline transition-colors duration-200"
      >
        Source
      </a>

      {live ? (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Live demo for ${title}`}
          className="text-xs font-mono text-primary hover:text-primary-light hover-underline transition-colors duration-200 ml-auto"
        >
          Live Demo
        </a>
      ) : (
        <span className="ml-auto text-[9px] font-mono text-text-muted/40 uppercase tracking-widest">
          WIP
        </span>
      )}
    </div>
  );
}

ProjectLinks.propTypes = {
  github: PropTypes.string.isRequired,
  live:   PropTypes.string,
  title:  PropTypes.string.isRequired,
};
