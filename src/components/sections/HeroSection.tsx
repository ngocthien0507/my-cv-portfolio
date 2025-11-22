'use client'

import React from 'react'
import { GlassCard } from '@/components/ui/GlassCard'

interface HeroSectionProps {
  name: string
  role: string
  company: string
  location: string
  tagline: string
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  name,
  role,
  company,
  location,
  tagline
}) => {
  const scrollToNextSection = () => {
    const experienceSection = document.getElementById('experience')
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      {/* Hero Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <GlassCard
          blur="xl"
          opacity="medium"
          hover={false}
          className="p-8 sm:p-12 lg:p-16"
        >
          {/* Greeting */}
          <div className="mb-6 animate-fadeInUp">
            <span className="text-white/80 text-lg font-mono">Hello, I'm</span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            {name}
          </h1>

          {/* Role & Company */}
          <div className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-2 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            {role} at <span className="text-white font-semibold">{company}</span>
          </div>

          {/* Location */}
          <div className="text-lg sm:text-xl text-white/70 mb-6 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            📍 {location}
          </div>

          {/* Tagline */}
          <div className="text-xl sm:text-2xl lg:text-3xl font-light text-white/80 italic mb-8 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            "{tagline}"
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
            <button
              onClick={scrollToNextSection}
              className="px-8 py-3 bg-white/20 hover:bg-white/30 border border-white/30 rounded-full text-white font-medium transition-all duration-300 hover:scale-105"
            >
              View My Work
            </button>
            <a
              href="#contact"
              className="px-8 py-3 glass-card-hover border border-white/20 rounded-full text-white font-medium transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </GlassCard>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          <GlassCard
            blur="lg"
            opacity="medium"
            hover={true}
            className="p-6 text-center animate-fadeInUp"
            style={{ animationDelay: '0.6s' }}
          >
            <div className="text-3xl font-bold text-white mb-2">5+</div>
            <div className="text-white/70">Years Experience</div>
          </GlassCard>

          <GlassCard
            blur="lg"
            opacity="medium"
            hover={true}
            className="p-6 text-center animate-fadeInUp"
            style={{ animationDelay: '0.7s' }}
          >
            <div className="text-3xl font-bold text-white mb-2">38+</div>
            <div className="text-white/70">Technical Skills</div>
          </GlassCard>

          <GlassCard
            blur="lg"
            opacity="medium"
            hover={true}
            className="p-6 text-center animate-fadeInUp"
            style={{ animationDelay: '0.8s' }}
          >
            <div className="text-3xl font-bold text-white mb-2">31M+</div>
            <div className="text-white/70">App Users Reached</div>
          </GlassCard>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-fadeInUp" style={{ animationDelay: '1s' }}>
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm font-mono">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}