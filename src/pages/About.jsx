// src/pages/About.jsx
import { SETMORE_URL, BUSINESS } from '../config'
import { INDUSTRIES } from '../data/Services'
import PageHero, { SealMark } from '../components/PageHero'
import Reveal from '../components/Reveal'
import logo from '../assets/logo.png'

export default function About() {
  return (
    <div>
      <PageHero
        eyebrow="About"
        title={BUSINESS.legalName}
        subtitle={`Accounting, income tax and payroll for corporate, personal, charity and not-for-profit clients — since ${BUSINESS.established}.`}
      />

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-[200px_1fr] md:items-start">
          <Reveal>
            <img
              src={logo}
              alt={BUSINESS.name}
              className="mx-auto h-40 w-40 rounded-full object-cover shadow-lg md:mx-0"
            />
          </Reveal>

          <Reveal delay={100}>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand-600">
              Our story
            </p>
            <div className="mt-5 space-y-5 leading-relaxed text-ink-soft">
              <p>
                {BUSINESS.legalName} was established by {BUSINESS.founder} in {BUSINESS.established}{' '}
                in Toronto. He has 15+ years of experience in accounting, tax and advisory services.
              </p>
              <p>
                He is specialized in charitable organizations as well as not-for-profit organizations
                (NPO), and has experience in reporting to the Ontario government.
              </p>
              <p>
                Nazrul Accounting provides accounting, personal tax, corporate tax and bookkeeping
                services to different types of corporations such as health care clinics, pharmacies,
                construction, charitable organizations, churches and retail grocery stores.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand-600">
              Who we work with
            </p>
            <h2 className="mt-4 text-3xl leading-tight text-ink md:text-4xl">
              Businesses across the GTA
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map((item, i) => (
              <Reveal key={item} delay={i * 50}>
                <div className="group h-full rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-md">
                  <div className="h-px w-8 bg-gold transition-all duration-300 group-hover:w-14" />
                  <p className="mt-4 text-sm font-semibold text-ink">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-navy-800 px-8 py-14 text-center">
            <SealMark className="left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 opacity-[0.09]" />
            <div className="relative">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
                {BUSINESS.tagline}
              </p>
              <h2 className="mt-5 text-3xl text-white">Let's talk about your situation</h2>
              <p className="mt-4 text-slate-300">Open {BUSINESS.hours.toLowerCase()}.</p>
              <a
                href={SETMORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-lg bg-gold px-8 py-3.5 text-sm font-semibold text-navy-900 transition-transform hover:-translate-y-0.5 hover:bg-amber-300"
              >
                Book Now
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  )
}