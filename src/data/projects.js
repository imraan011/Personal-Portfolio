/**
 * @file projects.js
 * @description All portfolio project data. To add a new project, add an object here.
 * `live: null` = no live demo. `image: null` = shows initial-letter placeholder.
 * To add a screenshot: image: '/src/assets/projects/name.png'
 */

export const projects = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
