import { certifications } from '../data'
import { useReveal } from '../hooks/useReveal'
import { FaCertificate } from 'react-icons/fa'

export default function Certifications() {
  const ref = useReveal() as React.RefObject<HTMLElement>

  return (
    <section id="certifications" ref={ref} className="py-24 px-[5%] bg-bg2">
      <div className="max-w-5xl mx-auto">
        <div className="section-label">Credentials</div>
        <h2 className="section-h2">Certifications</h2>
        <div className="section-divider" />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="reveal glass-card p-5 flex flex-col gap-3 hover:scale-[1.02] transition-transform duration-200"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Gradient icon strip */}
              <div className={`w-8 h-1 rounded-full bg-gradient-to-r ${cert.color}`} />

              <FaCertificate size={22} className="text-teal/60" />

              <div>
                <p className="font-head text-sm font-bold text-textpri leading-snug mb-1">
                  {cert.title}
                </p>
                <p className="font-mono text-[0.7rem] text-teal/80">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
