import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Hook to create a modern text scramble/decryption animation on hover.
 * @param {string} originalText The target string to scramble.
 * @returns {object} { displayText, triggerScramble }
 */
export function useTextScramble(originalText) {
  const [displayText, setDisplayText] = useState(originalText);
  const intervalRef = useRef(null);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*';

  const triggerScramble = useCallback(() => {
    let iteration = 0;
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(
        originalText
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) return originalText[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iteration >= originalText.length) {
        clearInterval(intervalRef.current);
      }
      iteration += 1 / 3; // Decryption speed increment per step
    }, 25);
  }, [originalText]);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return { displayText, triggerScramble };
}
