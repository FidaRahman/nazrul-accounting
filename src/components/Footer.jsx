// src/components/Footer.jsx
import { Link } from 'react-router-dom'
import { BUSINESS, SETMORE_URL } from '../config'
import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3 text-white">
            <img src={logo} alt="" className="h-12 w-12 rounded-full object-cover" />
            <span className="font-display text-lg font-semibold leading-tight">
              Nazrul Accounting
              <br />&amp; Tax
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-slate-400">
            Accounting, income tax and payroll for corporate, personal, charity and
            not-for-profit clients across the GTA.
          </p>
          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.24em] text-gold">
            {BUSINESS.tagline}
          </p>
        </div>

        <div>
          <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-white">Company</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/benefits" className="hover:text-white">Benefits</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-white">Services</h3>
          <ul className="mt-5 space-y-2.5 text-sm text-slate-400">
            <li>Personal Tax Return</li>
            <li>Corporate Tax Return</li>
            <li>Bookkeeping</li>
            <li>Payroll</li>
            <li>GST/HST</li>
            <li>Charity &amp; Not-for-Profit</li>
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-white">Contact</h3>
          <ul className="mt-5 space-y-2.5 text-sm text-slate-400">
            <li>{BUSINESS.addressLine1}</li>
            <li>{BUSINESS.addressLine2}</li>
            <li>
              <a href={BUSINESS.phoneHref} className="font-mono hover:text-white">{BUSINESS.phone}</a>
            </li>
            <li>
              <a href={`mailto:${BUSINESS.email}`} className="hover:text-white">{BUSINESS.email}</a>
            </li>
            <li className="pt-2 text-slate-500">{BUSINESS.hours}</li>
          </ul>
          <a
            href={SETMORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-amber-300"
          >
            Book Now
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 px-4 py-6 font-mono text-[10px] uppercase tracking-[0.15em] text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {BUSINESS.legalName}</p>
          <p>{BUSINESS.founder}</p>
        </div>
      </div>
    </footer>
  )
}