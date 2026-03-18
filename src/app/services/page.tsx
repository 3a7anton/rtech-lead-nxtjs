import NavigationBar from '@/components/layout/NavigationBar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { Globe, Code2, Smartphone, BarChart3, Palette, Users, Video, Calendar, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services — RTech Lead | Website, Software, App, Marketing & More',
  description: 'RTech Lead offers eight full-service digital disciplines: website development, software, mobile apps, digital marketing, graphic design, influencer marketing, videography, and event activation.',
}

const services = [
  { icon: Globe, title: 'Website Development', slug: 'website-development', description: 'Your website is your most powerful salesperson. We build sites that convert visitors into clients — from landing pages to complex e-commerce platforms.', color: '#E63946' },
  { icon: Code2, title: 'Software Development', slug: 'software-development', description: 'Custom software that works exactly the way your business does — not the other way around. We architect, build, and maintain bespoke systems.', color: '#F4A261' },
  { icon: Smartphone, title: 'Mobile App Development', slug: 'mobile-app-development', description: 'Put your brand in your customers\' pockets. We build native iOS and Android apps that people actually use — and come back to.', color: '#1D9E75' },
  { icon: BarChart3, title: 'Digital Marketing', slug: 'digital-marketing', description: 'Reach the right people, at the right time, with the right message. SEO, PPC, social media, and content — managed under one strategy.', color: '#378ADD' },
  { icon: Palette, title: 'Graphic & Animation', slug: 'graphic-animation', description: 'Visual stories that stop the scroll and start the conversation. Brand identity, motion graphics, and illustration by award-level creatives.', color: '#9B5DE5' },
  { icon: Users, title: 'Influencer Marketing', slug: 'influencer-marketing', description: 'Amplify your brand through voices your audience already trusts. We source, brief, and manage creator campaigns with measurable ROI.', color: '#F4A261' },
  { icon: Video, title: 'Videography', slug: 'videography', description: 'Cinematic quality. Brand precision. Content that moves people — literally. From corporate to campaign, we shoot and edit in-house.', color: '#E63946' },
  { icon: Calendar, title: 'Event Activation', slug: 'event-activation', description: 'We don\'t just run events. We create moments your audience remembers for years. Concept, production, and on-ground management.', color: '#1D9E75' },
]

export default function ServicesPage() {
  return (
    <>
      <NavigationBar />
      <main id="main-content">
        {/* Hero */}
        <section style={{ background: '#0F0E2A', padding: '160px 24px 80px', position: 'relative', overflow: 'hidden' }}>
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(230,57,70,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <div style={{ color: '#E63946', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'var(--font-inter)', marginBottom: '16px' }}>Our Services</div>
            <h1 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff', lineHeight: 1.1, marginBottom: '20px' }}>
              Eight services. One partner.<br />
              <span style={{ background: 'linear-gradient(135deg, #E63946, #F4A261)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Zero compromises.</span>
            </h1>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1.125rem', color: 'rgba(237,236,234,0.7)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
              Your brand deserves more than a vendor list. RTech Lead delivers all eight disciplines under one roof — with one team, one vision, and one point of accountability.
            </p>
          </div>
        </section>

        {/* Services grid */}
        <section style={{ background: '#F8F7F4', padding: '80px 24px 120px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '28px' }}>
            {services.map(s => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="service-link-card"
                style={{
                  background: '#fff',
                  borderRadius: '20px',
                  padding: '40px 36px',
                  textDecoration: 'none',
                  display: 'block',
                  border: '1px solid rgba(0,0,0,0.07)',
                }}
              >
                <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: `${s.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                  <s.icon size={26} color={s.color} />
                </div>
                <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.25rem', color: '#0F0E2A', marginBottom: '12px' }}>{s.title}</h2>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: '#6B6B80', lineHeight: 1.75, marginBottom: '24px' }}>{s.description}</p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: s.color, fontSize: '0.875rem', fontWeight: 700, fontFamily: 'var(--font-inter)' }}>
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#0A0A0F', padding: '80px 24px', textAlign: 'center' }}>
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', marginBottom: '16px', lineHeight: 1.15 }}>
              Not sure which service you need?
            </h2>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1.125rem', color: 'rgba(237,236,234,0.65)', marginBottom: '36px' }}>
              Select &ldquo;Multiple Services&rdquo; on our contact form and we&apos;ll scope the right solution for your goals.
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
                padding: '0 36px',
                height: '56px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 700,
                fontFamily: 'var(--font-inter)',
              }}
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
