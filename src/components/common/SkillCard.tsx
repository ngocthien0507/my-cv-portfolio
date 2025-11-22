import React from 'react'

interface SkillCardProps {
  name: string
  level: 'expert' | 'advanced' | 'intermediate' | 'basic'
  years?: number
  index: number
}

export const SkillCard: React.FC<SkillCardProps> = ({ name, level, years, index }) => {
  const levelColors = {
    expert: 'bg-gradient-to-r from-green-400 to-emerald-500',
    advanced: 'bg-gradient-to-r from-blue-400 to-cyan-500',
    intermediate: 'bg-gradient-to-r from-yellow-400 to-orange-500',
    basic: 'bg-gradient-to-r from-gray-400 to-slate-500'
  }

  const levelPercentages = {
    expert: 100,
    advanced: 80,
    intermediate: 60,
    basic: 40
  }

  const percentage = levelPercentages[level]

  return (
    <div
      className="glass-card p-4 hover:scale-105 transition-all duration-300"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-white font-medium">{name}</h4>
        <span className="text-xs text-white/60 font-mono">
          {level.toUpperCase()}
        </span>
      </div>

      {/* Proficiency Bar */}
      <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className={`absolute top-0 left-0 h-full ${levelColors[level]} transition-all duration-1000 ease-out`}
          style={{
            width: `${percentage}%`,
            animationDelay: `${index * 0.1 + 0.5}s`
          }}
        />
      </div>

      {/* Years of Experience */}
      {years && (
        <div className="mt-2 text-xs text-white/50">
          {years} {years === 1 ? 'year' : 'years'} experience
        </div>
      )}
    </div>
  )
}