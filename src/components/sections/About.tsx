import { profile } from '@/data/profile'
import { Section } from '@/components/Section'
import { SectionHeading } from '@/components/SectionHeading'
import { DownloadIcon } from '@/components/icons'

const facts = [
  { label: 'Based in', value: profile.location },
  { label: 'Focus', value: 'Full-stack web development' },
  { label: 'Currently', value: 'Learning best practices and building projects' },
]

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About"
        title="A little about me"
        description="TODO(dalibor): you can delete this line once your bio below is written."
      />

      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5">
          {profile.bio.map((paragraph, index) => (
            <p
              key={index}
              className="text-base leading-relaxed text-slate-400"
            >
              {paragraph}
            </p>
          ))}

          {profile.resumeUrl ? (
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line/70 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-lav/50 hover:text-white"
            >
              <DownloadIcon className="h-4 w-4" />
              Download CV
            </a>
          ) : null}
        </div>

        <dl className="space-y-4 rounded-3xl border border-line/60 bg-ink-soft/50 p-6">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-lav">
                {fact.label}
              </dt>
              <dd className="mt-1 text-sm text-slate-300">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
