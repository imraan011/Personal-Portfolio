# Specification Summary — Dark Cinematic Redesign

This document summarizes the changes made to the personal portfolio website to transition it to a dark, cinematic, premium visual language.

## 1. Goal & Context
The portfolio has been redesigned to align with clean, professional, and dark visual aesthetics similar to Vercel, Linear, and Stripe's dark sites. Flashy interactive elements (particle background, 3D tilts, gradient text, theme dropdown picker) have been removed, shifting the focus to editorial layout spacing, high-contrast serif typography, and desaturated amber details.

---

## 2. Changes Summary

### Typography & Fonts
*   **Added**: Playfair Display (Serif display font for headings) and JetBrains Mono (Monospace font for numbers, dates, tags) in `index.html`.
*   **Modified**: Core CSS configuration in `src/index.css` to map display/mono font tokens.

### Theme & Colors
*   **Modified**: Custom properties in `src/index.css`:
    *   `--surface`: `#0a0a0a` (primary dark background)
    *   `--surface-2`: `#121212` (cards and sections background)
    *   `--surface-3`: `#2a2a2a` (hairline borders)
    *   `--text`: `#ededed` (off-white for headings)
    *   `--text-muted`: `#a0a0a0` (warm gray for paragraphs)
    *   `--primary`: `#d4a373` (muted amber accent)
*   **Removed**: Cyber Orange, Forest Mint, Rose Gold palettes, and the Light Mode theme.

### Component Code Cleanup
*   **Removed/Deleted**:
    *   `CanvasBackground.jsx` (obsolete background canvas animation)
    *   `ThemeSwitcher.jsx` (obsolete switcher buttons)
    *   `ContactForm.jsx` & `ContactInfo.jsx` (replaced by typographical contact links)
    *   `InfoCard.jsx`, `InputField.jsx`, `ProjectFilters.jsx`, `FloatingTechTags.jsx`, `SocialLinks.jsx`, `UnderDevelopmentOverlay.jsx`
    *   `Skills.jsx` & `SkillCategory.jsx` (removed Skills section entirely from the page flow)
    *   `ThreeDimensionalCube.jsx` (removed to adopt the poster-style layout)
    *   Folders: `src/components/icons/`, `src/components/ui/`, `src/lib/`
    *   Data: `src/data/skills.js`, `src/data/siteConfig.js`
    *   Styles: `src/App.css`
    *   Hooks: `useContactForm.js` (form validation), `useTypewriter.js` (typing animation), `use3DTilt.js` (tilt triggers)
*   **Cleaned Dependencies**: Uninstalled `@emailjs/browser` from `package.json` as the email form logic is no longer loaded.

### Layout & Page Sections
*   **Hero (`Hero.jsx`)**:
    *   Updated to a poster-style layout. Features a giant centered backdrop name text ("Ishtikhar Khan").
    *   Replaced static text backdrop with custom `<ScrambledName />` components, enabling sequential loaded scrambles (Ishtikhar first, then Khan) and hover scramble animations.
    *   Unresolved characters are rendered as glowing amber (`text-primary`) geometric glyphs (`⌖☉☒☷⚿⛶▲▼◆◈⎔✦✶`), resolving character-by-character back to standard off-white.
    *   Integrated hover text scramble animations on the "Download Resume" CTA and the status bar.
*   **Navbar (`Navbar.jsx`)**: Integrated hover text scramble animations on the brand logo, navigation links, and the "Resume" action button.
*   **Background (`ScrollBackgroundVisuals.jsx`)**: Added scroll-linked geometric blueprint shapes (rotating rings and grids) absolute positioned in the background, creating a subtle 3D parallax scroll effect.
*   **About (`About.jsx` & `AboutPortrait.jsx`)**: Modified stats to use monospace fonts, prose to use generous line-height (`leading-[1.6]`), and profile portrait to use a grayscale, high-contrast image with rounded square corners (`rounded-[24px]` and `grayscale contrast-[1.05]`).
*   **Projects (`Projects.jsx` & `ProjectCard.jsx`)**: Separated projects into Featured Projects (grid format) and Archive Projects (monospace-accented text list format). Modified cards to have 1px borders, no shadows/glows, and snappy hover scales (1.02, 0.2s duration).
*   **Experience (`Experience.jsx` & `ExperienceCard.jsx`)**: Simplified timeline path to a 1px solid primary color line (no gradients or glows). Replaced nodes with minimal primary dots, adding `z-20` layer depth to prevent scroll line overlap.
*   **Certifications (`Certifications.jsx` & `CertificationCard.jsx`)**: Removed 3D tilt and styled grid elements with flat hairline borders.
*   **Contact (`Contact.jsx`)**: Updated to render email and socials as large typographical links with hover underlines.
*   **Footer (`Footer.jsx`)**: Replaced back-to-top button with a simple typographical link and removed obsolete theme switches.

---

## 3. Function & Component Explanation

### `ScrambledName` (inside `Hero.jsx`)
*   Manages text state by mapping unresolved letters to randomized geometric icon glyphs. Highlighted unresolved glyphs using `text-primary` colors. Fully resolved indexes fallback to `text-text` transitions.

### `useTextScramble.js`
*   State-driven animation helper. Splits original strings, maps them to randomized alphanumeric and coordinate symbols, and decrypts characters linearly step-by-step using an interval timer (~25ms increments).

### `ScrollBackgroundVisuals.jsx`
*   Renders fixed, low-opacity (20%) mechanical blueprint elements.
*   Uses `useScroll` to transform `rotate` and `y` offsets of elements relative to viewport scroll progress, producing a subtle parallax coordinate motion.

### `Projects.jsx`
*   Filters the list of projects from `src/data/projects.js` based on the `featured` boolean property.
*   Maps featured items to `<ProjectCard />` components.
*   Maps non-featured archive items to a table-style vertical list featuring serial numbering, title description, monospace technology tag pills, and source/live links.

### `ProjectCard.jsx`
*   Renders a flat container utilizing the `.premium-card` utility class.
*   Triggers snappy hover animations via Framer Motion: `whileHover={{ scale: 1.02 }}` and `transition={{ duration: 0.2, ease: 'easeOut' }}`.

### `ExperienceCard.jsx`
*   Renders timeline logs with serial dots aligned to a vertical timeline trace. Uses category colors/labels inside a flat monospace label structure.
