/**
 * @section Skills
 * @description Categorized skill pill badges with level dots and legends.
 * Data from src/data/skills.js — update there, reflects here automatically.
 */

import { skills, skillCategories } from '../data/skills';
import Layout from '../components/Layout';
import SkillCategory from '../components/SkillCategory';

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-surface-2/25 border-y border-surface-3/50">
      <Layout>
        {/* Header */}
        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
          Expertise
        </p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-text mb-12">
          Skills
        </h2>

        {/* Category sections */}
        <div className="flex flex-col gap-10">
          {skillCategories.map((category) => (
            <SkillCategory
              key={category}
              category={category}
              skills={skills.filter((s) => s.category === category)}
            />
          ))}
        </div>

        {/* Legend */}
        <div className="mt-10 flex flex-wrap items-center gap-5 text-xs text-text-muted border-t border-surface-3/50 pt-6">
          <span className="flex items-center gap-1.5 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block" />
            Proficient
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block" />
            Intermediate
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />
            Beginner
          </span>
        </div>
      </Layout>
    </section>
  );
}
