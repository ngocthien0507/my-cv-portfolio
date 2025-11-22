import { useState, useEffect } from 'react'

interface UseActiveSectionOptions {
  sections: string[]
  offset?: number
}

export const useActiveSection = (
  sections: string[],
  offset: number = 100
): string => {
  const [activeSection, setActiveSection] = useState(sections[0] || '')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset

      for (const section of sections) {
        const element = document.getElementById(section)
        if (!element) continue

        const { offsetTop, offsetHeight } = element

        // Check if current scroll position is within this section
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section)
          break
        }
      }

      // Handle case when scrolled to bottom
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50
      ) {
        const lastSection = sections[sections.length - 1]
        if (lastSection) {
          setActiveSection(lastSection)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sections, offset])

  return activeSection
}