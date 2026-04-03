'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter, MessageCircle } from 'lucide-react'

import Radar from '@/components/Radar'

const services = [
  { label: 'Website Development', href: '/services/website-development' },
  { label: 'Software Development', href: '/services/software-development' },
  { label: 'Mobile App Development', href: '/services/mobile-app-development' },
  { label: 'Digital Marketing', href: '/services/digital-marketing' },
  { label: 'Graphic & Animation', href: '/services/graphic-animation' },
  { label: 'Influencer Marketing', href: '/services/influencer-marketing' },
  { label: 'Videography', href: '/services/videography' },
  { label: 'Event Activation', href: '/services/event-activation' },
]

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

const legal = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Use', href: '/terms-of-use' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
]

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      style={{
        background: '#0A0A0F',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        color: 'rgba(173,173,190,0.8)',
        fontFamily: 'var(--font-inter)',
        position: 'relative',
      }}
    >
      {/* Radar background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Radar
          speed={0.4}
          scale={0.8}
          ringCount={8}
          spokeCount={8}
          ringThickness={0.03}
          spokeThickness={0.005}
          sweepSpeed={0.4}
          sweepWidth={2}
          sweepLobes={1}
          color="#9f29ff"
          backgroundColor="#000000"
          falloff={2}
          brightness={0.4}
          enableMouseInteraction={false}
          mouseInfluence={0.05}
        />
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 24px 0', position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '48px',
            marginBottom: '64px',
          }}
        >
          {/* Brand column */}
          <div>
            <Link href="/" aria-label="RTech Lead — Home" style={{ display: 'inline-block', marginBottom: '20px' }}>
              <Image
                src="/logo.png"
                alt="RTech Lead Logo"
                width={130}
                height={46}
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '24px', maxWidth: '280px' }}>
              Full-service digital agency. Eight services. One partner. Zero compromises.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { Icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61578853751293', label: 'Facebook' },
                { Icon: MessageCircle, href: 'https://wa.me/8801634352723', label: 'WhatsApp' },
                { Icon: Instagram, href: 'https://www.instagram.com/rtechlead', label: 'Instagram' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/company/rtechlead', label: 'LinkedIn' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="social-icon"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ color: '#fff', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px' }}>
              Services
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {services.map(s => (
                <li key={s.label}>
                  <Link href={s.href} className="footer-link" style={{ textDecoration: 'none', fontSize: '0.9375rem' }}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 style={{ color: '#fff', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px' }}>
              Company
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {company.map(c => (
                <li key={c.label}>
                  <Link href={c.href} className="footer-link" style={{ textDecoration: 'none', fontSize: '0.9375rem' }}>
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ color: '#fff', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px' }}>
              Get In Touch
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9375rem' }}>
              <a href="mailto:infortechlead@gmail.com" className="footer-link" style={{ textDecoration: 'none' }}>infortechlead@gmail.com</a>
              <a href="tel:+8801771778880" className="footer-link" style={{ textDecoration: 'none' }}>01771-778880</a>
              <a href="https://wa.me/8801634352723" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ textDecoration: 'none' }}>WhatsApp: +880 1634-352723</a>
              <Link
                href="/contact"
                className="btn-primary-link"
                style={{
                  display: 'inline-block',
                  marginTop: '8px',
                  background: '#E63946',
                  color: '#fff',
                  padding: '10px 22px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                }}
              >
                Start a project →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            padding: '24px 0',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '0.875rem',
          }}
        >
          <p>© {new Date().getFullYear()} RTech Lead. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {legal.map(l => (
              <Link
                key={l.label}
                href={l.href}
                className="footer-link-legal"
                style={{ textDecoration: 'none' }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
