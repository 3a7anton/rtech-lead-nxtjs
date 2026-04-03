import type { Metadata } from 'next'
import BlogLayout from '@/components/layout/BlogLayout'

export const metadata: Metadata = {
  title: 'How We Generated 280% ROI With a 30-Day Influencer Campaign',
  description: 'A full breakdown of the strategy, creator selection criteria, content brief, and post-campaign analytics from our best-performing campaign to date.',
}

export default function ArticlePage() {
  return (
    <BlogLayout
      title="How we generated 280% ROI with a 30-day influencer campaign"
      excerpt="A full breakdown of the strategy, creator selection criteria, content brief, and post-campaign analytics from our best-performing campaign to date."
      tag="Influencer Marketing"
      readTime="6 min read"
      date="February 28, 2026"
      accent="#F4A261"
    >
      <p style={{ fontSize: '1.125rem', fontWeight: 500, color: '#0F0E2A', marginBottom: '24px' }}>
        The client: a D2C skincare brand with a $25K budget and a skepticism about influencer marketing. The goal: prove that influencers could drive actual revenue, not just vanity metrics. The result: $70K in attributable revenue in 30 days.
      </p>

      <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.5rem', fontWeight: 700, color: '#0F0E2A', marginTop: '40px', marginBottom: '16px' }}>
        The Strategy: Micro-Influencers at Scale
      </h2>
      <p style={{ marginBottom: '16px' }}>
        Everyone wants the mega-influencer with 500K followers. We went the opposite direction. Our campaign used 45 micro-influencers (10K-50K followers each) across three tiers:
      </p>
      <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '12px' }}><strong>Nano tier (10K-25K):</strong> 30 creators, $100/post, hyper-local engagement</li>
        <li style={{ marginBottom: '12px' }}><strong>Micro tier (25K-50K):</strong> 12 creators, $300/post, niche authority</li>
        <li style={{ marginBottom: '12px' }}><strong>Mid tier (50K-100K):</strong> 3 creators, $800/post, broader reach</li>
      </ul>
      <p style={{ marginBottom: '16px' }}>
        Total budget: $12,600 on creator fees. The rest went to product seeding, content licensing, and amplification.
      </p>

      <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.5rem', fontWeight: 700, color: '#0F0E2A', marginTop: '40px', marginBottom: '16px' }}>
        Creator Selection: Our 5-Point Filter
      </h2>
      <p style={{ marginBottom: '16px' }}>
        We analyzed 200+ profiles before selecting our 45. Here&apos;s what we looked for:
      </p>
      <ol style={{ marginBottom: '24px', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '12px' }}><strong>Engagement rate &gt; 3%:</strong> Anything lower suggests fake followers or poor content</li>
        <li style={{ marginBottom: '12px' }}><strong>Audience alignment:</strong> We manually checked follower lists to verify demographics matched our target (women 25-34, urban, skincare-interested)</li>
        <li style={{ marginBottom: '12px' }}><strong>Content quality:</strong> Would we be proud to have this content associated with our brand?</li>
        <li style={{ marginBottom: '12px' }}><strong>Previous brand work:</strong> Too many sponsored posts = audience fatigue</li>
        <li style={{ marginBottom: '12px' }}><strong>Comment sentiment:</strong> Are followers actually engaging, or just dropping fire emojis?</li>
      </ol>

      <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.5rem', fontWeight: 700, color: '#0F0E2A', marginTop: '40px', marginBottom: '16px' }}>
        The Content Brief: Freedom Within Framework
      </h2>
      <p style={{ marginBottom: '16px' }}>
        We gave creators a 2-page brief with:
      </p>
      <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '12px' }}>3 key messages (must mention 2)</li>
        <li style={{ marginBottom: '12px' }}>2 &quot;no-go&quot; claims (can&apos;t say &quot;miracle cure&quot; or make medical claims)</li>
        <li style={{ marginBottom: '12px' }}>Required hashtags and @mention</li>
        <li style={{ marginBottom: '12px' }}>Unique discount code for tracking</li>
        <li style={{ marginBottom: '12px' }}>Creative freedom on everything else</li>
      </ul>
      <p style={{ marginBottom: '16px' }}>
        This last point is crucial. Creators know their audience. Prescriptive briefs create inauthentic content that flops. We gave them guardrails, not scripts.
      </p>

      <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.5rem', fontWeight: 700, color: '#0F0E2A', marginTop: '40px', marginBottom: '16px' }}>
        The Campaign Execution
      </h2>
      <p style={{ marginBottom: '16px' }}>
        We ran a &quot;drip&quot; campaign over 30 days — 2-3 posts per day rather than a big burst. This maintained consistent visibility without overwhelming the audience.
      </p>
      <p style={{ marginBottom: '16px' }}>
        Our team monitored every post within the first 2 hours, engaging with comments and sharing top performers to the brand&apos;s stories. This boosted organic reach by an estimated 25%.
      </p>

      <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.5rem', fontWeight: 700, color: '#0F0E2A', marginTop: '40px', marginBottom: '16px' }}>
        The Numbers: 30 Days Later
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
        <div style={{ padding: '20px', background: '#FFFBEB', borderRadius: '12px', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#F4A261', fontFamily: 'var(--font-syne)' }}>4.2M</div>
          <div style={{ fontSize: '0.875rem', color: '#6B6B80' }}>Total impressions</div>
        </div>
        <div style={{ padding: '20px', background: '#FFFBEB', borderRadius: '12px', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#F4A261', fontFamily: 'var(--font-syne)' }}>180K</div>
          <div style={{ fontSize: '0.875rem', color: '#6B6B80' }}>New followers</div>
        </div>
        <div style={{ padding: '20px', background: '#FFFBEB', borderRadius: '12px', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#F4A261', fontFamily: 'var(--font-syne)' }}>$70K</div>
          <div style={{ fontSize: '0.875rem', color: '#6B6B80' }}>Attributable revenue</div>
        </div>
        <div style={{ padding: '20px', background: '#FFFBEB', borderRadius: '12px', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#F4A261', fontFamily: 'var(--font-syne)' }}>280%</div>
          <div style={{ fontSize: '0.875rem', color: '#6B6B80' }}>ROI</div>
        </div>
      </div>

      <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.5rem', fontWeight: 700, color: '#0F0E2A', marginTop: '48px', marginBottom: '16px' }}>
        What Made It Work
      </h2>
      <p style={{ marginBottom: '16px' }}>
        Three factors separated this from typical influencer campaigns:
      </p>
      <ol style={{ marginBottom: '24px', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '12px' }}><strong>Authentic creator-brand fit:</strong> Every creator actually used and loved the product before posting</li>
        <li style={{ marginBottom: '12px' }}><strong>Attribution tracking:</strong> Unique codes and UTM links let us measure actual revenue, not just likes</li>
        <li style={{ marginBottom: '12px' }}><strong>Content licensing:</strong> We negotiated rights to reuse top-performing creator content in paid ads, extending the campaign&apos;s life</li>
      </ol>
      <p>
        Influencer marketing isn&apos;t about reach anymore. It&apos;s about trust transfer — borrowing the credibility creators have built with their audience. Do it right, and the ROI speaks for itself.
      </p>
    </BlogLayout>
  )
}
