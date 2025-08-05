import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ShikanoX株式会社 - 制度×技術×資金の統合設計',
  description: '従来面倒だった事業化をワンストップで実現します。補助金・公的融資・技術開発を統合した事業設計で、企業の成長を加速します。',
  keywords: '補助金,助成金,IT導入補助金,ものづくり補助金,技術開発,DX,デジタル化,資金調達,公的融資,事業化支援,鳥取県',
  authors: [{ name: 'ShikanoX株式会社' }],
  creator: 'ShikanoX株式会社',
  publisher: 'ShikanoX株式会社',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://shikanox.jp'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ShikanoX株式会社 - 制度×技術×資金の統合設計',
    description: '従来面倒だった事業化をワンストップで実現します。補助金・公的融資・技術開発を統合した事業設計で、企業の成長を加速します。',
    url: 'https://shikanox.jp',
    siteName: 'ShikanoX株式会社',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/images/logo-shikanox.png',
        width: 160,
        height: 80,
        alt: 'ShikanoX Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ShikanoX株式会社 - 制度×技術×資金の統合設計',
    description: '従来面倒だった事業化をワンストップで実現します。',
    images: ['/images/logo-shikanox.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ShikanoX株式会社',
    url: 'https://shikanox.jp',
    logo: 'https://shikanox.jp/images/logo-shikanox.png',
    description: '制度×技術×資金の統合設計により、従来面倒だった事業化をワンストップで実現します。',
    address: {
      '@type': 'PostalAddress',
      addressLocality: '鳥取市',
      addressRegion: '鳥取県',
      postalCode: '689-0426',
      streetAddress: '鹿野町中園116 B棟',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@shikanox.io',
      contactType: 'customer service',
    },
    sameAs: [
      'https://twitter.com/shikanox',
      'https://www.linkedin.com/company/shikanox',
    ],
  }

  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
