import React from 'react'
import { Timeline } from '@/components/common/Timeline'

interface EducationItem {
  institution: string
  degree: string
  duration: string
  location?: string
  description?: string
}

interface EducationSectionProps {
  education: EducationItem[]
}

export const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  const timelineItems = education.map((edu, index) => ({
    date: edu.duration,
    title: edu.degree,
    subtitle: `${edu.institution}${edu.location ? ` • ${edu.location}` : ''}`,
    description: edu.description,
    isLast: index === education.length - 1
  }))

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Academic foundation and continuous learning in software development
          </p>
        </div>

        {/* Timeline */}
        <Timeline items={timelineItems} className="mb-16" />

        {/* Education Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-6">
            <h3 className="text-xl font-bold text-white mb-4">🎓 Academic Background</h3>
            <div className="space-y-4">
              <div>
                <div className="text-white font-medium mb-1">Software Engineering</div>
                <div className="text-white/60 text-sm">
                  4-year Bachelor's degree program with comprehensive computer science foundation
                </div>
              </div>
              <div>
                <div className="text-white font-medium mb-1">Specialized Training</div>
                <div className="text-white/60 text-sm">
                  Intensive bootcamp focused on modern mobile development practices
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-xl font-bold text-white mb-4">📚 Key Learning Areas</h3>
            <ul className="space-y-2">
              <li className="text-white/70 flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Mobile Application Development
              </li>
              <li className="text-white/70 flex items-start">
                <span className="text-green-400 mr-2">•</span>
                Modern JavaScript Frameworks
              </li>
              <li className="text-white/70 flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                Software Architecture & Design Patterns
              </li>
              <li className="text-white/70 flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                Practical Problem Solving
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}