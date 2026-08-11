export interface NavItem {
  label: string
  href: string
}

export interface SocialLink {
  label: string
  href: string
  external?: boolean
}

export interface Capability {
  id: string
  title: string
  description: string
  concepts: string[]
}

export interface SkillGroup {
  id: string
  title: string
  skills: string[]
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  summary: string
  project?: string
  leadership?: {
    title: string
    summary: string
  }
}

export interface ProjectCaseStudy {
  problem?: string
  context?: string
  role?: string
  technicalChallenge?: string
  solution?: string
  architecture?: string
  performance?: string
  result?: string
}

export interface Project {
  title: string
  slug: string
  category: string
  description: string
  url: string
  technologies: string[]
  role: string
  contribution: string
  challenges: string[]
  highlights: string[]
  image?: string | null
  caseStudy?: ProjectCaseStudy
}

export interface ApproachItem {
  title: string
  description: string
}

export interface LeadershipContent {
  title: string
  intro: string
  responsibilities: string[]
}

export interface ContactInfo {
  email: string
  phone: string
  phoneDisplay: string
  github: string
}
