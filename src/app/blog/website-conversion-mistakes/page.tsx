import type { Metadata } from 'next'
import BlogLayout from '@/components/layout/BlogLayout'

export const metadata: Metadata = {
  title: '7 Website Mistakes That Kill Your Conversion Rate (And How to Fix Them)',
  description: 'Most business websites fail before visitors even reach the CTA. Here are the seven structural errors we fix in every audit — and what to do instead.',
}

export default function ArticlePage() {
  return (
    <BlogLayout
      title="7 website mistakes that kill your conversion rate (and how to fix them)"
      excerpt="Most business websites fail before visitors even reach the CTA. Here are the seven structural errors we fix in every audit — and what to do instead."
      tag="Digital Marketing"
      readTime="5 min read"
      date="March 12, 2026"
      accent="#E63946"
    >
      <p style={{ fontSize: '1.125rem', fontWeight: 500, color: '#0F0E2A', marginBottom: '24px' }}>
        After auditing over 50 business websites, we&apos;ve identified the same seven mistakes that destroy conversion rates. The worst part? Most businesses don&apos;t even know they&apos;re making them.
      </p>

      <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.5rem', fontWeight: 700, color: '#0F0E2A', marginTop: '40px', marginBottom: '16px' }}>
        1. Your hero section talks about you, not them
      </h2>
      <p style={{ marginBottom: '16px' }}>
        The first thing visitors see is a headline like &quot;Welcome to Our Website&quot; or &quot;We&apos;ve Been in Business Since 1995.&quot; Guess what? They don&apos;t care. They care about their problem and whether you can solve it.
      </p>
      <p style={{ marginBottom: '16px', padding: '16px', background: '#F8F7F4', borderLeft: '4px solid #E63946', borderRadius: '0 8px 8px 0' }}>
        <strong>Fix it:</strong> Lead with the visitor&apos;s desired outcome. Instead of &quot;We build websites,&quot; try &quot;Turn your website into your #1 salesperson.&quot;
      </p>

      <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.5rem', fontWeight: 700, color: '#0F0E2A', marginTop: '40px', marginBottom: '16px' }}>
        2. Buried call-to-action
      </h2>
      <p style={{ marginBottom: '16px' }}>
        We see contact buttons hidden in footers, buried under paragraphs of text, or camouflaged with muted colors. If visitors have to hunt for how to work with you, they won&apos;t.
      </p>
      <p style={{ marginBottom: '16px', padding: '16px', background: '#F8F7F4', borderLeft: '4px solid #E63946', borderRadius: '0 8px 8px 0' }}>
        <strong>Fix it:</strong> Place your primary CTA above the fold. Use high-contrast colors. Repeat it every 2-3 sections on long pages.
      </p>

      <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.5rem', fontWeight: 700, color: '#0F0E2A', marginTop: '40px', marginBottom: '16px' }}>
        3. No proof, just promises
      </h2>
      <p style={{ marginBottom: '16px' }}>
        &quot;We&apos;re the best digital agency&quot; means nothing without evidence. Visitors are skeptical — they&apos;ve been burned before.
      </p>
      <p style={{ marginBottom: '16px', padding: '16px', background: '#F8F7F4', borderLeft: '4px solid #E63946', borderRadius: '0 8px 8px 0' }}>
        <strong>Fix it:</strong> Add specific numbers. &quot;50+ projects delivered, 100% on-time rate, 92% client satisfaction.&quot; Real data beats superlatives.
      </p>

      <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.5rem', fontWeight: 700, color: '#0F0E2A', marginTop: '40px', marginBottom: '16px' }}>
        4. Mobile as an afterthought
      </h2>
      <p style={{ marginBottom: '16px' }}>
        60%+ of traffic comes from mobile devices, but we still see buttons too small to tap, forms that require pinching and zooming, and text smaller than 14px.
      </p>
      <p style={{ marginBottom: '16px', padding: '16px', background: '#F8F7F4', borderLeft: '4px solid #E63946', borderRadius: '0 8px 8px 0' }}>
        <strong>Fix it:</strong> Design mobile-first. Test every page on actual devices. If your CTA button isn&apos;t thumb-sized (44px minimum), fix it.
      </p>

      <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.5rem', fontWeight: 700, color: '#0F0E2A', marginTop: '40px', marginBottom: '16px' }}>
        5. Slow load times
      </h2>
      <p style={{ marginBottom: '16px' }}>
        Every second of delay reduces conversions by 7%. A site that takes 4+ seconds to load is silently hemorrhaging leads.
      </p>
      <p style={{ marginBottom: '16px', padding: '16px', background: '#F8F7F4', borderLeft: '4px solid #E63946', borderRadius: '0 8px 8px 0' }}>
        <strong>Fix it:</strong> Compress images (we recommend WebP format), lazy-load below-fold content, and use a CDN. Aim for under 2 seconds.
      </p>

      <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.5rem', fontWeight: 700, color: '#0F0E2A', marginTop: '40px', marginBottom: '16px' }}>
        6. Confusing navigation
      </h2>
      <p style={{ marginBottom: '16px' }}>
        Seven menu items, dropdowns within dropdowns, obscure labels like &quot;Solutions&quot; or &quot;Offerings.&quot; Visitors should know exactly where to click within 3 seconds.
      </p>
      <p style={{ marginBottom: '16px', padding: '16px', background: '#F8F7F4', borderLeft: '4px solid #E63946', borderRadius: '0 8px 8px 0' }}>
        <strong>Fix it:</strong> Limit primary nav to 4-5 items. Use clear labels: &quot;Services,&quot; &quot;Work,&quot; &quot;About,&quot; &quot;Contact.&quot; Put secondary pages in the footer.
      </p>

      <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.5rem', fontWeight: 700, color: '#0F0E2A', marginTop: '40px', marginBottom: '16px' }}>
        7. No clear value proposition
      </h2>
      <p style={{ marginBottom: '16px' }}>
        Visitors should immediately understand: What do you do? Who do you do it for? Why should they choose you over competitors? Most sites fail at least two of these.
      </p>
      <p style={{ marginBottom: '16px', padding: '16px', background: '#F8F7F4', borderLeft: '4px solid #E63946', borderRadius: '0 8px 8px 0' }}>
        <strong>Fix it:</strong> Write a one-sentence value proposition. Include what you do, who it&apos;s for, and the key differentiator. Place it prominently.
      </p>

      <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.5rem', fontWeight: 700, color: '#0F0E2A', marginTop: '48px', marginBottom: '16px' }}>
        The Bottom Line
      </h2>
      <p style={{ marginBottom: '16px' }}>
        These aren&apos;t design preferences — they&apos;re conversion killers backed by data. We&apos;ve seen clients double their conversion rates just by fixing the first three mistakes.
      </p>
      <p>
        Want us to audit your site? Our conversion assessments identify exactly where you&apos;re losing leads and provide a prioritized fix list. Usually takes 48 hours.
      </p>
    </BlogLayout>
  )
}
