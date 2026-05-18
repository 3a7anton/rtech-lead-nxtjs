import type { Metadata } from 'next'
import { Syne, Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import ChatBot from '@/components/layout/ChatBot/ChatBot'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['italic'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'RTech Lead — Full-Service Digital Agency | Web, Software, Marketing & More',
  description: 'RTech Lead is the best digital agency for website development, software, mobile apps, digital marketing, videography, and event activation. Eight services. One partner.',
  metadataBase: new URL('https://rtechlead.com'),
  openGraph: {
    title: 'RTech Lead — Full-Service Digital Agency',
    description: 'Website. Software. App. Marketing. Video. Events. RTech Lead does it all.',
    url: 'https://rtechlead.com',
    siteName: 'RTech Lead',
    images: [{ url: '/og/homepage.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RTech Lead — Full-Service Digital Agency',
    description: 'Website. Software. App. Marketing. Video. Events. RTech Lead does it all.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'RTech Lead',
  url: 'https://rtechlead.com',
  logo: 'https://rtechlead.com/logo.png',
  description: 'Full-service digital agency — website, software, app, marketing, video, and events.',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: 'English',
  },
  sameAs: [
    'https://www.facebook.com/rtechlead',
    'https://www.linkedin.com/company/rtechlead',
    'https://www.instagram.com/rtechlead',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${inter.variable} ${playfair.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        {children}
        <ChatBot />
      </body>
    </html>
  )
}
