import { useReveal } from '../hooks/useReveal.js'

const TRAITS = ['Communication', 'Problem solving', 'Team work', 'Time management']

export default function About() {
  const [ref, visible] = useReveal()
  const v = visible ? 'is-visible' : ''

  return (
    <section id="about" className="section">
      <div className="container about-grid" ref={ref}>
        <div className={`reveal ${v}`}>
          <span className="eyebrow-label">About</span>
          <h2 className="section-heading about-heading">
            A developer who learns fast and finishes what he starts.
          </h2>
        </div>

        <div className={`about-text reveal reveal-delay-1 ${v}`}>
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

          <ul className="trait-list">
            {TRAITS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}