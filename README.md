# Developer Portfolio

A fast, modern, fully responsive personal portfolio built with **React 18**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## ✨ Features

- 🎯 **Typewriter animation** in Hero — cycles through your roles
- 🌌 **Global Interactive Particle Canvas** background running fixed behind the entire website with floating glassmorphic tech tags in Hero
- 🖼️ **Real photo** in About section (rotated card with subtle glow and border)
- 📱 **Fully responsive** — mobile, tablet, desktop
- 📐 **Wide-screen optimized** — content layout widened to `1400px` to minimize empty side margins on desktop displays
- 🔍 **Filterable Projects** with screenshot areas, hover lift effects, and stagger animation
- 💊 **Skill pills** — compact badge design with colored proficiency dots (green/yellow/red) and stagger reveal
- 📊 **Stat cards** in About section — Projects / Years / DSA problems
- ⏱️ **Experience timeline** — vertical, icon-coded nodes for work vs education
- 📬 **Contact form** via EmailJS (free, client-side, no backend)
- ✨ **Framer Motion** — stagger animations on Hero, Projects, and Skills sections
- 🔀 **Sticky Navbar** with active section scroll-spy
- 🌓 **Dynamic Theme Selector** — toggle between Light/Dark mode and select from 4 premium color palettes (Midnight Indigo, Forest Mint, Cyber Orange, Rose Gold) that dynamically sync site themes, canvas animations, and glassmorphic card states
- 🌙 **Dark base theme** with glassmorphism + ambient glow blobs by default

---

## 🛠️ Tech Stack

| Layer       | Technology                         |
|-------------|------------------------------------|
| Frontend    | React 18 + Vite                    |
| Styling     | Tailwind CSS v4                    |
| Animations  | Framer Motion                      |
| Icons       | lucide-react + inline SVG          |
| Forms       | EmailJS                            |
| Deploy      | Vercel                             |
| Fonts       | Google Fonts (Inter, Outfit)       |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18 or higher
- npm v9 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/imraan011/portfolio.git

# 2. Navigate into the project
cd portfolio/my-portfolio

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Folder Structure

```
my-portfolio/
├── public/
│   └── resume.pdf              ← Your resume (download button links here)
├── src/
│   ├── assets/
│   │   ├── photo.png           ← Your profile photo (About section only)
│   │   └── projects/           ← Project screenshots (optional)
│   ├── components/
│   │   ├── Navbar.jsx          ← Sticky nav with scroll-spy
│   │   ├── Layout.jsx          ← Max-width container wrapper
│   │   ├── Footer.jsx          ← Footer with scroll-to-top and social links
│   │   ├── ProjectCard.jsx     ← Project card container
│   │   ├── ProjectScreenshot.jsx ← Renders image preview or letter fallback
│   │   ├── ProjectLinks.jsx    ← Source code and live demo links
│   │   ├── ProjectFilters.jsx  ← Category tabs list for filtering
│   │   ├── SkillCategory.jsx   ← Groups skill pills with stagger animate
│   │   ├── ExperienceCard.jsx  ← Single timeline node (education/work)
│   │   ├── ContactForm.jsx     ← Form input & state logic for EmailJS
│   │   ├── ContactInfo.jsx     ← Social links and address info panel
│   │   ├── CanvasBackground.jsx ← Canvas particle network animation
│   │   ├── FloatingTechTags.jsx ← Floating badges for Hero section
│   │   └── icons/
│   │       └── GitHubIcon.jsx  ← Inline SVG icon for GitHub
│   ├── sections/
│   │   ├── Hero.jsx            ← Award-winning Hero section with typist roles and decorative orbs
│   │   ├── About.jsx           ← Bio details + stat cards
│   │   ├── Projects.jsx        ← Filterable projects grid section
│   │   ├── Skills.jsx          ← Category-organized skill pills section
│   │   ├── Experience.jsx      ← Vertical experience timeline section
│   │   └── Contact.jsx         ← Layout containing Info and Form components
│   ├── hooks/
│   │   ├── useScrollSpy.js     ← Active section detection
│   │   └── useTypewriter.js    ← Typewriter cycling animation
│   ├── data/
│   │   ├── personalInfo.js     ← ← ← All biography, hero, and contact text descriptions
│   │   ├── projects.js         ← ← ← Add new projects HERE only
│   │   ├── skills.js           ← ← ← Add new skills HERE only
│   │   └── experience.js       ← ← ← Add experience HERE only
│   ├── App.jsx                 ← Assembles all sections & manages global background canvas + grid overlay
│   ├── main.jsx                ← React entry point
│   └── index.css               ← Tailwind theme + custom keyframes + CSS classes
├── index.html                  ← SEO meta + Google Fonts
├── vite.config.js              ← Vite + Tailwind plugin
├── .rules                      ← Antigravity coding standards
└── .gitignore
```

