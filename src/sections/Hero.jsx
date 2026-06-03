/**
 * @section Hero
 * @description Award-winning dark theme Hero section with particle canvas and tech tags.
 */
import { useTypewriter } from '../hooks/useTypewriter';
import { personalInfo } from '../data/personalInfo';
import { motion } from 'framer-motion';
import FloatingTechTags from '../components/FloatingTechTags';

const ROLES = [
  'Full Stack Developer',
  'MERN Stack Developer',
  'React Native Developer',
  'Node.js Engineer',
  'UI/UX Enthusiast',
  'Problem Solver'
];
const SOCIAL_LINKS = [
  { label: 'GitHub',   href: 'https://github.com/imraan011' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ishtikharkhan/' },
  { label: 'Email',    href: 'mailto:ishtikharkhan.dev@gmail.com' },
];

const containerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const childVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function Hero() {
  const role = useTypewriter(ROLES, 50, 30, 800);

  return (
    <section id="home" className="relative min-h-[85vh] flex items-center overflow-hidden py-20 bg-transparent transition-colors duration-300">
      {/* Ambient decorative orbs */}
      <div className="w-[400px] h-[400px] rounded-full bg-primary/15 blur-3xl absolute top-10 right-10 pointer-events-none orb-float-1" aria-hidden="true" />
      <div className="w-[300px] h-[300px] rounded-full bg-accent/10 blur-3xl absolute bottom-10 left-10 pointer-events-none orb-float-2" aria-hidden="true" />

      <div className="relative z-10 w-full section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <motion.div className="flex flex-col items-start max-w-xl" variants={containerVariants} initial="hidden" animate="show">
              <motion.div variants={childVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-semibold tracking-wider mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Open to Opportunities
              </motion.div>
              <motion.h1 variants={childVariants} className="font-display font-extrabold text-5xl sm:text-6xl text-text leading-tight tracking-tight">
                Hi, I&apos;m <span className="shimmer-text">Ishtikhar</span>
              </motion.h1>
              <motion.p variants={childVariants} className="mt-4 font-display text-lg sm:text-xl text-text-muted font-medium min-h-[2rem]">
                {role}
                <span className="inline-block w-[2px] h-5 bg-primary ml-1 animate-pulse align-middle" />
              </motion.p>
              <motion.p variants={childVariants} className="mt-6 text-text-muted text-base leading-relaxed max-w-lg font-light">
                {personalInfo.hero.description}
              </motion.p>
              <motion.div variants={childVariants} className="mt-10 flex flex-wrap gap-4">
                <a href="#projects" className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent hover:from-primary-light hover:to-accent-light text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-primary/10 hover:shadow-primary/25 hover:shadow-primary/30 hover:-translate-y-0.5">
                  View Projects
                </a>
                <a href="/resume.pdf" download className="px-6 py-3 rounded-xl border border-text-muted/30 hover:border-primary text-text hover:text-primary font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5">
                  Download Resume
                </a>
              </motion.div>
              <motion.div variants={childVariants} className="mt-10 flex items-center gap-3">
                {SOCIAL_LINKS.map(({ label, href }) => (
                  <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-xs font-semibold text-text-muted hover:text-primary border border-text-muted/20 hover:border-primary/30 px-4 py-2 rounded-full transition-all duration-200 bg-surface-2/40">
                    {label}
                  </a>
                ))}
              </motion.div>
            </motion.div>
          </div>
          <div className="hidden lg:block lg:col-span-5 relative h-96" />
        </div>
      </div>

      <FloatingTechTags />

      <div className="absolute bottom-8 left-8 sm:left-12 flex items-center gap-3 z-20 pointer-events-none">
        <div className="w-[2px] h-8 bg-text-muted/20 rounded-full overflow-hidden relative">
          <div className="absolute w-full h-3 bg-primary rounded-full scroll-dot-anim" />
        </div>
        <span className="text-xs uppercase tracking-widest text-text-muted/40 font-semibold">SCROLL</span>
      </div>
    </section>
  );
}

