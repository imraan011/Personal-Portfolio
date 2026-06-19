/**
 * @component InfiniteRibbon
 * @description Auto-scrolling marquee ribbon banner.
 * Ported from TSX to JSX for this React + Vite project.
 */
import PropTypes from 'prop-types';
import { cn } from '@/lib/utils';

const ribbonAnimationStyles = `
@keyframes iconiq-infinite-ribbon {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
@keyframes iconiq-infinite-ribbon-reverse {
  from { transform: translateX(-50%); }
  to   { transform: translateX(0); }
}
@media (prefers-reduced-motion: reduce) {
  .iconiq-infinite-ribbon-track {
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
  }
}
`;

export function InfiniteRibbon({
  repeat = 5,
  duration = 10,
  reverse = false,
  rotation = 0,
  children,
  className,
}) {
  const repeatCount = Math.max(1, Math.floor(repeat));
  const animationName = reverse
    ? 'iconiq-infinite-ribbon-reverse'
    : 'iconiq-infinite-ribbon';

  return (
    <div
      className={cn(
        'w-full max-w-full overflow-hidden py-2',
        className
      )}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <span className="sr-only">{children}</span>
      <div
        aria-hidden="true"
        className="iconiq-infinite-ribbon-track flex w-max whitespace-nowrap"
        style={{
          '--ribbon-duration': `${Math.max(0.1, duration)}s`,
          animation: `${animationName} var(--ribbon-duration) linear infinite`,
        }}
      >
        {Array.from({ length: repeatCount * 2 }, (_, index) => (
          <span className="mr-10 inline-block select-none" key={index}>
            {children}
          </span>
        ))}
      </div>
      <style>{ribbonAnimationStyles}</style>
    </div>
  );
}

InfiniteRibbon.propTypes = {
  repeat: PropTypes.number,
  duration: PropTypes.number,
  reverse: PropTypes.bool,
  rotation: PropTypes.number,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
