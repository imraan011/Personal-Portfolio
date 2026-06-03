/**
 * @hook useTypewriter
 * @description Cycles through an array of strings with a typewriter effect.
 * @param {string[]} words - Words/phrases to cycle through
 * @param {number} typeSpeed - Ms per character typed (default: 80)
 * @param {number} deleteSpeed - Ms per character deleted (default: 50)
 * @param {number} pauseMs - Ms to pause before deleting (default: 1800)
 * @returns {string} displayText - The current text to display
 */
import { useState, useEffect } from 'react';

export function useTypewriter(words, typeSpeed = 80, deleteSpeed = 50, pauseMs = 1800) {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const currentWord = words[wordIndex % words.length];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
      }, deleteSpeed);

      if (displayText === '') {
        const nextTimer = setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((prev) => prev + 1);
        }, 0);
        return () => clearTimeout(nextTimer);
      }
    } else {
      timer = setTimeout(() => {
        setDisplayText((prev) => currentWord.slice(0, prev.length + 1));
      }, typeSpeed);

      if (displayText === currentWord) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseMs);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseMs]);

  return displayText;
}
