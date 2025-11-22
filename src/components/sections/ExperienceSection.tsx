import React from 'react'
import { Timeline } from '@/components/common/Timeline'

interface ExperienceItem {
  company: string
  position: string
  duration: string
  location: string
  description: string
  responsibilities: string[]
  achievements: string[]
}

interface ExperienceSectionProps {
  experiences: ExperienceItem[]
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  const timelineItems = experiences.map((exp, index) => ({
    date: exp.duration,
    title: exp.position,
    subtitle: `${exp.company} • ${exp.location}`,
    description: exp.description,
    details: [...exp.responsibilities, ...exp.achievements],
    isLast: index === experiences.length - 1
  }))

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Experience
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            My professional journey through software development and product innovation
          </p>
        </div>

        {/* Timeline */}
        <Timeline items={timelineItems} className="mb-16" />

        {/* Highlight Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-6">
            <h3 className="text-xl font-bold text-white mb-4">🚀 Key Achievements</h3>
            <ul className="space-y-3">
              <li className="text-white/70 flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                Led Chefclub app redesign for 31M+ Facebook followers
              </li>
              <li className="text-white/70 flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                Polymate SAS reached Top 177 Social Networking on App Store
              </li>
              <li className="text-white/70 flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                Contributed to Infina's rapid growth in Vietnam
              </li>
              <li className="text-white/70 flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                Built scalable React Native applications for international clients
              </li>
            </ul>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-xl font-bold text-white mb-4">💼 Expertise</h3>
            <div className="space-y-4">
              <div>
                <div className="text-white font-medium mb-1">Mobile Development</div>
                <div className="text-white/60 text-sm">React Native, Cross-platform, Performance Optimization</div>
              </div>
              <div>
                <div className="text-white font-medium mb-1">Product Architecture</div>
                <div className="text-white/60 text-sm">Scalable Solutions, Automation, Modern Technologies</div>
              </div>
              <div>
                <div className="text-white font-medium mb-1">Client Collaboration</div>
                <div className="text-white/60 text-sm">Direct Communication, Product Requirements, Technical Leadership</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}