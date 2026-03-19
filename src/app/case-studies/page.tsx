import NavigationBar from '@/components/layout/NavigationBar'
import Footer from '@/components/layout/Footer'
import ClientWebsitesSlider from '@/components/sections/ClientWebsitesSlider'
import Link from 'next/link'
import { ArrowRight, TrendingUp } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies — RTech Lead | Proven Results & Measurable Outcomes',
  description: 'See how RTech Lead delivers measurable digital results. Case studies spanning website development, digital marketing, mobile apps, influencer campaigns, and more.',
}

const cases = [
  { industry: 'E-Commerce', client: 'Belladona by Farin', headline: '92% increase in organic traffic in 90 days', desc: 'Complete digital overhaul — new website, SEO strategy, and paid media. Ranked #1 for "online store Bangladesh" within 3 months — up from position 58.', tags: ['Digital Marketing', 'SEO', 'Website Development'], metric: '92%', metricLabel: 'Traffic Growth', accent: '#E63946' },
  { industry: 'Tech Startup', client: 'BiggSteppers', headline: 'Fully functional mobile app delivered in 6 weeks', desc: 'iOS and Android app built from zero to launch — 2 weeks ahead of schedule. 4.8★ average user rating on first release week.', tags: ['Mobile App Development', 'Software Development'], metric: '6 wks', metricLabel: 'Time to Market', accent: '#1D9E75' },
  { industry: 'FMCG', client: 'Maze Fragrance', headline: '80% ROI on influencer campaign in 30 days', desc: 'Multi-channel influencer strategy. 4.2 million impressions, 180K new brand followers, 280% return on campaign investment.', tags: ['Influencer Marketing', 'Digital Marketing'], metric: '80%', metricLabel: 'Campaign ROI', accent: '#F4A261' },
  { industry: 'Corporate', client: 'Krishi Bondhu BD', headline: 'Brand identity + videography delivered in 3 weeks', desc: 'Full rebrand including logo, brand guidelines, and a 3-minute corporate video — produced and delivered within 21 days.', tags: ['Graphic & Animation', 'Videography'], metric: '21 days', metricLabel: 'Delivery Time', accent: '#9B5DE5' },
  { industry: 'Events', client: 'Nishonkoch Foundation', headline: '2,000 attendees. 200K social impressions. Zero logistics failures.', desc: 'End-to-end event activation for a national brand launch. Stage design, technical production, influencer seeding, and real-time social amplification.', tags: ['Event Activation', 'Influencer Marketing'], metric: '200K', metricLabel: 'Social Reach', accent: '#378ADD' },
  { industry: 'Healthcare', client: 'Diabuddy', headline: 'Custom software cut admin time by 60%', desc: 'Practice management system with patient records, appointment scheduling, and billing — built from scratch and deployed in 10 weeks.', tags: ['Software Development'], metric: '60%', metricLabel: 'Time Saved', accent: '#E63946' },
]

export default function CaseStudiesPage() {
  return (
    <>
      <NavigationBar />
      <main id="main-content">
        {/* Header */}
        <section style={{ background: '#0F0E2A', padding: '160px 24px 80px', position: 'relative', overflow: 'hidden' }}>
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(230,57,70,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ color: '#E63946', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'var(--font-inter)', marginBottom: '16px' }}>Proven Results</div>
            <h1 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff', lineHeight: 1.1, marginBottom: '20px' }}>
              Work that speaks<br />
              <span style={{ background: 'linear-gradient(135deg, #E63946, #F4A261)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>in numbers.</span>
            </h1>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1.125rem', color: 'rgba(237,236,234,0.65)', maxWidth: '520px', lineHeight: 1.7 }}>
              Every case study includes a named client, a specific metric, and a defined timeframe. No vague claims — just evidence.
            </p>
          </div>
        </section>

        {/* Cases grid */}
        <section style={{ background: '#fff', padding: '80px 24px 120px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '28px' }}>
            {cases.map(c => (
              <div
                key={c.client}
                className="case-card"
                style={{ background: '#fff', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
              >
                <div style={{ background: c.accent, height: '4px' }} />
                <div style={{ padding: '32px 28px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                    <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: '2.25rem', color: c.accent, lineHeight: 1 }}>{c.metric}</div>
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#6B6B80', letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: 'var(--font-inter)' }}>{c.metricLabel}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                        <TrendingUp size={12} color={c.accent} />
                        <span style={{ fontSize: '0.8125rem', color: c.accent, fontWeight: 600, fontFamily: 'var(--font-inter)' }}>{c.industry}</span>
                      </div>
                    </div>
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.125rem', color: '#0F0E2A', lineHeight: 1.35, marginBottom: '12px' }}>{c.headline}</h2>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: '#6B6B80', lineHeight: 1.7, marginBottom: '20px' }}>{c.desc}</p>
                  <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#2D2D3A', fontFamily: 'var(--font-inter)', marginBottom: '16px' }}>Client: {c.client}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {c.tags.map(t => (
                      <span key={t} style={{ background: `${c.accent}12`, color: c.accent, padding: '4px 10px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600, fontFamily: 'var(--font-inter)' }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Client Websites Slider */}
        <ClientWebsitesSlider />

        {/* CTA */}
        <section style={{ background: '#0F0E2A', padding: '80px 24px', textAlign: 'center' }}>
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', marginBottom: '16px', lineHeight: 1.15 }}>
              Your results could be next.
            </h2>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1.125rem', color: 'rgba(237,236,234,0.65)', marginBottom: '36px' }}>
              Tell us your goal. We&apos;ll tell you exactly how we&apos;ll hit it.
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
