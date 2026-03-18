import NavigationBar from '@/components/layout/NavigationBar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About RTech Lead — Our Story, Process & Digital Agency Philosophy',
  description: 'RTech Lead is a full-service digital agency built on a discovery-first methodology. Learn how we deliver on time, every time.',
}

const values = [
  { title: 'Discovery First', description: 'Every project begins with a structured brief — no assumptions, no guesswork. We audit before we act.', accent: '#E63946' },
  { title: 'Evidence-Based', description: 'Every decision is backed by data. We set measurable KPIs before we write a single line of code.', accent: '#F4A261' },
  { title: 'Cross-Disciplinary', description: 'Developers, designers, marketers, and producers in one team — eliminating handoff friction and delivery delays.', accent: '#1D9E75' },
  { title: 'Outcome-Led', description: 'We measure success by your results — traffic, conversions, revenue — not just deliverables shipped.', accent: '#378ADD' },
]

export default function AboutPage() {
  return (
    <>
      <NavigationBar />
      <main id="main-content">
        {/* Hero */}
        <section
          style={{
            background: '#0A0A0F',
            padding: '160px 24px 100px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 20% 50%, rgba(29,158,117,0.08) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 85% 30%, rgba(230,57,70,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ color: '#E63946', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'var(--font-inter)', marginBottom: '16px' }}>
              About Us
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-syne)',
                fontWeight: 800,
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                color: '#fff',
                lineHeight: 1.1,
                marginBottom: '24px',
                maxWidth: '800px',
              }}
            >
              We don&apos;t build deliverables.<br />
              <span style={{ background: 'linear-gradient(135deg, #E63946, #F4A261)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                We build growth engines.
              </span>
            </h1>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1.25rem', color: 'rgba(237,236,234,0.7)', maxWidth: '600px', lineHeight: 1.7, marginBottom: '40px' }}>
              RTech Lead is a full-service digital and creative agency — eight disciplines, one team, one invoice.
              Founded on a discovery-first methodology that reduces scope creep and accelerates delivery by an average of 30%.
            </p>
            <Link
              href="/contact"
              className="btn-primary-link"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#E63946',
                color: '#fff',
                padding: '0 32px',
                height: '52px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 700,
                fontFamily: 'var(--font-inter)',
              }}
            >
              Work with us <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* Stats */}
        <section style={{ background: '#0F0E2A' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            {[
              { num: '50+', label: 'Projects delivered' },
              { num: '8', label: 'Services under one roof' },
              { num: '100%', label: 'On-time delivery' },
              { num: '3+', label: 'Years of experience' },
            ].map((s, i) => (
              <div key={s.label} style={{ textAlign: 'center', padding: '48px 24px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: '3rem', color: '#E63946', marginBottom: '8px' }}>{s.num}</div>
                <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'rgba(173,173,190,0.7)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission */}
        <section style={{ background: '#fff', padding: '100px 24px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '64px', alignItems: 'center' }}>
            <div>
              <div style={{ color: '#E63946', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'var(--font-inter)', marginBottom: '16px' }}>Our Mission</div>
              <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#0F0E2A', lineHeight: 1.2, marginBottom: '20px' }}>
                Built to win on first impression,<br />convert through credibility.
              </h2>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: '#6B6B80', lineHeight: 1.75, marginBottom: '20px' }}>
                RTech Lead was built to solve a problem every growing brand faces: fragmentation. You shouldn&apos;t need six agencies for six problems. Our eight-service model means your website, software, app, marketing, design, influencer campaigns, video, and events all come from one team — with one vision.
              </p>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: '#6B6B80', lineHeight: 1.75 }}>
                Our discovery-first methodology begins with a structured brief for every engagement. No assumptions, no guesswork — just a clear plan delivered on time, every time.
              </p>
            </div>
            {/* Logo showcase */}
            <div style={{ background: '#F8F7F4', borderRadius: '24px', padding: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '280px' }}>
              <Image src="/logo.png" alt="RTech Lead" width={240} height={86} style={{ objectFit: 'contain' }} />
            </div>
          </div>
        </section>

        {/* Values */}
        <section style={{ background: '#F8F7F4', padding: '100px 24px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div style={{ color: '#E63946', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'var(--font-inter)', marginBottom: '12px' }}>How We Work</div>
              <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0F0E2A', lineHeight: 1.15 }}>
                Our operating principles.
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
              {values.map(v => (
                <div key={v.title} style={{ background: '#fff', borderRadius: '16px', padding: '36px 28px', borderLeft: `4px solid ${v.accent}` }}>
                  <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.125rem', color: '#0F0E2A', marginBottom: '12px' }}>{v.title}</h3>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: '#6B6B80', lineHeight: 1.7 }}>{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#0F0E2A', padding: '80px 24px', textAlign: 'center' }}>
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', marginBottom: '16px', lineHeight: 1.15 }}>
              Ready to start your project?
            </h2>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1.125rem', color: 'rgba(237,236,234,0.65)', marginBottom: '36px' }}>
              Every RTech Lead engagement starts with a structured brief. Let&apos;s define yours.
            </p>
            <Link
              href="/contact"
              className="btn-primary-link"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#E63946', color: '#fff', padding: '0 36px', height: '56px', borderRadius: '8px', textDecoration: 'none', fontSize: '1rem', fontWeight: 700, fontFamily: 'var(--font-inter)' }}
            >
              Start a project <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
