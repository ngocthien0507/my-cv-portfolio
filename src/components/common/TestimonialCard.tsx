import React from 'react'

interface TestimonialCardProps {
  name: string
  position: string
  company: string
  date: string
  quote: string
  isActive?: boolean
  index: number
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  position,
  company,
  date,
  quote,
  isActive = false,
  index
}) => {
  return (
    <div
      className={`glass-card p-6 transition-all duration-700 ${
        isActive ? 'scale-105 bg-white/15' : 'scale-100 opacity-90'
      }`}
      style={{
        animationDelay: `${index * 0.2}s`
      }}
    >
      {/* Quote Icon */}
      <div className="text-3xl mb-4">"</div>

      {/* Quote */}
      <blockquote className="text-white/90 text-lg leading-relaxed mb-6">
        {quote}
      </blockquote>

      {/* Author Info */}
      <div className="border-t border-white/20 pt-4">
        <div className="text-white font-medium">{name}</div>
        <div className="text-white/70 text-sm">
          {position} • {company}
        </div>
        <div className="text-white/50 text-xs mt-1">{date}</div>
      </div>
    </div>
  )
}