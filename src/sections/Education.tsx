import { education } from '../data'
import { useReveal } from '../hooks/useReveal'

export default function Education() {
  const ref = useReveal() as React.RefObject<HTMLElement>

  return (
    <section id="education" ref={ref} className="py-24 px-[5%]">
      <div className="max-w-4xl mx-auto">
        <div className="section-label">Background</div>
        <h2 className="section-h2">Education</h2>
        <div className="section-divider" />

        <div className="relative">
          {/* Vertical spine */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-teal/40 via-teal/20 to-transparent hidden md:block" />

          <div className="space-y-6">
            {education.map((edu, i) => (
              <div
                key={i}
                className="reveal flex gap-8 items-start"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Icon dot */}
                <div className="hidden md:flex shrink-0 w-10 h-10 rounded-full bg-bg3 border border-teal/30 items-center justify-center text-lg mt-1">
                  {edu.icon}
                </div>

                {/* Card */}
                <div className="flex-1 glass-card p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-1">
                    <h3 className="font-head text-lg font-bold text-textpri leading-snug">{edu.degree}</h3>
                    <p className="text-teal text-sm mt-0.5 font-medium">{edu.institution}</p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                    <span className="font-mono text-xs text-textsec border border-teal/20 rounded px-3 py-1 bg-teal/5">
                      {edu.period}
                    </span>
                    <span className="font-mono text-xs text-teal font-medium">{edu.score}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
