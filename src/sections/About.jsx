/**
 * @section About
 * @description Bio, real photo, stat cards. Skills tags removed — see Skills section.
 * All stat data defined at top — edit here only.
 */
import profilePhoto from '../assets/photo.png';
import Layout from '../components/Layout';
import { personalInfo } from '../data/personalInfo';

const STATS = [
  { value: '3+',  label: 'Projects Built' },
  { value: '2+',  label: 'Years Learning' },
  { value: '100+', label: 'DSA Problems Solved' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-surface-2/25 border-y border-surface-3/50">
      <Layout>

        {/* Section label */}
        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">About Me</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-text mb-12">
          Who I Am
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* ── LEFT: Bio + Stats (7 cols) ── */}
          <div className="lg:col-span-7 flex flex-col gap-6">
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
          </div>

          {/* ── RIGHT: Real Photo (5 cols) ── */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-primary/10 blur-2xl -z-10 rounded-2xl" />

              {/* Photo */}
              <img
                src={profilePhoto}
                alt="Ishtikhar"
                className="w-72 h-72 object-cover rounded-2xl border border-primary/30 shadow-xl shadow-primary/10 rotate-2"
              />
            </div>
          </div>

        </div>
      </Layout>
    </section>
  );
}
