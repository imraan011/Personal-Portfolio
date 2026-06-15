/**
 * @section Experience
 * @description Vertical timeline of education, training, and work experience.
 * Data from src/data/experience.js — update there, reflects here automatically.
 */
import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { experiences } from '../data/experience';
import Layout from '../components/Layout';
import ExperienceCard from '../components/ExperienceCard';

export default function Experience() {
  const containerRef = useRef(null);
  
  // Track scroll progress of this container relative to viewport center
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 45%"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="py-24 bg-surface/10">
      <Layout>
        {/* Header */}
        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
          Timeline
        </p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-text mb-12">
          Experience
        </h2>

        {/* Timeline */}
        <div ref={containerRef} className="relative ml-4 flex flex-col gap-10">
          {/* Static Background Line */}
          <div className="absolute left-[0.5px] top-0 bottom-0 w-[3px] bg-surface-3 origin-top rounded-full" />
          
          {/* Active Scroll-Linked Path */}
          <motion.div 
            style={{ scaleY }}
            className="absolute left-[0.5px] top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary via-accent to-primary origin-top shadow-[0_0_12px_rgba(99,102,241,0.65)] rounded-full z-10"
          />

          {experiences.map((exp) => (
            <ExperienceCard key={`${exp.type}-${exp.title}`} {...exp} />
          ))}
        </div>
      </Layout>
    </section>
  );
}
