import React from 'react'
import CapCard from './CapCard'

export default function Capabilities() {
  const items = [
    { title: 'Autonomy Suite', subtitle: 'Software', bullets: ['Vision-based navigation', 'Collision avoidance', 'Adaptive mission planner'] },
    { title: 'Payload Systems', subtitle: 'Hardware', bullets: ['ISR payloads', 'Modular mounts', 'Precision delivery'] },
    { title: 'Secure Comms', subtitle: 'Systems', bullets: ['Encrypted links', 'Frequency hopping', 'Low-latency telemetry'] }
  ]
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Capabilities & Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((it, idx) => <CapCard key={idx} {...it} />)}
      </div>
    </section>
  )
}
