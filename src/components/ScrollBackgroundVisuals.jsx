import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollBackgroundVisuals() {
  const { scrollYProgress } = useScroll();

  // Scroll linked transforms for background parallax
  const ring1Rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const ring1Y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  
  const grid2Rotate = useTransform(scrollYProgress, [0, 1], [-20, 45]);
  const grid2Y = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-20" aria-hidden="true">
      {/* Element 1: Left floating rings */}
      <motion.div
        style={{
          rotate: ring1Rotate,
          y: ring1Y,
        }}
        className="absolute -left-32 top-1/4 w-[450px] h-[450px] border border-surface-3/30 rounded-full flex items-center justify-center"
      >
        <div className="w-[380px] h-[380px] border border-dashed border-surface-3/20 rounded-full" />
        <div className="w-[300px] h-[300px] border border-surface-3/15 rounded-full" />
        <div className="absolute top-6 text-[8px] font-mono text-text-muted/20 tracking-widest">[ COMPASS_A1 ]</div>
      </motion.div>

      {/* Element 2: Right floating technical grid */}
      <motion.div
        style={{
          rotate: grid2Rotate,
          y: grid2Y,
          transformStyle: 'preserve-3d',
        }}
        className="absolute -right-40 top-2/3 w-[350px] h-[350px] border border-surface-3/30 flex items-center justify-center"
      >
        <div className="absolute inset-8 border border-dashed border-surface-3/15" />
        <div className="absolute inset-16 border border-surface-3/30" />
        
        {/* Diagonal crosshairs */}
        <div className="absolute w-full h-[1px] bg-surface-3/15 rotate-45" />
        <div className="absolute w-full h-[1px] bg-surface-3/15 -rotate-45" />
        
        <div className="absolute bottom-5 left-5 text-[8px] font-mono text-text-muted/15 tracking-widest">SECTOR_GRID // 42B</div>
      </motion.div>
    </div>
  );
}
