/**
 * @file skills.js
 * @description All skills data. Update here to reflect across About and Skills sections.
 * Levels: 'Beginner' | 'Intermediate' | 'Proficient'
 */

export const skills = [
  // Frontend
  { name: 'HTML5', category: 'Frontend', level: 'Proficient', icon: '🌐' },
  { name: 'CSS3', category: 'Frontend', level: 'Proficient', icon: '🎨' },
  { name: 'JavaScript', category: 'Frontend', level: 'Intermediate', icon: '⚡' },
  { name: 'React', category: 'Frontend', level: 'Intermediate', icon: '⚛️' },
  { name: 'Tailwind CSS', category: 'Frontend', level: 'Intermediate', icon: '💨' },

  // Backend
  { name: 'Node.js', category: 'Backend', level: 'Beginner', icon: '🟢' },
  { name: 'Express.js', category: 'Backend', level: 'Beginner', icon: '🚂' },
  { name: 'MongoDB', category: 'Backend', level: 'Beginner', icon: '🍃' },
  { name: 'REST APIs', category: 'Backend', level: 'Intermediate', icon: '🔌' },

  // DSA
  { name: 'Data Structures', category: 'DSA', level: 'Intermediate', icon: '🧱' },
  { name: 'Algorithms', category: 'DSA', level: 'Intermediate', icon: '🔍' },

  // Tools
  { name: 'Git', category: 'Tools', level: 'Intermediate', icon: '🔀' },
  { name: 'GitHub', category: 'Tools', level: 'Intermediate', icon: '🐙' },
  { name: 'VS Code', category: 'Tools', level: 'Proficient', icon: '💻' },
  { name: 'Vite', category: 'Tools', level: 'Intermediate', icon: '⚡' },
];

/** Unique skill categories */
export const skillCategories = [...new Set(skills.map((s) => s.category))];
