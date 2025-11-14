// hooks/useScrollLift.ts
'use client'
import { useEffect, useState } from 'react'

export default function useScrollLift(distance: number) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      const start = 0
      const end = distance

      if (y <= start) setProgress(0)
      else if (y >= end) setProgress(1)
      else setProgress((y - start) / end)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [distance])

  return progress
}
