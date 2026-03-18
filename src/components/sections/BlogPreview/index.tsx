'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Clock, Tag } from 'lucide-react'

const posts = [
  {
    tag: 'Digital Marketing',
    readTime: '5 min read',
    title: '7 website mistakes that kill your conversion rate (and how to fix them)',
    excerpt: 'Most business websites fail before visitors even reach the CTA. Here are the seven structural errors we fix in every audit — and what to do instead.',
    href: '/blog/website-conversion-mistakes',
    accent: '#E63946',
  },
  {
    tag: 'Mobile Development',
    readTime: '7 min read',
    title: 'Why your mobile app needs a discovery sprint before a single wire frame',
    excerpt: 'Skipping discovery is the #1 reason apps get rebuilt 6 months after launch. Our structured brief process reduces scope creep by 40%.',
    href: '/blog/mobile-app-discovery-sprint',
    accent: '#1D9E75',
  },
  {
    tag: 'Influencer Marketing',
    readTime: '6 min read',
    title: 'How we generated 280% ROI with a 30-day influencer campaign',
    excerpt: 'A full breakdown of the strategy, creator selection criteria, content brief, and post-campaign analytics from our best-performing campaign to date.',
    href: '/blog/influencer-campaign-roi',
    accent: '#F4A261',
  },
]

function BlogCard({ post, delay }: { post: typeof posts[0]; delay: number }) {
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
        borderRadius: '16px',
        overflow: 'hidden',
        border: `1px solid ${hovered ? post.accent + '40' : 'rgba(0,0,0,0.07)'}`,
        transition: 'transform 0.2s ease-out, box-shadow 0.2s ease-out, border-color 0.2s, opacity 0.6s ease',
        transform: visible ? (hovered ? 'translateY(-6px)' : 'translateY(0)') : 'translateY(32px)',
        boxShadow: hovered ? '0 20px 60px rgba(0,0,0,0.1)' : '0 2px 12px rgba(0,0,0,0.04)',
        opacity: visible ? 1 : 0,
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Top accent bar */}
      <div style={{ background: post.accent, height: '3px' }} />

      <div style={{ padding: '28px 28px 32px' }}>
        {/* Meta */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', fontWeight: 600, color: post.accent, fontFamily: 'var(--font-inter)' }}>
            <Tag size={12} /> {post.tag}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: '#6B6B80', fontFamily: 'var(--font-inter)' }}>
            <Clock size={12} /> {post.readTime}
          </span>
        </div>

        <h3
          style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 700,
            fontSize: '1.125rem',
            color: '#0F0E2A',
            lineHeight: 1.35,
            marginBottom: '12px',
          }}
        >
          {post.title}
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '0.9375rem',
            color: '#6B6B80',
            lineHeight: 1.7,
            marginBottom: '24px',
          }}
        >
          {post.excerpt}
        </p>

        <Link
          href={post.href}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            color: post.accent,
            fontSize: '0.875rem',
            fontWeight: 700,
            fontFamily: 'var(--font-inter)',
            textDecoration: 'none',
          }}
        >
          Read article
          <ArrowRight size={14} style={{ transform: hovered ? 'translateX(4px)' : 'none', transition: 'transform 0.15s' }} />
        </Link>
      </div>
    </div>
  )
}

export default function BlogPreview() {
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
      id="blog"
      aria-labelledby="blog-heading"
      style={{ background: '#F8F7F4', padding: '120px 0' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div
          ref={headerRef}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '24px',
            marginBottom: '56px',
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <div>
            <div style={{ color: '#E63946', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'var(--font-inter)', marginBottom: '10px' }}>
              Insights & Resources
            </div>
            <h2
              id="blog-heading"
              style={{
                fontFamily: 'var(--font-syne)',
                fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: '#0F0E2A',
                lineHeight: 1.15,
              }}
            >
              From the RTech Lead desk.
            </h2>
          </div>
          <Link
            href="/blog"
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
            All articles <ArrowRight size={16} />
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '28px' }}>
          {posts.map((post, i) => (
            <BlogCard key={post.title} post={post} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
