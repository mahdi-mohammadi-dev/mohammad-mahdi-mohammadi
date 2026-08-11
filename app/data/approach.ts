import type { ApproachItem } from '~/types'

export const approachItems: ApproachItem[] = [
  {
    title: 'Architecture first',
    description:
      'Start with clear module boundaries and component contracts so features scale without collapsing into unmaintainable UI logic.',
  },
  {
    title: 'Performance by design',
    description:
      'Treat caching, request control, and rendering cost as product requirements — especially in data-heavy flows like live pricing and multi-step journeys.',
  },
  {
    title: 'Reusable components',
    description:
      'Extract stable UI and domain patterns early enough to reduce duplication, without premature abstraction.',
  },
  {
    title: 'Maintainability',
    description:
      'Prefer readable structure, consistent patterns, and intentional trade-offs so teams can ship safely months later — not just this sprint.',
  },
  {
    title: 'Refactoring legacy systems',
    description:
      'Improve mature Vue/Nuxt codebases incrementally: stabilize architecture, reduce debt, and unlock faster delivery without risky rewrites.',
  },
  {
    title: 'UX with engineering judgment',
    description:
      'When design support is limited, translate product research and workflow constraints into clear, usable interfaces.',
  },
  {
    title: 'Security as default',
    description:
      'Validate input, prevent XSS vectors, and handle uploads carefully — security belongs in the frontend delivery path, not as an afterthought.',
  },
  {
    title: 'Scalability',
    description:
      'Build for change: modular architecture, SOLID/DRY discipline, and APIs that stay coherent as the product surface expands.',
  },
]
