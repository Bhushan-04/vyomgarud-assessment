'use client'
import { useEffect, useState } from 'react'

type Particle = { id: number; left: string; top: string; size: number; opacity: number; delay: string }

export default function Particles() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const arr: Particle[] = []
    for (let i = 0; i < 22; i++) {
      arr.push({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: 3 + Math.random() * 9,
        opacity: 1 + Math.random() * 0.07,
        delay: `${Math.random() * 8}s`
      })
    }
    setParticles(arr)
  }, [])

  return (
    <div className="particles" aria-hidden>
      {particles.map(p => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDelay: p.delay
          }}
        />
      ))}
    </div>
  )
}
