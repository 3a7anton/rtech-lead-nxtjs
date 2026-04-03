'use client'

import NavigationBar from '@/components/layout/NavigationBar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { ArrowLeft, Clock, Tag, Share2, Twitter, Linkedin, Facebook } from 'lucide-react'

interface BlogLayoutProps {
  title: string
  excerpt: string
  tag: string
  readTime: string
  date: string
  accent: string
  children: React.ReactNode
}

export default function BlogLayout({ title, excerpt, tag, readTime, date, accent, children }: BlogLayoutProps) {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  
  return (
    <>
      <NavigationBar />
      <main id="main-content">
        {/* Hero */}
        <section style={{ background: '#0F0E2A', padding: '140px 24px 60px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Link 
              href="/blog" 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '6px', 
                color: 'rgba(173,173,190,0.8)', 
                fontSize: '0.875rem',
                textDecoration: 'none',
                marginBottom: '24px',
                transition: 'color 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(173,173,190,0.8)'}
            >
              <ArrowLeft size={16} /> Back to all articles
            </Link>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <span style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '4px', 
                fontSize: '0.8125rem', 
                fontWeight: 600, 
                color: accent,
                fontFamily: 'var(--font-inter)',
              }}>
                <Tag size={12} /> {tag}
              </span>
              <span style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '4px', 
                fontSize: '0.8125rem', 
                color: 'rgba(173,173,190,0.7)',
                fontFamily: 'var(--font-inter)',
              }}>
                <Clock size={12} /> {readTime}
              </span>
              <span style={{ fontSize: '0.8125rem', color: 'rgba(173,173,190,0.7)', fontFamily: 'var(--font-inter)' }}>
                {date}
              </span>
            </div>
            
            <h1 style={{ 
              fontFamily: 'var(--font-syne)', 
              fontWeight: 800, 
              fontSize: 'clamp(2rem, 4vw, 3rem)', 
              color: '#fff', 
              lineHeight: 1.15, 
              marginBottom: '20px' 
            }}>
              {title}
            </h1>
            
            <p style={{ 
              fontFamily: 'var(--font-inter)', 
              fontSize: '1.125rem', 
              color: 'rgba(237,236,234,0.7)', 
              lineHeight: 1.7,
              maxWidth: '640px'
            }}>
              {excerpt}
            </p>
          </div>
        </section>

        {/* Article Content */}
        <section style={{ background: '#fff', padding: '60px 24px 100px' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <article style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '1.0625rem',
              lineHeight: 1.8,
              color: '#2D2D3A',
            }}>
              {children}
            </article>

            {/* Share */}
            <div style={{ 
              marginTop: '60px', 
              paddingTop: '40px', 
              borderTop: '1px solid rgba(0,0,0,0.08)',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}>
              <span style={{ 
                fontSize: '0.875rem', 
                fontWeight: 600, 
                color: '#6B6B80',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}>
                <Share2 size={16} /> Share this article
              </span>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: '#1DA1F2',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                }}>
                  <Twitter size={18} />
                </button>
                <button style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: '#0A66C2',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                }}>
                  <Linkedin size={18} />
                </button>
                <button style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: '#1877F2',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                }}>
                  <Facebook size={18} />
                </button>
              </div>
            </div>

            {/* CTA */}
            <div style={{
              marginTop: '48px',
              padding: '32px',
              background: '#F8F7F4',
              borderRadius: '16px',
              textAlign: 'center',
            }}>
              <h3 style={{
                fontFamily: 'var(--font-syne)',
                fontWeight: 700,
                fontSize: '1.25rem',
                color: '#0F0E2A',
                marginBottom: '12px',
              }}>
                Ready to apply these insights?
              </h3>
              <p style={{
                fontSize: '0.9375rem',
                color: '#6B6B80',
                marginBottom: '20px',
                lineHeight: 1.6,
              }}>
                Let&apos;s discuss how RTech Lead can help you achieve similar results.
              </p>
              <Link
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#E63946',
                  color: '#fff',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                }}
              >
                Start a project →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
