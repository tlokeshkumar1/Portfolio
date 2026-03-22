import { personal } from '../data'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { SiKaggle } from 'react-icons/si'
import { FaHackerrank } from 'react-icons/fa'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-bg2 border-t border-teal/10 py-10 px-[5%]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="text-center md:text-left">
          <p className="font-head font-extrabold text-teal text-lg tracking-tight">
            LK<span className="text-textpri">.</span>
          </p>
          <p className="font-mono text-xs text-textmut mt-1">
            Designed & Built by {personal.name}
          </p>
        </div>

        <p className="font-mono text-xs text-textmut text-center">
          © {year} {personal.name} · All rights reserved
        </p>

        <div className="flex items-center gap-4">
          {[
            { icon: <FaGithub size={16} />, href: personal.github, label: 'GitHub' },
            { icon: <FaLinkedin size={16} />, href: personal.linkedin, label: 'LinkedIn' },
            { icon: <FaHackerrank size={16} />, href: personal.hackerrank, label: 'HackerRank' },
            { icon: <SiKaggle size={16} />, href: personal.kaggle, label: 'Kaggle' },
            { icon: <FaEnvelope size={16} />, href: `mailto:${personal.email}`, label: 'Email' },
          ].map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-textmut hover:text-teal transition-all duration-200 hover:-translate-y-0.5"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Back to top */}
      <div className="text-center mt-8">
        <a
          href="#hero"
          className="font-mono text-xs text-textmut hover:text-teal transition-colors inline-flex items-center gap-1.5"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 10V2M2 6l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to top
        </a>
      </div>
    </footer>
  )
}
