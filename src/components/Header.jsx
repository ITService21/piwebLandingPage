import { useState, useEffect } from 'react'
import { assetPath } from '../lib/navigation'

const navLinks = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function Logo() {
  return (
    <a href="#hero" className="flex items-center gap-2 shrink-0">
      <img src={assetPath('/logo.png')} alt="Piweb Technology" className="h-7 w-auto rounded-lg" />
      <span className="text-[15px] font-display font-bold text-secondary tracking-tight">Piweb</span>
    </a>
  )
}

function openCallPopup() {
  window.dispatchEvent(new Event('openCallPopup'))
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="fixed top-12 left-0 right-0 z-50 px-4 sm:px-6">
      <div className="max-w-[1400px] mx-auto">
        <div
          className={`fire-border relative mx-auto max-w-[1180px] flex items-center justify-between gap-4 rounded-full border transition-all duration-300 ${
            scrolled
              ? 'bg-white/75 backdrop-blur-xl border-secondary/10 shadow-[0_10px_35px_rgba(11,14,26,0.1)] px-4 sm:px-5 py-2'
              : 'bg-white/40 backdrop-blur-md border-white/50 shadow-[0_10px_30px_rgba(11,14,26,0.05)] px-5 sm:px-6 py-2.5'
          }`}
        >
          <Logo />

          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium tracking-wide uppercase text-secondary/60 hover:text-secondary transition-colors link-underline"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <button
              type="button"
              onClick={openCallPopup}
              className="text-[13px] font-semibold text-secondary/70 hover:text-primary transition-colors cursor-pointer"
            >
              +91 93518 70445
            </button>
            <a href="#contact" className="btn-primary py-2.5 px-5">
              Enquiry Now <span aria-hidden="true">→</span>
            </a>
          </div>

          <button
            type="button"
            className="lg:hidden p-1.5 -mr-1 text-secondary"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        <div
          className={`mx-auto max-w-[1180px] lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-[30rem] opacity-100 mt-2' : 'max-h-0 opacity-0'
          }`}
        >
          <nav
            className="rounded-3xl border border-secondary/10 bg-paper/95 backdrop-blur-xl shadow-[0_20px_45px_rgba(11,14,26,0.12)] px-5 pb-5 pt-2"
            aria-label="Mobile navigation"
          >
            <ul className="space-y-0.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block py-3 text-base font-medium text-secondary/70 hover:text-secondary transition-colors border-b border-secondary/6"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5 space-y-3">
              <button
                type="button"
                onClick={() => {
                  openCallPopup()
                  closeMenu()
                }}
                className="btn-secondary w-full"
              >
                Call +91 93518 70445
              </button>
              <a href="#contact" onClick={closeMenu} className="btn-primary w-full">
                Enquiry Now <span aria-hidden="true">→</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
