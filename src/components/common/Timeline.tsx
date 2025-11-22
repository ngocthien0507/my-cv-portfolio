import React from 'react'
import { GlassCard } from '@/components/ui/GlassCard'

interface TimelineItem {
  date: string
  title: string
  subtitle?: string
  description?: string
  details?: string[]
  isLast?: boolean
}

interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

export const Timeline: React.FC<TimelineProps> = ({ items, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Timeline line */}
      <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-0.5 h-full bg-white/20" />

      {/* Timeline items */}
      <div className="space-y-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative flex items-start sm:items-center"
          >
            {/* Timeline dot */}
            <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-4 h-4 bg-white rounded-full border-2 border-white/40 z-10" />

            {/* Content */}
            <div className="ml-12 sm:ml-0 sm:flex sm:items-center sm:gap-8">
              {/* Date - mobile left, desktop alternating */}
              <div className="text-white/60 font-mono text-sm mb-2 sm:mb-0 sm:w-40 sm:text-right">
                {item.date}
              </div>

              {/* Card */}
              <GlassCard
                blur="lg"
                opacity="medium"
                hover={true}
                className="flex-1 p-6"
              >
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                {item.subtitle && (
                  <div className="text-white/80 font-medium mb-2">{item.subtitle}</div>
                )}
                {item.description && (
                  <div className="text-white/70 mb-4">{item.description}</div>
                )}
                {item.details && item.details.length > 0 && (
                  <ul className="space-y-2">
                    {item.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-white/60 text-sm flex items-start">
                        <span className="text-white/40 mr-2">▸</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </GlassCard>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}