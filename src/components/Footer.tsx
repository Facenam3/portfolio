import { socials, profile } from '@/data/profile'
import { SocialIcon } from '@/components/icons'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line/60 py-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold text-white">{profile.name}</p>
          <p className="mt-1 text-xs text-slate-500">
            © {year} · Built with React, TypeScript &amp; Tailwind CSS
          </p>
        </div>

        <ul className="flex items-center gap-2">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={social.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-line/70 text-slate-400 transition hover:border-lav/60 hover:text-lav-soft"
              >
                <SocialIcon name={social.icon} className="h-4.5 w-4.5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
