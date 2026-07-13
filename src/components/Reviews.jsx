// src/components/Reviews.jsx
import { GOOGLE_REVIEWS } from '../config'
import { REVIEWS } from '../data/Reviews'
import Reveal from './Reveal'

// The gold stars on the logo are the same gold as these review stars — that's
// deliberate.
function Stars({ count = 5, className = '' }) {
  return (
    <span
      className={`inline-flex gap-0.5 ${className}`}
      role="img"
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className={`h-4 w-4 ${i < count ? 'text-gold' : 'text-slate-300'}`}
        >
          <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L3.82 21z" />
        </svg>
      ))}
    </span>
  )
}

export default function Reviews() {
  return (
    <section className="border-t border-slate-200 bg-paper">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        {/* Heading + rating summary */}
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand-600">
                Reviews
              </p>
              <h2 className="mt-4 text-3xl leading-tight text-ink md:text-4xl">
                What our clients say
              </h2>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white px-7 py-5">
              <div className="flex items-center gap-4">
                <span className="font-display text-4xl font-semibold leading-none text-ink">
                  {GOOGLE_REVIEWS.rating.toFixed(1)}
                </span>
                <div>
                  <Stars count={Math.round(GOOGLE_REVIEWS.rating)} />
                  <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft">
                    {GOOGLE_REVIEWS.count} reviews on Google
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Review cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <Reveal key={`${review.name}-${i}`} delay={i * 80}>
              <figure className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-600/5">
                <Stars count={review.stars} />
                <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-ink-soft">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-slate-100 pt-4">
                  <p className="text-sm font-semibold text-ink">{review.name}</p>
                  <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                    {review.date}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* CTA to Google */}
        <Reveal delay={140}>
          <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl bg-navy-800 px-8 py-8 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="font-display text-xl font-semibold text-white">Worked with us?</h3>
              <p className="mt-1.5 text-sm text-slate-300">
                Your review helps other people across the GTA find honest accounting help.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={GOOGLE_REVIEWS.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/5"
              >
                Read all reviews
              </a>
              <a
                href={GOOGLE_REVIEWS.writeReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-navy-900 transition-transform hover:-translate-y-0.5 hover:bg-amber-300"
              >
                Leave a review
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}