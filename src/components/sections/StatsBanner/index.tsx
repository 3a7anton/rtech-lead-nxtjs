'use client'

import { useRef, useEffect, useState } from 'react'

const stats = [
  { value: 50, suffix: '+', label: 'Projects delivered', color: '#E63946' },
  { value: 8,  suffix: '',  label: 'Services under one roof', color: '#F4A261' },
  { value: 100, suffix: '%', label: 'On-time delivery rate', color: '#1D9E75' },
  { value: 3,   suffix: ' yrs', label: 'Industry experience', color: '#378ADD' },
]

function useCountUp(end: number, duration = 2000, active = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let start = 0
    const step = end / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [active, end, duration])

  return count
}

function StatItem({ value, suffix, label, color, delay }: typeof stats[0] & { delay: number }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const count = useCountUp(value, 2000, visible)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        textAlign: 'center',
        padding: '40px 24px',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-syne)',
          fontWeight: 800,
          fontSize: 'clamp(3rem, 6vw, 4.5rem)',
          lineHeight: 1,
          color,
          marginBottom: '12px',
          letterSpacing: '-0.02em',
        }}
      >
        {count.toLocaleString()}{suffix}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '1rem',
          color: 'rgba(173,173,190,0.8)',
          fontWeight: 500,
        }}
      >
        {label}
      </div>
    </div>
  )
}

export default function StatsBanner() {
  return (
    <section
      id="stats"
      aria-label="Key statistics"
      style={{
        background: '#0F0E2A',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '0',
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            style={{
              borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
            }}
          >
            <StatItem {...stat} delay={i * 150} />
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 768px) {
          #stats > div > div { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.06); }
        }
      `}</style>
    </section>
  )
}
