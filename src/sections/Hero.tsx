import { useEffect, useRef } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin, FaEnvelope, FaHackerrank } from 'react-icons/fa'
import { SiKaggle } from 'react-icons/si'
import { personal } from '../data'

declare global { interface Window { tsParticles: any } }

export default function Hero() {
  const canvasRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Dynamically load tsparticles from CDN if not already present
    if (typeof window.tsParticles === 'undefined') {
      const script = document.createElement('script')
      script.src = 'https://cdn.jsdelivr.net/npm/@tsparticles/bundle@3.1.0/tsparticles.bundle.min.js'
      script.onload = initParticles
      document.head.appendChild(script)
    } else {
      initParticles()
    }

    function initParticles() {
      if (!window.tsParticles) return
      window.tsParticles.load({
        id: 'tsparticles',
        options: {
          background: { color: { value: 'transparent' } },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: 'repulse' }, resize: true },
            modes: { repulse: { distance: 80, duration: 0.4 } },
          },
          particles: {
            color: { value: '#06B6D4' },
            links: { color: '#06B6D4', distance: 130, enable: true, opacity: 0.15, width: 1 },
            move: { direction: 'none', enable: true, outModes: { default: 'bounce' }, speed: 0.8 },
            number: { density: { enable: true, area: 900 }, value: 60 },
            opacity: { value: 0.25 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        },
      })
    }
    return () => {
      if (window.tsParticles?.domItem) {
        const inst = window.tsParticles.domItem(0)
        inst?.destroy()
      }
    }
  }, [])

  const socials = [
    { icon: <FaGithub size={18} />, href: personal.github, label: 'GitHub' },
    { icon: <FaLinkedin size={18} />, href: personal.linkedin, label: 'LinkedIn' },
    { icon: <FaHackerrank size={18} />, href: personal.hackerrank, label: 'HackerRank' },
    { icon: <SiKaggle size={18} />, href: personal.kaggle, label: 'Kaggle' },
    { icon: <FaEnvelope size={18} />, href: `mailto:${personal.email}`, label: 'Email' },
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-[5%] pt-16">
      {/* Particles */}
      <div id="tsparticles" ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl animate-fade-up">
        {/* Tag */}
        <p className="section-label mb-5">
          Hi, welcome to my portfolio
        </p>

        {/* Name */}
        <h1 className="font-head text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-4">
          I'm <span className="text-teal">{personal.shortName}</span>
        </h1>

        {/* Typed roles */}
        <div className="font-head text-2xl md:text-3xl font-semibold text-textsec mb-6 flex items-center gap-2 min-h-[2.5rem]">
          <TypeAnimation
            sequence={personal.roles.flatMap(r => [r, 2200])}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            cursor
          />
        </div>

        {/* Bio */}
        <p className="text-textsec text-base md:text-lg max-w-xl mb-8 leading-relaxed">
          {personal.tagline}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-10">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href={personal.resumeUrl} download className="btn-outline">
            Download Resume
          </a>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-5">
          {socials.map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-textmut hover:text-teal transition-all duration-200 hover:-translate-y-1"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll arrow */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-teal animate-bounce-slow z-10"
        aria-label="Scroll down"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 3v14M4 11l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </section>
  )
}
