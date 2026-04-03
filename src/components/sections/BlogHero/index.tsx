'use client'

import Radar from '@/components/Radar'

export default function BlogHero() {
  return (
    <section
      style={{
        background: '#0F0E2A',
        padding: '160px 24px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Radar background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Radar
          speed={0.7}
          scale={0.6}
          ringCount={10}
          spokeCount={10}
          ringThickness={0.04}
          spokeThickness={0.008}
          sweepSpeed={0.7}
          sweepWidth={2}
          sweepLobes={1}
          color="#9f29ff"
          backgroundColor="#000000"
          falloff={2}
          brightness={0.6}
          enableMouseInteraction={false}
          mouseInfluence={0.05}
        />
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ color: '#E63946', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'var(--font-inter)', marginBottom: '16px' }}>Insights & Resources</div>
        <h1 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff', lineHeight: 1.1, marginBottom: '16px' }}>
          From the RTech Lead desk.
        </h1>
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1.125rem', color: 'rgba(237,236,234,0.65)', maxWidth: '520px', lineHeight: 1.7 }}>
          Expert-led, data-cited content on digital marketing, development, design, and more — from the team that does the work.
        </p>
      </div>
    </section>
  )
}
