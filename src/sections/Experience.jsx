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
    <section id="experience" className="py-32 bg-[#0a0a0a]">
      <Layout>
        {/* Header */}
        <p className="text-primary font-mono text-xs uppercase tracking-[0.2em] mb-4">
          [ Timeline ]
        </p>
        <h2 className="font-display font-medium text-4xl sm:text-5xl text-text mb-16 tracking-tight">
          Experience
        </h2>

        {/* Timeline */}
        <div ref={containerRef} className="relative ml-4 flex flex-col gap-10">
          {/* Static Background Line */}
          <div className="absolute left-[0px] top-0 bottom-0 w-[1px] bg-surface-3 origin-top" />
          
          {/* Active Scroll-Linked Path */}
          <motion.div 
            style={{ scaleY }}
            className="absolute left-[0px] top-0 bottom-0 w-[1px] bg-primary origin-top z-10"
          />

          {experiences.map((exp) => (
            <ExperienceCard key={`${exp.type}-${exp.title}`} {...exp} />
          ))}
        </div>
      </Layout>
    </section>
  );
}
