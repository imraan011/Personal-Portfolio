/**
 * @section Contact
 * @description Contact page layout, wrapping ContactInfo and ContactForm subcomponents with premium animations.
 */
import { motion } from 'framer-motion';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';
import Layout from '../components/Layout';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-surface-2/15 border-t border-surface-3/30 overflow-hidden">
      {/* Decorative ambient orbs */}
      <div 
        className="w-[300px] h-[300px] rounded-full bg-primary/10 blur-[100px] absolute -top-12 -left-12 pointer-events-none orb-float-1" 
        aria-hidden="true" 
      />
      <div 
        className="w-[350px] h-[350px] rounded-full bg-accent/8 blur-[120px] absolute -bottom-16 -right-16 pointer-events-none orb-float-2" 
        aria-hidden="true" 
      />

      <Layout>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="relative z-10"
        >
          {/* Header */}
          <motion.p 
            variants={childVariants} 
            className="text-primary font-semibold text-sm tracking-widest uppercase mb-3"
          >
            Get In Touch
          </motion.p>
          <motion.h2 
            variants={childVariants} 
            className="font-display font-extrabold text-3xl sm:text-4xl text-text mb-12 tracking-tight"
          >
            Contact
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <ContactInfo />
            <ContactForm />
          </div>
        </motion.div>
      </Layout>
    </section>
  );
}
