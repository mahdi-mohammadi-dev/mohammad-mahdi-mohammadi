import type { Project } from '~/types'

export const projects: Project[] = [
  {
    title: 'Dareem Shop',
    slug: 'dareem-shop',
    category: 'Gold Marketplace',
    description: 'Large-scale gold marketplace and e-commerce platform.',
    url: 'https://www.dareem.shop/',
    technologies: ['Vue 2', 'Nuxt 2', 'SCSS', 'Vuetify', 'Axios'],
    role: 'Frontend Engineer',
    contribution:
      'Frontend development, architecture refactoring, reusable components, and API integration.',
    challenges: [
      'Large-scale shared codebase',
      'Maintainability and reusable components',
      'API architecture',
    ],
    highlights: ['Architecture', 'Refactoring', 'Reusable components'],
    image: null,
    caseStudy: {
      context: 'Gold marketplace / e-commerce platform built on Vue 2 and Nuxt 2.',
      role: 'Frontend design, development, and refactoring contribution.',
      technicalChallenge:
        'Working within a large shared codebase while improving structure, reuse, and maintainability.',
      solution:
        'Incremental frontend refactoring, reusable component development, and clearer API management.',
    },
  },
  {
    title: 'Dareem Pay',
    slug: 'dareem-pay',
    category: 'Credit / BNPL',
    description: 'Online credit and BNPL platform.',
    url: 'https://www.dareempay.com/',
    technologies: ['Vue 3', 'Nuxt 3', 'Middleware', 'UX', 'Performance'],
    role: 'Frontend Engineer',
    contribution:
      'Frontend development of multi-step verification workflows, middleware, and reusable architecture.',
    challenges: [
      'Multi-step verification workflows',
      'Custom middleware for valid navigation states',
      'UX without a dedicated design team',
    ],
    highlights: ['Middleware', 'Workflows', 'Architecture'],
    image: null,
    caseStudy: {
      context: 'Online credit / BNPL platform requiring controlled user journeys.',
      role: 'Frontend development, workflow middleware, and UX implementation.',
      technicalChallenge:
        'Multi-step verification flows that must block invalid navigation and preserve coherent application state.',
      solution:
        'Custom Nuxt middleware, reusable components, and modular architecture.',
    },
  },
  {
    title: 'Dareem App',
    slug: 'dareem-app',
    category: 'Precious Metals',
    description:
      'Real-time platform for buying and selling gold, silver, and copper.',
    url: 'https://www.dareem.ir/',
    technologies: ['Vue 3', 'Nuxt 3', 'Tailwind CSS', 'SSO', 'Caching'],
    role: 'Frontend Engineer',
    contribution:
      'Frontend development focused on SSO, caching, API efficiency, performance, and scalable architecture.',
    challenges: [
      'Frequent price updates without excessive API pressure',
      'Server-side caching and cache rotation',
      'Debounced price update requests',
    ],
    highlights: ['SSO', 'Caching', 'Performance'],
    image: null,
    caseStudy: {
      context:
        'Real-time precious metals trading platform for gold, silver, and copper.',
      role: 'Frontend development and performance-oriented API strategy.',
      technicalChallenge:
        'Frequently changing prices required reducing unnecessary API calls and server pressure.',
      solution:
        'Nuxt server-side caching with cache rotation and debounced price update requests.',
    },
  },
  {
    title: 'Azkoja',
    slug: 'azkoja',
    category: 'Wholesale Marketplace',
    description:
      'Wholesale marketplace with a dedicated seller and admin experience.',
    url: 'https://azkoja.co/',
    technologies: ['Nuxt', 'Refactoring', 'Performance', 'Admin Panel'],
    role: 'Frontend Engineer',
    contribution:
      'Frontend implementation, refactoring, hydration fixes, and performance improvements.',
    challenges: [
      'Hydration-related issues',
      'Performance and code quality',
      'Admin/seller panel maintainability',
    ],
    highlights: ['Admin panel', 'Hydration', 'Refactoring'],
    image: null,
    caseStudy: {
      context: 'Wholesale marketplace admin/seller panel.',
      role: 'Panel development, refactoring, and Nuxt frontend improvements.',
      technicalChallenge:
        'Hydration issues and maintainability concerns in an existing management interface.',
      solution:
        'Targeted refactoring, hydration fixes, and frontend architecture improvements.',
    },
  },
]
