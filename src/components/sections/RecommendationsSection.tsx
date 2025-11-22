'use client'

import React, { useState, useEffect } from 'react'
import { TestimonialCard } from '@/components/common/TestimonialCard'

interface RecommendationItem {
  name: string
  position: string
  company: string
  date: string
  quote: string
}

interface RecommendationsSectionProps {
  recommendations: RecommendationItem[]
}

export const RecommendationsSection: React.FC<RecommendationsSectionProps> = ({
  recommendations
}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % recommendations.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, recommendations.length])

  const handleDotClick = (index: number) => {
    setActiveIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000) // Resume auto-play after 10s
  }

  if (recommendations.length === 0) {
    return null
  }

  return (
    <section id="recommendations" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Recommendations
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            What colleagues and clients say about working with me
          </p>
        </div>

        {/* Recommendations Carousel */}
        <div className="relative mb-12">
          {/* Active Testimonial (Desktop) */}
          <div className="hidden lg:block">
            <div className="max-w-3xl mx-auto">
              <TestimonialCard
                {...recommendations[activeIndex]}
                isActive={true}
                index={0}
              />
            </div>
          </div>

          {/* Grid Layout (Mobile/Tablet) */}
          <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendations.map((rec, index) => (
              <TestimonialCard
                key={index}
                {...rec}
                isActive={index === activeIndex}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Navigation Dots (Desktop) */}
        <div className="flex justify-center space-x-2 mb-12 lg:block">
          {recommendations.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'bg-white w-8'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to recommendation ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-6 text-center">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-2xl font-bold text-white mb-1">
              {recommendations.length}+
            </div>
            <div className="text-white/70">Client Recommendations</div>
          </div>

          <div className="glass-card p-6 text-center">
            <div className="text-3xl mb-2">🏆</div>
            <div className="text-2xl font-bold text-white mb-1">CEO Level</div>
            <div className="text-white/70">Executive Endorsements</div>
          </div>

          <div className="glass-card p-6 text-center">
            <div className="text-3xl mb-2">🤝</div>
            <div className="text-2xl font-bold text-white mb-1">Long-term</div>
            <div className="text-white/70">Client Relationships</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-white/70 mb-4">
            Interested in working together?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 glass-card-hover border border-white/20 rounded-full text-white font-medium transition-all duration-300"
          >
            Get In Touch
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}