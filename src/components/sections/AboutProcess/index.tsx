'use client'

import { useRef, useEffect, useState } from 'react'
import { Search, Lightbulb, Rocket, BarChart2 } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery',
    description: 'Our discovery-first methodology begins with a structured brief — no assumptions, no guesswork. We audit your business, competitors, and audience before writing a single line of code.',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Strategy',
    description: 'By mapping your goals to measurable outcomes, we produce a delivery plan that reduces scope creep and accelerates results by an average of 30%. Every decision is evidence-based.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Execution',
    description: 'Our cross-disciplinary team — developers, designers, marketers, and producers — works in parallel sprints. Transparent reporting at every two-week checkpoint.',
  },
  {
    number: '04',
    icon: BarChart2,
    title: 'Growth',
    description: 'Delivery is not the finish line. Post-launch, we track performance data, run optimisation cycles, and scale what works. Your success is how we measure ours.',
  },
]

export default function AboutProcess() {
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
      id="about"
      aria-labelledby="about-heading"
      style={{
        background: '#0F0E2A',
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative gradient */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '-200px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(230,57,70,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div
          ref={headerRef}
          style={{
            maxWidth: '640px',
            marginBottom: '72px',
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <div
            style={{
              color: '#E63946',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-inter)',
              marginBottom: '16px',
            }}
          >
            Our Process
          </div>
          <h2
            id="about-heading"
            style={{
              fontFamily: 'var(--font-syne)',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#fff',
              lineHeight: 1.15,
              marginBottom: '20px',
            }}
          >
            Built on methodology.<br />Delivered with precision.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '1.125rem',
              color: 'rgba(173,173,190,0.8)',
              lineHeight: 1.7,
            }}
          >
            Every project at RTech Lead begins with a structured brief — no assumptions, no guesswork.
            Our human-centred approach ensures we deliver on time, every time.
          </p>
        </div>

        {/* Steps grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '32px',
          }}
        >
          {steps.map((step, i) => (
            <ProcessStep key={step.number} {...step} delay={i * 100} parentVisible={headerVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProcessStep({
  number, icon: Icon, title, description, delay, parentVisible
}: typeof steps[0] & { delay: number; parentVisible: boolean }) {
  const [hovered, setHovered] = useState(false)
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
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
        background: hovered ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.025)',
        borderRadius: '16px',
        padding: '36px 32px',
        border: `1px solid ${hovered ? 'rgba(230,57,70,0.3)' : 'rgba(255,255,255,0.06)'}`,
        transition: 'background 0.2s, border-color 0.2s, transform 0.2s, opacity 0.6s ease',
        transform: visible ? (hovered ? 'translateY(-4px)' : 'translateY(0)') : 'translateY(32px)',
        opacity: visible ? 1 : 0,
        transitionDelay: `${delay}ms`,
        cursor: 'default',
      }}
    >
      {/* Number */}
      <div
        style={{
          fontFamily: 'var(--font-syne)',
          fontWeight: 800,
          fontSize: '3.5rem',
          color: 'rgba(230,57,70,0.15)',
          lineHeight: 1,
          marginBottom: '20px',
          letterSpacing: '-0.03em',
        }}
      >
        {number}
      </div>

      {/* Icon */}
      <div
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '10px',
          background: 'rgba(230,57,70,0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px',
        }}
      >
        <Icon size={22} color="#E63946" />
      </div>

      <h3
        style={{
          fontFamily: 'var(--font-syne)',
          fontWeight: 700,
          fontSize: '1.25rem',
          color: '#fff',
          marginBottom: '12px',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '0.9375rem',
          color: 'rgba(173,173,190,0.75)',
          lineHeight: 1.75,
        }}
      >
        {description}
      </p>
    </div>
  )
}
