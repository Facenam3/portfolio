import { projects } from '@/data/projects'
import { Section } from '@/components/Section'
import { SectionHeading } from '@/components/SectionHeading'
import { ArrowUpRightIcon, GithubIcon } from '@/components/icons'

const covers = [
  'from-lav-strong/40 via-lav/25 to-transparent',
  'from-fuchsia-500/30 via-lav/20 to-transparent',
  'from-indigo-500/30 via-lav/20 to-transparent',
  'from-purple-500/30 via-lav/20 to-transparent',
]

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        description="A selection of projects that show how I approach full-stack web development."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={`group flex flex-col overflow-hidden rounded-3xl border border-line/60 bg-ink-soft/50 transition hover:border-lav/50 hover:bg-ink-raised/60 ${
              project.featured ? 'sm:col-span-2' : ''
            }`}
          >
            <div
              className={`relative h-40 overflow-hidden bg-linear-to-br sm:h-48 ${
                covers[index % covers.length]
              }`}
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="grid h-full w-full place-items-center">
                  <span className="text-6xl font-black text-white/10">
                    {project.title.charAt(0)}
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-line/70 px-2.5 py-1 text-xs text-slate-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center gap-5 pt-2">
                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 transition hover:text-lav-soft"
                  >
                    <GithubIcon className="h-4 w-4" />
                    Code
                  </a>
                ) : null}
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 transition hover:text-lav-soft"
                  >
                    Live demo
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
