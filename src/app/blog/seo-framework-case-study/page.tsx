import NavigationBar from '@/components/layout/NavigationBar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { ArrowLeft, Clock, Tag, User, Calendar, Search, BarChart3, Zap, FileText } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ranked #1 in 90 Days: The Exact SEO Framework — RTech Lead',
  description: 'From position 58 to #1 — a step-by-step account of the technical SEO and content strategy that drove 312% traffic growth.',
}

export default function ArticlePage() {
  return (
    <>
      <NavigationBar />
      <main id="main-content">
        {/* Article Header */}
        <section style={{ background: '#0F0E2A', padding: '140px 24px 60px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#378ADD', fontSize: '0.875rem', fontWeight: 600, marginBottom: '24px', textDecoration: 'none' }}>
              <ArrowLeft size={16} /> Back to Blog
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#378ADD', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Tag size={12} /> SEO
              </span>
              <span style={{ fontSize: '0.75rem', color: 'rgba(237,236,234,0.6)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Clock size={12} /> 8 min read
              </span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.15, marginBottom: '20px' }}>
              Ranked #1 in 90 days: the exact SEO framework we used for a retail client
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #378ADD, #9B5DE5)' }} />
              <div>
                <div style={{ color: '#fff', fontSize: '0.875rem', fontWeight: 600 }}>David Nakamura</div>
                <div style={{ color: 'rgba(237,236,234,0.6)', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Calendar size={11} /> February 20, 2026
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article style={{ background: '#F8F7F4', padding: '60px 24px 100px' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto', fontFamily: 'var(--font-inter)', fontSize: '1.0625rem', lineHeight: 1.8, color: '#3A3A4A' }}>
            <p style={{ fontSize: '1.25rem', fontWeight: 500, color: '#0F0E2A', marginBottom: '32px' }}>
              SEO does not have to take years. A regional furniture retailer went from page 6 to position #1 for their primary keyword in 90 days. Here is the exact technical and content framework that made it happen.
            </p>

            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.5rem', color: '#0F0E2A', marginTop: '48px', marginBottom: '20px' }}>The Starting Point</h2>
            <p style={{ marginBottom: '20px' }}>
              When the client came to us, their website was stuck on page 6 for "furniture store [city]"—invisible to 99% of searchers. They had decent domain authority but suffered from classic technical SEO debt: slow load times, thin content, and a site structure that buried their best products three clicks deep.
            </p>

            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.5rem', color: '#0F0E2A', marginTop: '48px', marginBottom: '20px' }}>Phase 1: Technical Foundation (Weeks 1-3)</h2>
            
            <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.125rem', color: '#0F0E2A', marginTop: '32px', marginBottom: '12px' }}>Core Web Vitals Optimization</h3>
            <p style={{ marginBottom: '20px' }}>
              Page experience is a ranking factor, and our client's LCP (Largest Contentful Paint) was 4.2 seconds—well above the 2.5s threshold. We implemented:
            </p>
            <ul style={{ marginBottom: '20px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>Image optimization with WebP format and lazy loading</li>
              <li style={{ marginBottom: '12px' }}>Critical CSS inlining above the fold</li>
              <li style={{ marginBottom: '12px' }}>JavaScript deferral for non-essential scripts</li>
              <li>CDN implementation for static assets</li>
            </ul>
            <p style={{ marginBottom: '20px' }}>
              Result: LCP dropped to 1.8 seconds. CLS (Cumulative Layout Shift) improved from 0.35 to 0.05.
            </p>

            <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.125rem', color: '#0F0E2A', marginTop: '32px', marginBottom: '12px' }}>Site Architecture Restructure</h3>
            <p style={{ marginBottom: '20px' }}>
              We flattened the site hierarchy from 5 levels to 3, ensuring every product was reachable within 2 clicks from the homepage. Implemented breadcrumb schema and internal linking strategy connecting related products and categories.
            </p>

            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.5rem', color: '#0F0E2A', marginTop: '48px', marginBottom: '20px' }}>Phase 2: Content Strategy (Weeks 4-8)</h2>
            
            <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.125rem', color: '#0F0E2A', marginTop: '32px', marginBottom: '12px' }}>Keyword Clustering</h3>
            <p style={{ marginBottom: '20px' }}>
              Instead of targeting single keywords, we built topical authority clusters. For "furniture store," we created supporting content around:
            </p>
            <ul style={{ marginBottom: '20px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>Room-by-room buying guides</li>
              <li style={{ marginBottom: '12px' }}>Material comparison content</li>
              <li style={{ marginBottom: '12px' }}>Local furniture care and maintenance</li>
              <li>Style trend articles</li>
            </ul>

            <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.125rem', color: '#0F0E2A', marginTop: '32px', marginBottom: '12px' }}>Search Intent Alignment</h3>
            <p style={{ marginBottom: '20px' }}>
              We audited existing content against actual search intent. Product pages were ranking for informational queries and failing. We split content strategy:
            </p>
            <ul style={{ marginBottom: '20px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}><strong>Informational queries:</strong> Blog posts and guides</li>
              <li style={{ marginBottom: '12px' }}><strong>Commercial queries:</strong> Category pages with buying guides</li>
              <li><strong>Transactional queries:</strong> Optimized product pages with clear CTAs</li>
            </ul>

            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.5rem', color: '#0F0E2A', marginTop: '48px', marginBottom: '20px' }}>Phase 3: Authority Building (Weeks 6-12)</h2>
            
            <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.125rem', color: '#0F0E2A', marginTop: '32px', marginBottom: '12px' }}>Strategic Link Building</h3>
            <p style={{ marginBottom: '20px' }}>
              We focused on quality over quantity. Targeted local business directories, industry publications, and neighborhood blogs. Created linkable assets: a "Room Size Calculator" tool and an annual "Local Home Trends Report" that earned natural backlinks from interior design blogs.
            </p>

            <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.125rem', color: '#0F0E2A', marginTop: '32px', marginBottom: '12px' }}>Google Business Profile Optimization</h3>
            <p style={{ marginBottom: '20px' }}>
              For local SEO dominance, we optimized every GBP element: service categories, product catalogs, Q&A sections, and weekly Google Posts. Encouraged review generation through post-purchase follow-up sequences.
            </p>

            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.5rem', color: '#0F0E2A', marginTop: '48px', marginBottom: '20px' }}>The 90-Day Results</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '32px' }}>
              <div style={{ padding: '24px', background: '#fff', borderRadius: '12px', textAlign: 'center' }}>
                <Search size={28} style={{ color: '#378ADD', marginBottom: '8px' }} />
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F0E2A' }}>#1</div>
                <div style={{ fontSize: '0.875rem', color: '#6B6B80' }}>Primary Keyword</div>
              </div>
              <div style={{ padding: '24px', background: '#fff', borderRadius: '12px', textAlign: 'center' }}>
                <BarChart3 size={28} style={{ color: '#378ADD', marginBottom: '8px' }} />
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F0E2A' }}>312%</div>
                <div style={{ fontSize: '0.875rem', color: '#6B6B80' }}>Organic Traffic Growth</div>
              </div>
              <div style={{ padding: '24px', background: '#fff', borderRadius: '12px', textAlign: 'center' }}>
                <Zap size={28} style={{ color: '#378ADD', marginBottom: '8px' }} />
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F0E2A' }}>1.8s</div>
                <div style={{ fontSize: '0.875rem', color: '#6B6B80' }}>Page Load Time</div>
              </div>
              <div style={{ padding: '24px', background: '#fff', borderRadius: '12px', textAlign: 'center' }}>
                <FileText size={28} style={{ color: '#378ADD', marginBottom: '8px' }} />
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F0E2A' }}>47</div>
                <div style={{ fontSize: '0.875rem', color: '#6B6B80' }}>New Ranking Keywords</div>
              </div>
            </div>

            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.5rem', color: '#0F0E2A', marginTop: '48px', marginBottom: '20px' }}>The Framework Summary</h2>
            <ol style={{ marginBottom: '20px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}><strong>Technical first:</strong> Core Web Vitals and site architecture must be solid before content investment</li>
              <li style={{ marginBottom: '12px' }}><strong>Topical authority:</strong> Build content clusters, not isolated keyword pages</li>
              <li style={{ marginBottom: '12px' }}><strong>Intent matching:</strong> Align page type with search intent stage</li>
              <li style={{ marginBottom: '12px' }}><strong>Quality links:</strong> Focus on relevance and authority, not volume</li>
              <li><strong>Local signals:</strong> Optimize every local SEO touchpoint for service businesses</li>
            </ol>

            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.5rem', color: '#0F0E2A', marginTop: '48px', marginBottom: '20px' }}>The Bottom Line</h2>
            <p style={{ marginBottom: '20px' }}>
              SEO is not magic—it is systematic execution. Fix technical debt, build topical authority, and earn quality links. Do it in the right order, and dramatic ranking improvements happen faster than conventional wisdom suggests.
            </p>

            <div style={{ marginTop: '48px', padding: '32px', background: '#fff', borderRadius: '16px', borderLeft: '4px solid #378ADD' }}>
              <p style={{ fontWeight: 600, color: '#0F0E2A', marginBottom: '8px' }}>Need SEO that actually drives traffic?</p>
              <p style={{ marginBottom: '16px' }}>Our technical SEO audits identify exactly what's holding your rankings back.</p>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#378ADD', fontWeight: 700, textDecoration: 'none' }}>
                Get an SEO audit <ArrowLeft size={16} style={{ transform: 'rotate(180deg)' }} />
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
