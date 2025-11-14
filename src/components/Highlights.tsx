'use client'
import { motion } from 'framer-motion'
import React from 'react'

export default function Highlights() {
  const items = [
    { title: 'Mission-critical reliability', body: 'Redundant systems, deterministic controls, and rigorous testing.' },
    { title: 'Precision engineering', body: 'High accuracy payloads, tight tolerances, and calibrated sensors.' },
    { title: 'Advanced autonomy', body: 'Vision-driven autonomy, adaptive planning, and safe failovers.' }
  ]

  return (
    <motion.section initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-[#0d0e10] p-8 rounded-2xl border border-[#1a1c1e]">
      <h3 className="text-2xl font-semibold">Highlights</h3>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((it, idx) => (
          <div key={idx} className="p-6 rounded-lg bg-[#0f1113] border border-[#232629]">
            <div className="text-sm font-semibold text-[#ff7b00]">{it.title}</div>
            <div className="mt-2 text-[#9aa3ad] text-sm">{it.body}</div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
