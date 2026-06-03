/**
 * @section Experience
 * @description Vertical timeline of education, training, and work experience.
 * Data from src/data/experience.js — update there, reflects here automatically.
 */
import { experiences } from '../data/experience';
import Layout from '../components/Layout';
import ExperienceCard from '../components/ExperienceCard';

export default function Experience() {
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
        <div className="relative border-l border-surface-3 ml-4 flex flex-col gap-10">
          {experiences.map((exp) => (
            <ExperienceCard key={`${exp.type}-${exp.title}`} {...exp} />
          ))}
        </div>
      </Layout>
    </section>
  );
}
