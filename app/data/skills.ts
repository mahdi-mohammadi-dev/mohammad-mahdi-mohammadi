import type { SkillGroup } from '~/types'

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    skills: [
      'Vue.js',
      'Nuxt.js',
      'TypeScript',
      'JavaScript ES6+',
      'HTML5',
      'CSS3',
    ],
  },
  {
    id: 'styling',
    title: 'Styling',
    skills: ['Tailwind CSS', 'SCSS', 'BEM', 'Responsive Design'],
  },
  {
    id: 'state-api',
    title: 'State & API',
    skills: [
      'Pinia',
      'Vuex',
      'Vue Router',
      'Axios',
      'REST APIs',
      'API Management',
    ],
  },
  {
    id: 'engineering',
    title: 'Engineering',
    skills: [
      'Frontend Architecture',
      'Performance Optimization',
      'Core Web Vitals',
      'Code Refactoring',
      'Legacy Refactoring',
      'Reusable Components',
      'SOLID',
      'DRY',
    ],
  },
  {
    id: 'security',
    title: 'Security & Quality',
    skills: [
      'Frontend Security',
      'Form Validation',
      'Input Validation',
      'XSS Prevention',
      'Cross-Browser Compatibility',
      'SEO',
    ],
  },
  {
    id: 'workflow',
    title: 'Workflow',
    skills: ['Git', 'GitLab', 'Agile', 'Scrum', 'Code Review'],
  },
  {
    id: 'additional',
    title: 'Additional',
    skills: ['Python'],
  },
]
