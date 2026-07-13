// src/components/PageHero.jsx
// The navy hero used on every inner page. The concentric rings echo the
// engraved seal in the logo.

export function SealMark({ className = '' }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 200"
      fill="none"
      className={`pointer-events-none absolute text-gold ${className}`}
    >
      <circle cx="100" cy="100" r="96" stroke="currentColor" strokeWidth="0.9" />
      <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.4" />
    </svg>
  )
}

export default function PageHero({ eyebrow, title, subtitle, children }) {
  return (
    <section className="relative overflow-hidden bg-navy-800 text-white">
      <SealMark className="left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 opacity-[0.08]" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        {eyebrow && (
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
        )}
        <h1 className="mt-5 text-4xl leading-[1.12] text-white md:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">{subtitle}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
    </section>
  )
}