'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

interface FormData {
  name: string
  company: string
  email: string
  message: string
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: '',
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    setStatus({ type: 'loading', message: '送信中...' })

    try {
      const response = await fetch('/api/contact-xserver', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({
          type: 'success',
          message: data.message,
        })
        setFormData({
          name: '',
          company: '',
          email: '',
          message: '',
        })
      } else {
        setStatus({
          type: 'error',
          message: data.error || '送信に失敗しました。',
        })
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: '送信に失敗しました。しばらく時間をおいて再度お試しください。',
      })
    }
  }

  return (
    <div className="bg-white/5 backdrop-blur-sm p-12 rounded-xl border border-white/10">
      <p className="text-xl text-white/90 mb-12 text-center leading-relaxed font-body">
        初回のご相談はオンライン30分から。
        <br />
        補助金の有無、技術の検討段階に関わらず、制度の観点からご案内します。
      </p>

      {/* Status Message */}
      {status.type !== 'idle' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mb-8 p-4 rounded-lg flex items-center space-x-3 ${
            status.type === 'success'
              ? 'bg-green-500/20 border border-green-500/30 text-green-300'
              : status.type === 'error'
              ? 'bg-red-500/20 border border-red-500/30 text-red-300'
              : 'bg-blue-500/20 border border-blue-500/30 text-blue-300'
          }`}
        >
          {status.type === 'success' && <CheckCircle className="w-5 h-5" />}
          {status.type === 'error' && <AlertCircle className="w-5 h-5" />}
          {status.type === 'loading' && <Loader2 className="w-5 h-5 animate-spin" />}
          <span className="font-medium">{status.message}</span>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-accent text-white/80 mb-3">
              お名前 *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all duration-300"
              placeholder="お名前をご入力ください"
            />
          </div>
          <div>
            <label className="block text-sm font-accent text-white/80 mb-3">
              ご所属（会社名・法人名） *
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              required
              className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all duration-300"
              placeholder="会社名・法人名をご入力ください"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-accent text-white/80 mb-3">
            メールアドレス *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all duration-300"
            placeholder="メールアドレスをご入力ください"
          />
        </div>

        <div>
          <label className="block text-sm font-accent text-white/80 mb-3">
            ご相談内容（任意）
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={6}
            className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all duration-300 resize-none"
            placeholder="ご相談内容をご記入ください"
          />
        </div>

        <div className="text-center pt-8">
          <motion.button
            type="submit"
            disabled={status.type === 'loading'}
            whileHover={{ scale: status.type === 'loading' ? 1 : 1.02 }}
            whileTap={{ scale: status.type === 'loading' ? 1 : 0.98 }}
            className={`px-12 py-6 font-accent rounded-xl transition-all duration-300 border ${
              status.type === 'loading'
                ? 'bg-slate-700 text-slate-400 border-slate-600 cursor-not-allowed'
                : 'bg-slate-800 text-white hover:bg-slate-700 border-slate-600/50'
            }`}
          >
            {status.type === 'loading' ? (
              <div className="flex items-center space-x-2">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>送信中...</span>
              </div>
            ) : (
              '無料相談を申し込む'
            )}
          </motion.button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm 