'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, TrendingUp } from 'lucide-react'

const caseStudies = [
  {
    industry: 'E-Commerce',
    client: 'RetailBD',
    headline: '312% increase in organic traffic in 90 days',
    description: 'Complete digital overhaul — new website, SEO strategy, and paid media. Ranked #1 for "online store Bangladesh" within 3 months — up from position 58.',
    tags: ['Digital Marketing', 'SEO', 'Website Development'],
    metric: '312%',
    metricLabel: 'Traffic Growth',
    bg: '#0F0E2A',
    accent: '#E63946',
  },
  {
    industry: 'Tech Startup',
    client: 'AppVenture',
    headline: 'Fully functional mobile app delivered in 6 weeks',
    description: 'iOS and Android app built from zero to launch — 2 weeks ahead of schedule. 4.8★ average user rating on first release week.',
    tags: ['Mobile App Development', 'Software Development'],
    metric: '6 wks',
    metricLabel: 'Delivery Time',
    bg: '#111118',
    accent: '#1D9E75',
  },
  {
    industry: 'FMCG',
    client: 'BrandPulse',
    headline: '280% ROI on influencer campaign in 30 days',
    description: 'Multi-channel influencer strategy across Instagram and TikTok. 4.2 million impressions, 180K new brand followers, and a 280% return on campaign investment.',
    tags: ['Influencer Marketing', 'Digital Marketing'],
    metric: '280%',
    metricLabel: 'Campaign ROI',
    bg: '#0F0E2A',
    accent: '#F4A261',
  },
]

function CaseStudyCard({ study, delay }: { study: typeof caseStudies[0]; delay: number }) {
  const [hovered, setHovered] = useState(false)
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        borderRadius: '20px',
        overflow: 'hidden',
        border: `1px solid ${hovered ? study.accent + '40' : 'rgba(0,0,0,0.07)'}`,
        transition: 'transform 0.2s ease-out, box-shadow 0.2s ease-out, border-color 0.2s, opacity 0.6s ease',
        transform: visible ? (hovered ? 'translateY(-6px)' : 'translateY(0)') : 'translateY(32px)',
        boxShadow: hovered ? `0 20px 60px rgba(0,0,0,0.12)` : '0 2px 12px rgba(0,0,0,0.05)',
        opacity: visible ? 1 : 0,
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Card top accent */}
      <div style={{ background: study.accent, height: '4px' }} />

      <div style={{ padding: '36px 32px' }}>
        {/* Metric highlight */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '20px',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-syne)',
              fontWeight: 800,
              fontSize: '2.5rem',
              color: study.accent,
              lineHeight: 1,
            }}
          >
            {study.metric}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', fontWeight: 600, color: '#6B6B80', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              {study.metricLabel}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
              <TrendingUp size={14} color={study.accent} />
              <span style={{ fontSize: '0.8125rem', color: study.accent, fontWeight: 600, fontFamily: 'var(--font-inter)' }}>
                {study.industry}
              </span>
            </div>
          </div>
        </div>

        {/* Headline */}
        <h3
          style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 700,
            fontSize: '1.25rem',
            color: '#0F0E2A',
            lineHeight: 1.35,
            marginBottom: '12px',
          }}
        >
          {study.headline}
        </h3>

        {/* Description */}
        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '0.9375rem',
            color: '#6B6B80',
            lineHeight: 1.7,
            marginBottom: '24px',
          }}
        >
          {study.description}
        </p>

        {/* Client */}
        <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#2D2D3A', fontFamily: 'var(--font-inter)', marginBottom: '16px' }}>
          Client: {study.client}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
          {study.tags.map(tag => (
            <span
              key={tag}
              style={{
                background: `${study.accent}12`,
                color: study.accent,
                padding: '4px 10px',
                borderRadius: '100px',
                fontSize: '0.75rem',
                fontWeight: 600,
                fontFamily: 'var(--font-inter)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        <Link
          href="/case-studies"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            color: study.accent,
            fontSize: '0.875rem',
            fontWeight: 700,
            fontFamily: 'var(--font-inter)',
            textDecoration: 'none',
          }}
        >
          Read full case study
          <ArrowRight size={14} style={{ transform: hovered ? 'translateX(4px)' : 'none', transition: 'transform 0.15s' }} />
        </Link>
      </div>
    </div>
  )
}

export default function CaseStudiesGrid() {
  const [headerVisible, setHeaderVisible] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true) },
      { threshold: 0.2 }
    )
    if (headerRef.current) observer.observe(headerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      style={{
        background: '#fff',
        padding: '120px 0',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div
          ref={headerRef}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '24px',
            marginBottom: '60px',
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <div>
            <div style={{ color: '#E63946', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'var(--font-inter)', marginBottom: '12px' }}>
              Proven Results
            </div>
            <h2
              id="case-studies-heading"
              style={{
                fontFamily: 'var(--font-syne)',
                fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: '#0F0E2A',
                lineHeight: 1.15,
              }}
            >
              Work that speaks<br />in numbers.
            </h2>
          </div>
          <Link
            href="/case-studies"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#E63946',
              textDecoration: 'none',
              fontSize: '0.9375rem',
              fontWeight: 700,
              fontFamily: 'var(--font-inter)',
              borderBottom: '2px solid #E63946',
              paddingBottom: '2px',
            }}
          >
            See all case studies <ArrowRight size={16} />
          </Link>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '28px',
          }}
        >
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.client} study={study} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
