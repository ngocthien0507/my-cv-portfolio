import React, { useState } from 'react'
import { SkillCard } from '@/components/common/SkillCard'
import { GlassCard } from '@/components/ui/GlassCard'

interface Skill {
  name: string
  level: 'expert' | 'advanced' | 'intermediate' | 'basic'
  years?: number
}

interface SkillsData {
  categories: {
    [category: string]: Skill[]
  }
}

interface SkillsSectionProps {
  skills: SkillsData
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const categories = Object.keys(skills.categories)

  const categoryIcons = {
    'Mobile Development': '📱',
    'Frontend': '🎨',
    'Backend & APIs': '⚙️',
    'Tools & Integration': '🛠️'
  }

  const allSkills = Object.values(skills.categories).flat()

  const displaySkills = selectedCategory
    ? skills.categories[selectedCategory] || []
    : allSkills

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === null
                ? 'bg-white/20 text-white border-2 border-white/40'
                : 'glass-card hover:bg-white/15 text-white/80'
            }`}
          >
            All Skills ({allSkills.length})
          </button>

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-white/20 text-white border-2 border-white/40'
                  : 'glass-card hover:bg-white/15 text-white/80'
              }`}
            >
              <span className="mr-2">{categoryIcons[category as keyof typeof categoryIcons] || '📦'}</span>
              {category} ({skills.categories[category].length})
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {displaySkills.map((skill, index) => (
            <SkillCard
              key={`${skill.name}-${index}`}
              name={skill.name}
              level={skill.level}
              years={skill.years}
              index={index}
            />
          ))}
        </div>

        {/* Skills Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GlassCard blur="lg" opacity="medium" className="p-6 text-center">
            <div className="text-3xl mb-2">🎯</div>
            <div className="text-2xl font-bold text-white mb-1">
              {allSkills.filter(s => s.level === 'expert').length}
            </div>
            <div className="text-white/70">Expert Level Skills</div>
          </GlassCard>

          <GlassCard blur="lg" opacity="medium" className="p-6 text-center">
            <div className="text-3xl mb-2">🚀</div>
            <div className="text-2xl font-bold text-white mb-1">
              {allSkills.filter(s => s.years && s.years >= 4).length}
            </div>
            <div className="text-white/70">Skills with 4+ Years</div>
          </GlassCard>

          <GlassCard blur="lg" opacity="medium" className="p-6 text-center">
            <div className="text-3xl mb-2">📊</div>
            <div className="text-2xl font-bold text-white mb-1">{categories.length}</div>
            <div className="text-white/70">Technology Categories</div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}