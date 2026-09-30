import { useState } from 'react'
import { useReveal } from '../hooks/useReveal.js'

export default function Contact() {
  const [ref, visible] = useReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container contact-grid" ref={ref}>
        <div className={`reveal ${visible ? 'is-visible' : ''}`}>
          <span className="eyebrow-label">Contact</span>
          <h2 className="section-heading" style={{ marginBottom: 24 }}>Let&apos;s talk about your project.</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, color: 'var(--text-muted)' }}>
            <a href="mailto:s.aliahsan222@gmail.com" style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--cyan)')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>
              s.aliahsan222@gmail.com
            </a>
            <a href="tel:03098892220" style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--cyan)')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>
              0309 8892220
            </a>
            <span>Karachi, Pakistan</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className={`reveal reveal-delay-1 ${visible ? 'is-visible' : ''}`} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Field label="Name" name="name" value={form.name} onChange={handleChange} required />
          <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
          <Field label="Message" name="message" as="textarea" value={form.message} onChange={handleChange} required />

          <button type="submit" className="btn btn-primary" disabled={status === 'sending'} style={{ alignSelf: 'flex-start', border: 'none' }}>
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>

          {status === 'sent' && <p style={{ color: 'var(--cyan)', fontSize: '0.9rem' }}>Thanks — your message has been sent.</p>}
          {status === 'error' && <p style={{ color: 'var(--coral)', fontSize: '0.9rem' }}>Something went wrong. Please try again, or email me directly.</p>}
        </form>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', as = 'input', value, onChange, required }) {
  const Tag = as
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
      {label}
      <Tag
        name={name}
        type={as === 'input' ? type : undefined}
        value={value}
        onChange={onChange}
        required={required}
        rows={as === 'textarea' ? 5 : undefined}
        style={{
          background: 'var(--bg-raised)',
          border: '1px solid var(--line)',
          borderRadius: 10,
          padding: '12px 14px',
          color: 'var(--text)',
          fontFamily: 'var(--font-body)',
          fontSize: '0.95rem',
          resize: as === 'textarea' ? 'vertical' : 'none',
          outline: 'none',
          transition: 'border-color 0.2s ease',
        }}
        onFocus={(e) => (e.target.style.borderColor = 'var(--violet)')}
        onBlur={(e) => (e.target.style.borderColor = 'var(--line)')}
      />
    </label>
  )
}
