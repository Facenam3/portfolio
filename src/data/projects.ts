import type { Project } from '@/types'

// TODO(dalibor): replace these placeholder projects with your real work.
// Add an `image` (e.g. '/projects/ecommerce.png') to show a screenshot,
// or leave it out to display a generated gradient cover instead.
export const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack store with product catalogue, shopping cart and checkout.',
    tech: ['React', 'Laravel', 'MySQL', 'Tailwind CSS'],
    repoUrl: 'https://github.com/your-username/ecommerce',
    liveUrl: '',
    featured: true,
  },
  {
    title: 'Task Management System',
    description:
      'Organise projects and tasks with boards, priorities and deadlines.',
    tech: ['React', 'TypeScript', 'GraphQL', 'Laravel'],
    repoUrl: 'https://github.com/your-username/task-manager',
    liveUrl: '',
  },
  {
    title: 'Rent-A-Car System',
    description:
      'Browse available vehicles, manage bookings and track rental periods.',
    tech: ['PHP', 'Laravel', 'MySQL', 'Tailwind CSS'],
    repoUrl: 'https://github.com/your-username/rent-a-car',
    liveUrl: '',
  },
  {
    title: 'Construction Company Website',
    description:
      'A responsive marketing site showcasing services, projects and contact.',
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    repoUrl: 'https://github.com/your-username/construction-site',
    liveUrl: '',
  },
]
