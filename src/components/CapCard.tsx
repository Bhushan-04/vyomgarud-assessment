'use client'
import { motion } from 'framer-motion'
import React from 'react'

type Props = { title: string; subtitle: string; bullets: string[] }

export default function CapCard({ title, subtitle, bullets }: Props) {
  return (
    <motion.article whileHover={{ y: -8, scale: 1.01 }} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="p-6 rounded-2xl bg-[#0f1113] border border-[#1a1c1e]">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold tracking-wide">{title}</h3>
          <div className="text-xs mt-1 uppercase text-[#9aa3ad]">{subtitle}</div>
        </div>
        <div className="h-10 w-10 rounded-md bg-[#111214] flex items-center justify-center border border-[#1f2326]">⚙</div>
      </div>

      <ul className="mt-4 text-[#9aa3ad] space-y-2 text-sm">
        {bullets.map((b,i)=> <li key={i} className="flex items-start gap-3"><span className="text-[#ff7b00] mt-1">•</span><span>{b}</span></li> )}
      </ul>

      <div className="mt-6 flex items-center justify-between">
        <a className="inline-flex items-center gap-2 px-3 py-2 border border-[#2a2d30] rounded-md text-sm">Learn more →</a>
        <div className="text-xs text-[#8f99a1]">Systems • Field-ready</div>
      </div>
    </motion.article>
  )
}
