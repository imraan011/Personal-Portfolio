/**
 * @section About
 * @description Bio, real photo, stat cards. Skills tags removed — see Skills section.
 * All stat data defined at top — edit here only.
 */
import Layout from '../components/Layout';
import { personalInfo } from '../data/personalInfo';
import { motion } from 'framer-motion';
import AboutPortrait from '../components/AboutPortrait';

const STATS = [
  { value: '3+', label: 'Projects Built' },
  { value: '2+', label: 'Years Learning' },
  { value: '100+', label: 'DSA Problems Solved' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

export default function About() {
  return (
    <section id="about" className="py-24 bg-surface-2/25 border-y border-surface-3/50">
      <Layout>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section label */}
          <motion.p variants={itemVariants} className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">About Me</motion.p>
          <motion.h2 variants={itemVariants} className="font-display font-bold text-3xl sm:text-4xl text-text mb-12">
            Who I Am
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* ── LEFT: Bio + Stats (7 cols) ── */}
            <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col gap-6">
              {personalInfo.about.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-text leading-relaxed text-base ${index > 0 ? 'text-text-muted font-light' : ''}`}
                >
                  {paragraph}
                </p>
              ))}

              {/* Stat cards */}
              <div className="flex flex-wrap gap-6 mt-4">
                {STATS.map(({ value, label }) => (
                  <div key={label} className="flex flex-col">
                    <span className="text-3xl font-bold text-primary font-display">
                      {value}
                    </span>
                    <span className="text-sm text-text-muted mt-0.5">{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ── RIGHT: Real Photo (5 cols) ── */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <AboutPortrait />
            </div>

          </div>
        </motion.div>
      </Layout>
    </section>
  );
}
