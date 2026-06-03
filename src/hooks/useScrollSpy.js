/**
 * @hook useScrollSpy
 * @description Tracks which section is currently visible in the viewport.
 * Returns the id of the active section for Navbar highlighting.
 * @param {string[]} sectionIds - Array of section element IDs to watch
 * @param {number} offset - Scroll offset in px (default: 80 for navbar height)
 * @returns {string} activeId - ID of the currently active section
 */
import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds, offset = 80) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset + 1;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveId(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
