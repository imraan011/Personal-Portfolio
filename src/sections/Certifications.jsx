/**
 * @section Certifications
 * @description Grid of professional certifications and course completions.
 * Data from src/data/certifications.js — update there, reflects here automatically.
 */
import { motion } from 'framer-motion';
import { certifications } from '../data/certifications';
import Layout from '../components/Layout';
import CertificationCard from '../components/CertificationCard';

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 bg-[#0d0d0d]">
      <Layout>
        {/* Header */}
        <p className="text-primary font-mono text-xs uppercase tracking-[0.2em] mb-4">
          [ Credentials ]
        </p>
        <h2 className="font-display font-medium text-4xl sm:text-5xl text-text mb-16 tracking-tight">
          Certifications
        </h2>

        {/* Grid layout */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certifications.map((cert) => (
            <CertificationCard key={cert.id} {...cert} />
          ))}
        </motion.div>
      </Layout>
    </section>
  );
}
