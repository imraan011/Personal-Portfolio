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
 * 
 * 
 *exapmle show this section under development
import UnderDevelopmentOverlay from '../components/UnderDevelopmentOverlay';
import { siteConfig } from '../data/siteConfig';

<UnderDevelopmentOverlay active={siteConfig.underDevelopment.skills}>
  {  your section content  }
 </UnderDevelopmentOverlay>

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
