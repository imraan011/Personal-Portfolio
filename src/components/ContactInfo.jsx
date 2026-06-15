/**
 * @component ContactInfo
 * @description Contact information panel displaying email, location, and social links in premium glass cards.
 */
import { useState } from 'react';
import { Mail, MapPin, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/personalInfo';
import InfoCard from './InfoCard';
import SocialLinks from './SocialLinks';

export default function ContactInfo() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* Silent */ }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <motion.div 
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.1 } }
      }}
      className="lg:col-span-2 flex flex-col gap-8"
    >
      <motion.p variants={itemVariants} className="text-text-muted leading-relaxed text-base font-light">
        {personalInfo.contact.description}
      </motion.p>

      <motion.div variants={itemVariants} className="flex flex-col gap-4">
        <InfoCard
          icon={Mail}
          label="Email Me"
          value={personalInfo.contact.email}
          href={`mailto:${personalInfo.contact.email}`}
          actionButton={
            <button
              onClick={handleCopy}
              className={`relative z-10 p-2.5 rounded-xl border transition-all duration-200 flex items-center justify-center shrink-0 cursor-pointer ${copied ? 'bg-green-500/10 border-green-500/30 text-green-400' : 'bg-surface-3/30 border-surface-3 text-text-muted hover:border-primary/40 hover:text-primary hover:bg-primary/5'
                }`}
              title="Copy email to clipboard"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
          }
        />
        <InfoCard
          icon={MapPin}
          label="Location"
          value={personalInfo.contact.location}
          badge={
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/5 text-[10px] font-bold text-green-400 relative z-10 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span>Open to Work</span>
            </div>
          }
        />
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-col gap-3 mt-2">
        <h4 className="text-xs font-bold uppercase tracking-widest text-text-muted/80">Connect</h4>
        <SocialLinks />
      </motion.div>
    </motion.div>
  );
}
