'use client'
import { useEffect, useState } from 'react'

export default function useMouseParallax(maxMove = 18) {
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    function onMove(e: MouseEvent) {
      const w = window.innerWidth
      const h = window.innerHeight
      const x = (e.clientX - w / 2) / (w / 2)
      const y = (e.clientY - h / 2) / (h / 2)
      setOffset({ x: x * maxMove, y: y * maxMove })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [maxMove])

  return offset
}
