/**
 * @component ProjectScreenshot
 * @description Renders the image screenshot or fallback initial-letter placeholder for a project card.
 */
import PropTypes from 'prop-types';

export default function ProjectScreenshot({ image, title, live }) {
  return (
    <div className="relative aspect-video bg-surface-3/30 overflow-hidden">
      {image ? (
        <img
          src={image}
          alt={`${title} screenshot`}
          className="w-full h-full object-cover"
        />
      ) : (
        /* Initial-letter placeholder */
        <div className="w-full h-full flex items-center justify-center select-none">
          <div className="flex flex-col items-center gap-2">
            <span className="text-5xl font-display font-extrabold text-text/10">
              {title.charAt(0)}
            </span>
            <span className="text-[10px] font-semibold text-text-muted/60 uppercase tracking-widest">
              No preview
            </span>
          </div>
        </div>
      )}
      {/* In Progress badge overlaid on screenshot */}
      {!live && (
        <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider
                         text-amber-600 dark:text-amber-400 border border-amber-500/20 dark:border-amber-400/30
                         bg-surface-2/90 backdrop-blur-sm px-2 py-0.5 rounded-full">
          In Progress
        </span>
      )}
    </div>
  );
}

ProjectScreenshot.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  live:  PropTypes.string,
};
