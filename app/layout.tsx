import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'KairoLab | Technology & Impact Studio',
  description:
    'KairoLab is a technology and impact studio transforming complex ideas into sustainable digital solutions. R&D, Software Development, and Innovation.',
  keywords: [
    'KairoLab',
    'technology studio',
    'impact studio',
    'software development',
    'R&D',
    'innovation',
    'digital solutions',
    'Brazil',
  ],
  authors: [{ name: 'KairoLab' }],
  creator: 'KairoLab',
  openGraph: {
    title: 'KairoLab | Technology & Impact Studio',
    description:
      'Transforming complex ideas into sustainable digital solutions since 2026.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KairoLab | Technology & Impact Studio',
    description:
      'Transforming complex ideas into sustainable digital solutions since 2026.',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
