// src/components/Navbar.jsx
import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { SETMORE_URL, BUSINESS } from '../config'
import logo from '../assets/logo.png'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/benefits', label: 'Benefits' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `relative text-sm font-medium transition-colors ${
      isActive ? 'text-brand-600' : 'text-ink-soft hover:text-brand-600'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt={BUSINESS.name} className="h-12 w-12 rounded-full object-cover" />
            <span className="leading-tight">
              <span className="block font-display text-lg font-semibold text-ink">
                Nazrul Accounting <span className="text-brand-600">&amp; Tax</span>
              </span>
              <span className="hidden font-mono text-[9px] uppercase tracking-[0.24em] text-ink-soft sm:block">
                {BUSINESS.tagline}
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
            <a
              href={SETMORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              Book Now
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-ink hover:bg-slate-100 lg:hidden"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="space-y-1 px-4 py-3">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2.5 text-base font-medium ${
                    isActive ? 'bg-brand-50 text-brand-600' : 'text-ink-soft hover:bg-slate-50'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href={SETMORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block rounded-lg bg-brand-600 px-3 py-2.5 text-center text-base font-semibold text-white"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}