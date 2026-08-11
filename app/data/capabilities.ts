import type { Capability } from '~/types'

export const capabilities: Capability[] = [
  {
    id: 'architecture',
    title: 'Scalable Architecture',
    description:
      'Designing maintainable frontend systems for complex production applications.',
    concepts: ['Vue', 'Nuxt', 'Modular'],
  },
  {
    id: 'performance',
    title: 'Performance Engineering',
    description:
      'Optimizing rendering, API usage, caching, and Core Web Vitals.',
    concepts: ['CWV', 'Caching', 'SSR'],
  },
  {
    id: 'refactoring',
    title: 'Legacy Refactoring',
    description:
      'Modernizing mature Vue/Nuxt codebases for maintainability and safer delivery.',
    concepts: ['Debt reduction', 'Quality'],
  },
  {
    id: 'workflows',
    title: 'API & Complex Workflows',
    description:
      'Building reliable API layers and multi-step flows with navigation-safe middleware.',
    concepts: ['REST', 'Middleware'],
  },
  {
    id: 'components',
    title: 'Reusable Components',
    description:
      'Creating component systems that reduce duplication and speed up delivery.',
    concepts: ['Composition API'],
  },
  {
    id: 'leadership',
    title: 'Frontend Leadership',
    description:
      'Guiding architecture decisions, code review, planning, and team delivery.',
    concepts: ['Review', 'Planning'],
  },
]
