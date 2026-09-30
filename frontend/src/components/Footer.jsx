export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--line)', padding: '32px 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, color: 'var(--text-muted)', fontSize: '0.85rem' }}>
        <span>© {new Date().getFullYear()} Syed Ali Ahsan.</span>
        <span>Built with React.</span>
      </div>
    </footer>
  )
}
