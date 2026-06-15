/**
 * @component AboutPortrait
 * @description Portraits 3D tilting profile photo with ambient glow background.
 */
import { motion } from 'framer-motion';
import { use3DTilt } from '../hooks/use3DTilt';
import profilePhoto from '../assets/photo.png';

export default function AboutPortrait() {
  const tilt = use3DTilt(10); // portrait tilt

  return (
    <motion.div
      ref={tilt.ref}
      style={{ ...tilt.style }}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className="relative cursor-default"
    >
      {/* Background glow */}
      <div 
        className="absolute inset-0 bg-primary/10 blur-2xl -z-10 rounded-2xl [transform:translateZ(10px)]" 
      />

      {/* Photo */}
      <img
        src={profilePhoto}
        alt="Ishtikhar"
        className="w-72 h-72 object-cover rounded-2xl border border-primary/30 shadow-xl shadow-primary/10 [transform:translateZ(30px)_rotate(2deg)] transition-[border-color,box-shadow] duration-300 hover:border-primary hover:shadow-primary/20"
      />
    </motion.div>
  );
}
