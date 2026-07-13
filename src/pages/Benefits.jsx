// src/pages/Benefits.jsx
import { SETMORE_URL, FORMS, CRA_PHONE, CRA_PHONE_HREF } from '../config'
import PageHero, { SealMark } from '../components/PageHero'
import Reveal from '../components/Reveal'

// Small reusable "two ways to do this" block so RC151 and RC66 stay consistent.
function FormOption({ badge, title, body, onlineLabel, onlineHref, onlineNote, mailBody, mailHref }) {
  return (
    <div className="mt-6 rounded-xl bg-paper p-6 md:p-7">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-600">{badge}</p>
      <h3 className="mt-2 text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{body}</p>

      {/* Fastest path */}
      <div className="mt-6 rounded-lg border-l-2 border-gold bg-white p-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-600">
          Fastest — do it online
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{onlineNote}</p>
        <a
          href={onlineHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-brand-700"
        >
          {onlineLabel}
        </a>
      </div>

      {/* Paper path */}
      <div className="mt-4 rounded-lg border border-slate-200 bg-white p-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
          Or — print and mail it
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{mailBody}</p>
        <a
          href={mailHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand-600 hover:text-brand-600"
        >
          Get the form from the CRA
        </a>
      </div>
    </div>
  )
}

export default function Benefits() {
  return (
    <div>
      <PageHero
        eyebrow="Benefits"
        title="Climate Action Incentive, GST/HST credit & Trillium benefit"
        subtitle="We help with benefit applications and with responding to CRA letters about the Climate Action Incentive, GST/HST credit, Trillium benefit and more."
      />

      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
        {/* Name change note — customers see both names on CRA letters */}
        <Reveal>
          <div className="rounded-xl border-l-2 border-gold bg-brand-50 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-600">
              Note on names
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              The <strong className="text-ink">Climate Action Incentive</strong> is now called the{' '}
              <strong className="text-ink">Canada Carbon Rebate</strong>. You may see either name on
              a CRA letter — they refer to the same benefit.
            </p>
          </div>
        </Reveal>

        {/* Reporting world income */}
        <Reveal delay={60}>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-8 md:p-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand-600">
              Reporting world income
            </p>
            <h2 className="mt-4 text-2xl leading-snug text-ink md:text-3xl">
              If the CRA asks you to report your world income
            </h2>
            <div className="mt-4 h-px w-14 bg-gold" />
            <p className="mt-6 leading-relaxed text-ink-soft">
              If you received a letter from the CRA asking you to report your world income, you need
              to report your income from back home in Canadian dollars. How many years you report
              depends on when you became a resident of Canada:
            </p>

            <div className="mt-7 space-y-3">
              <div className="rounded-xl border-l-2 border-gold bg-paper p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-600">
                  Jan 1 – May 31
                </p>
                <p className="mt-2 text-sm font-semibold text-ink">
                  If you became a resident between January 1 and May 31
                </p>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                  Report the prior two years of foreign income in Canadian dollars.
                </p>
              </div>

              <div className="rounded-xl border-l-2 border-gold bg-paper p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-600">
                  After May 31
                </p>
                <p className="mt-2 text-sm font-semibold text-ink">
                  If you became a resident after May 31
                </p>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                  Report your foreign income for the prior year and the year you became a resident,
                  in Canadian dollars.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Step one — call */}
        <Reveal delay={100}>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-8 md:p-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand-600">
              Step one
            </p>
            <h2 className="mt-4 text-2xl leading-snug text-ink md:text-3xl">
              First, try calling the CRA
            </h2>
            <div className="mt-4 h-px w-14 bg-gold" />
            <p className="mt-6 leading-relaxed text-ink-soft">
              Call the CRA at{' '}
              <a
                href={CRA_PHONE_HREF}
                className="font-mono font-semibold text-brand-600 hover:text-brand-700"
              >
                {CRA_PHONE}
              </a>
              . Specify that you received a letter from the CRA saying they need your world income to
              calculate your benefits. If they accept your information over the phone, you're good —
              no form needed.
            </p>
          </div>
        </Reveal>

        {/* Step two — forms */}
        <Reveal delay={140}>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-8 md:p-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand-600">
              Step two
            </p>
            <h2 className="mt-4 text-2xl leading-snug text-ink md:text-3xl">
              If the CRA asks you to complete a form
            </h2>
            <div className="mt-4 h-px w-14 bg-gold" />
            <p className="mt-6 leading-relaxed text-ink-soft">
              Use whichever option applies to you. Each one can be done online or on paper.
            </p>

            <FormOption
              badge="Option 1"
              title="If you are single or have no children"
              body="Use Form RC151 — the GST/HST Credit and Canada Carbon Rebate application for people who became residents of Canada."
              onlineNote="The CRA has an online version of RC151. It's the quickest way — no printing, no postage, no trip to the post office."
              onlineLabel="Complete RC151 online"
              onlineHref={FORMS.rc151Online}
              mailBody="Download Form RC151, complete and sign it, and mail it through a Canada Post office (inside Shoppers Drug Mart or Rexall). The destination mailing address is on page 4 of the application."
              mailHref={FORMS.rc151Page}
            />

            <FormOption
              badge="Option 2"
              title="If you have children"
              body="Use Form RC66 — the Canada Child Benefits application, which also registers your children for the GST/HST credit."
              onlineNote="You can apply for child benefits directly through your CRA My Account instead of mailing the form."
              onlineLabel="Apply through CRA My Account"
              onlineHref={FORMS.rc66Online}
              mailBody="Download Form RC66, complete and sign it, and mail it through a Canada Post office (inside Shoppers Drug Mart or Rexall). The destination mailing address is on page 4 of the application. If you already completed this form for another reason, call the CRA first to confirm whether you need it again."
              mailHref={FORMS.rc66Page}
            />

            <p className="mt-6 text-sm leading-relaxed text-ink-soft">
              Not sure which one applies to you, or which years to report? Call the CRA at{' '}
              <a
                href={CRA_PHONE_HREF}
                className="font-mono font-semibold text-brand-600 hover:text-brand-700"
              >
                {CRA_PHONE}
              </a>{' '}
              — or just book with us and we'll handle it.
            </p>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={180}>
          <div className="relative mt-6 overflow-hidden rounded-2xl bg-navy-800 p-10 text-center">
            <SealMark className="left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 opacity-[0.09]" />
            <div className="relative">
              <h2 className="text-2xl text-white">Want us to handle it for you?</h2>
              <p className="mt-3 text-sm text-slate-300">
                We prepare benefit applications and respond to CRA letters on behalf of our clients.
              </p>
              <a
                href={SETMORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-block rounded-lg bg-gold px-8 py-3.5 text-sm font-semibold text-navy-900 transition-transform hover:-translate-y-0.5 hover:bg-amber-300"
              >
                Book Now
              </a>
            </div>
          </div>
        </Reveal>

        <p className="mt-8 text-xs leading-relaxed text-slate-500">
          The information on this page is general guidance and may change. For advice specific to
          your situation, please contact us or the CRA directly.
        </p>
      </section>
    </div>
  )
}