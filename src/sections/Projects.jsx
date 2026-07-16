import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import Layout from '../components/Layout';

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured !== false);
  const otherProjects = projects.filter((p) => p.featured === false);

  return (
    <section id="projects" className="py-32 bg-[#0a0a0a]">
      <Layout>
        {/* Header */}
        <p className="text-primary font-mono text-xs uppercase tracking-[0.2em] mb-4">
          [ Portfolio ]
        </p>
        <h2 className="font-display font-medium text-4xl sm:text-5xl text-text mb-16 tracking-tight">
          Featured Work
        </h2>

        {/* Featured Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </motion.div>

        {/* Other Projects List */}
        {/* {otherProjects.length > 0 && (
          <div className="mt-32">
            <h3 className="font-display font-medium text-2xl text-text mb-8 tracking-tight">
              Archive & Other Work
            </h3>
            
            <div className="flex flex-col border-t border-surface-3">
              {otherProjects.map((project, i) => (
                <div
                  key={project.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-surface-3 gap-4"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-xs text-text-muted/40 mt-1">
                      {String(featuredProjects.length + i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h4 className="font-sans font-medium text-base text-text">
                        {project.title}
                      </h4>
                      <p className="text-text-muted text-sm font-light mt-1 max-w-xl">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-6 sm:text-right shrink-0">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[10px] text-text-muted/80 bg-surface-2 border border-surface-3 px-2.5 py-0.5 rounded-[3px]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 shrink-0">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-text-muted hover:text-primary transition-colors hover-underline"
                      >
                        Source
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-primary hover:text-primary-light transition-colors hover-underline"
                        >
                          Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )} */}
      </Layout>
    </section>
  );
}
