'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: '会社概要', href: '/about' },
    { name: '強み', href: '/#strengths' },
    { name: 'サービス', href: '/#services' },
    { name: '支援の流れ', href: '/#process' },
    { name: 'お問い合わせ', href: '/#contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="flex items-center"
          >
            <a href="/">
              <Logo size="lg" animated={false} scrolled={scrolled} />
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2 }}
                className={`text-sm font-accent transition-colors duration-300 ${
                  scrolled 
                    ? 'text-slate-700 hover:text-slate-900' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.a
            href="/#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className={`hidden md:inline-flex px-6 py-2.5 rounded-lg font-accent transition-all duration-300 ${
              scrolled
                ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-sm border border-slate-700/50'
                : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20'
            }`}
          >
            無料相談
          </motion.a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              scrolled ? 'text-slate-700 hover:text-slate-900' : 'text-white/90 hover:text-white'
            }`}
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
          >
            <div className={`px-2 pt-2 pb-3 space-y-1 rounded-lg shadow-lg mt-2 ${
              scrolled ? 'bg-white border border-slate-200/50' : 'bg-white/95 backdrop-blur-md border border-white/20'
            }`}>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-sm font-accent text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-sm font-accent text-slate-900 hover:bg-slate-50 rounded-md transition-colors duration-200"
              >
                無料相談
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

export default Header 