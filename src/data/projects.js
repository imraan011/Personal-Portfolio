/**
 * @file projects.js
 * @description All portfolio project data. To add a new project, add an object here.
 * `live: null` = no live demo. `image: null` = shows initial-letter placeholder.
 * To add a screenshot: image: '/src/assets/projects/name.png'
 */

import aiResumeImg from '../assets/AI-Resume.png';
import Portfolio from '../assets/ScreenRecording2026-07-14003759-ezgif.com-video-to-gif-converter.gif';
import SketchFlow from '../assets/ScreenRecording2026-07-14014852-ezgif.com-video-to-gif-converter.gif';


export const projects = [
  {
    id: 1,
    title: 'AI-POWERED RESUME ANALYSIS',
    description:
      'This is AI-POWERED RESUME ANALYSIS - a web application that uses artificial intelligence to analyze and interpret large datasets. It provides users with insights and recommendations based on their JD.',
    tech: ['Next.js', 'React', 'Typescript', 'Tailwind CSS' , 'GSAP' , 'Lenis Scroll' ],
    category: 'AI & Machine Learning',
    github: 'https://github.com/imraan011/AI-Resume-Reviewer',
    live: "https://ai-resume-reviewer-kohl.vercel.app/",
    image: aiResumeImg,
    featured: true,
  },
  {
    id: 2,
    title: "Sketchflow",
    description:
      'Draw shapes, sketch freehand, select and move elements, zoom into an infinite canvas, save your work locally, and export it as a portable JSON file — all without installing anything',
    tech: ["vanilla JS", "HTML", "CSS"],
    category: 'Frontend',
    github: 'https://github.com/imraan011/Sketchflow',
    live: "https://sketchflow-three.vercel.app/",
    image: SketchFlow,
    featured: true,
  },{
    id: 3,
    title: 'Portfolio Website',
    description:
      'This portfolio — built with React 18, Vite, and Tailwind CSS. Fully responsive, data-driven architecture.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    category: 'Frontend',
    github: 'https://github.com/imraan011/Personal-Portfolio',
    live: "https://personal-portfolio-nine-virid.vercel.app/",
    image: Portfolio,
    featured: true,
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
    featured: false,
  },
];

/** All filter categories derived from projects data */
export const projectCategories = ['All', ...new Set(projects.map((p) => p.category))];
