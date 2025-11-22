import React from 'react'
import { cn } from '@/utils/cn'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  blur?: 'sm' | 'md' | 'lg' | 'xl'
  opacity?: 'low' | 'medium' | 'high'
  border?: boolean
  hover?: boolean
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  blur = 'md',
  opacity = 'medium',
  border = true,
  hover = false
}) => {
  const blurClasses = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl'
  }

  const opacityClasses = {
    low: 'bg-white/5 dark:bg-white/5',
    medium: 'bg-white/10 dark:bg-white/10',
    high: 'bg-white/20 dark:bg-white/15'
  }

  const borderClasses = border
    ? 'border border-white/20 dark:border-white/10'
    : ''

  const hoverClasses = hover
    ? 'hover:bg-white/15 dark:hover:bg-white/20 hover:border-white/40 dark:hover:border-white/30 hover:scale-105 transition-all duration-300'
    : ''

  return (
    <div
      className={cn(
        'rounded-xl shadow-xl',
        blurClasses[blur],
        opacityClasses[opacity],
        borderClasses,
        hoverClasses,
        className
      )}
    >
      {children}
    </div>
  )
}