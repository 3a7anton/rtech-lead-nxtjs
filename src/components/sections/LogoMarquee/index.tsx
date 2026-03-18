'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'

// Using placeholder text logos for now (replace with actual logos)
const logos = [
  { alt: 'RetailBD', text: 'RetailBD' },
  { alt: 'AppVenture', text: 'AppVenture' },
  { alt: 'BrandPulse', text: 'BrandPulse' },
  { alt: 'TechNova', text: 'TechNova' },
  { alt: 'EventPro BD', text: 'EventPro BD' },
  { alt: 'MediaGroup', text: 'MediaGroup' },
  { alt: 'DigitalX', text: 'DigitalX' },
  { alt: 'CreativeHub', text: 'CreativeHub' },
]

const allLogos = [...logos, ...logos] // doubled for seamless loop

export default function LogoMarquee() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      aria-label="Trusted by brands"
      style={{
        background: '#0F0E2A',
        padding: '48px 0',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        overflow: 'hidden',
      }}
    >
      <div
        ref={ref}
        style={{
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.6s ease',
        }}
      >
        <p
          style={{
            textAlign: 'center',
            fontFamily: 'var(--font-inter)',
            fontSize: '0.8125rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(173,173,190,0.5)',
            marginBottom: '32px',
          }}
        >
          Trusted by 50+ brands
        </p>

        <div style={{ overflow: 'hidden' }}>
          <div className="marquee-track">
            {allLogos.map((logo, i) => (
              <div
                key={`${logo.alt}-${i}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0 48px',
                  minWidth: '160px',
                  borderRight: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-syne)',
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: 'rgba(173,173,190,0.4)',
                    whiteSpace: 'nowrap',
                    letterSpacing: '0.02em',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(173,173,190,0.4)')}
                >
                  {logo.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
