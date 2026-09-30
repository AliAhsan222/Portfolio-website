import { useReveal } from '../hooks/useReveal.js'

// PLACEHOLDER PROJECTS — replace title, description, tech and link with your real work.
const PROJECTS = [
  {
    title: 'Project Title One',
    description:
      'Replace this with a short summary: what the project does, who it is for, and the problem it solves.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: '#',
  },
  {
    title: 'Project Title Two',
    description:
      'Replace this with a short summary of a PHP/MySQL build — what data it manages and what you built end to end.',
    tech: ['PHP', 'MySQL', 'Bootstrap'],
    link: '#',
  },
  {
    title: 'Project Title Three',
    description:
      'Replace this with a short summary of an ASP.NET Core MVC or WordPress project and your specific contribution.',
    tech: ['ASP.NET Core MVC', 'SQL Server'],
    link: '#',
  },
]

export default function Projects() {
  const [ref, visible] = useReveal()

  return (
    <section id="projects" className="section">
      <div className="container">
        <div ref={ref}>
          <span className={`eyebrow-label reveal ${visible ? 'is-visible' : ''}`}>Projects</span>
          <h2 className={`section-heading reveal reveal-delay-1 ${visible ? 'is-visible' : ''}`}>
            A few things I&apos;ve built. Swap these placeholders for your own work.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const [ref, visible] = useReveal()
  return (
    <a
      href={project.link}
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''}`}
      style={{
        transitionDelay: `${(index % 3) * 0.1}s`,
        display: 'block',
        borderRadius: 18,
        padding: '1px',
        background: 'var(--line)',
        transition: 'background 0.3s ease, transform 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'var(--gradient)'
        e.currentTarget.style.transform = 'translateY(-4px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'var(--line)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <div style={{ background: 'var(--bg-raised)', borderRadius: 17, overflow: 'hidden', height: '100%' }}>
        <div
          aria-hidden="true"
          style={{
            height: 120,
            background: 'linear-gradient(135deg, rgba(139,92,246,0.25), rgba(34,211,238,0.18))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
              backgroundSize: '14px 14px',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2.2rem',
              fontWeight: 700,
              color: 'rgba(233,236,245,0.85)',
              position: 'relative',
            }}
          >
            {project.title.split(' ').map((w) => w[0]).slice(0, 2).join('')}
          </span>
        </div>
        <div style={{ padding: 28 }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: 10 }}>{project.title}</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: 20 }}>
          {project.description}
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {project.tech.map((t) => (
            <span
              key={t}
              style={{
                fontSize: '0.78rem',
                padding: '5px 12px',
                borderRadius: 999,
                border: '1px solid var(--line)',
                color: 'var(--cyan)',
              }}
            >
              {t}
            </span>
          ))}
        </div>
        </div>
      </div>
    </a>
  )
}
