import type { SocialLink } from '@/types'

export const profile = {
  name: 'Dalibor',
  role: 'Full-Stack Developer',
  tagline:
    'I build modern, responsive web applications with a focus on clean code, intuitive user experiences, and practical solutions to real-world problems.',
  location: 'Skopje, North Macedonia',
  email: 'dalibor.jovanov2k1@gmail.com',
  photo: '/me.webp',
  availability: 'Open to frontend, backend & full-stack roles',
  bio: [
    'My journey into software development started with curiosity about how websites and applications work. What began as an interest quickly turned into a passion for building things from scratch and solving problems through code.',
    "Over time, I expanded my skills from HTML, CSS, and JavaScript to React, PHP, Laravel, and full-stack application development. Through personal projects, hackathons, and technical challenges, I've gained hands-on experience turning ideas into functional applications.",
    'Today, alongside my work in IT system administration, I continue developing my skills and working toward a career focused on software development.'
  ],
  resumeUrl: '/resume.pdf',
}

export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/Facenam3', icon: 'github' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dalibor-jovanov2k1',
    icon: 'linkedin',
  },
  { label: 'Email', href: 'mailto:dalibor.jovanov2k1@gmail.com', icon: 'email' },
]
