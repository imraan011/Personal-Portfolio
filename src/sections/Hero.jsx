import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useTextScramble } from '../hooks/useTextScramble';

function ScrambledName({ text, trigger, delay = 0 }) {
  const [displayText, setDisplayText] = useState(text);
  const [resolvedIndices, setResolvedIndices] = useState([...Array(text.length).keys()]);
  const intervalRef = useRef(null);
  const chars = '⌖☉☒☷⚿⛶▲▼◆◈⎔✦✶';

  const triggerScramble = () => {
    let iteration = 0;
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const currentResolved = [];
      const newText = text
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          if (index < iteration) {
            currentResolved.push(index);
            return text[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');

      setDisplayText(newText);
      setResolvedIndices(currentResolved);

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
        setResolvedIndices([...Array(text.length).keys()]);
      }
      iteration += 1 / 3;
    }, 25);
  };

  useEffect(() => {
    if (trigger) {
      const t = setTimeout(() => {
        triggerScramble();
      }, delay);
      return () => {
        clearTimeout(t);
        clearInterval(intervalRef.current);
      };
    }
  }, [trigger, delay]);

  return (
    <span onMouseEnter={triggerScramble} className="cursor-default inline-block select-none">
      {displayText.split('').map((char, index) => {
        const isResolved = resolvedIndices.includes(index) || char === ' ';
        return (
          <span 
            key={index} 
            className={isResolved ? 'text-text transition-colors duration-300' : 'text-primary font-mono select-none'}
          >
            {char}
          </span>
        );
      })}
    </span>
  );
}

ScrambledName.propTypes = {
  text: PropTypes.string.isRequired,
  trigger: PropTypes.bool.isRequired,
  delay: PropTypes.number,
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Hero() {
  const [introComplete, setIntroComplete] = useState(() => {
    // Default to true if the intro overlay isn't even active
    return !window.portfolioIntroActive;
  });

  // Text Scramble hooks
  const resumeText = useTextScramble('Download Resume');
  const statusText = useTextScramble('AVAILABLE FOR WORK');

  useEffect(() => {
    if (!window.portfolioIntroActive) {
      setIntroComplete(true);
      return;
    }

    const handleComplete = () => setIntroComplete(true);
    window.addEventListener('portfolio-intro-complete', handleComplete);
    return () => window.removeEventListener('portfolio-intro-complete', handleComplete);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-between py-24 sm:py-32 overflow-hidden bg-transparent"
      style={{
        background: 'radial-gradient(80% 80% at 50% 50%, #161616 0%, #0a0a0a 100%)'
      }}
    >
      {/* Top separator line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-surface-3/50 to-transparent" />

      {/* Main Container */}
      <motion.div 
        className="w-full section-container flex-grow flex flex-col justify-between relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={introComplete ? "show" : "hidden"}
      >
        {/* Top Info Row */}
        <motion.div 
          variants={itemVariants}
          className="flex items-center justify-between w-full border-b border-surface-3/30 pb-6 mb-8"
        >
          <a 
            href="/resume.pdf" 
            download
            onMouseEnter={resumeText.triggerScramble}
            className="border border-surface-3 hover:border-primary/50 text-text font-mono text-[10px] sm:text-xs px-6 py-2.5 rounded-[4px] uppercase tracking-wider transition-colors duration-300 min-w-[150px] text-center"
          >
            {resumeText.displayText}
          </a>
          
          <div 
            onMouseEnter={statusText.triggerScramble}
            className="flex items-center gap-6 font-mono text-[10px] sm:text-xs text-text-muted uppercase tracking-wider cursor-default"
          >
            <span className="hidden sm:inline">DELHI NCR, IN</span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span>{statusText.displayText}</span>
            </div>
          </div>
        </motion.div>

        {/* Center Visuals Area */}
        <div className="relative flex-grow flex items-center justify-center min-h-[300px] sm:min-h-[350px]">
          
          {/* Big Typography Backdrop */}
          <motion.h1 
            variants={itemVariants}
            className="font-sans font-black text-[12vw] sm:text-[11vw] uppercase tracking-tighter text-center leading-[0.82]"
          >
            <ScrambledName text="Ishtikhar" trigger={introComplete} delay={100} /><br />
            <ScrambledName text="Khan" trigger={introComplete} delay={350} />
          </motion.h1>
        </div>

        {/* Bottom Editorial Copy Row */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end border-t border-surface-3/30 pt-8 mt-8"
        >
          <div className="max-w-md text-xs sm:text-sm text-text-muted font-sans leading-relaxed">
            I currently work as a <span className="text-text font-medium">Full Stack Engineer</span>. Focused on building highly interactive web applications, reliable APIs, and performant user interfaces.
          </div>
          
          <div className="max-w-md text-xs sm:text-sm text-text-muted font-sans leading-relaxed md:text-right">
            Available for remote freelance work and full-time software engineering roles. Working from <span className="text-text font-medium">Delhi NCR, India</span>.
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
