export type Section = {
  id: string
  label: string
}

export type SocialIcon = 'github' | 'linkedin' | 'email'

export type SocialLink = {
  label: string
  href: string
  icon: SocialIcon
}

export type SkillGroup = {
  title: string
  skills: string[]
}

export type Project = {
  title: string
  description: string
  tech: string[]
  repoUrl?: string
  liveUrl?: string
  image?: string
  featured?: boolean
}
