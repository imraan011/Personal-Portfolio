/**
 * @component ProjectLinks
 * @description Renders the source code and live demo links for a project card.
 */
import PropTypes from 'prop-types';
import { ExternalLink } from 'lucide-react';
import GitHubIcon from './icons/GitHubIcon';

export default function ProjectLinks({ github, live, title }) {
  return (
    <div className="flex items-center gap-4 mt-4 pt-4 border-t border-surface-3">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`GitHub repository for ${title}`}
        className="flex items-center gap-1.5 text-xs font-semibold text-text-muted
                   hover:text-text transition-colors duration-200"
      >
        <GitHubIcon />
        Source
      </a>

      {live ? (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Live demo for ${title}`}
          className="flex items-center gap-1.5 text-xs font-semibold text-primary
                     hover:text-primary-light transition-colors duration-200 ml-auto"
        >
          <ExternalLink size={13} />
          Live Demo
        </a>
      ) : (
        <span className="ml-auto text-[11px] text-text-muted/60 italic">
          In development
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
