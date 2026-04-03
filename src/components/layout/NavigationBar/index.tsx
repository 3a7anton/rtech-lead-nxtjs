'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Services', href: '/#services' },
  { label: 'Work',     href: '/#case-studies' },
  { label: 'About',   href: '/#about' },
  { label: 'Blog',    href: '/blog' },
]

export default function NavigationBar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        role="banner"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'background 0.3s ease, border-color 0.3s ease',
          ...(scrolled
            ? {
                background: 'rgba(15, 14, 42, 0.92)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
              }
            : {
                background: 'transparent',
                borderBottom: '1px solid transparent',
              }),
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '72px',
          }}
        >
          {/* Logo */}
          <Link href="/" aria-label="RTech Lead — Home" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Image
              src="/logo.png"
              alt="RTech Lead Logo"
              width={140}
              height={50}
              priority
              style={{ objectFit: 'contain' }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation" style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
            <ul
              style={{
                display: 'flex',
                listStyle: 'none',
                gap: '32px',
                alignItems: 'center',
              }}
              className="nav-list-desktop"
            >
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="nav-link-underline"
                    style={{
                      color: 'rgba(237,236,234,0.85)',
                      textDecoration: 'none',
                      fontSize: '0.9375rem',
                      fontWeight: 500,
                      fontFamily: 'var(--font-inter)',
                      letterSpacing: '0.01em',
                      transition: 'color 0.15s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(237,236,234,0.85)')}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              id="nav-cta"
              style={{
                background: '#E63946',
                color: '#fff',
                padding: '10px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '0.9375rem',
                fontWeight: 600,
                fontFamily: 'var(--font-inter)',
                transition: 'transform 0.15s, background 0.15s',
                display: 'inline-block',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.03)'
                e.currentTarget.style.background = '#c62d39'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.background = '#E63946'
              }}
            >
              Contact Us
            </Link>

            {/* Mobile hamburger */}
            <button
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#fff',
                display: 'none',
                padding: '4px',
              }}
              className="hamburger-btn"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .nav-list-desktop { display: none !important; }
            .hamburger-btn { display: flex !important; }
            #nav-cta { display: none !important; }
          }
        `}</style>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            background: 'rgba(10,10,15,0.98)',
            display: 'flex',
            flexDirection: 'column',
            padding: '100px 32px 40px',
          }}
        >
          <nav aria-label="Mobile navigation">
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      color: '#fff',
                      textDecoration: 'none',
                      fontSize: '2rem',
                      fontWeight: 700,
                      fontFamily: 'var(--font-syne)',
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: 'inline-block',
                    background: '#E63946',
                    color: '#fff',
                    padding: '14px 32px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-syne)',
                  }}
                >
                  Start a project →
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}
