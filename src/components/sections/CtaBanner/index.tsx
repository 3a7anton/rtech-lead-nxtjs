'use client'

import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function CtaBanner() {
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
      aria-label="Call to action"
      style={{
        background: '#0A0A0F',
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Gradient accent */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(230,57,70,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        ref={ref}
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 24px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(32px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            color: '#E63946',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-inter)',
            marginBottom: '20px',
          }}
        >
          Ready to grow?
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 800,
            fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
            color: '#fff',
            lineHeight: 1.1,
            marginBottom: '20px',
          }}
        >
          Your vision. Our eight superpowers.<br />
          <span
            style={{
              background: 'linear-gradient(135deg, #E63946, #F4A261)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            One relentless team.
          </span>
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '1.125rem',
            color: 'rgba(237,236,234,0.65)',
            lineHeight: 1.7,
            marginBottom: '48px',
            maxWidth: '560px',
            margin: '0 auto 48px',
          }}
        >
          From code to camera, strategy to stage — RTech Lead delivers full-stack digital transformation under one roof.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
          <Link
            href="/contact"
            id="cta-banner-primary"
            className="btn-pulse"
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
              transition: 'transform 0.15s, background 0.15s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.03)'
              e.currentTarget.style.background = '#c62d39'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.background = '#E63946'
            }}
          >
            Let's talk <ArrowRight size={18} />
          </Link>
          <Link
            href="/#case-studies"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'transparent',
              color: '#fff',
              padding: '0 28px',
              height: '56px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: 600,
              fontFamily: 'var(--font-inter)',
              border: '1px solid rgba(255,255,255,0.2)',
              transition: 'border-color 0.15s, background 0.15s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'
              e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
              e.currentTarget.style.background = 'transparent'
            }}
          >
            See the work
          </Link>
        </div>
      </div>
    </section>
  )
}
