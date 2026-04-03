import NavigationBar from '@/components/layout/NavigationBar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { ArrowLeft, Clock, Tag, User, Calendar, TrendingUp, Users, Eye, DollarSign } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How We Generated 280% ROI with a 30-Day Influencer Campaign — RTech Lead',
  description: 'A full breakdown of the strategy, creator selection criteria, content brief, and post-campaign analytics.',
}

export default function ArticlePage() {
  return (
    <>
      <NavigationBar />
      <main id="main-content">
        {/* Article Header */}
        <section style={{ background: '#0F0E2A', padding: '140px 24px 60px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#F4A261', fontSize: '0.875rem', fontWeight: 600, marginBottom: '24px', textDecoration: 'none' }}>
              <ArrowLeft size={16} /> Back to Blog
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#F4A261', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Tag size={12} /> Influencer Marketing
              </span>
              <span style={{ fontSize: '0.75rem', color: 'rgba(237,236,234,0.6)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Clock size={12} /> 6 min read
              </span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.15, marginBottom: '20px' }}>
              How we generated 280% ROI with a 30-day influencer campaign
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #F4A261, #E63946)' }} />
              <div>
                <div style={{ color: '#fff', fontSize: '0.875rem', fontWeight: 600 }}>Jessica Park</div>
                <div style={{ color: 'rgba(237,236,234,0.6)', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Calendar size={11} /> February 28, 2026
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article style={{ background: '#F8F7F4', padding: '60px 24px 100px' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto', fontFamily: 'var(--font-inter)', fontSize: '1.0625rem', lineHeight: 1.8, color: '#3A3A4A' }}>
            <p style={{ fontSize: '1.25rem', fontWeight: 500, color: '#0F0E2A', marginBottom: '32px' }}>
              Most influencer campaigns fail because brands chase vanity metrics. Here is the exact framework we used to turn a $45,000 influencer investment into $171,000 in attributable revenue for a beauty brand in just 30 days.
            </p>

            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.5rem', color: '#0F0E2A', marginTop: '48px', marginBottom: '20px' }}>The Client Challenge</h2>
            <p style={{ marginBottom: '20px' }}>
              A mid-sized skincare brand had tried influencer marketing twice before with disappointing results. Their previous agency prioritized follower count over engagement, resulting in beautiful content that generated zero sales. They came to us skeptical but willing to try one more time—with strict ROI expectations.
            </p>

            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.5rem', color: '#0F0E2A', marginTop: '48px', marginBottom: '20px' }}>Step 1: Creator Selection (Not What You Think)</h2>
            <p style={{ marginBottom: '20px' }}>
              We ignored accounts with 100K+ followers. Instead, we built a tiered creator mix focused on engagement quality and audience alignment:
            </p>
            <ul style={{ marginBottom: '20px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}><strong>3 Macro creators (50K-150K):</strong> Brand awareness and credibility</li>
              <li style={{ marginBottom: '12px' }}><strong>12 Micro creators (10K-50K):</strong> Engagement and trust-building</li>
              <li><strong>8 Nano creators (1K-10K):</strong> Authenticity and community penetration</li>
            </ul>
            <p style={{ marginBottom: '20px' }}>
              Our selection criteria prioritized comment sentiment analysis over like counts. We only worked with creators whose audiences actively asked questions and shared personal experiences in comments.
            </p>

            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.5rem', color: '#0F0E2A', marginTop: '48px', marginBottom: '20px' }}>Step 2: The Content Brief That Converts</h2>
            <p style={{ marginBottom: '20px' }}>
              Most brand briefs kill authenticity. We gave creators a problem-solution framework instead of scripted talking points:
            </p>
            <ul style={{ marginBottom: '20px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>Show your real skincare routine (including competitor products)</li>
              <li style={{ marginBottom: '12px' }}>Identify the specific problem this product solved for you</li>
              <li style={{ marginBottom: '12px' }}>Demonstrate the product in use—no studio lighting required</li>
              <li>Include one genuine hesitation you had before trying it</li>
            </ul>
            <p style={{ marginBottom: '20px' }}>
              This approach produced content that felt like friend recommendations, not advertisements. Average watch time increased 340% compared to the brand's previous polished creative.
            </p>

            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.5rem', color: '#0F0E2A', marginTop: '48px', marginBottom: '20px' }}>Step 3: Attribution Infrastructure</h2>
            <p style={{ marginBottom: '20px' }}>
              You cannot optimize what you cannot measure. We built a multi-touch attribution system:
            </p>
            <ul style={{ marginBottom: '20px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>Unique discount codes per creator tier</li>
              <li style={{ marginBottom: '12px' }}>UTM-tagged landing pages for click tracking</li>
              <li style={{ marginBottom: '12px' }}>Post-purchase surveys asking "How did you hear about us?"</li>
              <li>7-day and 30-day cohort analysis for true LTV calculation</li>
            </ul>

            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.5rem', color: '#0F0E2A', marginTop: '48px', marginBottom: '20px' }}>The Results (30 Days)</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '32px' }}>
              <div style={{ padding: '24px', background: '#fff', borderRadius: '12px', textAlign: 'center' }}>
                <TrendingUp size={28} style={{ color: '#F4A261', marginBottom: '8px' }} />
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F0E2A' }}>280%</div>
                <div style={{ fontSize: '0.875rem', color: '#6B6B80' }}>Campaign ROI</div>
              </div>
              <div style={{ padding: '24px', background: '#fff', borderRadius: '12px', textAlign: 'center' }}>
                <DollarSign size={28} style={{ color: '#F4A261', marginBottom: '8px' }} />
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F0E2A' }}>$171K</div>
                <div style={{ fontSize: '0.875rem', color: '#6B6B80' }}>Attributable Revenue</div>
              </div>
              <div style={{ padding: '24px', background: '#fff', borderRadius: '12px', textAlign: 'center' }}>
                <Eye size={28} style={{ color: '#F4A261', marginBottom: '8px' }} />
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F0E2A' }}>2.4M</div>
                <div style={{ fontSize: '0.875rem', color: '#6B6B80' }}>Total Reach</div>
              </div>
              <div style={{ padding: '24px', background: '#fff', borderRadius: '12px', textAlign: 'center' }}>
                <Users size={28} style={{ color: '#F4A261', marginBottom: '8px' }} />
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F0E2A' }}>5.8%</div>
                <div style={{ fontSize: '0.875rem', color: '#6B6B80' }}>Engagement Rate</div>
              </div>
            </div>

            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.5rem', color: '#0F0E2A', marginTop: '48px', marginBottom: '20px' }}>What Made the Difference</h2>
            <p style={{ marginBottom: '20px' }}>
              Three factors separated this campaign from the brand's previous attempts:
            </p>
            <ul style={{ marginBottom: '20px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}><strong>Creator-audience alignment over reach:</strong> A 15K creator with perfect demographic match outperformed a 200K creator by 3x</li>
              <li style={{ marginBottom: '12px' }}><strong>Authenticity requirements:</strong> Unpolished content showing real product use drove 4x more saves and shares than studio content</li>
              <li><strong>Full-funnel tracking:</strong> We knew exactly which creators drove revenue versus just awareness, allowing mid-campaign optimization</li>
            </ul>

            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.5rem', color: '#0F0E2A', marginTop: '48px', marginBottom: '20px' }}>The Bottom Line</h2>
            <p style={{ marginBottom: '20px' }}>
              Influencer marketing works when you treat it as performance marketing, not brand marketing. The right creators, authentic content, and rigorous attribution can deliver ROI that outperforms paid social at scale.
            </p>

            <div style={{ marginTop: '48px', padding: '32px', background: '#fff', borderRadius: '16px', borderLeft: '4px solid #F4A261' }}>
              <p style={{ fontWeight: 600, color: '#0F0E2A', marginBottom: '8px' }}>Want influencer campaigns that drive revenue?</p>
              <p style={{ marginBottom: '16px' }}>We build performance-focused creator programs with full attribution tracking.</p>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#F4A261', fontWeight: 700, textDecoration: 'none' }}>
                Discuss your campaign <ArrowLeft size={16} style={{ transform: 'rotate(180deg)' }} />
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
