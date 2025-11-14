'use client'

import dynamic from "next/dynamic";

const Player = dynamic(() => import("@lottiefiles/react-lottie-player").then(mod => mod.Player), {
  ssr: false,
});

import React, { JSX, useMemo, useRef, useLayoutEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Particles from './Particles.client'
import Glint from './Glint'
import useMouseParallax from './hooks/useMouseParallax'
import useScrollLift from './hooks/useScrollLift'


const headline =
  'PRECISION UAV SYSTEMS FOR MISSION-CRITICAL OPERATIONS'

function splitWords(text: string) {
  return text.split(' ').map((w, i) => ({ word: w, id: `${w}-${i}` }))
}

export default function Hero(): JSX.Element {
  const words = useMemo(() => splitWords(headline), [])
  const offset = useMouseParallax(16)

  const leftRef = useRef<HTMLDivElement>(null)
  const [distance, setDistance] = useState(700) // default fallback

  // ⭐ measure left panel height EXACTLY
  useLayoutEffect(() => {
    if (leftRef.current) {
      const h = leftRef.current.getBoundingClientRect().height
      setDistance(h)
    }
  }, [])

  // ⭐ scroll progress based on ACTUAL height
  const scrollLift = useScrollLift(distance)

  return (
    <section className="relative overflow-hidden pt-1 pb-12">
      <Particles />

      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT PANEL */}
        <div ref={leftRef} className="relative z-20">
          <motion.h1
            initial="hidden"
            animate="show"
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-widest leading-tight uppercase"
          >
            {words.map((w, i) => (
              <motion.span
                key={w.id}
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="inline-block mr-3"
              >
                {w.word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-6 text-[#bfc8cf] max-w-xl"
          >
            VyomGarud builds hardened unmanned platforms and autonomy
            software for contested and austere environments. Redundancy,
            deterministic controls, and end-to-end integration.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05 }}
            className="mt-8 flex gap-4"
          >
            <Glint>
              <a
                href="#contact"
                className="cta-shine inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#ff7b00] text-black font-semibold shadow-soft"
              >
                Request Demo
              </a>
            </Glint>

            <a
              href="#capabilities"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-[#1f2326] text-[#d6dde3]"
            >
              Capabilities
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.25 }}
            className="mt-6 text-sm text-[#8f99a1]"
          >
            Trusted for mission success — engineered for precision.
          </motion.div>
        </div>

        {/* RIGHT SIDE – DRONE + BOTTOM FIXED CONTAINER */}
<div className="relative z-20">

  {/* MOVING DRONE */}
  <motion.img
    src="/untitled.png"
    alt="Drone"
    className="w-[80%] max-w-[550px] object-contain select-none pointer-events-none"
    animate={{
      y: -scrollLift * distance,
      x: offset.x
    }}
    transition={{ type: "spring", stiffness: 50, damping: 18 }}
  />

  {/* FIXED BOTTOM-RIGHT CONTAINER */}
  <div className="absolute bottom-0 flex flex-col pointer-events-none">


    {/* LOTTIE PLAYER BELOW OR OVER THE SVG */}
    <Player
      autoplay
      loop
      src="https://assets6.lottiefiles.com/packages/lf20_m64r7cwa.json"
      className="xl:!h-[300px] !z-10 xl:!w-[600px] 
                 lg:!h-[280px] lg:!w-[480px] 
                 md:!h-[240px] md:!w-[300px] 
                 !h-[180px] !w-[360px]"
    />
  </div>
</div>

      </div>
    </section>
  )
}
