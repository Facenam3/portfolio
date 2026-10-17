import type { SocialLink } from '@/types'

// TODO(dalibor): replace every placeholder below with your real details.
export const profile = {
  name: 'Dalibor',
  role: 'Full-Stack Web Developer',
  tagline:
    'I build clean, modern web applications with React, TypeScript, PHP and Laravel.',
  location: 'Your City, Country',
  email: 'you@example.com',
  photo: 'public/me.jpg',
  availability: 'Open to frontend, backend & full-stack roles',
  bio: [
    'TODO(dalibor): write a short paragraph about yourself and how you got into development.',
    'TODO(dalibor): a second paragraph about the kind of work you enjoy and what you are learning next.',
  ],
  resumeUrl: '',
}

export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/your-username', icon: 'github' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/your-username',
    icon: 'linkedin',
  },
  { label: 'Email', href: 'mailto:you@example.com', icon: 'email' },
]
