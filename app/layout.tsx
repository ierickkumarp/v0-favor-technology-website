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
    default: 'Favor — Innovate. Market. Inspire.',
    template: '%s | Favor',
  },
  description:
    'Favor is your all-in-one innovation hub. We build scalable apps, drive measurable digital growth, and craft powerful brand media — all under one roof.',
  keywords: [
    'app development',
    'digital marketing',
    'media production',
    'SEO',
    'SaaS',
    'AI integration',
    'branding',
    'Favor',
  ],
  openGraph: {
    title: 'Favor — Innovate. Market. Inspire.',
    description:
      'One Powerhouse — Three Divisions. Apps. Digital Marketing. Media.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#050a14',
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
        <main className="relative min-h-screen overflow-x-hidden">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
