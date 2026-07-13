import PropTypes from 'prop-types';

export default function ProjectScreenshot({ image, title, live }) {
  return (
    <div className="relative aspect-video bg-[#0d0d0d] overflow-hidden">
      {image ? (
        <img
          src={image}
          alt={`${title} screenshot`}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      ) : (
        /* Monospace placeholder */
        <div className="w-full h-full flex items-center justify-center select-none">
          <div className="flex flex-col items-center gap-2">
            <span className="text-4xl font-mono font-medium text-text-muted/20">
              {title.split(' ').map(w => w[0]).join('')}
            </span>
            <span className="text-[9px] font-mono text-text-muted/40 uppercase tracking-widest">
              [ No preview ]
            </span>
          </div>
        </div>
      )}
      {/* In Progress badge */}
      {!live && (
        <span className="absolute top-3 right-3 text-[9px] font-mono uppercase tracking-widest
                         text-text-muted border border-surface-3 bg-surface-2/95 px-2 py-0.5 rounded-[3px]">
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
