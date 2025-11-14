import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Capabilities from '../components/Capabilities'
import Highlights from '../components/Highlights'
import Contact from '../components/Contact'

export default function Page() {
  return (
    <>
      <Hero />
      <section id="about" className="container mt-20">
        <About />
      </section>

      <section id="capabilities" className="container mt-16">
        <Capabilities />
      </section>

      <section id="highlights" className="container mt-12">
        <Highlights />
      </section>

      <section id="contact" className="container mt-12">
        <Contact />
      </section>
    </>
  )
}