---

## ✏️ How to Customise

### Add a New Project
Edit [`src/data/projects.js`](./src/data/projects.js):
```js
{
  id: 4,
  title: 'My New Project',
  description: 'What it does in 1–2 sentences.',
  tech: ['React', 'Node.js'],
  category: 'Full Stack',     // 'Frontend' | 'Backend' | 'Full Stack'
  github: 'https://github.com/imraan011/project',
  live: 'https://myproject.com',   // null → "In Progress" badge
  image: null,                      // '/src/assets/projects/name.png' for screenshot
}
```

### Add a Project Screenshot
1. Save image to `src/assets/projects/project-name.png`
2. Set `image: '/src/assets/projects/project-name.png'` in `projects.js`
3. Done — no component changes.

### Update Skills
Edit [`src/data/skills.js`](./src/data/skills.js):
```js
{ name: 'TypeScript', category: 'Frontend', level: 'Intermediate', icon: '🔷' }
```
Levels map to pill dot colors: `Proficient` = 🟢 | `Intermediate` = 🟡 | `Beginner` = 🔴

### Update About Stats
Edit the `STATS` constant in [`src/sections/About.jsx`](./src/sections/About.jsx):
```js
const STATS = [
  { value: '5+', label: 'Projects Built' },
  ...
];
```

### Update Experience / Education
Edit [`src/data/experience.js`](./src/data/experience.js). Supports 3 entry types, each with its own timeline node color:
- `type: 'education'` → indigo node + GraduationCap icon
- `type: 'training'` → purple node + Code icon  
- `type: 'work'` → cyan node + Briefcase icon

```js
{
  type: 'work',
  title: 'Junior Developer',
  organization: 'Company Name',
  location: 'City, State',   // or null to hide
  period: '2025 — Present',
  description: 'What you built or did.',
  icon: 'code',
}
```

### Setup Contact Form
1. Sign up at [emailjs.com](https://emailjs.com).
2. Create an **Email Service** (e.g. Gmail) and get your `SERVICE_ID`.
3. Create an **Email Template** with fields `{{name}}`, `{{email}}`, and `{{message}}`, then get your `TEMPLATE_ID`.
4. Go to **Account** → API Keys and get your `Public Key` (`PUBLIC_KEY`).
5. Replace the three constants at the top of [`src/components/ContactForm.jsx`](./src/components/ContactForm.jsx) with your credentials.

---

## 📦 Scripts

| Command           | Description                        |
|-------------------|------------------------------------|
| `npm run dev`     | Start local dev server             |
| `npm run build`   | Build for production               |
| `npm run preview` | Preview production build locally   |
| `npm run lint`    | Run ESLint checks                  |

---

## 🌐 Deployment (Vercel)

1. Push repo to GitHub (`imraan011/portfolio`)
2. [vercel.com](https://vercel.com) → **New Project** → Import repo
3. Set **Root Directory** to `my-portfolio`
4. Click **Deploy**

Every `git push main` triggers automatic redeploy.

---

## 📄 License

Open source — fork it and use it as your portfolio base. A ⭐ is appreciated!

---

## 👤 Author

**Ishtikhar**
- GitHub: [@imraan011](https://github.com/imraan011)
- LinkedIn: [your-linkedin](https://linkedin.com/in/your-linkedin)
