// src/pages/FAQ.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SETMORE_URL, BUSINESS } from '../config'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'

// Every answer is grounded in information the firm has actually published.
// Keep it that way — this content will also feed the website chatbot.
const faqs = [
  {
    q: 'What services do you offer?',
    a: 'We provide financial statements compilation, e-filing, bookkeeping, payroll, GST/HST, personal tax returns, corporate tax returns, charity and not-for-profit organization accounting, incorporation and business registration, and tax advice.',
  },
  {
    q: 'Do you work with charities and not-for-profit organizations?',
    a: 'Yes. Nazrul Islam, CPA, CGA specializes in charitable organizations and not-for-profit organizations (NPO), and has experience reporting to the Ontario government.',
  },
  {
    q: 'What are your hours?',
    a: 'We are open Monday to Sunday, 9:00 AM to 7:00 PM — seven days a week.',
  },
  {
    q: 'Where are you located?',
    a: '2390 Eglinton Ave E, Unit 227, Scarborough, ON M1K 2P5. There is a map on our contact page.',
  },
  {
    q: 'How do I book an appointment?',
    a: 'Click any "Book Now" button on this site to open our online booking page and choose a time that works for you.',
  },
  {
    q: 'Do you handle taxes for Uber and Lyft drivers?',
    a: 'Yes. Our personal tax service covers individual tax returns, rental income, capital gains, investment income, business income, and Uber/Lyft income.',
  },
  {
    q: 'What types of businesses do you do bookkeeping for?',
    a: 'We do bookkeeping for wellness centres (physiotherapy, osteopathy, massage therapy and similar), construction companies, pharmacies, churches, charitable organizations and grocery stores — among others.',
  },
  {
    q: 'How do you prepare a personal tax return?',
    a: 'We analyze your tax situation through an interview process and consider every aspect of the income tax procedure in order to maximize your tax refund. We have 10+ years of experience preparing personal tax returns.',
  },
  {
    q: 'I received a CRA letter asking about my world income. Can you help?',
    a: 'Yes. Our Benefits page explains what to report and which form to complete, and we can prepare the application and respond to the CRA on your behalf.',
  },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-slate-200">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="group flex w-full items-center justify-between gap-6 py-5 text-left"
      >
        <span className="text-base font-semibold text-ink transition-colors group-hover:text-brand-700">
          {q}
        </span>
        <span
          className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
            open
              ? 'rotate-45 border-gold bg-gold text-navy-900'
              : 'border-slate-300 text-brand-600 group-hover:border-brand-300'
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pr-12 text-sm leading-relaxed text-ink-soft">{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <div>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        subtitle={`The questions we hear most. Don't see yours? We're here ${BUSINESS.hours.toLowerCase()}.`}
      />

      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
        <Reveal>
          <div className="rounded-2xl border border-slate-200 bg-white px-7">
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 rounded-2xl bg-paper p-10 text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand-600">
              Still have questions?
            </p>
            <h2 className="mt-4 text-2xl text-ink">We're happy to help</h2>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href={SETMORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-brand-600 px-7 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-brand-700"
              >
                Book Now
              </a>
              <Link
                to="/contact"
                className="rounded-lg border border-slate-300 px-7 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand-600 hover:text-brand-600"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  )
}