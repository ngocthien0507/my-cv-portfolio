import React from 'react'

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 animated-gradient">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large circle */}
        <div
          className="floating-shape absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-xl"
          style={{ animationDelay: '0s', animationDuration: '25s' }}
        />

        {/* Medium triangle */}
        <div
          className="floating-shape absolute top-40 right-20 w-48 h-48 bg-white/8 blur-lg"
          style={{
            animationDelay: '3s',
            animationDuration: '20s',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
          }}
        />

        {/* Small square */}
        <div
          className="floating-shape absolute bottom-20 left-1/4 w-32 h-32 bg-white/6 rounded-lg blur-md"
          style={{ animationDelay: '6s', animationDuration: '18s' }}
        />

        {/* Medium circle */}
        <div
          className="floating-shape absolute bottom-40 right-1/3 w-56 h-56 bg-white/12 rounded-full blur-xl"
          style={{ animationDelay: '9s', animationDuration: '22s' }}
        />

        {/* Small triangle */}
        <div
          className="floating-shape absolute top-1/3 left-1/2 w-24 h-24 bg-white/4 blur-sm"
          style={{
            animationDelay: '12s',
            animationDuration: '15s',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
          }}
        />

        {/* Extra large circle */}
        <div
          className="floating-shape absolute top-1/2 right-1/4 w-64 h-64 bg-white/5 rounded-full backdrop-blur-3xl"
          style={{ animationDelay: '4s', animationDuration: '30s' }}
        />

        {/* Diamond shape */}
        <div
          className="floating-shape absolute bottom-32 left-20 w-40 h-40 bg-white/7 blur-md rotate-45"
          style={{ animationDelay: '8s', animationDuration: '20s' }}
        />

        {/* Ellipse */}
        <div
          className="floating-shape absolute top-64 right-1/2 w-44 h-32 bg-white/6 rounded-full blur-lg"
          style={{ animationDelay: '11s', animationDuration: '25s' }}
        />
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
    </div>
  )
}