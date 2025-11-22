'use client'

import React, { useState, useEffect } from 'react'

export const ProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setScrollProgress(Math.min(Math.max(scrollPercent, 0), 100))
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Desktop Side Progress Bar */}
      <div className="hidden lg:block fixed top-1/2 right-8 -translate-y-1/2 z-40">
        <div className="flex flex-col items-center space-y-2">
          {/* Progress line */}
          <div className="h-32 w-0.5 bg-white/20 rounded-full relative">
            <div
              className="absolute top-0 left-0 w-full bg-white rounded-full transition-all duration-300"
              style={{ height: `${scrollProgress}%` }}
            />
          </div>

          {/* Progress percentage */}
          <span className="text-white/60 text-xs font-mono">
            {Math.round(scrollProgress)}%
          </span>
        </div>
      </div>

      {/* Mobile Top Progress Bar */}
      <div className="lg:hidden fixed top-16 left-0 right-0 z-40 h-1 bg-white/10">
        <div
          className="h-full bg-white transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </>
  )
}