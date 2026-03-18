import NavigationBar from '@/components/layout/NavigationBar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thank You | RTech Lead',
  description: 'Your message has been received. Our team will be in touch within one working day.',
}

export default function ThankYouPage() {
  return (
    <>
      <NavigationBar />
      <main id="main-content" style={{ background: '#0A0A0F', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '120px 24px' }}>
        <div style={{ textAlign: 'center', maxWidth: '560px' }}>
          <Image src="/logo.png" alt="RTech Lead" width={160} height={57} style={{ objectFit: 'contain', margin: '0 auto 40px' }} />
          <div style={{ width: '72px', height: '72px', background: 'rgba(29,158,117,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h1 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
            Brief received!
          </h1>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1.125rem', color: 'rgba(237,236,234,0.65)', lineHeight: 1.7, marginBottom: '40px' }}>
            Thank you for reaching out. Our team will review your project brief and respond within one working day with a structured proposal.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#E63946', color: '#fff', padding: '12px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontFamily: 'var(--font-inter)' }}>
              Back to Home <ArrowRight size={16} />
            </Link>
            <Link href="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.06)', color: '#fff', padding: '12px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontFamily: 'var(--font-inter)', border: '1px solid rgba(255,255,255,0.1)' }}>
              See our work
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
