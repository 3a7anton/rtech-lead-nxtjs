'use client'

import { useState } from 'react'
import Link from 'next/link'
import NavigationBar from '@/components/layout/NavigationBar'
import Footer from '@/components/layout/Footer'
import { ArrowRight, Mail, Phone, MapPin, CheckCircle2, MessageCircle, Facebook } from 'lucide-react'

const serviceOptions = [
  'Website Development',
  'Software Development',
  'Mobile App Development',
  'Digital Marketing',
  'Graphic & Animation',
  'Influencer Marketing',
  'Videography',
  'Event Activation',
  'Multiple Services',
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', budget: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!formData.name.trim()) e.name = 'Name is required'
    if (!formData.email.match(/^[^@]+@[^@]+\.[^@]+$/)) e.email = 'Valid email is required'
    if (!formData.service) e.service = 'Please select a service'
    if (!formData.message.trim()) e.message = 'Message is required'
    return e
  }

  const [apiError, setApiError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setLoading(true)
    setApiError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error('Send failed')
      setSubmitted(true)
    } catch {
      setApiError('Something went wrong. Please email us directly at infortechlead@gmail.com')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = (field: string) => ({
    width: '100%',
    height: '52px',
    background: '#fff',
    border: `1px solid ${errors[field] ? '#9f29ff' : 'rgba(0,0,0,0.12)'}`,
    borderRadius: '8px',
    padding: '0 16px',
    fontSize: '1rem',
    fontFamily: 'var(--font-inter)',
    color: '#0F0E2A',
    outline: 'none',
    transition: 'border-color 0.15s',
  })

  return (
    <>
      <NavigationBar />
      <main id="main-content" style={{ background: '#F8F7F4', minHeight: '100vh' }}>
        {/* Header */}
        <section
          style={{
            background: '#0F0E2A',
            padding: '160px 24px 80px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 60% at 80% 50%, rgba(230,57,70,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ color: '#9f29ff', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'var(--font-inter)', marginBottom: '16px' }}>
              Get In Touch
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-syne)',
                fontWeight: 800,
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                color: '#fff',
                lineHeight: 1.1,
                marginBottom: '20px',
                maxWidth: '640px',
              }}
            >
              Let&apos;s build something<br />
              <span style={{ background: 'linear-gradient(135deg, #9f29ff, #F4A261)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                remarkable together.
              </span>
            </h1>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1.125rem', color: 'rgba(237,236,234,0.7)', maxWidth: '520px', lineHeight: 1.7 }}>
              Tell us about your project. We&apos;ll get back to you within one working day with a structured brief proposal.
            </p>
          </div>
        </section>

        {/* Form + Info */}
        <section style={{ padding: '80px 24px 120px' }}>
          <div
            style={{
              maxWidth: '1280px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '56px',
              alignItems: 'start',
            }}
          >
            {/* Form */}
            <div
              style={{
                background: '#fff',
                borderRadius: '24px',
                padding: 'clamp(32px, 5vw, 48px)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              }}
            >
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <CheckCircle2 size={56} color="#1D9E75" style={{ margin: '0 auto 24px', display: 'block' }} />
                  <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: '1.75rem', color: '#0F0E2A', marginBottom: '12px' }}>
                    Message received!
                  </h2>
                  <p style={{ fontFamily: 'var(--font-inter)', color: '#6B6B80', marginBottom: '28px' }}>
                    We&apos;ll review your brief and respond within one working day.
                  </p>
                  <Link
                    href="/"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#9f29ff', color: '#fff', padding: '12px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontFamily: 'var(--font-inter)' }}
                  >
                    Back to home <ArrowRight size={16} />
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: '1.5rem', color: '#0F0E2A', marginBottom: '28px' }}>
                    Start a project
                  </h2>

                  {/* Name + Email row */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <label htmlFor="contact-name" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#2D2D3A', marginBottom: '6px', fontFamily: 'var(--font-inter)' }}>
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        style={inputStyle('name')}
                        placeholder="Your name"
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        aria-invalid={!!errors.name}
                        onFocus={e => (e.target.style.borderColor = '#9f29ff')}
                        onBlur={e => (e.target.style.borderColor = errors.name ? '#9f29ff' : 'rgba(0,0,0,0.12)')}
                      />
                      {errors.name && <p id="name-error" role="alert" style={{ color: '#9f29ff', fontSize: '0.8125rem', marginTop: '4px', fontFamily: 'var(--font-inter)' }}>{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-email" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#2D2D3A', marginBottom: '6px', fontFamily: 'var(--font-inter)' }}>
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        style={inputStyle('email')}
                        placeholder="you@company.com"
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        aria-invalid={!!errors.email}
                        onFocus={e => (e.target.style.borderColor = '#9f29ff')}
                        onBlur={e => (e.target.style.borderColor = errors.email ? '#9f29ff' : 'rgba(0,0,0,0.12)')}
                      />
                      {errors.email && <p id="email-error" role="alert" style={{ color: '#9f29ff', fontSize: '0.8125rem', marginTop: '4px', fontFamily: 'var(--font-inter)' }}>{errors.email}</p>}
                    </div>
                  </div>

                  {/* Phone */}
                  <div style={{ marginBottom: '16px' }}>
                    <label htmlFor="contact-phone" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#2D2D3A', marginBottom: '6px', fontFamily: 'var(--font-inter)' }}>
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      style={inputStyle('phone')}
                      placeholder="+880 ..."
                      onFocus={e => (e.target.style.borderColor = '#9f29ff')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(0,0,0,0.12)')}
                    />
                  </div>

                  {/* Service */}
                  <div style={{ marginBottom: '16px' }}>
                    <label htmlFor="contact-service" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#2D2D3A', marginBottom: '6px', fontFamily: 'var(--font-inter)' }}>
                      Service Required *
                    </label>
                    <select
                      id="contact-service"
                      value={formData.service}
                      onChange={e => setFormData({ ...formData, service: e.target.value })}
                      style={{ ...inputStyle('service'), cursor: 'pointer' }}
                      aria-describedby={errors.service ? 'service-error' : undefined}
                      aria-invalid={!!errors.service}
                      onFocus={e => (e.target.style.borderColor = '#9f29ff')}
                      onBlur={e => (e.target.style.borderColor = errors.service ? '#9f29ff' : 'rgba(0,0,0,0.12)')}
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.service && <p id="service-error" role="alert" style={{ color: '#9f29ff', fontSize: '0.8125rem', marginTop: '4px', fontFamily: 'var(--font-inter)' }}>{errors.service}</p>}
                  </div>

                  {/* Budget */}
                  <div style={{ marginBottom: '16px' }}>
                    <label htmlFor="contact-budget" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#2D2D3A', marginBottom: '6px', fontFamily: 'var(--font-inter)' }}>
                      Budget Range
                    </label>
                    <select
                      id="contact-budget"
                      value={formData.budget}
                      onChange={e => setFormData({ ...formData, budget: e.target.value })}
                      style={{ ...inputStyle('budget'), cursor: 'pointer' }}
                      onFocus={e => (e.target.style.borderColor = '#9f29ff')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(0,0,0,0.12)')}
                    >
                      <option value="">Select budget range...</option>
                      <option value="Under $1K">Under $1,000</option>
                      <option value="$1K–$5K">$1,000 – $5,000</option>
                      <option value="$5K–$15K">$5,000 – $15,000</option>
                      <option value="$15K–$50K">$15,000 – $50,000</option>
                      <option value="$50K+">$50,000+</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: '28px' }}>
                    <label htmlFor="contact-message" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#2D2D3A', marginBottom: '6px', fontFamily: 'var(--font-inter)' }}>
                      Project Description *
                    </label>
                    <textarea
                      id="contact-message"
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      style={{
                        width: '100%',
                        background: '#fff',
                        border: `1px solid ${errors.message ? '#9f29ff' : 'rgba(0,0,0,0.12)'}`,
                        borderRadius: '8px',
                        padding: '12px 16px',
                        fontSize: '1rem',
                        fontFamily: 'var(--font-inter)',
                        color: '#0F0E2A',
                        outline: 'none',
                        resize: 'vertical',
                        transition: 'border-color 0.15s',
                      }}
                      placeholder="Tell us about your project, goals, and any timeline requirements..."
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      aria-invalid={!!errors.message}
                      onFocus={e => (e.target.style.borderColor = '#9f29ff')}
                      onBlur={e => (e.target.style.borderColor = errors.message ? '#9f29ff' : 'rgba(0,0,0,0.12)')}
                    />
                    {errors.message && <p id="message-error" role="alert" style={{ color: '#9f29ff', fontSize: '0.8125rem', marginTop: '4px', fontFamily: 'var(--font-inter)' }}>{errors.message}</p>}
                  </div>

                  {apiError && (
                    <p role="alert" style={{ background: 'rgba(230,57,70,0.08)', border: '1px solid rgba(230,57,70,0.3)', borderRadius: '8px', padding: '12px 16px', color: '#9f29ff', fontSize: '0.9375rem', fontFamily: 'var(--font-inter)', marginBottom: '16px' }}>
                      {apiError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      width: '100%',
                      height: '56px',
                      background: loading ? '#6B6B80' : '#9f29ff',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontWeight: 700,
                      fontFamily: 'var(--font-inter)',
                      cursor: loading ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      transition: 'background 0.15s, transform 0.15s',
                    }}
                    onMouseEnter={e => { if (!loading) e.currentTarget.style.background = '#c62d39' }}
                    onMouseLeave={e => { if (!loading) e.currentTarget.style.background = '#9f29ff' }}
                  >
                    {loading ? 'Sending...' : <>Send brief <ArrowRight size={18} /></>}
                  </button>
                </form>
              )}
            </div>

            {/* Info sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', paddingTop: '8px' }}>
              <div>
                <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.75rem', color: '#0F0E2A', marginBottom: '8px' }}>
                  We respond within one working day.
                </h2>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: '#6B6B80', lineHeight: 1.7 }}>
                  Every project at RTech Lead begins with a structured brief — no assumptions, no guesswork. Share your vision and we&apos;ll turn it into a clear delivery plan.
                </p>
              </div>

              {[
                { icon: Mail, label: 'Email', value: 'infortechlead@gmail.com', href: 'mailto:infortechlead@gmail.com' },
                { icon: Phone, label: 'Phone', value: '01771-778880', href: 'tel:+8801771778880' },
                { icon: MessageCircle, label: 'WhatsApp', value: '+880 1634-352723', href: 'https://wa.me/8801634352723' },
                { icon: Facebook, label: 'Facebook', value: 'RTech Lead', href: 'https://www.facebook.com/profile.php?id=61578853751293' },
                { icon: MapPin, label: 'Location', value: 'Dhaka, Bangladesh', href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(230,57,70,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={20} color="#9f29ff" />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: '#6B6B80', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '2px' }}>{label}</div>
                    {href ? (
                      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: '#0F0E2A', fontWeight: 500, textDecoration: 'none' }}>{value}</a>
                    ) : (
                      <div style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: '#0F0E2A', fontWeight: 500 }}>{value}</div>
                    )}
                  </div>
                </div>
              ))}

              {/* Why us */}
              <div style={{ background: '#0F0E2A', borderRadius: '16px', padding: '28px 24px' }}>
                <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.125rem', color: '#fff', marginBottom: '16px' }}>
                  Why clients choose RTech Lead
                </h3>
                {[
                  '100% on-time delivery rate',
                  'Single point of contact across all 8 services',
                  'Structured brief — no assumptions',
                  'Weekly progress reports with live dashboards',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#9f29ff', marginTop: '8px', flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'rgba(237,236,234,0.75)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
