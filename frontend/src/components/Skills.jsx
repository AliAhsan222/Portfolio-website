import { useReveal } from '../hooks/useReveal.js'

const SKILLS = [
  { name: 'HTML', note: 'Semantic markup' },
  { name: 'CSS', note: 'Layout & responsive design' },
  { name: 'JavaScript', note: 'Interactive front-ends' },
  { name: 'React', note: 'Component-based UIs' },
  { name: 'Node.js', note: 'Server-side JavaScript' },
  { name: 'MongoDB', note: 'NoSQL databases' },
  { name: 'Bootstrap', note: 'Rapid UI building' },
  { name: 'MySQL', note: 'Relational data' },
  { name: 'PHP', note: 'Server-side logic' },
  { name: 'WordPress', note: 'CMS builds' },
  { name: 'SQL Server', note: 'Database management' },
  { name: 'ASP.NET Core MVC', note: 'Web application framework' },
]

const LEARNING = ['Flutter', 'Dart']

export default function Skills() {
  const [ref, visible] = useReveal()

  return (
    <section id="skills" className="section">
      <div className="container">
        <div ref={ref}>
          <span className={`eyebrow-label reveal ${visible ? 'is-visible' : ''}`}>Skills</span>
          <h2 className={`section-heading reveal reveal-delay-1 ${visible ? 'is-visible' : ''}`}>
            Tools I reach for to turn an idea into a working product.
          </h2>
        </div>

        <div
          className="skills-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: 16,
          }}
        >
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>

        <div style={{ marginTop: 56 }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: 16 }}>
            Currently learning
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {LEARNING.map((item) => (
              <span
                key={item}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.9rem',
                  padding: '9px 18px',
                  borderRadius: 999,
                  border: '1px dashed var(--line)',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gradient)' }} />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillCard({ skill, index }) {
  const [ref, visible] = useReveal()
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''}`}
      style={{
        transitionDelay: `${(index % 3) * 0.08}s`,
        border: '1px solid var(--line)',
        borderRadius: 14,
        padding: '20px 22px',
        background: 'var(--bg-raised)',
        transition: 'transform 0.25s ease, border-color 0.25s ease, opacity 0.7s ease',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.borderColor = 'var(--violet)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.borderColor = 'var(--line)'
      }}
    >
      <h3 style={{ fontSize: '1.05rem', marginBottom: 6 }}>{skill.name}</h3>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{skill.note}</p>
    </div>
  )
}
