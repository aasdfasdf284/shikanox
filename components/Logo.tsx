'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  animated?: boolean
  scrolled?: boolean
}

const Logo = ({ className = '', size = 'md', animated = true, scrolled = false }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-12 h-6',
    md: 'w-20 h-10',
    lg: 'w-28 h-14',
    xl: 'w-36 h-18',
  }

  const LogoContent = () => (
    <div className={`${sizeClasses[size]} ${className}`}>
      <Image
        src="/images/logo-shikanox.png"
        alt="ShikanoX Logo"
        width={160}
        height={80}
        className={`w-full h-full object-contain ${scrolled ? '' : 'filter brightness-0 invert'}`}
        priority
      />
    </div>
  )

  if (animated) {
    return (
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <LogoContent />
      </motion.div>
    )
  }

  return <LogoContent />
}

export default Logo 