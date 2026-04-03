import NavigationBar from '@/components/layout/NavigationBar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { ArrowLeft, Clock, Tag, User, Calendar, CheckCircle } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Your Mobile App Needs a Discovery Sprint — RTech Lead',
  description: 'Skipping discovery is the #1 reason apps get rebuilt 6 months after launch. Our structured brief process reduces scope creep by 40%.',
}

export default function ArticlePage() {
  return (
    <>
      <NavigationBar />
      <main id="main-content">
        {/* Article Header */}
        <section style={{ background: '#0F0E2A', padding: '140px 24px 60px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#1D9E75', fontSize: '0.875rem', fontWeight: 600, marginBottom: '24px', textDecoration: 'none' }}>
              <ArrowLeft size={16} /> Back to Blog
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#1D9E75', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Tag size={12} /> Mobile Development
              </span>
              <span style={{ fontSize: '0.75rem', color: 'rgba(237,236,234,0.6)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Clock size={12} /> 7 min read
              </span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.15, marginBottom: '20px' }}>
              Why your mobile app needs a discovery sprint before a single wireframe
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #1D9E75, #378ADD)' }} />
              <div>
                <div style={{ color: '#fff', fontSize: '0.875rem', fontWeight: 600 }}>Marcus Chen</div>
                <div style={{ color: 'rgba(237,236,234,0.6)', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Calendar size={11} /> March 5, 2026
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article style={{ background: '#F8F7F4', padding: '60px 24px 100px' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto', fontFamily: 'var(--font-inter)', fontSize: '1.0625rem', lineHeight: 1.8, color: '#3A3A4A' }}>
            <p style={{ fontSize: '1.25rem', fontWeight: 500, color: '#0F0E2A', marginBottom: '32px' }}>
              Sixty percent of mobile apps are rebuilt within 18 months of launch. Not because the code was bad—but because the fundamental assumptions were wrong. A discovery sprint fixes this before you write your first line of code.
            </p>

            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.5rem', color: '#0F0E2A', marginTop: '48px', marginBottom: '20px' }}>The $200,000 Mistake</h2>
            <p style={{ marginBottom: '20px' }}>
              A fintech startup approached us with a half-built app and a burned budget. They had spent $200,000 on development before realizing their core user flow was fundamentally flawed. Users did not want the budgeting features—they wanted debt payoff guidance. The app had to be gutted.
            </p>
            <p style={{ marginBottom: '20px' }}>
              This is not rare. Industry data shows 42% of app features go unused. Every unused feature represents wasted development budget, extended timelines, and technical debt that slows future iterations.
            </p>

            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.5rem', color: '#0F0E2A', marginTop: '48px', marginBottom: '20px' }}>What Is a Discovery Sprint?</h2>
            <p style={{ marginBottom: '20px' }}>
              A discovery sprint is a structured 2-3 week process that validates assumptions before committing to full development. It answers four critical questions:
            </p>
            <ul style={{ marginBottom: '20px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>Who exactly is the user, and what is their current workaround?</li>
              <li style={{ marginBottom: '12px' }}>What is the minimum viable solution that solves their problem?</li>
              <li style={{ marginBottom: '12px' }}>What technical constraints affect our approach?</li>
              <li>What business model validates this investment?</li>
            </ul>

            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.5rem', color: '#0F0E2A', marginTop: '48px', marginBottom: '20px' }}>The Discovery Sprint Process</h2>

            <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.125rem', color: '#0F0E2A', marginTop: '32px', marginBottom: '12px' }}>Week 1: Research & Stakeholder Alignment</h3>
            <p style={{ marginBottom: '20px' }}>
              We start with competitive analysis, user interviews, and stakeholder workshops. The goal is not to validate your idea—it is to challenge it. We look for evidence that contradicts assumptions, not just confirms them.
            </p>

            <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.125rem', color: '#0F0E2A', marginTop: '32px', marginBottom: '12px' }}>Week 2: User Flow Mapping & Technical Feasibility</h3>
            <p style={{ marginBottom: '20px' }}>
              With validated user insights, we map optimal user journeys and identify technical constraints. Can we access the necessary APIs? What are the platform-specific limitations? What is the minimal technical architecture to support the MVP?
            </p>

            <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.125rem', color: '#0F0E2A', marginTop: '32px', marginBottom: '12px' }}>Week 3: Prototype & Validate</h3>
            <p style={{ marginBottom: '20px' }}>
              We build a clickable prototype—not a product—and test it with real users. This is where we catch the navigation issues, the unclear value propositions, and the missing trust signals. Fixing these in prototype costs hours. Fixing them in production costs months.
            </p>

            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.5rem', color: '#0F0E2A', marginTop: '48px', marginBottom: '20px' }}>Real Results from Discovery</h2>
            <div style={{ display: 'grid', gap: '16px', marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '20px', background: '#fff', borderRadius: '12px' }}>
                <CheckCircle size={20} style={{ color: '#1D9E75', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#0F0E2A' }}>40% reduction in scope creep</strong>
                  <p style={{ fontSize: '0.9375rem', color: '#6B6B80', margin: '4px 0 0' }}>Clear requirements documentation prevents "while we are at it" additions</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '20px', background: '#fff', borderRadius: '12px' }}>
                <CheckCircle size={20} style={{ color: '#1D9E75', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#0F0E2A' }}>3x faster time-to-market</strong>
                  <p style={{ fontSize: '0.9375rem', color: '#6B6B80', margin: '4px 0 0' }}>No rebuild cycles means predictable launch dates</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '20px', background: '#fff', borderRadius: '12px' }}>
                <CheckCircle size={20} style={{ color: '#1D9E75', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#0F0E2A' }}>65% higher user retention</strong>
                  <p style={{ fontSize: '0.9375rem', color: '#6B6B80', margin: '4px 0 0' }}>User-validated flows match actual behavior patterns</p>
                </div>
              </div>
            </div>

            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.5rem', color: '#0F0E2A', marginTop: '48px', marginBottom: '20px' }}>When You Can Skip Discovery</h2>
            <p style={{ marginBottom: '20px' }}>
              Discovery is not always necessary. If you are building a direct clone of a validated app with proven market demand, you can move faster. But for anything with unique user flows, new market categories, or complex integrations—a discovery sprint pays for itself multiple times over.
            </p>

            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.5rem', color: '#0F0E2A', marginTop: '48px', marginBottom: '20px' }}>The Bottom Line</h2>
            <p style={{ marginBottom: '20px' }}>
              A discovery sprint is not bureaucracy—it is insurance. For 2-3 weeks of investment, you eliminate the rebuild risk that destroys timelines and budgets. You build the right thing the first time.
            </p>

            <div style={{ marginTop: '48px', padding: '32px', background: '#fff', borderRadius: '16px', borderLeft: '4px solid #1D9E75' }}>
              <p style={{ fontWeight: 600, color: '#0F0E2A', marginBottom: '8px' }}>Planning an app build?</p>
              <p style={{ marginBottom: '16px' }}>Start with a discovery sprint to validate your concept before investing in full development.</p>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#1D9E75', fontWeight: 700, textDecoration: 'none' }}>
                Book a discovery call <ArrowLeft size={16} style={{ transform: 'rotate(180deg)' }} />
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
