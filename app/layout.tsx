import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: {
    default: 'Favor — Performance. Automation. Scale.',
    template: '%s | Favor',
  },
  description:
    'Favor is your technology-powered growth partner. High-code web applications, omnichannel performance marketing, and AI-powered automation systems.',
  keywords: [
    'web development',
    'performance marketing',
    'digital marketing',
    'SEO',
    'SaaS development',
    'AI automation',
    'Google Ads',
    'Meta Ads',
    'CRM automation',
    'Favor',
  ],
  openGraph: {
    title: 'Favor — Performance. Automation. Scale.',
    description:
      'High-code web applications. Omnichannel marketing. AI automation.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#020810',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="relative min-h-screen overflow-x-hidden pt-16 md:pt-[72px]">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
