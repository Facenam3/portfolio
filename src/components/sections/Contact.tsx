import { useState } from 'react'
import type { FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { profile, socials } from '@/data/profile'
import { Section } from '@/components/Section'
import { SectionHeading } from '@/components/SectionHeading'
import { MailIcon, SocialIcon } from '@/components/icons'

const serviceId: string | undefined = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId: string | undefined = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey: string | undefined = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

type Status = 'idle' | 'sending' | 'success' | 'error'

type FormState = {
  name: string
  email: string
  message: string
}

const emptyForm: FormState = { name: '', email: '', message: '' }

const inputClass =
  'w-full rounded-2xl border border-line/70 bg-ink/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-lav/60 focus:bg-ink-soft'

function validate(values: FormState) {
  const errors: Partial<FormState> = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.message.trim()) errors.message = 'Please enter a message.'
  return errors
}

export function Contact() {
  const [form, setForm] = useState<FormState>(emptyForm)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [status, setStatus] = useState<Status>('idle')
  const [feedback, setFeedback] = useState('')

  function update(field: keyof FormState, value: string) {
    setForm((previous) => ({ ...previous, [field]: value }))
    setErrors((previous) => ({ ...previous, [field]: undefined }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const nextErrors = validate(form)
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setStatus('idle')
      setFeedback('')
      return
    }

    const sid = serviceId
    const tid = templateId
    const key = publicKey
    if (!sid || !tid || !key) {
      setStatus('error')
      setFeedback(
        `The contact form isn't configured yet. Please email me at ${profile.email}.`,
      )
      return
    }

    setStatus('sending')
    setFeedback('')

    try {
      await emailjs.send(
        sid,
        tid,
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        { publicKey: key },
      )
      setStatus('success')
      setFeedback('Thanks! Your message has been sent.')
      setForm(emptyForm)
    } catch {
      setStatus('error')
      setFeedback('Something went wrong. Please try again or email me directly.')
    }
  }

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something together"
        description="Have a role, project or question in mind? Send a message and I'll get back to you."
      />

      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-lav-soft transition hover:text-white"
          >
            <MailIcon className="h-4 w-4" />
            {profile.email}
          </a>

          <ul className="mt-8 flex items-center gap-3">
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

        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-3xl border border-line/60 bg-ink-soft/50 p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-slate-400"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={(event) => update('name', event.target.value)}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className={inputClass}
                placeholder="Your name"
              />
              {errors.name ? (
                <p id="name-error" className="mt-2 text-xs text-red-400">
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-slate-400"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(event) => update('email', event.target.value)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={inputClass}
                placeholder="you@example.com"
              />
              {errors.email ? (
                <p id="email-error" className="mt-2 text-xs text-red-400">
                  {errors.email}
                </p>
              ) : null}
            </div>
          </div>

          <div className="mt-5">
            <label
              htmlFor="message"
              className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-slate-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={(event) => update('message', event.target.value)}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className={`${inputClass} resize-none`}
              placeholder="Tell me a little about what you have in mind…"
            />
            {errors.message ? (
              <p id="message-error" className="mt-2 text-xs text-red-400">
                {errors.message}
              </p>
            ) : null}
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-lav-strong px-6 py-3 text-sm font-semibold text-white transition hover:bg-lav disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>

          {feedback ? (
            <p
              role="status"
              className={`mt-4 text-sm ${
                status === 'success' ? 'text-lav-soft' : 'text-red-400'
              }`}
            >
              {feedback}
            </p>
          ) : null}
        </form>
      </div>
    </Section>
  )
}
