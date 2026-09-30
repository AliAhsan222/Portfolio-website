import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu when the screen grows past the breakpoint
  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 700) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const solid = scrolled || open

  return (
    <header
      className="site-header"
      style={{
        background: solid ? 'rgba(10,12,20,0.92)' : 'transparent',
        backdropFilter: solid ? 'blur(10px)' : 'none',
        WebkitBackdropFilter: solid ? 'blur(10px)' : 'none',
      }}
    >
      <nav className="container nav-bar" aria-label="Main">
        <a href="#top" className="nav-logo" onClick={() => setOpen(false)}>
          Ali Ahsan
        </a>

        {/* Desktop links (hidden under 700px by CSS) */}
        <div className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </div>

        {/* Hamburger (visible under 700px by CSS) */}
        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span style={{ transform: open ? 'translateY(7px) rotate(45deg)' : 'none' }} />
          <span style={{ opacity: open ? 0 : 1 }} />
          <span style={{ transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div className="nav-mobile-panel">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}