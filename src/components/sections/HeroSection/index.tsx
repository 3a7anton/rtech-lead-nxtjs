'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'

const words = ['dominate', 'grow', 'convert', 'scale']

export default function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0)
  const [visible, setVisible] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord(w => (w + 1) % words.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        scrollRef.current.style.opacity = window.scrollY > 100 ? '0' : '1'
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      id="hero"
      aria-label="Hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: '#0A0A0F',
        padding: '120px 24px 80px',
      }}
    >
      {/* Animated background */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(230,57,70,0.12) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(29,158,117,0.08) 0%, transparent 60%), radial-gradient(ellipse 40% 60% at 10% 60%, rgba(244,162,97,0.06) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      {/* Grid overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div
        style={{
          maxWidth: '1280px',
          width: '100%',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(230,57,70,0.12)',
            border: '1px solid rgba(230,57,70,0.3)',
            borderRadius: '100px',
            padding: '6px 18px',
            marginBottom: '32px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#E63946',
              display: 'inline-block',
              animation: 'pulse 2s ease-in-out infinite',
            }}
          />
          <span
            style={{
              color: '#E63946',
              fontSize: '0.8125rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-inter)',
            }}
          >
            Full-Service Digital Agency
          </span>
        </div>

        {/* Main headline */}
        <h1
          style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 800,
            fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
            lineHeight: 1.05,
            color: '#fff',
            marginBottom: '24px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
          }}
        >
          We build everything your<br />
          brand needs to{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #E63946, #F4A261)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'inline-block',
              minWidth: '220px',
              transition: 'opacity 0.3s ease',
            }}
          >
            {words[currentWord]}
          </span>
          <br />
          digitally.
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            lineHeight: 1.7,
            color: 'rgba(237,236,234,0.7)',
            maxWidth: '640px',
            margin: '0 auto 48px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s',
          }}
        >
          Website. Software. App. Marketing. Video. Events.{' '}
          <strong style={{ color: '#fff', fontWeight: 600 }}>RTech Lead does it all.</strong>
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent: 'center',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0) scale(1)' : 'translateY(32px) scale(0.95)',
            transition: 'opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s',
          }}
        >
          <Link
            href="/contact"
            id="hero-primary-cta"
            className="btn-pulse"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#E63946',
              color: '#fff',
              padding: '0 32px',
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
            Start a project
            <ArrowRight size={18} style={{ transition: 'transform 0.15s' }} />
          </Link>
          <Link
            href="/#case-studies"
            id="hero-secondary-cta"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'transparent',
              color: '#fff',
              padding: '0 32px',
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
            See our work
          </Link>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            justifyContent: 'center',
            marginTop: '72px',
            paddingTop: '40px',
            borderTop: '1px solid rgba(255,255,255,0.07)',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.7s ease 0.55s',
          }}
        >
          {[
            { num: '50+', label: 'Projects Delivered' },
            { num: '8', label: 'Services' },
            { num: '100%', label: 'On-Time Delivery' },
            { num: '3 yrs', label: 'Experience' },
          ].map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontWeight: 800,
                  fontSize: '2rem',
                  color: '#E63946',
                  lineHeight: 1,
                }}
              >
                {stat.num}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '0.875rem',
                  color: 'rgba(173,173,190,0.7)',
                  marginTop: '4px',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.5s ease 0.8s, opacity 0.2s',
          color: 'rgba(255,255,255,0.3)',
        }}
      >
        <span style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'var(--font-inter)' }}>
          Scroll
        </span>
        <ChevronDown size={16} className="scroll-bounce" />
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 640px) {
          #hero-primary-cta, #hero-secondary-cta {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}
