import { useReveal } from '../hooks/useReveal.js'

export default function About() {
  const [ref, visible] = useReveal()

  return (
    <section id="about" className="section">
      <div className="container about-grid" ref={ref}>
        <div className={`reveal ${visible ? 'is-visible' : ''}`}>
          <span className="eyebrow-label">About</span>
          <h2 className="section-heading" style={{ marginBottom: 0 }}>A developer who learns fast and finishes what he starts.</h2>
        </div>
        <div className={`reveal reveal-delay-1 ${visible ? 'is-visible' : ''}`} style={{ color: 'var(--text-muted)', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: 18 }}>
          <p>
            I recently completed my matriculation in Science (Biology) at St. Anthony&apos;s High School,
            and I&apos;m now pursuing a Higher Diploma in Software Engineering at Aptech. Along the way
            I&apos;ve built a solid command of front-end and back-end fundamentals.
          </p>
          <p>
            People who work with me point to the same things: I pick up new tools quickly, communicate
            clearly, and stay steady when a problem needs solving. I care about writing code that
            actually works for the people using it.
          </p>
          <div style={{ display: 'flex', gap: 32, marginTop: 8, flexWrap: 'wrap' }}>
            {['Communication', 'Problem solving', 'Team work', 'Time management'].map((item) => (
              <span key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.9rem' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--cyan)' }} />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
