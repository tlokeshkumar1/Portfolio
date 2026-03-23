import { useState, useEffect } from 'react'
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from 'react-icons/fa'
import { projects, personal, type ProjectCategory } from '../data'
import { useReveal } from '../hooks/useReveal'

const FILTERS: { label: string; value: ProjectCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'AI / ML', value: 'ai-ml' },
  { label: 'Full-Stack', value: 'full-stack' },
  { label: 'Backend', value: 'backend' },
]

interface GithubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  updated_at: string
}

export default function Projects() {
  const ref = useReveal() as React.RefObject<HTMLElement>
  const [active, setActive] = useState<ProjectCategory>('all')
  const [repos, setRepos] = useState<GithubRepo[]>([])
  const [reposLoading, setReposLoading] = useState(true)
  const [reposError, setReposError] = useState(false)

  const filtered = projects.filter(p => p.category.includes(active))

  // Re-trigger reveal animations when changing tabs, 
  // but only if the section has already been scrolled into view.
  useEffect(() => {
    const timer = setTimeout(() => {
      if (ref.current) {
        const filterContainer = ref.current.querySelector('.mb-10.reveal')
        if (filterContainer && filterContainer.classList.contains('visible')) {
          const newCards = ref.current.querySelectorAll('.glass-card.reveal:not(.visible)')
          newCards.forEach((node, i) => {
            setTimeout(() => {
              node.classList.add('visible')
            }, i * 80)
          })
        }
      }
    }, 50)
    return () => clearTimeout(timer)
  }, [active])

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${personal.githubUsername}/repos?sort=stars&per_page=6`,
      { headers: { Accept: 'application/vnd.github.v3+json' } }
    )
      .then(r => r.json())
      .then((data: GithubRepo[]) => {
        setRepos(Array.isArray(data) ? data.slice(0, 6) : [])
        setReposLoading(false)
      })
      .catch(() => {
        setReposError(true)
        setReposLoading(false)
      })
  }, [])

  return (
    <section id="projects" ref={ref} className="py-24 px-[5%]">
      <div className="max-w-6xl mx-auto">
        <div className="section-label">Work</div>
        <h2 className="section-h2">Projects</h2>
        <div className="section-divider" />

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 mb-10 reveal">
          {FILTERS.map(f => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`font-mono text-xs uppercase tracking-widest px-5 py-2 rounded border transition-all duration-200 ${
                active === f.value
                  ? 'border-teal text-teal bg-teal/10'
                  : 'border-teal/15 text-textsec hover:border-teal/50 hover:text-teal'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Project cards grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-20">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className={`reveal group relative glass-card p-6 flex flex-col gap-4 overflow-hidden ${
                project.featured ? 'border-teal/25' : ''
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Featured badge */}
              {project.featured && (
                <span className="absolute top-4 right-4 font-mono text-[0.62rem] text-teal border border-teal/30 rounded px-2 py-0.5 uppercase tracking-wider bg-teal/5">
                  Featured
                </span>
              )}

              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-teal/40 font-mono text-xs mb-1">
                    {String(i + 1).padStart(2, '0')}.
                  </div>
                  <h3 className="font-head text-lg font-bold text-textpri leading-snug group-hover:text-teal transition-colors duration-200">
                    {project.title}
                  </h3>
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 shrink-0 mt-1">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-textmut hover:text-teal transition-colors"
                      aria-label="GitHub"
                    >
                      <FaGithub size={17} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-textmut hover:text-teal transition-colors"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt size={14} />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-textsec text-sm leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Tech chips */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-teal/10">
                {project.tech.map(t => (
                  <span key={t} className="font-mono text-[0.68rem] text-teal/70 bg-teal/5 border border-teal/10 px-2 py-0.5 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Live Repos */}
        <div className="reveal">
          <div className="flex items-center gap-3 mb-6">
            <FaGithub size={18} className="text-teal" />
            <span className="font-head text-xl font-bold">Latest from GitHub</span>
            <span className="flex-1 h-px bg-teal/10" />
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-teal hover:underline flex items-center gap-1"
            >
              View all repos <FaExternalLinkAlt size={10} />
            </a>
          </div>

          {reposLoading && (
            <div className="grid md:grid-cols-3 gap-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="glass-card p-4 h-28 animate-pulse bg-bg3/50" />
              ))}
            </div>
          )}

          {reposError && (
            <p className="text-textmut font-mono text-sm text-center py-8">
              Could not load repositories. <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">View on GitHub →</a>
            </p>
          )}

          {!reposLoading && !reposError && repos.length > 0 && (
            <div className="grid md:grid-cols-3 gap-4">
              {repos.map(repo => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-4 flex flex-col gap-2 hover:border-teal/40 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm text-textpri group-hover:text-teal transition-colors font-medium truncate">
                      {repo.name}
                    </span>
                    <FaGithub size={13} className="text-textmut group-hover:text-teal transition-colors shrink-0" />
                  </div>

                  <p className="text-textsec text-xs leading-relaxed flex-1 line-clamp-2">
                    {repo.description || 'No description provided.'}
                  </p>

                  <div className="flex items-center gap-3 mt-auto pt-2 border-t border-teal/10 font-mono text-[0.68rem] text-textmut">
                    {repo.language && (
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-teal inline-block" />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <FaStar size={10} /> {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCodeBranch size={10} /> {repo.forks_count}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
