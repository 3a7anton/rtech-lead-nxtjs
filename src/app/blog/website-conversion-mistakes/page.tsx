import NavigationBar from '@/components/layout/NavigationBar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { ArrowLeft, Clock, Tag, User, Calendar } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '7 Website Mistakes That Kill Your Conversion Rate — RTech Lead',
  description: 'Most business websites fail before visitors even reach the CTA. Here are the seven structural errors we fix in every audit.',
}

export default function ArticlePage() {
  return (
    <>
      <NavigationBar />
      <main id="main-content">
        {/* Article Header */}
        <section style={{ background: '#0F0E2A', padding: '140px 24px 60px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#E63946', fontSize: '0.875rem', fontWeight: 600, marginBottom: '24px', textDecoration: 'none' }}>
              <ArrowLeft size={16} /> Back to Blog
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#E63946', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Tag size={12} /> Digital Marketing
              </span>
              <span style={{ fontSize: '0.75rem', color: 'rgba(237,236,234,0.6)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Clock size={12} /> 5 min read
              </span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.15, marginBottom: '20px' }}>
              7 website mistakes that kill your conversion rate (and how to fix them)
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #E63946, #F4A261)' }} />
              <div>
                <div style={{ color: '#fff', fontSize: '0.875rem', fontWeight: 600 }}>Sarah Mitchell</div>
                <div style={{ color: 'rgba(237,236,234,0.6)', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Calendar size={11} /> March 12, 2026
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article style={{ background: '#F8F7F4', padding: '60px 24px 100px' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto', fontFamily: 'var(--font-inter)', fontSize: '1.0625rem', lineHeight: 1.8, color: '#3A3A4A' }}>
            <p style={{ fontSize: '1.25rem', fontWeight: 500, color: '#0F0E2A', marginBottom: '32px' }}>
              Most business websites fail before visitors even reach the CTA. After auditing 200+ websites across industries, we have identified the same seven structural errors that kill conversion rates—often before businesses even realize there is a problem.
            </p>

            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.5rem', color: '#0F0E2A', marginTop: '48px', marginBottom: '20px' }}>1. The "Everything to Everyone" Hero Section</h2>
            <p style={{ marginBottom: '20px' }}>
              Your hero section has 3 seconds to communicate value. Yet 68% of the sites we audit try to communicate 3-4 different value propositions simultaneously. The result? Visitors bounce because they cannot quickly determine if you solve their specific problem.
            </p>
            <p style={{ marginBottom: '20px' }}>
              <strong>Fix it:</strong> Lead with one primary customer pain point. Use the headline-subheadline-CTA formula: specific outcome, proof element, singular action. Dropbox increased conversions 10% simply by changing "Store all your stuff" to "Your stuff, anywhere."
            </p>

            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.5rem', color: '#0F0E2A', marginTop: '48px', marginBottom: '20px' }}>2. Confusing Navigation Taxonomy</h2>
            <p style={{ marginBottom: '20px' }}>
              Internal linking studies show users make decisions in 5-7 seconds. Yet businesses often organize navigation by internal department structure ("Solutions," "Products," "Services") rather than customer intent.
            </p>
            <p style={{ marginBottom: '20px' }}>
              <strong>Fix it:</strong> Organize by use case or outcome. A SaaS company we worked with restructured navigation from product-centric to problem-centric ("Streamline Payroll" vs. "HR Software") and saw a 34% increase in demo requests.
            </p>

            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.5rem', color: '#0F0E2A', marginTop: '48px', marginBottom: '20px' }}>3. The Trust Vacuum</h2>
            <p style={{ marginBottom: '20px' }}>
              First-time visitors have zero trust. Yet 43% of sites we audit bury social proof below the fold or hide it on separate pages. Testimonials, client logos, and trust badges should appear within the first viewport.
            </p>
            <p style={{ marginBottom: '20px' }}>
              <strong>Fix it:</strong> Place trust signals strategically: client logos in the hero, specific metrics in the first scroll section, and detailed case studies before pricing. Include "as seen in" badges if applicable.
            </p>

            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.5rem', color: '#0F0E2A', marginTop: '48px', marginBottom: '20px' }}>4. Friction-Heavy Forms</h2>
            <p style={{ marginBottom: '20px' }}>
              Every field you add reduces completion rates. Our data shows each additional form field decreases conversion by approximately 3-5%. Yet businesses routinely ask for phone numbers, company size, and budget before establishing any value.
            </p>
            <p style={{ marginBottom: '20px' }}>
              <strong>Fix it:</strong> Start with email only. Implement progressive profiling—collect additional data after the relationship is established. A B2B client reduced form fields from 8 to 3 and increased lead volume by 127%.
            </p>

            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.5rem', color: '#0F0E2A', marginTop: '48px', marginBottom: '20px' }}>5. Invisible CTAs</h2>
            <p style={{ marginBottom: '20px' }}>
              Contrast is not optional—it is mandatory for conversion. We still see sites using gray buttons on white backgrounds or relying solely on ghost buttons. If users cannot immediately identify what to click next, they will not click at all.
            </p>
            <p style={{ marginBottom: '20px' }}>
              <strong>Fix it:</strong> Use high-contrast primary colors. Reserve accent colors exclusively for CTAs. Follow the squint test: if you squint at your page, the CTA should still be the most visible element.
            </p>

            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.5rem', color: '#0F0E2A', marginTop: '48px', marginBottom: '20px' }}>6. Generic Value Propositions</h2>
            <p style={{ marginBottom: '20px' }}>
              "High-quality solutions" and "best-in-class service" mean nothing. Visitors have seen these phrases on 50 competitor sites. Generic language creates cognitive dissonance—users sense you are hiding something specific.
            </p>
            <p style={{ marginBottom: '20px' }}>
              <strong>Fix it:</strong> Replace adjectives with specifics. Instead of "fast delivery," use "Delivered in 48 hours or less." Instead of "expert team," use "20+ years combined experience at Fortune 500 companies."
            </p>

            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.5rem', color: '#0F0E2A', marginTop: '48px', marginBottom: '20px' }}>7. Mobile-Second Design Thinking</h2>
            <p style={{ marginBottom: '20px' }}>
              Mobile traffic now represents 60%+ of B2B website visits, yet many sites are still designed desktop-first and adapted down. The result: tiny touch targets, collapsed navigation that never gets opened, and forms that require pinch-zooming.
            </p>
            <p style={{ marginBottom: '20px' }}>
              <strong>Fix it:</strong> Design mobile-first. Ensure touch targets are minimum 44x44px. Use sticky CTAs on mobile. Test every conversion path on actual devices, not just browser emulators.
            </p>

            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.5rem', color: '#0F0E2A', marginTop: '48px', marginBottom: '20px' }}>The Bottom Line</h2>
            <p style={{ marginBottom: '20px' }}>
              Conversion optimization is not about tricking users—it is about removing friction and clarifying value. Fix these seven issues and you will outperform 80% of competitor websites without touching your ad spend.
            </p>
            <p>
              Need a professional audit? Our conversion assessments identify exactly which of these mistakes are costing you leads, with prioritized fixes ranked by impact.
            </p>

            <div style={{ marginTop: '48px', padding: '32px', background: '#fff', borderRadius: '16px', borderLeft: '4px solid #E63946' }}>
              <p style={{ fontWeight: 600, color: '#0F0E2A', marginBottom: '8px' }}>Ready to fix your conversion rate?</p>
              <p style={{ marginBottom: '16px' }}>Get a free website audit identifying your biggest conversion blockers.</p>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#E63946', fontWeight: 700, textDecoration: 'none' }}>
                Request audit <ArrowLeft size={16} style={{ transform: 'rotate(180deg)' }} />
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
