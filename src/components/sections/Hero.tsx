import { profile, socials } from '@/data/profile'
import { ArrowDownIcon, ArrowUpRightIcon, SocialIcon } from '@/components/icons'
import { HeroBackground } from '@/components/sections/HeroBackground'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      <HeroBackground />

      <div className="relative mx-auto w-full max-w-5xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex justify-center animate-fade-up">
            <div className="relative w-full max-w-xs sm:max-w-sm">
              <div
                aria-hidden="true"
                className="absolute -inset-4 -z-10 rounded-[2rem] bg-lav-strong/20 blur-2xl"
              />

              {profile.photo ? (
                <img
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  width={480}
                  height={600}
                  className="aspect-4/5 w-full rounded-3xl border border-line/60 object-cover object-top shadow-2xl shadow-lav-strong/20"
                />
              ) : (
                <div className="relative flex aspect-4/5 w-full items-center justify-center overflow-hidden rounded-3xl border border-line/60 bg-linear-to-br from-ink-raised via-ink-soft to-ink shadow-2xl shadow-lav-strong/20">
                  <span className="text-8xl font-black text-white/10">
                    {profile.name.charAt(0)}
                  </span>
                  <span className="absolute bottom-4 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-slate-500">
                    Add your photo
                  </span>
                </div>
              )}
            </div>
          </div>

          <div
            className="animate-fade-up text-center lg:text-left"
            style={{ animationDelay: '120ms' }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-line/70 bg-ink-soft/60 px-4 py-1.5 text-xs font-medium text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lav opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-lav-soft" />
              </span>
              {profile.availability}
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Hi, I&apos;m{' '}
              <span className="bg-linear-to-r from-lav-soft via-lav to-lav-strong bg-clip-text text-transparent">
                {profile.name}
              </span>
            </h1>

            <p className="mt-4 text-lg font-semibold text-lav-soft sm:text-xl">
              {profile.role}
            </p>

            <p className="mt-6 text-base leading-relaxed text-slate-400 sm:text-lg lg:max-w-xl">
              {profile.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-lav-strong px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-lav-strong/25 transition hover:bg-lav hover:shadow-lav/30"
              >
                View my work
                <ArrowUpRightIcon className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-line/70 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-lav/50 hover:text-white"
              >
                Get in touch
              </a>
            </div>

            <ul className="mt-10 flex items-center justify-center gap-3 lg:justify-start">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    aria-label={social.label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-line/70 text-slate-400 transition hover:border-lav/60 hover:text-lav-soft"
                  >
                    <SocialIcon name={social.icon} className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 transition hover:text-lav-soft"
      >
        <ArrowDownIcon className="h-5 w-5 animate-float" />
      </a>
    </section>
  )
}
