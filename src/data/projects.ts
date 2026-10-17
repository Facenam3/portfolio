import type { Project } from '@/types'

// Add an `image` (e.g. '/projects/e-commerce.webp') to show a screenshot,
// or leave it out to display a generated gradient cover instead.
export const projects: Project[] = [
  {
    title: 'Full-Stack E-Commerce Platform',
    description:
      'A full-stack e-commerce application developed as part of the Scandiweb Junior Developer technical assessment. Built with React, PHP, GraphQL, and MySQL, featuring product browsing, category filtering, shopping cart functionality, and order processing.',
    tech: ['React', 'PHP', 'GraphQL', 'MySQL', 'Tailwind CSS'],
    image: '/projects/e-commerce.webp',
    repoUrl: 'https://github.com/Facenam3/ecommerce-webshop',
    liveUrl: 'https://ecommerce-webshop-three.vercel.app/all',
    featured: true,
  },
  {
    title: 'Full-Stack Task Management System',
    description:
      'A full-stack task management application built with a decoupled React frontend and Laravel REST API backend. Features user authentication, task creation and management, status tracking, task assignment, search, and pagination. Built with reusable React components, protected routes, and Laravel Sanctum for secure API authentication.',
    tech: [
      'React',
      'JavaScript',
      'Laravel',
      'PHP',
      'REST API',
      'Laravel Sanctum',
      'Tailwind CSS',
    ],
    image: '/projects/task-manager.webp',
    repoUrl: 'https://github.com/Facenam3/auth-react-laravel',
    liveUrl: '',
    featured: false,
  },
  {
    title: 'Rent-A-Car Management System',
    description:
      'A full-stack vehicle rental platform built with PHP and Laravel, featuring vehicle browsing, booking management, and a multi-step rental process. Integrated Google OAuth for authentication, Stripe for online payments, and an admin dashboard for managing rental operations. The project also involved developing a custom Laravel package and building responsive interfaces with Tailwind CSS.',
    tech: [
      'PHP',
      'Laravel',
      'MySQL',
      'JavaScript',
      'jQuery',
      'Tailwind CSS',
      'Google OAuth',
      'Stripe API',
    ],
    image: '/projects/php-rent-service.webp',
    repoUrl: 'https://github.com/Facenam3/php-rent-service',
    liveUrl: 'https://php-rent-service-production.up.railway.app/',
    featured: false,
  },
  {
    title: 'Construction Company Website',
    description:
      'A modern, responsive construction company website built with React, Vite, and Tailwind CSS. Designed to showcase services, completed projects, and company information, featuring project filtering, detailed project pages, and a contact form. Built with reusable components and a scalable architecture, with plans for multilingual support and an admin dashboard.',
    tech: [
      'React',
      'Vite',
      'JavaScript',
      'Tailwind CSS',
      'React Router',
      'EmailJS',
    ],
    image: '/projects/construction.webp',
    repoUrl: 'https://github.com/Facenam3/igigradba',
    liveUrl: 'https://www.igigradba.com',
    featured: true,
  },
]
