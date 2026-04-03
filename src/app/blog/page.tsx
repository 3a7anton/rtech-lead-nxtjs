import NavigationBar from '@/components/layout/NavigationBar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { ArrowRight, Clock, Tag } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — RTech Lead | Digital Marketing, Development & Agency Insights',
  description: 'Expert insights from the RTech Lead team on web development, digital marketing, mobile apps, and more.',
}

const posts = [
  { tag: 'Digital Marketing', readTime: '5 min', title: '7 website mistakes that kill your conversion rate (and how to fix them)', excerpt: 'Most business websites fail before visitors even reach the CTA. Here are the seven structural errors we fix in every audit.', href: '/blog/website-conversion-mistakes', accent: '#E63946', date: 'March 12, 2026' },
  { tag: 'Mobile Development', readTime: '7 min', title: 'Why your mobile app needs a discovery sprint before a single wireframe', excerpt: 'Skipping discovery is the #1 reason apps get rebuilt 6 months after launch. Our structured brief process reduces scope creep by 40%.', href: '/blog/mobile-app-discovery-sprint', accent: '#1D9E75', date: 'March 5, 2026' },
  { tag: 'Influencer Marketing', readTime: '6 min', title: 'How we generated 280% ROI with a 30-day influencer campaign', excerpt: 'A full breakdown of the strategy, creator selection criteria, content brief, and post-campaign analytics.', href: '/blog/influencer-campaign-roi', accent: '#F4A261', date: 'February 28, 2026' },
  { tag: 'SEO', readTime: '8 min', title: 'Ranked #1 in 90 days: the exact SEO framework we used for a retail client', excerpt: 'From position 58 to #1 — a step-by-step account of the technical SEO and content strategy that drove 312% traffic growth.', href: '/blog/seo-framework-case-study', accent: '#378ADD', date: 'February 20, 2026' },
  { tag: 'Videography', readTime: '4 min', title: 'Why corporate video outperforms static content by 4× — and how to prove it', excerpt: 'Data from 50+ client campaigns shows video content generates 4× the engagement. Here\'s how to build a business case internally.', href: '/blog/corporate-video-roi', accent: '#9B5DE5', date: 'February 14, 2026' },
  { tag: 'Event Activation', readTime: '6 min', title: '5 brand activation tactics that generated genuine earned media in 2026', excerpt: 'Events that get shared — not just attended. The activation design principles behind our most-photographed brand moments.', href: '/blog/brand-activation-tactics', accent: '#E63946', date: 'February 6, 2026' },
]

export default function BlogPage() {
  return (
    <>
      <NavigationBar />
      <main id="main-content">
        {/* Header */}
        <section style={{ background: '#0F0E2A', padding: '160px 24px 80px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ color: '#E63946', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'var(--font-inter)', marginBottom: '16px' }}>Insights & Resources</div>
            <h1 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff', lineHeight: 1.1, marginBottom: '16px' }}>
              From the RTech Lead desk.
            </h1>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1.125rem', color: 'rgba(237,236,234,0.65)', maxWidth: '520px', lineHeight: 1.7 }}>
              Expert-led, data-cited content on digital marketing, development, design, and more — from the team that does the work.
            </p>
          </div>
        </section>

        {/* Posts grid */}
        <section style={{ background: '#F8F7F4', padding: '80px 24px 120px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '28px' }}>
            {posts.map(post => (
              <Link
                key={post.href}
                href={post.href}
                className="blog-link-card"
                style={{
                  background: '#fff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  display: 'block',
                  border: '1px solid rgba(0,0,0,0.07)',
                }}
              >
                <div style={{ background: post.accent, height: '3px' }} />
                <div style={{ padding: '28px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: post.accent, fontFamily: 'var(--font-inter)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Tag size={11} /> {post.tag}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#6B6B80', fontFamily: 'var(--font-inter)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={11} /> {post.readTime}
                    </span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: '#ADADBE', marginBottom: '10px' }}>{post.date}</p>
                  <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.0625rem', color: '#0F0E2A', lineHeight: 1.35, marginBottom: '10px' }}>{post.title}</h2>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: '#6B6B80', lineHeight: 1.7, marginBottom: '20px' }}>{post.excerpt}</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: post.accent, fontSize: '0.875rem', fontWeight: 700, fontFamily: 'var(--font-inter)' }}>
                    Read article <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
