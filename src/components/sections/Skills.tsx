import { skillGroups } from '@/data/skills'
import { Section } from '@/components/Section'
import { SectionHeading } from '@/components/SectionHeading'

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="Tools I work with"
        description="The technologies and tools I use to design, build and ship web applications."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-3xl border border-line/60 bg-ink-soft/50 p-6 transition hover:border-lav/40"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-lav-soft">
              {group.title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-line/70 bg-ink/50 px-3 py-1.5 text-sm text-slate-300 transition hover:border-lav/50 hover:text-white"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
