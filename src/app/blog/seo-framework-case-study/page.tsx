import type { Metadata } from 'next'
import BlogLayout from '@/components/layout/BlogLayout'

export const metadata: Metadata = {
  title: 'Ranked #1 in 90 Days: The Exact SEO Framework We Used for a Retail Client',
  description: 'From position 58 to #1 — a step-by-step account of the technical SEO and content strategy that drove 312% traffic growth.',
}

export default function ArticlePage() {
  return (
    <BlogLayout
      title="Ranked #1 in 90 days: the exact SEO framework we used for a retail client"
      excerpt="From position 58 to #1 — a step-by-step account of the technical SEO and content strategy that drove 312% traffic growth."
      tag="SEO"
      readTime="8 min read"
      date="February 20, 2026"
      accent="#378ADD"
    >
      <p style={{ fontSize: '1.125rem', fontWeight: 500, color: '#0F0E2A', marginBottom: '24px' }}>
        Three months ago, our client was invisible. Position 58 for their most valuable keyword. Today, they&apos;re #1. Here&apos;s exactly how we did it — no secrets, no black hat tricks, just systematic execution.
      </p>

      <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.5rem', fontWeight: 700, color: '#0F0E2A', marginTop: '40px', marginBottom: '16px' }}>
        Month 1: Technical Foundation
      </h2>
      <p style={{ marginBottom: '16px' }}>
        You can&apos;t build a skyscraper on sand. Before any content or link building, we fixed the technical issues holding the site back.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#0F0E2A', marginTop: '28px', marginBottom: '12px' }}>
        Site Speed Optimization
      </h3>
      <p style={{ marginBottom: '16px' }}>
        The site loaded in 4.2 seconds. We got it to 1.8 seconds through:
      </p>
      <ul style={{ marginBottom: '20px', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '8px' }}>Image compression (WebP format, responsive images)</li>
        <li style={{ marginBottom: '8px' }}>Lazy loading for below-fold content</li>
        <li style={{ marginBottom: '8px' }}>Eliminating render-blocking JavaScript</li>
        <li style={{ marginBottom: '8px' }}>Implementing Cloudflare for CDN and caching</li>
      </ul>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#0F0E2A', marginTop: '28px', marginBottom: '12px' }}>
        Indexing & Crawlability
      </h3>
      <p style={{ marginBottom: '16px' }}>
        Google couldn&apos;t properly crawl the site. We fixed:
      </p>
      <ul style={{ marginBottom: '20px', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '8px' }}>Broken internal links (127 found and fixed)</li>
        <li style={{ marginBottom: '8px' }}>Orphan pages with no internal links pointing to them</li>
        <li style={{ marginBottom: '8px' }}>XML sitemap submission and optimization</li>
        <li style={{ marginBottom: '8px' }}>Robots.txt conflicts blocking important pages</li>
      </ul>

      <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.5rem', fontWeight: 700, color: '#0F0E2A', marginTop: '40px', marginBottom: '16px' }}>
        Month 2: Content Architecture
      </h2>
      <p style={{ marginBottom: '16px' }}>
        Here&apos;s our content strategy in one sentence: <strong>Answer every question a potential customer could have before they know they have it.</strong>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#0F0E2A', marginTop: '28px', marginBottom: '12px' }}>
        Keyword Clustering
      </h3>
      <p style={{ marginBottom: '16px' }}>
        We mapped 200+ keywords into topic clusters around 5 core themes. Each cluster had:
      </p>
      <ul style={{ marginBottom: '20px', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '8px' }}>One pillar page (2,000+ words, comprehensive)</li>
        <li style={{ marginBottom: '8px' }}>5-8 supporting articles (800-1,200 words each)</li>
        <li style={{ marginBottom: '8px' }}>Strategic internal linking between them</li>
      </ul>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#0F0E2A', marginTop: '28px', marginBottom: '12px' }}>
        The Content Formula
      </h3>
      <p style={{ marginBottom: '16px' }}>
        Every article followed this structure:
      </p>
      <ol style={{ marginBottom: '20px', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '8px' }}>Hook: Problem agitation in first 100 words</li>
        <li style={{ marginBottom: '8px' }}>Promise: Clear statement of what reader will learn</li>
        <li style={{ marginBottom: '8px' }}>Proof: Data, case studies, or expert quotes</li>
        <li style={{ marginBottom: '8px' }}>Process: Step-by-step solution</li>
        <li style={{ marginBottom: '8px' }}>CTA: Natural segue to product/service</li>
      </ol>

      <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.5rem', fontWeight: 700, color: '#0F0E2A', marginTop: '40px', marginBottom: '16px' }}>
        Month 3: Authority Building
      </h2>
      <p style={{ marginBottom: '16px' }}>
        Content alone isn&apos;t enough. Google measures authority through backlinks and brand mentions.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#0F0E2A', marginTop: '28px', marginBottom: '12px' }}>
        Digital PR Campaign
      </h3>
      <p style={{ marginBottom: '16px' }}>
        We created an original research report (&quot;State of Online Shopping in Bangladesh 2026&quot;) and pitched it to journalists. Results:
      </p>
      <ul style={{ marginBottom: '20px', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '8px' }}>12 media mentions in industry publications</li>
        <li style={{ marginBottom: '8px' }}>8 high-quality backlinks (DA 50+)</li>
        <li style={{ marginBottom: '8px' }}>2,400 social shares</li>
      </ul>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#0F0E2A', marginTop: '28px', marginBottom: '12px' }}>
        Guest Posting
      </h3>
      <p style={{ marginBottom: '16px' }}>
        We wrote 6 guest articles for established sites in the retail/e-commerce space. Each included a natural, contextual link back to our pillar content.
      </p>

      <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.5rem', fontWeight: 700, color: '#0F0E2A', marginTop: '40px', marginBottom: '16px' }}>
        The Results at Day 90
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '24px' }}>
        <div style={{ padding: '20px', background: '#EFF6FF', borderRadius: '12px', textAlign: 'center' }}>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#378ADD', fontFamily: 'var(--font-syne)' }}>#1</div>
          <div style={{ fontSize: '0.875rem', color: '#6B6B80' }}>Target keyword ranking</div>
        </div>
        <div style={{ padding: '20px', background: '#EFF6FF', borderRadius: '12px', textAlign: 'center' }}>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#378ADD', fontFamily: 'var(--font-syne)' }}>312%</div>
          <div style={{ fontSize: '0.875rem', color: '#6B6B80' }}>Organic traffic increase</div>
        </div>
        <div style={{ padding: '20px', background: '#EFF6FF', borderRadius: '12px', textAlign: 'center' }}>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#378ADD', fontFamily: 'var(--font-syne)' }}>47</div>
          <div style={{ fontSize: '0.875rem', color: '#6B6B80' }}>Page 1 rankings</div>
        </div>
        <div style={{ padding: '20px', background: '#EFF6FF', borderRadius: '12px', textAlign: 'center' }}>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#378ADD', fontFamily: 'var(--font-syne)' }}>156%</div>
          <div style={{ fontSize: '0.875rem', color: '#6B6B80' }}>Revenue from organic</div>
        </div>
      </div>

      <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.5rem', fontWeight: 700, color: '#0F0E2A', marginTop: '48px', marginBottom: '16px' }}>
        The Framework Summary
      </h2>
      <p style={{ marginBottom: '16px' }}>
        SEO isn&apos;t magic. It&apos;s three things done consistently:
      </p>
      <ol style={{ marginBottom: '24px', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '12px' }}><strong>Technical excellence:</strong> Fast, crawlable, indexable</li>
        <li style={{ marginBottom: '12px' }}><strong>Content depth:</strong> Comprehensive answers to real questions</li>
        <li style={{ marginBottom: '12px' }}><strong>Authority signals:</strong> Backlinks from trusted sources</li>
      </ol>
      <p>
        Execute all three for 90 days, and you&apos;ll see results. We guarantee it.
      </p>
    </BlogLayout>
  )
}
