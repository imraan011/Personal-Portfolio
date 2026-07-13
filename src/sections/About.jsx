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
  visible: { transition: { staggerChildren: 0.08 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function About() {
  return (
    <section id="about" className="py-32 bg-[#0d0d0d]">
      <Layout>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section label */}
          <motion.p variants={itemVariants} className="text-primary font-mono text-xs uppercase tracking-[0.2em] mb-4">
            [ About ]
          </motion.p>
          <motion.h2 variants={itemVariants} className="font-display font-medium text-4xl sm:text-5xl text-text mb-16 tracking-tight">
            Bio & Background
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* ── LEFT: Bio + Stats (7 cols) ── */}
            <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col gap-6">
              {personalInfo.about.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-text-muted leading-[1.6] text-base font-light"
                >
                  {paragraph}
                </p>
              ))}

              {/* Stat cards */}
              <div className="flex flex-wrap gap-12 mt-8">
                {STATS.map(({ value, label }) => (
                  <div key={label} className="flex flex-col">
                    <span className="text-4xl font-semibold text-primary font-mono tracking-tight">
                      {value}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-text-muted/65 mt-2 font-mono">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ── RIGHT: Real Photo (5 cols) ── */}
            <motion.div variants={itemVariants} className="lg:col-span-5 flex items-center justify-center lg:justify-end">
              <AboutPortrait />
            </motion.div>
          </div>
        </motion.div>
      </Layout>
    </section>
  );
}
