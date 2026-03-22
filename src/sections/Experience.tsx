import { experience } from '../data'
import { useReveal } from '../hooks/useReveal'
import { FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa'

export default function Experience() {
  const ref = useReveal() as React.RefObject<HTMLElement>

  return (
    <section id="experience" ref={ref} className="py-24 px-[5%] bg-bg2">
      <div className="max-w-4xl mx-auto">
        <div className="section-label">Career</div>
        <h2 className="section-h2">Experience</h2>
        <div className="section-divider" />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-teal/40 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <div
                key={i}
                className="reveal flex gap-8 items-start"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex shrink-0 w-10 h-10 rounded-full bg-teal/10 border border-teal/40 items-center justify-center mt-1">
                  <FaBriefcase size={14} className="text-teal" />
                </div>

                {/* Card */}
                <div className="flex-1 glass-card p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-head text-xl font-bold text-textpri">{exp.role}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-teal font-medium text-sm">{exp.company}</span>
                        <span className="text-textmut text-xs">·</span>
                        <span className="flex items-center gap-1 text-textmut text-xs font-mono">
                          <FaMapMarkerAlt size={10} />
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-teal/70 border border-teal/20 rounded px-3 py-1 bg-teal/5 self-start sm:self-auto whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-2 text-textsec text-sm leading-relaxed">
                        <span className="text-teal mt-1.5 shrink-0">▹</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Open to work note */}
            <div className="reveal flex gap-8 items-start" style={{ transitionDelay: '150ms' }}>
              <div className="hidden md:flex shrink-0 w-10 h-10 rounded-full bg-teal/5 border border-dashed border-teal/30 items-center justify-center mt-1">
                <span className="text-teal text-lg leading-none">?</span>
              </div>
              <div className="flex-1 border border-dashed border-teal/20 rounded-lg p-5 text-center">
                <p className="text-textsec text-sm">
                  <span className="text-teal font-medium">Open to new opportunities.</span>{' '}
                  Looking for full-time or contract AI & Full-Stack engineering roles.
                </p>
                <a href="#contact" className="btn-primary text-xs py-2 px-5 mt-4 inline-block">
                  Hire Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
