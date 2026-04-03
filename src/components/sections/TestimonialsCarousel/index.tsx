'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    quote: 'RTech Lead delivered our entire digital presence — website, app, and brand identity — in under 8 weeks. The result exceeded every KPI we set.',
    name: 'Karim Rahman',
    role: 'CEO',
    company: 'RetailBD',
    rating: 5,
  },
  {
    quote: 'Their discovery-first approach changed how we think about our digital strategy. Within 3 months of working with RTech Lead, our organic traffic grew 312%.',
    name: 'Nadia Islam',
    role: 'Head of Marketing',
    company: 'AppVenture',
    rating: 5,
  },
  {
    quote: 'The influencer campaign RTech Lead ran for us delivered 280% ROI. More importantly, we now have genuine community advocates for our brand.',
    name: 'Tayeb Chowdhury',
    role: 'Brand Director',
    company: 'BrandPulse',
    rating: 5,
  },
  {
    quote: 'Professional, fast, and genuinely invested in outcomes — not just deliverables. The team feels like an extension of our in-house squad.',
    name: 'Sabrina Hassan',
    role: 'Founder',
    company: 'TechNova',
    rating: 5,
  },
  {
    quote: 'The event activation they designed for us set a new benchmark for brand experiences in our sector. Truly world-class execution.',
    name: 'James Okafor',
    role: 'Marketing Manager',
    company: 'EventPro BD',
    rating: 5,
  },
]

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent(c => (c + 1) % testimonials.length)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [])

  const t = testimonials[current]

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      style={{
        background: '#EDECEA',
        padding: '120px 0',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div
          ref={ref}
          style={{
            textAlign: 'center',
            marginBottom: '64px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <div style={{ color: '#E63946', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'var(--font-inter)', marginBottom: '12px' }}>
            Client Voices
          </div>
          <h2
            id="testimonials-heading"
            style={{
              fontFamily: 'var(--font-syne)',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#0F0E2A',
              lineHeight: 1.15,
            }}
          >
            Clients who can vouch for us.
          </h2>
        </div>

        {/* Carousel */}
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.6s ease 0.2s',
          }}
        >
          {/* Quote card */}
          <div
            key={current}
            style={{
              background: '#fff',
              borderRadius: '24px',
              padding: 'clamp(32px, 5vw, 56px)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
              marginBottom: '40px',
              animation: 'fadeSlide 0.4s ease',
            }}
          >
            {/* Stars */}
            <div style={{ display: 'flex', gap: '4px', marginBottom: '24px' }}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={18} fill="#F4A261" color="#F4A261" />
              ))}
            </div>

            {/* Quote */}
            <blockquote>
              <p
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
                  color: '#0F0E2A',
                  lineHeight: 1.65,
                  marginBottom: '32px',
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #E63946, #F4A261)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontWeight: 800,
                      fontSize: '1.125rem',
                      fontFamily: 'var(--font-syne)',
                      flexShrink: 0,
                    }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9375rem', color: '#0F0E2A' }}>
                      {t.name}
                    </div>
                    <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: '#6B6B80' }}>
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              style={{
                background: '#fff',
                border: '1px solid rgba(0,0,0,0.1)',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background 0.15s, border-color 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#E63946'; e.currentTarget.querySelector('svg')!.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.querySelector('svg')!.style.color = '' }}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  style={{
                    width: i === current ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: i === current ? '#E63946' : 'rgba(0,0,0,0.2)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'width 0.3s ease, background 0.2s',
                    padding: 0,
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              style={{
                background: '#fff',
                border: '1px solid rgba(0,0,0,0.1)',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#E63946'; e.currentTarget.querySelector('svg')!.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.querySelector('svg')!.style.color = '' }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <style>{`@keyframes fadeSlide { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </section>
  )
}
