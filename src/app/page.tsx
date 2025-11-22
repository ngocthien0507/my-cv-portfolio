'use client'

import { Navigation } from '@/components/ui/Navigation'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { AnimatedBackground } from '@/components/ui/AnimatedBackground'
import { HeroSection } from '@/components/sections/HeroSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { EducationSection } from '@/components/sections/EducationSection'
import { RecommendationsSection } from '@/components/sections/RecommendationsSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { profileData } from '@/data/profile'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export default function Home() {
  // Add fade-in animation to main sections
  const { ref: heroRef, hasIntersected: heroVisible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navigation />

      {/* Progress Bar */}
      <ProgressBar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section
          ref={heroRef}
          className={`transition-opacity duration-1000 ${
            heroVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <HeroSection
            name={profileData.hero.name}
            role={profileData.hero.role}
            company={profileData.hero.company}
            location={profileData.hero.location}
            tagline={profileData.hero.tagline}
          />
        </section>

        {/* Experience Section */}
        <section className="animate-fadeInUp">
          <ExperienceSection experiences={profileData.experience} />
        </section>

        {/* Skills Section */}
        <section className="animate-fadeInUp">
          <SkillsSection skills={profileData.skills} />
        </section>

        {/* Education Section */}
        <section className="animate-fadeInUp">
          <EducationSection education={profileData.education} />
        </section>

        {/* Recommendations Section */}
        <section className="animate-fadeInUp">
          <RecommendationsSection recommendations={profileData.recommendations} />
        </section>

        {/* Contact Section */}
        <section className="animate-fadeInUp">
          <ContactSection contact={profileData.contact} />
        </section>
      </main>

      {/* Footer */}
      <footer className="glass-card border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white/60 text-sm">
            <p>© 2024 Thien Nguyen Ngoc. Built with Next.js, TypeScript, and Tailwind CSS.</p>
            <p className="mt-2">Brewing Product Ideas into Reality 🚀</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
