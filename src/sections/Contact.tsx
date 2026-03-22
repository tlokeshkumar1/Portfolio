import { useState, useRef, FormEvent } from 'react'
import { personal } from '../data'
import { useReveal } from '../hooks/useReveal'
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

declare global { interface Window { emailjs: any } }

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const ref = useReveal() as React.RefObject<HTMLElement>
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('Something went wrong. Please email me directly.')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    // Guard against common config mistakes to avoid opaque 400 responses.
    const hasMissingConfig = !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY
    const hasPlaceholderConfig = [EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY].some(v =>
      String(v).toLowerCase().includes('your_')
    )

    if (hasMissingConfig || hasPlaceholderConfig) {
      setErrorMessage('Email form is not configured yet. Add VITE_EMAILJS_* values in .env and restart dev server.')
      setStatus('error')
      return
    }

    setStatus('sending')
    setErrorMessage('Something went wrong. Please email me directly.')

    // Dynamically load EmailJS SDK if not present
    if (typeof window.emailjs === 'undefined') {
      const script = document.createElement('script')
      script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js'
      script.onerror = () => {
        setErrorMessage('Unable to load EmailJS SDK. Check your network connection and try again.')
        setStatus('error')
      }
      script.onload = () => sendEmail()
      document.head.appendChild(script)
    } else {
      sendEmail()
    }
  }

  const sendEmail = () => {
    if (!formRef.current) return
    window.emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      })
      .catch((err: { text?: string; message?: string }) => {
        const reason = err?.text || err?.message || ''
        setErrorMessage(`Unable to send message (${reason || 'unknown error'}). Please email me directly.`)
        setStatus('error')
      })
  }

  const contactInfo = [
    {
      icon: <FaEnvelope size={16} />,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: <FaMapMarkerAlt size={16} />,
      label: 'Location',
      value: personal.location,
      href: 'https://maps.google.com/?q=Hyderabad,India',
    },
  ]

  return (
    <section id="contact" ref={ref} className="py-24 px-[5%]">
      <div className="max-w-5xl mx-auto">
        <div className="section-label">Get In Touch</div>
        <h2 className="section-h2">Contact</h2>
        <div className="section-divider" />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left — info */}
          <div className="reveal-left space-y-8">
            <p className="text-textsec leading-relaxed">
              I'm currently open to <span className="text-teal font-medium">full-time and contract</span> opportunities
              in AI & Full-Stack Engineering. Whether you have a project, a role, or just want to connect — drop me a message!
            </p>

            <div className="space-y-4">
              {contactInfo.map(info => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.label === 'Location' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 glass-card px-5 py-4 hover:border-teal/40 group"
                >
                  <span className="text-teal group-hover:scale-110 transition-transform">{info.icon}</span>
                  <div>
                    <p className="font-mono text-[0.68rem] text-textmut uppercase tracking-wider">{info.label}</p>
                    <p className="text-textpri text-sm font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-4 pt-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-textsec hover:text-teal transition-colors text-sm font-mono"
              >
                <FaGithub size={16} /> GitHub
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-textsec hover:text-teal transition-colors text-sm font-mono"
              >
                <FaLinkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal-right">
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-7 space-y-5">
              {/* Honeypot spam protection */}
              <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

              <div>
                <label className="font-mono text-xs text-textmut uppercase tracking-wider block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full bg-bg3 border border-teal/15 rounded px-4 py-3 text-textpri text-sm placeholder:text-textmut focus:outline-none focus:border-teal/60 transition-colors"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-textmut uppercase tracking-wider block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full bg-bg3 border border-teal/15 rounded px-4 py-3 text-textpri text-sm placeholder:text-textmut focus:outline-none focus:border-teal/60 transition-colors"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-textmut uppercase tracking-wider block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full bg-bg3 border border-teal/15 rounded px-4 py-3 text-textpri text-sm placeholder:text-textmut focus:outline-none focus:border-teal/60 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full btn-primary text-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="font-mono text-xs text-teal text-center pt-1">
                  ✓ Message sent! I'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="font-mono text-xs text-red-400 text-center pt-1">
                  {errorMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
