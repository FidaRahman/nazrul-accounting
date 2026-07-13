// src/pages/Contact.jsx
import { useState } from 'react'
import { SETMORE_URL, CONTACT_FORM_URL, BUSINESS, MAP_EMBED_URL } from '../config'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [sending, setSending] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in your name, email, and message.')
      return
    }
    setError('')
    setSending(true)
    try {
      await fetch(CONTACT_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(form),
      })
      setSubmitted(true)
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch (err) {
      setError('Something went wrong. Please try again, or call us directly.')
    } finally {
      setSending(false)
    }
  }

  const label = 'block font-mono text-[10px] uppercase tracking-[0.2em] text-brand-600'
  const field =
    'mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-ink transition-colors focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600'

  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Contact us / Book now"
        subtitle="Click the button below to book an appointment, or send us a message and we'll get back to you."
      >
        <a
          href={SETMORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-gold px-8 py-3.5 text-sm font-semibold text-navy-900 transition-transform hover:-translate-y-0.5 hover:bg-amber-300"
        >
          Book Now
        </a>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-14 md:grid-cols-2">
          {/* Form */}
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand-600">
              Send a message
            </p>
            <h2 className="mt-4 text-3xl text-ink">We'll get back to you</h2>
            <div className="mt-4 h-px w-14 bg-gold" />

            {submitted ? (
              <div className="mt-8 rounded-xl border-l-2 border-green-600 bg-green-50 p-6 text-green-900">
                <p className="font-semibold">Thanks — your message has been received.</p>
                <p className="mt-1 text-sm">We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label className={label}>Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} className={field} />
                </div>
                <div>
                  <label className={label}>Email *</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className={field}
                  />
                </div>
                <div>
                  <label className={label}>Phone</label>
                  <input name="phone" value={form.phone} onChange={handleChange} className={field} />
                </div>
                <div>
                  <label className={label}>Message *</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    className={field}
                  />
                </div>
                {error && <p className="text-sm text-red-600">{error}</p>}
                <button
                  type="submit"
                  disabled={sending}
                  className="rounded-lg bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-brand-700 disabled:translate-y-0 disabled:opacity-60"
                >
                  {sending ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </Reveal>

          {/* Details + map */}
          <Reveal delay={100}>
            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand-600">
                Visit or call us
              </p>
              <dl className="mt-6 space-y-5 text-sm">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                    Address
                  </dt>
                  <dd className="mt-1 text-ink">
                    {BUSINESS.addressLine1}
                    <br />
                    {BUSINESS.addressLine2}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                    Phone
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={BUSINESS.phoneHref}
                      className="font-mono text-brand-600 hover:text-brand-700"
                    >
                      {BUSINESS.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                    Email
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${BUSINESS.email}`}
                      className="text-brand-600 hover:text-brand-700"
                    >
                      {BUSINESS.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                    Hours of operation
                  </dt>
                  <dd className="mt-1 text-ink">{BUSINESS.hours}</dd>
                </div>
              </dl>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <iframe
                title="Map to our office"
                src={MAP_EMBED_URL}
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}