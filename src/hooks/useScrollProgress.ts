import { useState, useEffect } from 'react'

export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100

      setScrollProgress(Math.min(Math.max(scrollPercent, 0), 100))
      setIsScrolling(true)

      // Clear existing timeout
      clearTimeout(scrollTimeout)

      // Set scrolling to false after scroll ends
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false)
      }, 150)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [])

  return { scrollProgress, isScrolling }
}