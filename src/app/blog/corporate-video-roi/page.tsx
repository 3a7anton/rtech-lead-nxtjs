import NavigationBar from '@/components/layout/NavigationBar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { ArrowLeft, Clock, Tag, User, Calendar, Play, BarChart2, Eye, MousePointer } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Corporate Video Outperforms Static Content by 4× — RTech Lead',
  description: 'Data from 50+ client campaigns shows video content generates 4× the engagement. Here is how to build a business case internally.',
}

export default function ArticlePage() {
  return (
    <>
      <NavigationBar />
      <main id="main-content">
        {/* Article Header */}
        <section style={{ background: '#0F0E2A', padding: '140px 24px 60px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#9B5DE5', fontSize: '0.875rem', fontWeight: 600, marginBottom: '24px', textDecoration: 'none' }}>
              <ArrowLeft size={16} /> Back to Blog
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#9B5DE5', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Tag size={12} /> Videography
              </span>
              <span style={{ fontSize: '0.75rem', color: 'rgba(237,236,234,0.6)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Clock size={12} /> 4 min read
              </span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.15, marginBottom: '20px' }}>
              Why corporate video outperforms static content by 4× — and how to prove it
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #9B5DE5, #E63946)' }} />
              <div>
                <div style={{ color: '#fff', fontSize: '0.875rem', fontWeight: 600 }}>Ryan Torres</div>
                <div style={{ color: 'rgba(237,236,234,0.6)', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Calendar size={11} /> February 14, 2026
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article style={{ background: '#F8F7F4', padding: '60px 24px 100px' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto', fontFamily: 'var(--font-inter)', fontSize: '1.0625rem', lineHeight: 1.8, color: '#3A3A4A' }}>
            <p style={{ fontSize: '1.25rem', fontWeight: 500, color: '#0F0E2A', marginBottom: '32px' }}>
              Your competitors are already investing in video. The question is not whether you can afford corporate video production—it is whether you can afford to keep producing content that gets ignored.
            </p>

            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.5rem', color: '#0F0E2A', marginTop: '48px', marginBottom: '20px' }}>The Numbers Do Not Lie</h2>
            <p style={{ marginBottom: '20px' }}>
              We analyzed performance data from 50+ client campaigns across B2B and B2C verticals. The pattern is consistent and dramatic:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '32px' }}>
              <div style={{ padding: '24px', background: '#fff', borderRadius: '12px', textAlign: 'center' }}>
                <Play size={28} style={{ color: '#9B5DE5', marginBottom: '8px' }} />
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F0E2A' }}>4×</div>
                <div style={{ fontSize: '0.875rem', color: '#6B6B80' }}>Higher Engagement</div>
              </div>
              <div style={{ padding: '24px', background: '#fff', borderRadius: '12px', textAlign: 'center' }}>
                <Eye size={28} style={{ color: '#9B5DE5', marginBottom: '8px' }} />
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F0E2A' }}>2.6×</div>
                <div style={{ fontSize: '0.875rem', color: '#6B6B80' }}>Time on Page</div>
              </div>
              <div style={{ padding: '24px', background: '#fff', borderRadius: '12px', textAlign: 'center' }}>
                <BarChart2 size={28} style={{ color: '#9B5DE5', marginBottom: '8px' }} />
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F0E2A' }}>80%</div>
                <div style={{ fontSize: '0.875rem', color: '#6B6B80' }}>Better Recall Rate</div>
              </div>
              <div style={{ padding: '24px', background: '#fff', borderRadius: '12px', textAlign: 'center' }}>
                <MousePointer size={28} style={{ color: '#9B5DE5', marginBottom: '8px' }} />
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F0E2A' }}>65%</div>
                <div style={{ fontSize: '0.875rem', color: '#6B6B80' }}>More Likely to Buy</div>
              </div>
            </div>

            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.5rem', color: '#0F0E2A', marginTop: '48px', marginBottom: '20px' }}>Why Video Works (The Psychology)</h2>
            
            <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.125rem', color: '#0F0E2A', marginTop: '32px', marginBottom: '12px' }}>1. Emotional Connection at Scale</h3>
            <p style={{ marginBottom: '20px' }}>
              Video combines visual, auditory, and kinetic elements to trigger emotional responses that static text cannot match. A well-crafted 90-second brand story creates more empathy than 10 pages of website copy.
            </p>

            <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.125rem', color: '#0F0E2A', marginTop: '32px', marginBottom: '12px' }}>2. Information Density</h3>
            <p style={{ marginBottom: '20px' }}>
              Viewers retain 95% of a message when they watch it in video compared to 10% when reading it in text. For complex B2B products, this retention gap translates directly to sales cycle efficiency.
            </p>

            <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.125rem', color: '#0F0E2A', marginTop: '32px', marginBottom: '12px' }}>3. Shareability Multiplier</h3>
            <p style={{ marginBottom: '20px' }}>
              Social video generates 1200% more shares than text and image content combined. One testimonial video can reach audiences you would never touch through paid channels alone.
            </p>

            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.5rem', color: '#0F0E2A', marginTop: '48px', marginBottom: '20px' }}>Video Types by Funnel Stage</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '32px', background: '#fff', borderRadius: '12px', overflow: 'hidden' }}>
              <thead>
                <tr style={{ background: '#0F0E2A', color: '#fff' }}>
                  <th style={{ padding: '16px', textAlign: 'left', fontSize: '0.875rem' }}>Funnel Stage</th>
                  <th style={{ padding: '16px', textAlign: 'left', fontSize: '0.875rem' }}>Video Type</th>
                  <th style={{ padding: '16px', textAlign: 'left', fontSize: '0.875rem' }}>Goal</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '16px', fontSize: '0.9375rem' }}>Awareness</td>
                  <td style={{ padding: '16px', fontSize: '0.9375rem' }}>Brand Story, Explainer</td>
                  <td style={{ padding: '16px', fontSize: '0.9375rem' }}>Problem identification</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '16px', fontSize: '0.9375rem' }}>Consideration</td>
                  <td style={{ padding: '16px', fontSize: '0.9375rem' }}>Product Demo, Comparison</td>
                  <td style={{ padding: '16px', fontSize: '0.9375rem' }}>Solution education</td>
                </tr>
                <tr>
                  <td style={{ padding: '16px', fontSize: '0.9375rem' }}>Decision</td>
                  <td style={{ padding: '16px', fontSize: '0.9375rem' }}>Testimonial, Case Study</td>
                  <td style={{ padding: '16px', fontSize: '0.9375rem' }}>Risk reduction</td>
                </tr>
              </tbody>
            </table>

            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.5rem', color: '#0F0E2A', marginTop: '48px', marginBottom: '20px' }}>Building the Internal Business Case</h2>
            <p style={{ marginBottom: '20px' }}>
              Getting budget approval requires more than creative arguments. Here is the framework we use with clients:
            </p>
            <ol style={{ marginBottom: '20px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}><strong>Cost-per-result comparison:</strong> Calculate what you currently spend to achieve a lead or sale through static content vs. projected video performance</li>
              <li style={{ marginBottom: '12px' }}><strong>Competitive gap analysis:</strong> Document competitor video presence and estimate their advantage in engagement and reach</li>
              <li style={{ marginBottom: '12px' }}><strong>Asset longevity:</strong> A single professional video produces value for 2-3 years across website, social, sales decks, and email campaigns</li>
              <li><strong>Repurposing economics:</strong> One 3-minute video yields 15+ social clips, 30+ quote graphics, and blog transcript content</li>
            </ol>

            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.5rem', color: '#0F0E2A', marginTop: '48px', marginBottom: '20px' }}>The Production Reality</h2>
            <p style={{ marginBottom: '20px' }}>
              Quality corporate video does not require Hollywood budgets. Our most effective client videos range from $8,000-$25,000 for concepts that deliver ROI within 90 days. The key is strategic planning—knowing exactly what message needs to land and where the video will be deployed before cameras roll.
            </p>

            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.5rem', color: '#0F0E2A', marginTop: '48px', marginBottom: '20px' }}>The Bottom Line</h2>
            <p style={{ marginBottom: '20px' }}>
              Video is not a nice-to-have marketing asset—it is becoming the baseline expectation for B2B and B2C communication. Companies that delay video investment are not saving money; they are paying a premium in lost attention, weaker conversion, and competitive disadvantage.
            </p>

            <div style={{ marginTop: '48px', padding: '32px', background: '#fff', borderRadius: '16px', borderLeft: '4px solid #9B5DE5' }}>
              <p style={{ fontWeight: 600, color: '#0F0E2A', marginBottom: '8px' }}>Ready to add video to your marketing mix?</p>
              <p style={{ marginBottom: '16px' }}>We produce strategic corporate video from concept through distribution optimization.</p>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#9B5DE5', fontWeight: 700, textDecoration: 'none' }}>
                Discuss video production <ArrowLeft size={16} style={{ transform: 'rotate(180deg)' }} />
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
