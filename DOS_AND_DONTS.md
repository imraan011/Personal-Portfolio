# DOS AND DON'TS — Portfolio Website Guide

Quick reference for maintaining and growing your portfolio the right way.
Updated to reflect current stack: React 18 + Vite + Tailwind CSS + Framer Motion.

---

## ✅ DOS — Things You SHOULD Do

### Content & Honesty
- **DO** only list skills you have genuinely used in a project or course
- **DO** use the dot levels honestly — 🟢 Proficient / 🟡 Intermediate / 🔴 Beginner
- **DO** set `live: null` on undeployed projects — shows "In Progress" badge honestly
- **DO** use `line-clamp-2` friendly descriptions (2 clear sentences max per project card)
- **DO** update About section stats (`STATS` constant) to match your real numbers
- **DO** use the global `.section-container` layout class (max-width `1400px`, padding `2.5rem`) to maintain site-wide vertical alignment and prevent empty margin gaps
- **DO** add project screenshots when available — they make cards look far better

### Code Quality (following .rules)
- **DO** keep all hardcoded data in `src/data/` — never inside JSX
- **DO** use `PascalCase` for component files, `camelCase` for hooks and utils
- **DO** keep components under ~80 lines — split if bigger
- **DO** add PropTypes to every component that receives props
- **DO** use Tailwind utility classes only — avoid writing new custom CSS
- **DO** use dynamic theme color classes (`bg-surface`, `bg-surface-2`, `text-text`, `text-text-muted`, `text-primary`, etc.) instead of hardcoding color shades like slate or indigo, enabling automatic compatibility with all 4 palettes and light/dark toggles
- **DO** use dynamic theme variables for glass elements (`var(--glass-bg)`, `var(--glass-border)`, `var(--glass-bg-hover)`) in CSS styles rather than hardcoded slate or white opacities to ensure clean contrast in Light Mode
- **DO** use Framer Motion `whileInView` + `viewport={{ once: true }}` for scroll animations
- **DO** commit with clear messages: `feat:`, `fix:`, `chore:`, `content:`
- **DO** run `npm run build` before every push — confirm 0 errors

### Adding New Content
- **DO** add a new project → edit only `src/data/projects.js`
- **DO** add a screenshot → save to `src/assets/projects/` + set `image:` field
- **DO** add a skill → edit only `src/data/skills.js`
- **DO** add experience/training → edit only `src/data/experience.js`
  - Use `type: 'work'` for jobs, `'education'` for degrees, `'training'` for courses/bootcamps
  - Each type gets a distinct timeline node color (indigo / purple / cyan)
  - Set `location: null` to hide it on the card
- **DO** update bio/stats → edit `src/data/personalInfo.js` for biography paragraphs, and the `STATS` constant at the top of `src/sections/About.jsx` for numerical stats.

### Performance
- **DO** convert images to `.webp` or compressed `.png` before adding (aim < 500KB)
- **DO** use `viewport={{ once: true }}` on all Framer Motion scroll animations
- **DO** test on mobile using Chrome DevTools (F12 → Device Toolbar)
- **DO** keep Lighthouse score above 90

### GitHub & Deployment
- **DO** keep repo private until all placeholder text is replaced
- **DO** use `.env` files for any API keys — never in source code
- **DO** connect GitHub → Vercel for auto-deploy on every push
- **DO** test the contact form on the live Vercel URL after deployment

---

## ❌ DON'TS — Things You Should NOT Do

### Content Mistakes
- **DON'T** lie about skill levels — interviewers will test you on proficient ones
- **DON'T** leave any `your-email@gmail.com`, `your-linkedin`, or `YOUR_SERVICE_ID` / `YOUR_TEMPLATE_ID` / `YOUR_PUBLIC_KEY` in the live site
- **DON'T** leave `Lorem Ipsum` or placeholder stats (3+, 2+) in production — update them
- **DON'T** mark a project as live if it's not actually deployed and working
- **DON'T** add tutorials/clones as original projects without clearly labeling them

### Code Mistakes
- **DON'T** put personal API keys (if any) or secret values directly in JSX files that get committed. (Note: EmailJS Public Key is fine to expose, but Service ID and Template ID in `src/components/ContactForm.jsx` should be updated before deployment)
- **DON'T** use inline styles (`style={{}}`) — use Tailwind classes
- **DON'T** use class-based React components — functional + hooks only (per .rules)
- **DON'T** push `node_modules/` or `dist/` — they're gitignored for good reason
- **DON'T** rename `src/data/` files — components import them by exact path
- **DON'T** add `console.log()` in production code
- **DON'T** add unnecessary npm packages — Framer Motion + Tailwind + lucide handles most needs
- **DON'T** wrap non-animated elements in `motion.*` — adds unnecessary bundle weight

### Framer Motion Specific
- **DON'T** animate too many things — it becomes overwhelming. Hero, Projects, Skills is enough
- **DON'T** use long `duration` values (> 0.8s) — animations should feel snappy, not slow
- **DON'T** use `whileInView` without `viewport={{ once: true }}` — it re-triggers on scroll-up

### GitHub / Deployment
- **DON'T** push broken code to `main` — always `npm run build` first
- **DON'T** commit `.env` or `MY_TODO.txt` to GitHub (already gitignored)
- **DON'T** make the repo public until all placeholder text is gone

### Design Mistakes
- **DON'T** add more than 3 accent colors in one section
- **DON'T** make the skill pills so long that they wrap awkwardly — keep skill names short
- **DON'T** put more than 6 skills per category — it gets visually noisy
- **DON'T** add auto-play audio or video
- **DON'T** use font size below 12px (accessibility)

---

## 🔐 What to Push vs What Stays Private

| Item | Push? | Why |
|------|-------|-----|
| `src/` (all source code) | ✅ YES | The actual portfolio |
| `public/resume.pdf` | ✅ YES | Download button needs it |
| `src/assets/photo.png` | ✅ YES | Profile photo used in Hero + About |
| `src/assets/projects/*.png` | ✅ YES | Project screenshots |
| `README.md`, `.rules` | ✅ YES | Documentation + coding standards |
| `package.json`, `vite.config.js` | ✅ YES | Config files |
| `.gitignore` | ✅ YES | Must be tracked |
| `node_modules/` | ❌ NO | Huge — auto-installed via `npm install` |
| `dist/` | ❌ NO | Auto-built by Vercel |
| `.env` / `.env.local` | ❌ NO | Secrets |
| `MY_TODO.txt` | ❌ NO | Personal private notes |

---

## 📦 The Right Update Workflow

### Add a project (30 seconds)
```
1. Open src/data/projects.js
2. Add new object to the array
3. (Optional) Save screenshot to src/assets/projects/
4. git add . && git commit -m "feat: add [project name]"
5. git push → Vercel auto-deploys
```

### Update a skill level
```
1. Open src/data/skills.js
2. Change the level field
3. git add . && git commit -m "chore: update skill levels"
4. git push
```

### Update About stats / Bios
```
1. Open src/data/personalInfo.js to change biography text or Hero description
2. Open src/sections/About.jsx to change the STATS constant (numbers/labels)
3. git add . && git commit -m "content: update stats and bio"
4. git push
```

---

*Last updated: June 2026 — Portfolio v1.3 (Global canvas background, Light/Dark theme switch, 4 accent palettes, clean variables, Hero refactored under 80-line limit)*
