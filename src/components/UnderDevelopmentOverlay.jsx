/**
 * @component UnderDevelopmentOverlay
 * @description Wraps any section content with a blur + ribbon overlay
 * when `active` is true. When false, children render normally.
 * Drop this around any section's content to enable dev-mode locking.
 */
import PropTypes from 'prop-types';
import { InfiniteRibbon } from './ui/infinite-ribbon';
import { HardHat, Wrench } from 'lucide-react';

export default function UnderDevelopmentOverlay({ active, children }) {
  if (!active) return children;

  return (
    <div className="relative overflow-hidden rounded-2xl">

      {/* Blurred, non-interactive content */}
      <div
        className="pointer-events-none select-none"
        style={{ filter: 'blur(3px)', opacity: 0.38 }}
        aria-hidden="true"
      >
        {children}
      </div>

      {/* Theme-aware scrim */}
      <div className="absolute inset-0 pointer-events-none rounded-2xl bg-surface/60" style={{ zIndex: 10 }} />

      {/* Ribbons — full bleed across the wrapper */}
      <div
        className="absolute inset-x-0 pointer-events-none flex flex-col gap-3"
        style={{ top: '50%', transform: 'translateY(-50%)', zIndex: 20 }}
      >
        <InfiniteRibbon
          duration={30}
          repeat={8}
          rotation={-3}
          className="bg-yellow-400 text-black text-sm font-black tracking-[0.2em] uppercase
                     py-4 shadow-[0_0_40px_rgba(250,204,21,0.35)]"
        >
          <HardHat className="inline w-4 h-4 mr-2 -mt-0.5" />
          Under Development
          <span className="mx-6 opacity-40">·</span>
          Building in Public
          <span className="mx-6 opacity-40">·</span>
          More Projects Coming Soon
          <span className="mx-6 opacity-40">·</span>
          <Wrench className="inline w-4 h-4 mr-2 -mt-0.5" />
          Stay Tuned
          <span className="mx-6 opacity-40">·</span>
        </InfiniteRibbon>

        <InfiniteRibbon
          duration={24}
          repeat={8}
          reverse
          rotation={3}
          className="bg-yellow-400 text-black text-sm font-black tracking-[0.2em] uppercase
                     py-4 shadow-[0_0_40px_rgba(250,204,21,0.35)]"
        >
          <Wrench className="inline w-4 h-4 mr-2 -mt-0.5" />
          Full Stack Projects Incoming
          <span className="mx-6 opacity-40">·</span>
          React · Vite · Tailwind CSS
          <span className="mx-6 opacity-40">·</span>
          <HardHat className="inline w-4 h-4 mr-2 -mt-0.5" />
          Watch This Space
          <span className="mx-6 opacity-40">·</span>
          Crafting Something Awesome
          <span className="mx-6 opacity-40">·</span>
        </InfiniteRibbon>
      </div>

      {/* "Under Development" pill */}
      <div
        className="absolute bottom-6 inset-x-0 flex justify-center pointer-events-none"
        style={{ zIndex: 25 }}
      >
        <div className="flex items-center gap-2 bg-black/70 backdrop-blur-md
                        border border-yellow-400/30 rounded-full px-5 py-2">
          <span className="size-1.5 rounded-full bg-yellow-400 animate-pulse" />
          <span className="text-yellow-400 text-[11px] font-bold tracking-[0.22em] uppercase">
            Under Development
          </span>
          <span className="size-1.5 rounded-full bg-yellow-400 animate-pulse [animation-delay:0.4s]" />
        </div>
      </div>

    </div>
  );
}

UnderDevelopmentOverlay.propTypes = {
  /** When true: ribbon + blur shown. When false: children render normally. */
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
