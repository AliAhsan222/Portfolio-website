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

        <div className="skills-grid">
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>

        <div className="learning">
          <p className="learning-label">Currently learning</p>
          <div className="learning-list">
            {LEARNING.map((item) => (
              <span key={item} className="learning-chip">
                <span className="learning-dot" />
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
      className={`skill-card reveal ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${(index % 3) * 0.08}s` }}
    >
      <h3 className="skill-name">{skill.name}</h3>
      <p className="skill-note">{skill.note}</p>
    </div>
  )
}