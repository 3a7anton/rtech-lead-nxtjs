import type { Metadata } from 'next'
import BlogLayout from '@/components/layout/BlogLayout'

export const metadata: Metadata = {
  title: 'Why Your Mobile App Needs a Discovery Sprint Before a Single Wireframe',
  description: 'Skipping discovery is the #1 reason apps get rebuilt 6 months after launch. Our structured brief process reduces scope creep by 40%.',
}

export default function ArticlePage() {
  return (
    <BlogLayout
      title="Why your mobile app needs a discovery sprint before a single wireframe"
      excerpt="Skipping discovery is the #1 reason apps get rebuilt 6 months after launch. Our structured brief process reduces scope creep by 40%."
      tag="Mobile Development"
      readTime="7 min read"
      date="March 5, 2026"
      accent="#1D9E75"
    >
      <p style={{ fontSize: '1.125rem', fontWeight: 500, color: '#0F0E2A', marginBottom: '24px' }}>
        Six months. $80,000. Ten thousand lines of code. Then the CEO sees it and says: &quot;This isn&apos;t what we meant.&quot; We&apos;ve seen it dozens of times. There&apos;s a way to prevent it.
      </p>

      <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.5rem', fontWeight: 700, color: '#0F0E2A', marginTop: '40px', marginBottom: '16px' }}>
        The Discovery Sprint: 2 Weeks That Save 6 Months
      </h2>
      <p style={{ marginBottom: '16px' }}>
        Before we write a single line of code or draw a single wireframe, we run a 10-day discovery sprint. It&apos;s structured, intensive, and designed to answer the three questions that make or break an app:
      </p>
      <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '12px' }}>Who exactly is this app for?</li>
        <li style={{ marginBottom: '12px' }}>What problem does it solve better than existing solutions?</li>
        <li style={{ marginBottom: '12px' }}>What does success look like in 90 days? 1 year?</li>
      </ul>

      <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.5rem', fontWeight: 700, color: '#0F0E2A', marginTop: '40px', marginBottom: '16px' }}>
        Day 1-2: Stakeholder Alignment
      </h2>
      <p style={{ marginBottom: '16px' }}>
        We interview key stakeholders — executives, product owners, customer service teams, and (crucially) actual users. We document what we hear, but more importantly, we document the contradictions.
      </p>
      <p style={{ marginBottom: '16px' }}>
        Because here&apos;s the truth: different stakeholders often want different things. Sales wants lead capture. Product wants simplicity. Legal wants compliance. If we don&apos;t surface and resolve these conflicts now, they&apos;ll derail the project later.
      </p>

      <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.5rem', fontWeight: 700, color: '#0F0E2A', marginTop: '40px', marginBottom: '16px' }}>
        Day 3-4: Competitive & Technical Audit
      </h2>
      <p style={{ marginBottom: '16px' }}>
        We analyze the top 5 competing apps. What features do they have? What do users complain about in reviews? Where&apos;s the gap your app can fill?
      </p>
      <p style={{ marginBottom: '16px' }}>
        Simultaneously, our tech team evaluates the technical landscape. Native or cross-platform? What APIs will we need? Are there compliance requirements (HIPAA, GDPR) that affect architecture?
      </p>

      <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.5rem', fontWeight: 700, color: '#0F0E2A', marginTop: '40px', marginBottom: '16px' }}>
        Day 5-6: User Journey Mapping
      </h2>
      <p style={{ marginBottom: '16px' }}>
        We map every user type and their key journeys. For a food delivery app: the hungry person ordering, the restaurant managing orders, the driver delivering. Each has different needs, contexts, and success metrics.
      </p>
      <p style={{ marginBottom: '16px' }}>
        We identify the &quot;critical path&quot; — the minimum journey that must work perfectly for launch. Everything else is a nice-to-have for v2.
      </p>

      <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.5rem', fontWeight: 700, color: '#0F0E2A', marginTop: '40px', marginBottom: '16px' }}>
        Day 7-8: Feature Prioritization
      </h2>
      <p style={{ marginBottom: '16px' }}>
        Here&apos;s where most projects go wrong: trying to build everything at once. We use the MoSCoW method — Must have, Should have, Could have, Won&apos;t have.
      </p>
      <p style={{ marginBottom: '16px', padding: '16px', background: '#F0FDF4', borderLeft: '4px solid #1D9E75', borderRadius: '0 8px 8px 0' }}>
        <strong>The rule:</strong> If it&apos;s not essential to launch, it&apos;s v2. Period. This keeps scope manageable and deadlines achievable.
      </p>

      <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.5rem', fontWeight: 700, color: '#0F0E2A', marginTop: '40px', marginBottom: '16px' }}>
        Day 9-10: The Structured Brief
      </h2>
      <p style={{ marginBottom: '16px' }}>
        Everything gets documented in a brief that becomes our North Star. It includes:
      </p>
      <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '12px' }}>User personas with validated pain points</li>
        <li style={{ marginBottom: '12px' }}>User stories for every feature</li>
        <li style={{ marginBottom: '12px' }}>Technical architecture recommendations</li>
        <li style={{ marginBottom: '12px' }}>90-day roadmap with milestones</li>
        <li style={{ marginBottom: '12px' }}>Success metrics and KPIs</li>
      </ul>

      <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.5rem', fontWeight: 700, color: '#0F0E2A', marginTop: '48px', marginBottom: '16px' }}>
        The Results Speak
      </h2>
      <p style={{ marginBottom: '16px' }}>
        Apps that go through our discovery sprint launch on time 95% of the time. Apps that skip it? About 60%. That&apos;s not a coincidence.
      </p>
      <p>
        Discovery isn&apos;t overhead — it&apos;s insurance. Two weeks of clarity saves six months of rework. Every time.
      </p>
    </BlogLayout>
  )
}
