import { useEffect, useState } from 'react'
import { sections } from '@/data/sections'
import { profile } from '@/data/profile'
import { CloseIcon, MenuIcon } from '@/components/icons'

export function Navbar() {
  const [active, setActive] = useState(sections[0]?.id ?? 'home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    for (const { id } of sections) {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <div className="relative w-full max-w-2xl">
        <nav
          aria-label="Primary"
          className="flex items-center justify-between gap-2 rounded-full border border-line/70 bg-ink-soft/70 p-1.5 pl-4 shadow-lg shadow-black/40 backdrop-blur-xl"
        >
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 text-sm font-semibold text-white"
          >
            <span className="grid h-7 w-7 place-items-center rounded-full bg-linear-to-br from-lav-soft to-lav-strong text-xs font-bold text-ink">
              {profile.name.charAt(0)}
            </span>
            <span className="hidden sm:inline">{profile.name}</span>
          </a>

          <ul className="hidden items-center gap-0.5 md:flex">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? 'page' : undefined}
                  className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${
                    active === id
                      ? 'bg-lav/15 text-lav-soft'
                      : 'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-full bg-lav-strong px-4 py-2 text-sm font-semibold text-ink transition hover:bg-lav sm:inline-flex"
            >
              Let&apos;s talk
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="grid h-9 w-9 place-items-center rounded-full text-slate-200 transition hover:bg-white/5 md:hidden"
            >
              {open ? (
                <CloseIcon className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>

        {open ? (
          <div
            id="mobile-nav"
            className="absolute inset-x-0 top-full mt-2 rounded-3xl border border-line/70 bg-ink-soft/95 p-2 shadow-xl shadow-black/50 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col">
              {sections.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === id ? 'page' : undefined}
                    className={`block rounded-2xl px-4 py-3 text-sm font-medium transition ${
                      active === id
                        ? 'bg-lav/15 text-lav-soft'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </header>
  )
}
