import { useReveal } from '../hooks/useReveal.js'

const TIMELINE = [
  {
    year: '2014 – 2023',
    title: 'Matriculation, Science (Biology)',
    place: "St. Anthony's High School",
  },
  {
    year: '2024 – Present',
    title: 'Higher Diploma in Software Engineering (HDSE)',
    place: 'Aptech',
  },
]

export default function Education() {
  const [ref, visible] = useReveal()

  return (
    <section id="education" className="section">
      <div className="container">
        <div ref={ref}>
          <span className={`eyebrow-label reveal ${visible ? 'is-visible' : ''}`}>Education</span>
          <h2 className={`section-heading reveal reveal-delay-1 ${visible ? 'is-visible' : ''}`}>
            Where I&apos;ve learned the fundamentals.
          </h2>
        </div>

        <div style={{ maxWidth: 640 }}>
          {TIMELINE.map((item, i) => (
            <TimelineRow key={item.title} item={item} isLast={i === TIMELINE.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineRow({ item, isLast }) {
  const [ref, visible] = useReveal()
  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`} style={{ display: 'flex', gap: 24 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: 'var(--gradient)', flexShrink: 0, marginTop: 6 }} />
        {!isLast && <div style={{ width: 2, flex: 1, background: 'var(--line)', margin: '4px 0' }} />}
      </div>
      <div style={{ paddingBottom: 40 }}>
        <span style={{ fontSize: '0.85rem', color: 'var(--cyan)', fontFamily: 'var(--font-display)' }}>{item.year}</span>
        <h3 style={{ fontSize: '1.15rem', marginTop: 6 }}>{item.title}</h3>
        <p style={{ color: 'var(--text-muted)', marginTop: 4 }}>{item.place}</p>
      </div>
    </div>
  )
}
