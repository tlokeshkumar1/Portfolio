import { skillGroups } from '../data'
import { useReveal } from '../hooks/useReveal'

export default function Skills() {
  const ref = useReveal() as React.RefObject<HTMLElement>

  return (
    <section id="skills" ref={ref} className="py-24 px-[5%] bg-bg2">
      <div className="max-w-5xl mx-auto">
        <div className="section-label">Technical Skills</div>
        <h2 className="section-h2">What I Work With</h2>
        <div className="section-divider" />

        <div className="space-y-8">
          {skillGroups.map((group, gi) => (
            <div key={gi} className="reveal" style={{ transitionDelay: `${gi * 80}ms` }}>
              {/* Group header */}
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs text-teal uppercase tracking-widest">{group.label}</span>
                <span className="flex-1 h-px bg-teal/10" />
              </div>

              {/* Chips */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span key={skill} className="chip">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
