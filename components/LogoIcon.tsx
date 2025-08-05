'use client'

import { motion } from 'framer-motion'

interface LogoIconProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  animated?: boolean
}

const LogoIcon = ({ className = '', size = 'md', animated = true }: LogoIconProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
  }

  const IconContent = () => (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background Circle */}
        <circle
          cx="24"
          cy="24"
          r="22"
          fill="url(#gradient-bg)"
          stroke="url(#gradient-stroke)"
          strokeWidth="2"
        />
        
        {/* Connecting Lines - Representing Systems, Technology, Funding */}
        <path
          d="M12 16 L24 12 L36 16"
          stroke="url(#gradient-line1)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 32 L24 36 L36 32"
          stroke="url(#gradient-line2)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M16 12 L16 24 L16 36"
          stroke="url(#gradient-line3)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M32 12 L32 24 L32 36"
          stroke="url(#gradient-line4)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        
        {/* Central Node - Shikanox as the connector */}
        <circle
          cx="24"
          cy="24"
          r="4"
          fill="url(#gradient-center)"
        />
        
        {/* Connection Points */}
        <circle cx="12" cy="16" r="2" fill="url(#gradient-point1)" />
        <circle cx="36" cy="16" r="2" fill="url(#gradient-point2)" />
        <circle cx="12" cy="32" r="2" fill="url(#gradient-point3)" />
        <circle cx="36" cy="32" r="2" fill="url(#gradient-point4)" />
        <circle cx="16" cy="12" r="2" fill="url(#gradient-point5)" />
        <circle cx="16" cy="36" r="2" fill="url(#gradient-point6)" />
        <circle cx="32" cy="12" r="2" fill="url(#gradient-point7)" />
        <circle cx="32" cy="36" r="2" fill="url(#gradient-point8)" />
        
        {/* Gradients */}
        <defs>
          <linearGradient id="gradient-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          
          <linearGradient id="gradient-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#fbbf24" />
          </linearGradient>
          
          <linearGradient id="gradient-line1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          
          <linearGradient id="gradient-line2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          
          <linearGradient id="gradient-line3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          
          <linearGradient id="gradient-line4" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#fbbf24" />
          </linearGradient>
          
          <linearGradient id="gradient-center" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#fbbf24" />
          </linearGradient>
          
          <linearGradient id="gradient-point1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          
          <linearGradient id="gradient-point2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          
          <linearGradient id="gradient-point3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#fbbf24" />
          </linearGradient>
          
          <linearGradient id="gradient-point4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
          
          <linearGradient id="gradient-point5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          
          <linearGradient id="gradient-point6" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          
          <linearGradient id="gradient-point7" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#fbbf24" />
          </linearGradient>
          
          <linearGradient id="gradient-point8" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )

  if (animated) {
    return (
      <motion.div
        whileHover={{ scale: 1.05, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: [0, 2, -2, 0] }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <IconContent />
      </motion.div>
    )
  }

  return <IconContent />
}

export default LogoIcon 