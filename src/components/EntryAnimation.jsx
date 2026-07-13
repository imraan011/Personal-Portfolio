import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { motion, useMotionValue, animate, AnimatePresence } from 'framer-motion';

export default function EntryAnimation({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('loading'); // loading -> fading -> wiping -> done

  const progressVal = useMotionValue(0);

  useEffect(() => {
    // Check sessionStorage and prefers-reduced-motion
    const hasPlayed = sessionStorage.getItem('portfolio-intro-played');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (hasPlayed || prefersReducedMotion) {
      setIsLoading(false);
      setStatus('done');
      window.portfolioIntroActive = false;
      window.dispatchEvent(new CustomEvent('portfolio-intro-complete'));
      return;
    }

    // Flag that the intro animation is active
    window.portfolioIntroActive = true;

    // Animate progress value (eased curve via easeOut)
    const controls = animate(progressVal, 100, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate: (latest) => {
        setProgress(latest);
      },
      onComplete: () => {
        // Hold on 100% for 200ms
        setTimeout(() => {
          setStatus('fading');
          // Fade out counter text and progress line in 300ms
          setTimeout(() => {
            setStatus('wiping');
            // Upward clip-path wipe in 900ms
            setTimeout(() => {
              setStatus('done');
              setIsLoading(false);
              sessionStorage.setItem('portfolio-intro-played', 'true');
              window.portfolioIntroActive = false;
              window.dispatchEvent(new CustomEvent('portfolio-intro-complete'));
            }, 900);
          }, 300);
        }, 200);
      }
    });

    return () => controls.stop();
  }, [progressVal]);

  const handleSkip = () => {
    progressVal.set(100);
    setProgress(100);
    setStatus('fading');
    setTimeout(() => {
      setStatus('wiping');
      setTimeout(() => {
        setStatus('done');
        setIsLoading(false);
        sessionStorage.setItem('portfolio-intro-played', 'true');
        window.portfolioIntroActive = false;
        window.dispatchEvent(new CustomEvent('portfolio-intro-complete'));
      }, 900);
    }, 300);
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ clipPath: 'inset(0% 0% 0% 0%)' }}
            animate={{
              clipPath: status === 'wiping' ? 'inset(0% 0% 100% 0%)' : 'inset(0% 0% 0% 0%)'
            }}
            transition={{
              duration: 0.9,
              ease: [0.76, 0, 0.24, 1] // Custom deliberate cubic-bezier reveal curve
            }}
            className="fixed inset-0 bg-[#0a0a0a] z-[9999] flex flex-col items-center justify-center select-none"
          >
            {/* Centered counter container */}
            <motion.div
              animate={{
                opacity: status !== 'loading' ? 0 : 1
              }}
              transition={{
                duration: 0.3,
                ease: 'easeOut'
              }}
              className="flex flex-col items-center max-w-[280px] w-full px-4"
            >
              {/* Monospace progress text with tabular-nums to prevent jitter */}
              <div className="font-mono text-4xl sm:text-5xl text-text font-medium tracking-wider tabular-nums mb-4">
                {String(Math.floor(progress)).padStart(3, '0')}%
              </div>

              {/* Thin progress track and fill */}
              <div className="w-full h-[1px] bg-surface-3 relative overflow-hidden">
                <motion.div
                  style={{ width: `${progress}%` }}
                  className="absolute top-0 left-0 h-full bg-primary"
                />
              </div>
            </motion.div>

            {/* Skip Option */}
            {status === 'loading' && (
              <button
                onClick={handleSkip}
                className="absolute bottom-8 right-8 font-mono text-[9px] uppercase tracking-widest text-text-muted/40 hover:text-primary transition-colors hover-underline cursor-pointer"
              >
                Skip
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}

EntryAnimation.propTypes = {
  children: PropTypes.node.isRequired,
};
