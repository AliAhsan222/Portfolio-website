import { useEffect, useRef, useState } from 'react'

/**
 * A robot illustration whose eyes and head tilt follow the cursor,
 * but only while the cursor is inside the hero section (heroRef).
 * Outside the hero, it settles back to a neutral resting pose.
 */
export default function Robot({ heroRef }) {
  const robotRef = useRef(null)
  const [pupil, setPupil] = useState({ x: 0, y: 0 })
  const [tilt, setTilt] = useState(0)
  const [blink, setBlink] = useState(false)

  useEffect(() => {
    const hero = heroRef.current
    const robot = robotRef.current
    if (!hero || !robot) return

    function handleMove(e) {
      const heroBox = hero.getBoundingClientRect()
      const robotBox = robot.getBoundingClientRect()
      const robotCenterX = robotBox.left + robotBox.width / 2
      const robotCenterY = robotBox.top + robotBox.height * 0.38 // roughly eye height

      const dx = e.clientX - robotCenterX
      const dy = e.clientY - robotCenterY

      // Pupils have roughly ±18px of horizontal and ±16px of vertical room inside the (enlarged)
      // socket. Scale by distance from the robot so the eyes clearly swing toward the cursor
      // even from a modest distance, then clamp so they never leave the socket.
      const maxX = 18
      const maxY = 16
      const sensitivity = 0.14

      const offsetX = Math.max(-maxX, Math.min(maxX, dx * sensitivity))
      const offsetY = Math.max(-maxY, Math.min(maxY, dy * sensitivity))

      setPupil({ x: offsetX, y: offsetY })

      const relX = (e.clientX - (heroBox.left + heroBox.width / 2)) / (heroBox.width / 2)
      setTilt(Math.max(-8, Math.min(8, relX * 8)))
    }

    function handleLeave() {
      setPupil({ x: 0, y: 0 })
      setTilt(0)
    }

    hero.addEventListener('mousemove', handleMove)
    hero.addEventListener('mouseleave', handleLeave)
    return () => {
      hero.removeEventListener('mousemove', handleMove)
      hero.removeEventListener('mouseleave', handleLeave)
    }
  }, [heroRef])

  // Occasional blink, purely decorative
  useEffect(() => {
    const id = setInterval(() => {
      setBlink(true)
      setTimeout(() => setBlink(false), 140)
    }, 4200 + Math.random() * 2000)
    return () => clearInterval(id)
  }, [])

  return (
    <div
      ref={robotRef}
      style={{
        transform: `rotate(${tilt * 0.4}deg)`,
        transition: 'transform 0.25s ease-out',
      }}
    >
      <svg width="280" height="300" viewBox="0 0 280 300" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustrated robot mascot">
        <defs>
          <linearGradient id="robotGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
          <filter id="eyeGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* antenna */}
        <line x1="140" y1="18" x2="140" y2="42" stroke="url(#robotGradient)" strokeWidth="3" />
        <circle cx="140" cy="14" r="7" fill="url(#robotGradient)" />

        {/* head */}
        <rect x="60" y="42" width="160" height="120" rx="28" fill="#141828" stroke="url(#robotGradient)" strokeWidth="2.5" />

        {/* eye socket */}
        <rect x="78" y="74" width="124" height="62" rx="20" fill="#0a0c14" />

        {/* pupils (track cursor) */}
        <g style={{ transition: 'transform 0.06s linear' }} transform={`translate(${pupil.x}, ${pupil.y})`} filter="url(#eyeGlow)">
          <rect x="99" y={blink ? 103 : 94} width="22" height={blink ? 2 : 20} rx="9" fill="#22d3ee" />
          <rect x="159" y={blink ? 103 : 94} width="22" height={blink ? 2 : 20} rx="9" fill="#22d3ee" />
          {!blink && (
            <>
              <circle cx="110" cy="100" r="3" fill="#0a0c14" opacity="0.55" />
              <circle cx="170" cy="100" r="3" fill="#0a0c14" opacity="0.55" />
            </>
          )}
        </g>

        {/* mouth */}
        <rect x="118" y="140" width="44" height="6" rx="3" fill="#8890a6" />

        {/* body */}
        <rect x="75" y="172" width="130" height="98" rx="20" fill="#10131e" stroke="#1f2333" strokeWidth="2" />
        <circle cx="140" cy="212" r="20" fill="none" stroke="url(#robotGradient)" strokeWidth="2.5" />
        <circle cx="140" cy="212" r="6" fill="url(#robotGradient)" />

        {/* side lights */}
        <circle cx="98" cy="192" r="4" fill="#ff6b5b" />
        <circle cx="182" cy="192" r="4" fill="#8b5cf6" />

        {/* arms */}
        <rect x="48" y="182" width="20" height="60" rx="10" fill="#10131e" stroke="#1f2333" strokeWidth="2" />
        <rect x="212" y="182" width="20" height="60" rx="10" fill="#10131e" stroke="#1f2333" strokeWidth="2" />
      </svg>
    </div>
  )
}
