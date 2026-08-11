import type { ContactInfo, SocialLink } from '~/types'

export const profile = {
  name: 'Mohammad Mahdi Mohammadi',
  shortName: 'Mahdi Mohammadi',
  title: 'Frontend Engineer',
  specialty: 'Vue.js / Nuxt.js',
  experienceYears: '3+',
  tagline: 'Building scalable frontend experiences with Vue & Nuxt.',
  summary:
    'Frontend Engineer with 3+ years of experience building and evolving production applications with Vue.js and Nuxt.js. My work spans large-scale e-commerce, fintech, and real-time precious metals platforms, with a focus on scalable architecture, performance, and maintainable frontend systems.',
  leadershipNote:
    "Over the past year, I've also led frontend teams, contributing to technical decisions, code reviews, planning, and cross-functional collaboration.",
}

export const contact: ContactInfo = {
  email: 'mahdi.mohammadins1@gmail.com',
  phone: '+989020477345',
  phoneDisplay: '09020477345',
  github: 'https://github.com/mahdi-mohammadi-dev',
}

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: contact.github,
    external: true,
  },
  {
    label: 'Email',
    href: `mailto:${contact.email}`,
  },
  {
    label: 'Phone',
    href: `tel:${contact.phone}`,
  },
]
