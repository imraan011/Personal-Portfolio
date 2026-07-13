/**
 * @file projects.js
 * @description All portfolio project data. To add a new project, add an object here.
 * `live: null` = no live demo. `image: null` = shows initial-letter placeholder.
 * To add a screenshot: image: '/src/assets/projects/name.png'
 */

export const projects = [
  {
    id:1,
    title: 'AI-POWERED RESUME ANALYSIS',
    description:
      'This is AI-POWERED RESUME ANALYSIS - a web application that uses artificial intelligence to analyze and interpret large datasets. It provides users with insights and recommendations based on their JD.',
    tech: ['Next.js', 'React', 'Typescript', 'Tailwind CSS' , 'GSAP' , 'Lenis Scroll' ],
    category: 'AI & Machine Learning',
    github: 'https://github.com/imraan011/AI-Resume-Reviewer',
    live: "https://ai-resume-reviewer-kohl.vercel.app/",
    image: "/src/assets/AI-Resume.png",
  },
  {
    id:2,
    title: 'Portfolio Website',
    description:
      'This portfolio — built with React 18, Vite, and Tailwind CSS. Fully responsive, data-driven architecture.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    category: 'Frontend',
    github: 'https://github.com/imraan011/portfolio',
    live: null,
    image: null,
  },
  {
    id: 3,
    title: 'Task Manager App',
    description:
      'A full-stack task management app with real-time updates, drag-and-drop, and user authentication.',
    tech: ['React', 'Node.js', 'MongoDB'],
    category: 'Full Stack',
    github: 'https://github.com/imraan011',
    live: null,
    image: null,
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description:
      'Real-time weather dashboard integrating OpenWeather API with dynamic charts and location search.',
    tech: ['React', 'REST API', 'Chart.js'],
    category: 'Frontend',
    github: 'https://github.com/imraan011',
    live: null,
    image: null,
  },
];

/** All filter categories derived from projects data */
export const projectCategories = ['All', ...new Set(projects.map((p) => p.category))];
