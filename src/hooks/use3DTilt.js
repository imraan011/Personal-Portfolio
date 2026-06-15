import { useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

/**
 * Custom hook for smooth 3D perspective tilt effect on hover.
 * Uses Framer Motion springs for hardware-accelerated smooth animations.
 * @param {number} maxRotation Maximum tilt angle in degrees.
 */
export function use3DTilt(maxRotation = 10) {
  const ref = useRef(null);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const scale = useMotionValue(1);

  const springConfig = { damping: 25, stiffness: 180, mass: 0.5 };
  
  // Transform normalized x, y [0, 1] coordinates into degrees [-max, max]
  const rotateX = useSpring(useTransform(y, [0, 1], [maxRotation, -maxRotation]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 1], [-maxRotation, maxRotation]), springConfig);
  const springScale = useSpring(scale, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / width);
    y.set(mouseY / height);
    scale.set(1.03); // Slight scale up on hover
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
    scale.set(1); // Return to default scale
  };

  return {
    ref,
    style: {
      rotateX,
      rotateY,
      scale: springScale,
      transformPerspective: 1000, // Enables 3D perspective depth projection
      transformStyle: 'preserve-3d',
    },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };
}
