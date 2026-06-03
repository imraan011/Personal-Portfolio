/**
 * @hook useTypewriter
 * @description Cycles through an array of strings with a typewriter effect.
 * @param {string[]} words - Words/phrases to cycle through
 * @param {number} typeSpeed - Ms per character typed (default: 80)
 * @param {number} deleteSpeed - Ms per character deleted (default: 50)
 * @param {number} pauseMs - Ms to pause before deleting (default: 1800)
 * @returns {string} displayText - The current text to display
 */
import { useState, useEffect, useRef } from 'react';

export function useTypewriter(words, typeSpeed = 80, deleteSpeed = 50, pauseMs = 1800) {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    const tick = () => {
      if (!isDeleting) {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
        if (displayText.length + 1 === currentWord.length) {
          timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseMs);
          return;
        }
      } else {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
        if (displayText.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((i) => i + 1);
        }
      }
    };

    timeoutRef.current = setTimeout(tick, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timeoutRef.current);
  }, [displayText, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseMs]);

  return displayText;
}
