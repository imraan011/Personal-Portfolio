/**
 * @section Projects
 * @description Filterable project grid with Framer Motion stagger.
 * Data from src/data/projects.js — add a project there, never here.
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, projectCategories } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import ProjectFilters from '../components/ProjectFilters';
import Layout from '../components/Layout';

const gridVariants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1 } },
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-surface/10">
      <Layout>
        {/* Header */}
        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
          Portfolio
        </p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-text mb-12">
          Projects
        </h2>

        <ProjectFilters
          categories={projectCategories}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        {/* Staggered grid */}
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key={activeFilter}
              variants={gridVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </motion.div>
          ) : (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-text-muted text-sm text-center py-16"
            >
              No projects in this category yet.
            </motion.p>
          )}
        </AnimatePresence>
      </Layout>
    </section>
  );
}
