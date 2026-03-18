'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import {
  Globe, Code2, Smartphone, BarChart3,
  Palette, Users, Video, Calendar, ArrowRight
} from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Your website is your most powerful salesperson. We build sites that convert visitors into clients.',
    href: '/services/website-development',
    color: '#E63946',
  },
  {
    icon: Code2,
    title: 'Software Development',
    description: 'Custom software that works exactly the way your business does — not the other way around.',
    href: '/services/software-development',
    color: '#F4A261',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Put your brand in your customers\' pockets. We build apps people actually use.',
    href: '/services/mobile-app-development',
    color: '#1D9E75',
  },
  {
    icon: BarChart3,
    title: 'Digital Marketing',
    description: 'Reach the right people, at the right time, with the right message. Every time.',
    href: '/services/digital-marketing',
    color: '#378ADD',
  },
  {
    icon: Palette,
    title: 'Graphic & Animation',
    description: 'Visual stories that stop the scroll and start the conversation.',
    href: '/services/graphic-animation',
    color: '#9B5DE5',
  },
  {
    icon: Users,
    title: 'Influencer Marketing',
    description: 'Amplify your brand through voices your audience already trusts.',
    href: '/services/influencer-marketing',
    color: '#F4A261',
  },
  {
    icon: Video,
    title: 'Videography',
    description: 'Cinematic quality. Brand precision. Content that moves people — literally.',
    href: '/services/videography',
    color: '#E63946',
  },
  {
    icon: Calendar,
    title: 'Event Activation',
    description: 'We don\'t just run events. We create moments your audience remembers for years.',
    href: '/services/event-activation',
    color: '#1D9E75',
  },
]

function ServiceCard({
  icon: Icon, title, description, href, color, delay
}: typeof services[0] & { delay: number }) {
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
    <div ref={ref}>
      <Link
        href={href}
        style={{
          display: 'block',
          textDecoration: 'none',
          background: '#fff',
          borderRadius: '16px',
          padding: '36px 32px',
          border: `1px solid ${hovered ? color : 'rgba(0,0,0,0.07)'}`,
          borderLeft: `4px solid ${hovered ? color : 'transparent'}`,
          transition: 'transform 0.2s ease-out, box-shadow 0.2s ease-out, border-color 0.2s, opacity 0.6s ease, border-left-color 0.2s',
          transform: hovered ? 'translateY(-6px)' : visible ? 'translateY(0)' : 'translateY(32px)',
          boxShadow: hovered ? '0 20px 60px rgba(0,0,0,0.12)' : '0 2px 12px rgba(0,0,0,0.05)',
          opacity: visible ? 1 : 0,
          transitionDelay: `${delay}ms`,
          cursor: 'pointer',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          style={{
            width: '52px',
            height: '52px',
            borderRadius: '12px',
            background: hovered ? color : `${color}18`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
            transition: 'background 0.2s',
          }}
        >
          <Icon
            size={24}
            style={{ color: hovered ? '#fff' : color, transition: 'color 0.2s' }}
          />
        </div>
        <h3
          style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 700,
            fontSize: '1.125rem',
            color: '#0F0E2A',
            marginBottom: '12px',
            lineHeight: 1.3,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '0.9375rem',
            color: '#6B6B80',
            lineHeight: 1.7,
            marginBottom: '20px',
          }}
        >
          {description}
        </p>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            color: color,
            fontSize: '0.875rem',
            fontWeight: 600,
            fontFamily: 'var(--font-inter)',
          }}
        >
          Learn more
          <ArrowRight
            size={14}
            style={{
              transform: hovered ? 'translateX(4px)' : 'translateX(0)',
              transition: 'transform 0.15s',
            }}
          />
        </span>
      </Link>
    </div>
  )
}

export default function ServicesGrid() {
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
      id="services"
      aria-labelledby="services-heading"
      style={{
        background: '#F8F7F4',
        padding: '120px 0',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div
          ref={headerRef}
          style={{
            textAlign: 'center',
            marginBottom: '64px',
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
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
              marginBottom: '16px',
            }}
          >
            What We Do
          </div>
          <h2
            id="services-heading"
            style={{
              fontFamily: 'var(--font-syne)',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#0F0E2A',
              lineHeight: 1.15,
              marginBottom: '16px',
            }}
          >
            Eight services. One partner.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '1.125rem',
              color: '#6B6B80',
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            We work with you, not for you — every service is tailored to your goals.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} delay={i * 80} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '56px' }}>
          <Link
            href="/services"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#0F0E2A',
              color: '#fff',
              padding: '0 32px',
              height: '52px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '0.9375rem',
              fontWeight: 600,
              fontFamily: 'var(--font-inter)',
              transition: 'transform 0.15s, background 0.15s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.03)'
              e.currentTarget.style.background = '#1E1E2A'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.background = '#0F0E2A'
            }}
          >
            Explore all services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
