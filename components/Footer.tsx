'use client'

import { motion } from 'framer-motion'
import { Building2, MapPin, Calendar, Users, Mail } from 'lucide-react'
import Logo from './Logo'

const Footer = () => {
  const navSections = [
    {
      title: 'サービス',
      links: [
        { name: '提供サービス', href: '/#services' },
        { name: '対応分野', href: '/#fields' },
        { name: '支援の流れ', href: '/#process' },
      ],
    },
    {
      title: '会社情報',
      links: [
        { name: '会社概要', href: '/about' },
        { name: '私たちの強み', href: '/#strengths' },
      ],
    },
    {
      title: 'お問い合わせ',
      links: [
        { name: '無料相談', href: '/#contact' },
      ],
    },
  ]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <Logo size="lg" animated={false} />
              </div>
              <p className="text-slate-300 mb-8 leading-relaxed">
                制度×技術×資金の統合設計により、<br />
                資金調達から事業化までワンストップで実現します。
              </p>
            </motion.div>

            {/* Company Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center">
                <Building2 className="w-5 h-5 text-slate-300 mr-3" />
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide">会社名</p>
                  <p className="text-sm text-slate-200 font-medium">シカノックス株式会社</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-slate-300 mr-3 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide">所在地</p>
                  <p className="text-sm text-slate-200 font-medium">
                    〒689-0426 鳥取県鳥取市鹿野町中園116 B棟
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-slate-300 mr-3" />
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide">メール</p>
                  <p className="text-sm text-slate-200 font-medium">hello@shikanox.jp</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {navSections.map((section, index) => (
                <div key={index}>
                  <h4 className="text-lg font-medium text-white mb-4">
                    {section.title}
                  </h4>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.href}
                          className="text-slate-300 hover:text-slate-100 transition-colors duration-200 text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 シカノックス株式会社. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 