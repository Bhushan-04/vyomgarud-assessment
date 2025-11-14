'use client'
import React, { JSX } from 'react'
import { motion } from 'framer-motion'

export default function About(): JSX.Element {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-[#0d0e10] p-8 rounded-2xl border border-[#1a1c1e] overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-semibold">Mission</h3>
          <p className="mt-3 text-[#bfc8cf] max-w-prose">VyomGarud engineers mission-critical unmanned aerial systems with an emphasis on deterministic flight controls, hardened avionics, and vision-based autonomy. Our platforms operate reliably in GPS-denied, contested, and austere environments — delivering actionable intelligence and precise payload delivery.</p>
        </div>

        <div className="bg-[#0f1113] p-4 rounded-xl border border-[#232629]">
          <h4 className="text-sm text-[#ff7b00] font-semibold">Key Capabilities</h4>
          <ul className="mt-3 text-[#9aa3ad] text-sm space-y-2">
            <li>Hardened flight control & redundancy</li>
            <li>Adaptive autonomy & vision systems</li>
            <li>Encrypted comms & secure datalinks</li>
            <li>Modular payload integration</li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
}
