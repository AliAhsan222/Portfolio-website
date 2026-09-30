import { useRef } from 'react'
import Robot from './Robot.jsx'

export default function Hero() {
  const heroRef = useRef(null)

  return (
    <section
      id="top"
      ref={heroRef}
      style={{
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* dot-grid texture */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(233,236,245,0.06) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 90%)',
          pointerEvents: 'none',
        }}
      />

      {/* soft ambient glows */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-10%',
          width: 480,
          height: 480,
          background: 'radial-gradient(circle, rgba(139,92,246,0.2), transparent 70%)',
          filter: 'blur(10px)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-8%',
          width: 380,
          height: 380,
          background: 'radial-gradient(circle, rgba(34,211,238,0.12), transparent 70%)',
          filter: 'blur(10px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container hero-grid">
        <div>
          <span className="eyebrow-label">Web Developer · Karachi, Pakistan</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4rem)', lineHeight: 1.08 }}>
            Syed Ali Ahsan builds <span className="gradient-text">clean, functional</span> web experiences.
          </h1>
          <p style={{ marginTop: 24, maxWidth: 480, color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Currently completing a Higher Diploma in Software Engineering at Aptech, with hands-on
            work across the MERN stack (MongoDB, Express, React, Node.js), PHP, MySQL and ASP.NET
            Core MVC. I like picking up new tools fast and shipping things that work.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View my work</a>
            <a href="#contact" className="btn btn-ghost">Get in touch</a>
          </div>
        </div>

        <div className="hero-robot">
          <Robot heroRef={heroRef} />
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        style={{
          position: 'absolute',
          bottom: 36,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6,
          color: 'var(--text-muted)',
          fontSize: '0.78rem',
        }}
      >
        <span>Scroll</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ animation: 'bob 1.8s ease-in-out infinite' }}>
          <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  )
}
