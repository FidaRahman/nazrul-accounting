// src/pages/Home.jsx
import { Link } from 'react-router-dom'
import { SETMORE_URL, BUSINESS } from '../config'
import { SERVICE_LIST, SERVICE_PILLARS, INDUSTRIES } from '../data/services'
import { SealMark } from '../components/PageHero'
import RotatingWord from '../components/RotatingWord'
import Reveal from '../components/Reveal'
import Reviews from '../components/Reviews'

const AUDIENCES = ['individuals', 'businesses', 'corporations', 'charities', 'not-for-profits']

export default function Home() {
  return (
    <div>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden bg-navy-800 text-white">
        <SealMark className="-right-24 top-1/2 h-[520px] w-[520px] -translate-y-1/2 opacity-[0.09]" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
              Accounting · Income Tax · Payroll
            </p>

            <h1 className="mt-6 text-[34px] leading-[1.1] text-white sm:text-5xl md:text-6xl">
              Accounting and tax solutions for{' '}
              <RotatingWord words={AUDIENCES} />
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-300">
              {BUSINESS.legalName} has served the GTA since {BUSINESS.established}. Led by{' '}
              {BUSINESS.founder}, with 15+ years in accounting, tax and advisory services.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={SETMORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-gold px-7 py-3.5 text-sm font-semibold text-navy-900 transition-transform hover:-translate-y-0.5 hover:bg-amber-300"
              >
                Book Now
              </a>
              <Link
                to="/services"
                className="rounded-lg border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/5"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>

        {/* Facts bar — mono, like a ledger footer. Every figure here is his. */}
        <div className="relative border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400 sm:px-6 lg:px-8">
            <span>Est. {BUSINESS.established}</span>
            <span className="text-gold">·</span>
            <span>CPA, CGA</span>
            <span className="text-gold">·</span>
            <span>Scarborough, ON</span>
            <span className="text-gold">·</span>
            <span className="text-slate-300">Open 7 days · 9am–7pm</span>
          </div>
        </div>
      </section>

      {/* ---------- Four pillars ---------- */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand-600">What we do</p>
          <h2 className="mt-4 max-w-2xl text-3xl leading-tight text-ink md:text-4xl">
            Four things we handle, so you don't have to
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {SERVICE_PILLARS.map((p, i) => (
            <Reveal key={p.id} delay={i * 70}>
              <Link
                to={`/services#${p.id}`}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-600/5"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand-600">
                  {p.kicker}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-ink">{p.title}</h3>
                <div className="mt-4 h-px w-10 bg-gold transition-all duration-300 group-hover:w-20" />
                <p className="mt-5 flex-1 text-sm leading-relaxed text-ink-soft">{p.body}</p>
                <span className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Read more →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Full service index ---------- */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand-600">
              Our services are
            </p>
            <h2 className="mt-4 text-3xl leading-tight text-ink md:text-4xl">
              We provide accounting and tax solutions
            </h2>
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

          <Reveal delay={120}>
            <Link
              to="/services"
              className="mt-10 inline-block font-mono text-[11px] uppercase tracking-[0.2em] text-brand-600 hover:text-brand-700"
            >
              See service details →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- About + industries ---------- */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand-600">
              Who you're working with
            </p>
            <h2 className="mt-4 text-3xl leading-tight text-ink md:text-4xl">Led by a CPA, CGA</h2>
            <div className="mt-5 h-px w-14 bg-gold" />
            <p className="mt-6 leading-relaxed text-ink-soft">
              {BUSINESS.legalName} was established by {BUSINESS.founder} in {BUSINESS.established} in
              Toronto. He has 15+ years of experience in accounting, tax and advisory services, and
              specializes in charitable organizations and not-for-profit organizations (NPO) —
              including experience reporting to the Ontario government.
            </p>
            <Link
              to="/about"
              className="mt-7 inline-block font-mono text-[11px] uppercase tracking-[0.2em] text-brand-600 hover:text-brand-700"
            >
              More about us →
            </Link>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand-600">
                Industries we serve
              </p>
              <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-ink-soft">
                {INDUSTRIES.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <Reviews />

      {/* ---------- Benefits teaser ---------- */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-20 md:pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-navy-900 px-8 py-12 md:px-12">
            <SealMark className="-right-16 -top-16 h-64 w-64 opacity-[0.09]" />
            <div className="relative max-w-2xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold">Benefits</p>
              <h2 className="mt-4 text-2xl leading-snug text-white md:text-3xl">
                Got a letter from the CRA about your world income?
              </h2>
              <p className="mt-4 leading-relaxed text-slate-300">
                We help with Climate Action Incentive, GST/HST credit and Trillium benefit
                applications — including responding to CRA letters and completing the right forms.
              </p>
              <Link
                to="/benefits"
                className="mt-7 inline-block rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-navy-900 transition-transform hover:-translate-y-0.5 hover:bg-amber-300"
              >
                See what to do
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ---------- Closing CTA ---------- */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
              {BUSINESS.tagline}
            </p>
            <h2 className="mt-5 text-3xl leading-tight text-ink md:text-4xl">
              Book a time that works for you
            </h2>
            <p className="mt-4 text-ink-soft">
              We're open {BUSINESS.hours.toLowerCase()} — including weekends.
            </p>
            <a
              href={SETMORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-lg bg-brand-600 px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-brand-700"
            >
              Book Now
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  )
}