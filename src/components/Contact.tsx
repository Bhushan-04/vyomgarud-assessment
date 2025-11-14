'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <motion.section initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-[#0d0e10] p-8 rounded-2xl border border-[#1a1c1e]">
      <h3 className="text-2xl font-semibold">Get in touch</h3>
      <p className="mt-2 text-[#9aa3ad]">Request a demo or talk to our engineering team. Send a note and we'll respond within 48 hours.</p>

      <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3" onSubmit={(e)=> e.preventDefault()}>
        <input aria-label="name" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} className="p-3 bg-[#0b0c0e] border border-[#1a1c1e] rounded-md" />
        <input aria-label="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="p-3 bg-[#0b0c0e] border border-[#1a1c1e] rounded-md" />
        <textarea aria-label="message" placeholder="Message" rows={4} value={message} onChange={(e)=>setMessage(e.target.value)} className="p-3 md:col-span-2 bg-[#0b0c0e] border border-[#1a1c1e] rounded-md" />
        <div className="md:col-span-2 flex justify-between items-center">
          <div className="text-sm text-[#8f99a1]">Or call: <a href="tel:+918881444693" className="text-[#ff7b00]">+91 8881444693</a></div>
          <motion.button whileHover={{ scale: 1.03 }} className="px-6 py-2 rounded-md bg-[#ff7b00] text-black font-semibold">Send</motion.button>
        </div>
      </form>
    </motion.section>
  )
}
