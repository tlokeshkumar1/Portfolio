import { useRef } from 'react'
import { personal, stats } from '../data'
import { useReveal } from '../hooks/useReveal'

export default function About() {
  const ref = useReveal() as React.RefObject<HTMLElement>

  return (
    <section id="about" ref={ref} className="py-24 px-[5%]">
      <div className="max-w-6xl mx-auto">
        <div className="section-label">About Me</div>
        <h2 className="section-h2">Who I Am</h2>
        <div className="section-divider" />

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Profile image */}
          <div className="reveal-left relative flex justify-center md:justify-start">
            <div className="relative">
              <img
                src="/headshot.jpg"
                alt="Lokesh Kumar"
                className="w-64 h-64 md:w-80 md:h-80 rounded-lg object-cover border border-teal/20"
              />
              {/* Decorative border offset */}
              <div className="absolute top-3.5 left-3.5 right-[-14px] bottom-[-14px] border border-teal/40 rounded-lg -z-10" />
            </div>
          </div>

          {/* Text */}
          <div className="reveal">
            <p className="text-textsec leading-relaxed mb-4">
              I'm a <span className="text-teal font-medium">B.Tech (IT) graduate</span> from{' '}
              <span className="text-textpri">Vignana Bharathi Institute of Technology</span>, Hyderabad, specialising in{' '}
              <span className="text-teal font-medium">Generative AI, LLMs, RAG pipelines,</span> and{' '}
              <span className="text-teal font-medium">agentic frameworks</span>.
            </p>
            <p className="text-textsec leading-relaxed mb-4">
              I sit at the intersection of backend engineering and applied AI — building production-grade systems
              that combine intelligent reasoning with robust full-stack architecture. My stack spans{' '}
              <span className="text-textpri">React, FastAPI, LangChain, PyTorch,</span> and cloud platforms.
            </p>
            <p className="text-textsec leading-relaxed mb-8">
              I'm actively seeking <span className="text-teal font-medium">Full-Time or Contract</span> roles in AI & Full-Stack engineering where I can build systems that actually matter.
            </p>

            {/* Quick info */}
            <div className="grid grid-cols-2 gap-3 mb-6 font-mono text-xs">
              {[
                ['Location', personal.location],
                ['Education', 'B.Tech IT, GPA 7.39'],
                ['Languages', 'English · Telugu · Hindi'],
                ['Availability', 'Open to Opportunities'],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-2">
                  <span className="text-teal shrink-0">{k}:</span>
                  <span className="text-textsec">{v}</span>
                </div>
              ))}
            </div>

            <a href={`mailto:${personal.email}`} className="btn-primary text-sm py-2.5 px-6">
              Get In Touch
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {stats.map((s, i) => (
            <div
              key={i}
              className="reveal glass-card p-5 text-center"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="font-head text-4xl font-extrabold text-teal mb-1">{s.value}</div>
              <div className="font-mono text-[0.7rem] text-textmut uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
