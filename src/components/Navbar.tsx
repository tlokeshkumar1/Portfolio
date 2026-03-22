import { useState, useEffect } from 'react'
import { personal } from '../data'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = NAV_LINKS.map(l => l.href.replace('#', ''))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(`#${id}`)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] h-16 transition-all duration-300 ${
        scrolled ? 'bg-bg/90 backdrop-blur-xl border-b border-teal/10 shadow-lg' : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <a href="#hero" className="font-head text-xl font-extrabold text-teal tracking-tight hover:opacity-80 transition-opacity">
        LK<span className="text-textpri">.</span>
      </a>

      {/* Desktop links */}
      <ul className="hidden lg:flex items-center gap-8">
        {NAV_LINKS.map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              className={`font-mono text-[0.72rem] uppercase tracking-widest transition-colors duration-200 relative group ${
                active === link.href ? 'text-teal' : 'text-textsec hover:text-teal'
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 right-0 h-px bg-teal transition-transform duration-200 ${active === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </a>
          </li>
        ))}
      </ul>

      {/* Resume CTA */}
      <a
        href={personal.resumeUrl}
        download
        className="hidden lg:inline-flex items-center gap-2 btn-outline text-xs py-2 px-4"
      >
        <span>Resume</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1v7M3 5l3 3 3-3M1 10h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </a>

      {/* Hamburger */}
      <button
        className="lg:hidden flex flex-col gap-1.5 p-1"
        onClick={() => setMenuOpen(v => !v)}
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-teal transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`w-6 h-0.5 bg-teal transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`w-6 h-0.5 bg-teal transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-bg2/95 backdrop-blur-xl border-b border-teal/10 py-6 px-[5%] flex flex-col gap-4">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-textsec hover:text-teal transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href={personal.resumeUrl} download className="btn-outline text-xs py-2 px-4 self-start mt-2">
            Download Resume
          </a>
        </div>
      )}
    </nav>
  )
}
