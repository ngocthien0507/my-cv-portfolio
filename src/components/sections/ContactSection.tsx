import React from 'react'
import { GlassCard } from '@/components/ui/GlassCard'

interface ContactData {
  email: string
  location: string
  social: {
    [platform: string]: string
  }
}

interface ContactSectionProps {
  contact: ContactData
}

export const ContactSection: React.FC<ContactSectionProps> = ({ contact }) => {
  const platformIcons = {
    LinkedIn: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
      </svg>
    ),
    GitHub: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
      </svg>
    )
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Let's discuss how I can help bring your product ideas to reality
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <GlassCard blur="lg" opacity="medium" className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 glass-card flex items-center justify-center rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white/70 text-sm">Email</div>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-white font-medium hover:text-white/80 transition-colors"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 glass-card flex items-center justify-center rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white/70 text-sm">Location</div>
                  <div className="text-white font-medium">{contact.location}</div>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Social Links */}
          <GlassCard blur="lg" opacity="medium" className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>

            <div className="space-y-4">
              {Object.entries(contact.social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-3 glass-card hover:bg-white/15 rounded-lg transition-all duration-300 group"
                >
                  <div className="w-10 h-10 glass-card flex items-center justify-center rounded-lg group-hover:scale-110 transition-transform">
                    {platformIcons[platform as keyof typeof platformIcons]}
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-medium">{platform}</div>
                    <div className="text-white/50 text-sm">View profile</div>
                  </div>
                  <svg className="w-5 h-5 text-white/50 group-hover:text-white/80 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Call to Action */}
        <GlassCard blur="xl" opacity="medium" className="p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Build Something Amazing?
          </h3>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${contact.email}`}
              className="px-8 py-3 bg-white/20 hover:bg-white/30 border border-white/30 rounded-full text-white font-medium transition-all duration-300 hover:scale-105"
            >
              Send Message
            </a>
            <a
              href="#experience"
              className="px-8 py-3 glass-card-hover border border-white/20 rounded-full text-white font-medium transition-all duration-300"
            >
              View My Experience
            </a>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}