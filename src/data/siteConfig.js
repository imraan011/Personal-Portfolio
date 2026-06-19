/**
 * @file siteConfig.js
 * @description Central configuration for the entire portfolio.
 *
 * ─────────────────────────────────────────────────────────────────
 *  🚧  UNDER DEVELOPMENT FLAGS
 *  Set any section to `true` to show the ribbon + blur overlay.
 *  Set to `false` to make that section fully live and interactive.
 *
 *  You never need to touch the section JSX files — just edit here.
 * ─────────────────────────────────────────────────────────────────
 *
 *  HOW TO LOCK ANY SECTION (e.g. Skills):
 *
 *  1. In this file → set  skills: true
 *
 *  2. In the section file (e.g. Skills.jsx) add at the top:
 *       import { siteConfig } from '../data/siteConfig';
 *       import UnderDevelopmentOverlay from '../components/UnderDevelopmentOverlay';
 *
 *  3. Inside return(), wrap the section CONTENT (not the <section> tag):
 *       <UnderDevelopmentOverlay active={siteConfig.underDevelopment.skills}>
 *         ... your content here ...
 *       </UnderDevelopmentOverlay>
 *
 *  To go live: set the flag back to false — overlay disappears instantly.
 * ─────────────────────────────────────────────────────────────────
 */

export const siteConfig = {
  underDevelopment: {
    hero:           false,
    about:          false,
    projects:       true,   // ← flip to false when projects are ready
    skills:         false,
    experience:     false,
    certifications: false,
    contact:        false,
  },
};
