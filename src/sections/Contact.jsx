import { motion } from 'framer-motion';
import { personalInfo } from '../data/personalInfo';
import Layout from '../components/Layout';

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Contact() {
  const email = personalInfo.contact.email;
  const github = personalInfo.contact.socials.github;
  const linkedin = personalInfo.contact.socials.linkedin;

  return (
    <section id="contact" className="py-32 bg-[#121212]">
      <Layout>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="max-w-3xl"
        >
          {/* Header */}
          <motion.p
            variants={childVariants}
            className="text-primary font-mono text-xs uppercase tracking-[0.2em] mb-4"
          >
            [ Connect ]
          </motion.p>
          <motion.h2
            variants={childVariants}
            className="font-display font-medium text-4xl sm:text-5xl text-text mb-8 tracking-tight"
          >
            Get in touch
          </motion.h2>

          <motion.p 
            variants={childVariants} 
            className="text-text-muted text-base leading-[1.6] font-light max-w-xl mb-12"
          >
            {personalInfo.contact.description}
          </motion.p>

          <motion.div 
            variants={childVariants}
            className="flex flex-col sm:flex-row sm:items-center gap-x-12 gap-y-6"
          >
            <a
              href={`mailto:${email}`}
              className="text-xl sm:text-2xl font-display font-medium text-text hover:text-primary transition-colors hover-underline"
            >
              {email}
            </a>
            
            <div className="flex items-center gap-6">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono tracking-widest text-text-muted hover:text-text hover-underline transition-colors"
              >
                GitHub
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono tracking-widest text-text-muted hover:text-text hover-underline transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </motion.div>
      </Layout>
    </section>
  );
}
