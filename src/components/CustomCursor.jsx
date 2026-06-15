import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CURSOR_VARIANTS = {
  default: {
    width: 16,
    height: 16,
    backgroundColor: 'var(--primary)',
    border: '0px solid transparent',
    opacity: 0.35,
  },
  pointer: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(99, 102, 241, 0.12)',
    border: '1.5px solid var(--primary)',
    opacity: 1,
  },
  view: {
    width: 64,
    height: 64,
    backgroundColor: 'var(--accent)',
    border: 'none',
    opacity: 0.9,
  }
};

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState('default'); // 'default' | 'pointer' | 'view'
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  // Spring configuration for smooth lag
  const springConfig = { damping: 35, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
      
      const target = e.target;
      if (!target) return;

      const isInteractive = target.closest('a, button, [role="button"], input, select, textarea, [data-cursor="pointer"]');
      const hasViewAttr = target.closest('[data-cursor="view"]');

      if (hasViewAttr) {
        setCursorType('view');
      } else if (isInteractive) {
        setCursorType('pointer');
      } else {
        setCursorType('default');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  // Disable on devices with touchscreen (pointer: coarse)
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile || !isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center font-display text-[10px] font-bold tracking-wider text-black select-none pointer-events-none shadow-md"
      style={{
        x: cursorX,
        y: cursorY,
        ...CURSOR_VARIANTS[cursorType]
      }}
      animate={cursorType}
      transition={{ type: 'spring', damping: 25, stiffness: 220 }}
    >
      {cursorType === 'view' && (
        <span className="text-surface font-black text-[9px] uppercase tracking-widest animate-pulse">
          View
        </span>
      )}
    </motion.div>
  );
}
