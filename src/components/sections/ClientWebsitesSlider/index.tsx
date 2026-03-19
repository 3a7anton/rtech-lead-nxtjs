'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'

const clients = [
  {
    name: 'Krishi Bondhu BD',
    category: 'Agriculture & E-Commerce',
    url: 'https://krishibondhubd.netlify.app/',
    image: '/client projects/krishibandhu.png',
    accent: '#1D9E75',
    description: 'A full-featured agricultural e-commerce platform connecting farmers directly with buyers across Bangladesh.',
  },
  {
    name: 'Bella Donna by Farin',
    category: 'Fashion & Lifestyle',
    url: 'https://belladonnabyfarin.netlify.app/',
    image: '/client projects/belladona.png',
    accent: '#E63946',
    description: 'Elegant fashion brand website with curated collections, lookbooks, and a seamless shopping experience.',
  },
  {
    name: 'Maze Fragrance',
    category: 'Luxury Perfumery',
    url: 'https://mazefragrance.com/',
    image: '/client projects/maze.png',
    accent: '#9B5DE5',
    description: 'Premium fragrance brand with an immersive product experience and sophisticated e-commerce flow.',
  },
]

export default function ClientWebsitesSlider() {
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const goTo = useCallback((index: number, dir: 'left' | 'right') => {
    if (animating) return
    setDirection(dir)
    setAnimating(true)
    setTimeout(() => {
      setActive(index)
      setAnimating(false)
    }, 320)
  }, [animating])

  const prev = useCallback(() => {
    goTo((active - 1 + clients.length) % clients.length, 'left')
  }, [active, goTo])

  const next = useCallback(() => {
    goTo((active + 1) % clients.length, 'right')
  }, [active, goTo])

  // Auto-play
  useEffect(() => {
    timerRef.current = setTimeout(next, 5000)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [active, next])

  const current = clients[active]

  return (
    <section
      aria-labelledby="client-sites-heading"
      style={{
        background: 'linear-gradient(160deg, #0F0E2A 0%, #1a1135 100%)',
        padding: '100px 24px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${current.accent}25 0%, transparent 70%)`,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          transition: 'background 0.6s ease',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            display: 'inline-block',
            color: '#E63946',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-inter)',
            marginBottom: '14px',
          }}>
            Live Client Websites
          </div>
          <h2
            id="client-sites-heading"
            style={{
              fontFamily: 'var(--font-syne)',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#fff',
              lineHeight: 1.15,
              marginBottom: '14px',
            }}
          >
            Built by us. Loved by clients.
          </h2>
          <p style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '1rem',
            color: 'rgba(237,236,234,0.6)',
            maxWidth: '480px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            Real websites, live on the internet — crafted end-to-end by the RTech Lead team.
          </p>
        </div>

        {/* Slider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>

          {/* Prev button */}
          <button
            onClick={prev}
            aria-label="Previous website"
            style={{
              flexShrink: 0,
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.15)',
              background: 'rgba(255,255,255,0.06)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = current.accent + '40'
              e.currentTarget.style.borderColor = current.accent
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
            }}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Main slide */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '48px',
                alignItems: 'center',
                opacity: animating ? 0 : 1,
                transform: animating
                  ? `translateX(${direction === 'right' ? '-40px' : '40px'})`
                  : 'translateX(0)',
                transition: 'opacity 0.32s ease, transform 0.32s ease',
              }}
            >
              {/* Browser mockup */}
              <div style={{
                background: '#1E1B36',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: `0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)`,
              }}>
                {/* Browser chrome bar */}
                <div style={{
                  background: '#2A2545',
                  padding: '10px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F57' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FFBD2E' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28C840' }} />
                  </div>
                  <div style={{
                    flex: 1,
                    background: 'rgba(255,255,255,0.07)',
                    borderRadius: '6px',
                    padding: '4px 10px',
                    fontSize: '0.7rem',
                    color: 'rgba(255,255,255,0.35)',
                    fontFamily: 'var(--font-inter)',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                  }}>
                    {current.url}
                  </div>
                </div>
                {/* Screenshot */}
                <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
                  <Image
                    src={current.image}
                    alt={`${current.name} website screenshot`}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>

              {/* Info panel */}
              <div>
                <div style={{
                  display: 'inline-block',
                  background: current.accent + '20',
                  color: current.accent,
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-inter)',
                  padding: '4px 12px',
                  borderRadius: '100px',
                  marginBottom: '20px',
                  border: `1px solid ${current.accent}40`,
                }}>
                  {current.category}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-syne)',
                  fontWeight: 800,
                  fontSize: 'clamp(1.6rem, 2.5vw, 2.25rem)',
                  color: '#fff',
                  lineHeight: 1.2,
                  marginBottom: '16px',
                }}>
                  {current.name}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '1rem',
                  color: 'rgba(237,236,234,0.65)',
                  lineHeight: 1.75,
                  marginBottom: '32px',
                }}>
                  {current.description}
                </p>
                <Link
                  href={current.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: current.accent,
                    color: '#fff',
                    padding: '0 28px',
                    height: '48px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontSize: '0.9375rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-inter)',
                    transition: 'opacity 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.opacity = '0.88'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.opacity = '1'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  Visit Website <ExternalLink size={15} />
                </Link>

                {/* Dots */}
                <div style={{ display: 'flex', gap: '8px', marginTop: '40px' }}>
                  {clients.map((c, i) => (
                    <button
                      key={c.name}
                      onClick={() => goTo(i, i > active ? 'right' : 'left')}
                      aria-label={`Go to ${c.name}`}
                      style={{
                        width: i === active ? '28px' : '8px',
                        height: '8px',
                        borderRadius: '100px',
                        border: 'none',
                        cursor: 'pointer',
                        background: i === active ? current.accent : 'rgba(255,255,255,0.2)',
                        transition: 'width 0.3s ease, background 0.3s ease',
                        padding: 0,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={next}
            aria-label="Next website"
            style={{
              flexShrink: 0,
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.15)',
              background: 'rgba(255,255,255,0.06)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = current.accent + '40'
              e.currentTarget.style.borderColor = current.accent
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
            }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Mobile styles */}
      <style>{`
        @media (max-width: 768px) {
          #client-slider-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
