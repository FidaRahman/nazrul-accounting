// src/pages/Services.jsx
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { SETMORE_URL } from '../config'
import { SERVICE_LIST, SERVICE_PILLARS, SEGMENTS } from '../data/Services'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'

export default function Services() {
  const { hash } = useLocation()
  const [active, setActive] = useState(SERVICE_PILLARS[0].id)

  // Let /services#bookkeeping open the right panel when linked from elsewhere.
  useEffect(() => {
    const id = hash.replace('#', '')
    if (SERVICE_PILLARS.some((p) => p.id === id)) setActive(id)
  }, [hash])

  const pillar = SERVICE_PILLARS.find((p) => p.id === active)

  return (
    <div>
      <PageHero
        eyebrow={SEGMENTS.join(' · ')}
        title="We provide accounting and tax solutions"
        subtitle="Accounting, income tax and payroll — handled end to end, so you can get back to what you do."
      />

      {/* ---------- The four pillars, as a panel you click through ---------- */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand-600">
              Core services
            </p>
            <h2 className="mt-4 text-3xl leading-tight text-ink md:text-4xl">
              Choose what you need
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-[280px_1fr]">
            {/* Rail (desktop) / scrollable chips (mobile) */}
            <div
              role="tablist"
              aria-label="Core services"
              className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-0 lg:pb-0"
            >
              {SERVICE_PILLARS.map((p) => {
                const isActive = p.id === active
                return (
                  <button
                    key={p.id}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(p.id)}
                    className={`relative shrink-0 rounded-xl px-5 py-3.5 text-left transition-all duration-200 lg:w-full ${
                      isActive
                        ? 'bg-white shadow-sm ring-1 ring-slate-200'
                        : 'ring-1 ring-transparent hover:bg-white/70'
                    }`}
                  >
                    <span
                      className={`absolute left-0 top-1/2 w-[3px] -translate-y-1/2 rounded-full bg-gold transition-all duration-300 ${
                        isActive ? 'h-8' : 'h-0'
                      }`}
                    />
                    <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-brand-600">
                      {p.kicker}
                    </span>
                    <span
                      className={`mt-1 block whitespace-nowrap text-base font-semibold transition-colors ${
                        isActive ? 'text-ink' : 'text-ink-soft'
                      }`}
                    >
                      {p.title}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Panel */}
            <div
              key={active}
              id={pillar.id}
              role="tabpanel"
              className="animate-panel scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-8 md:p-10"
            >
              <h3 className="font-display text-3xl font-semibold text-ink">{pillar.title}</h3>
              <div className="mt-4 h-px w-14 bg-gold" />
              <p className="mt-6 max-w-2xl leading-relaxed text-ink-soft">{pillar.body}</p>

              <p className="mt-9 font-mono text-[10px] uppercase tracking-[0.22em] text-brand-600">
                {pillar.listTitle}
              </p>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {pillar.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-paper px-4 py-3 text-sm text-ink"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={SETMORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-block rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-brand-700"
              >
                Book {pillar.title}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Everything else ---------- */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand-600">
            Full service list
          </p>
          <h2 className="mt-4 text-3xl leading-tight text-ink md:text-4xl">Our services are</h2>
        </Reveal>

        <Reveal delay={80}>
          <ul className="mt-10 grid gap-x-12 sm:grid-cols-2">
            {SERVICE_LIST.map((s) => (
              <li key={s} className="group relative border-b border-slate-200 py-4 pl-6">
                <span className="absolute left-0 top-1/2 h-0 w-[2px] -translate-y-1/2 bg-gold transition-all duration-300 group-hover:h-7" />
                <span className="text-[15px] font-medium text-ink transition-colors group-hover:text-brand-700">
                  {s}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="relative overflow-hidden bg-navy-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl leading-tight text-white md:text-4xl">
            Not sure which service you need?
          </h2>
          <p className="mt-4 text-slate-300">
            Book an appointment and we'll walk through your situation together.
          </p>
          <a
            href={SETMORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-lg bg-gold px-8 py-3.5 text-sm font-semibold text-navy-900 transition-transform hover:-translate-y-0.5 hover:bg-amber-300"
          >
            Book Now
          </a>
        </div>
      </section>
    </div>
  )
}