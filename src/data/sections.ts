import type { Section } from '@/types'

/**
 * Single source of truth for the page sections.
 * The navbar and the section `id`s both use this list, so they stay in sync.
 * Add, remove, or reorder entries here to change the navigation.
 */
export const sections: Section[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]
