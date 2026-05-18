'use client'

import { useState, useRef, useEffect } from 'react'
import { X, MessageCircle, Send, ChevronDown, Bot } from 'lucide-react'

/* ─── Types ─────────────────────────────────────────── */
interface Message {
  id: number
  from: 'bot' | 'user'
  text: string
  options?: Option[]
}

interface Option {
  label: string
  value: string
}

/* ─── Knowledge base ─────────────────────────────────── */
const WHATSAPP = 'https://wa.me/8801634352723'
const WHATSAPP_NUMBER = '+880 1634-352723'

const SERVICES = [
  { name: 'Website Development', color: '#E63946' },
  { name: 'Software Development', color: '#F4A261' },
  { name: 'Mobile App Development', color: '#1D9E75' },
  { name: 'Digital Marketing', color: '#378ADD' },
  { name: 'Graphic & Animation', color: '#9B5DE5' },
  { name: 'Influencer Marketing', color: '#F4A261' },
  { name: 'Videography', color: '#E63946' },
  { name: 'Event Activation', color: '#1D9E75' },
]

const SERVICE_DETAILS: Record<string, string> = {
  'Website Development':
    'We build high-converting websites — from landing pages to full e-commerce platforms — using modern stacks like Next.js and WordPress. Every site is fast, SEO-optimised, and mobile-first.',
  'Software Development':
    'Custom software tailored to your business logic. We architect, build, and maintain bespoke SaaS platforms, CRMs, ERPs, and automation tools.',
  'Mobile App Development':
    'Native iOS & Android apps that people actually use. We handle UX design, development, and App Store submission end-to-end.',
  'Digital Marketing':
    'Full-funnel strategy: SEO, PPC, social media management, email marketing, and content — all managed under one integrated plan.',
  'Graphic & Animation':
    'Brand identity, motion graphics, social media creatives, and illustration. We tell your visual story and make it impossible to scroll past.',
  'Influencer Marketing':
    'We source, brief, and manage creator campaigns across Facebook, Instagram, YouTube, and TikTok — with measurable ROI and full reporting.',
  'Videography':
    'Cinematic-quality corporate videos, product shoots, ads, and event coverage. Shot and edited entirely in-house by our creative team.',
  'Event Activation':
    'From concept to on-ground execution. Corporate events, product launches, brand activations, and experiential campaigns.',
}

const DELIVERY_TIMES: Record<string, string> = {
  'Website Development': '2 – 6 weeks depending on scope',
  'Software Development': '4 – 16 weeks depending on complexity',
  'Mobile App Development': '6 – 14 weeks',
  'Digital Marketing': 'Campaign live within 1 week; results build over 60–90 days',
  'Graphic & Animation': '3 – 10 business days per deliverable',
  'Influencer Marketing': 'Campaign live within 2 – 3 weeks',
  'Videography': '1 – 3 weeks from shoot to final delivery',
  'Event Activation': 'Minimum 4 weeks planning lead time',
}

/* ─── Menu options ───────────────────────────────────── */
const MAIN_MENU: Option[] = [
  { label: '🛠️ Our Services', value: 'services' },
  { label: '💬 Contact Us', value: 'contact' },
  { label: '💰 Pricing', value: 'pricing' },
  { label: '❓ FAQ', value: 'faq' },
  { label: '⏱️ Delivery Time', value: 'delivery' },
]

const FAQ_LIST: Option[] = [
  { label: 'Do you work with startups?', value: 'faq_startups' },
  { label: 'Are you a remote-first agency?', value: 'faq_remote' },
  { label: 'Do you offer ongoing support?', value: 'faq_support' },
  { label: 'What is your payment process?', value: 'faq_payment' },
  { label: '← Back to main menu', value: 'menu' },
]

const FAQ_ANSWERS: Record<string, string> = {
  faq_startups:
    'Absolutely. We love working with early-stage startups. We can help you launch fast with an MVP, then scale as your business grows. Budget-friendly packages are available.',
  faq_remote:
    'Yes — our team operates remotely across Bangladesh, and we work seamlessly with international clients. All communication is done via Slack, Zoom, or WhatsApp, and we respect your timezone.',
  faq_support:
    'We offer post-launch support and maintenance retainers for all our services. Your project doesn\'t end at delivery — we stay with you.',
  faq_payment:
    'We typically work with a 50% upfront deposit and the remainder on delivery (or milestone-based for larger projects). We accept bank transfer and mobile banking (bKash).',
}

/* ─── Bot logic ──────────────────────────────────────── */
function getBotReply(value: string): { text: string; options?: Option[] } {
  if (value === 'menu' || value === '__init__') {
    return {
      text: "Hi there! 👋 I'm the RTech Lead assistant. How can I help you today?",
      options: MAIN_MENU,
    }
  }

  if (value === 'services') {
    return {
      text: 'We offer **8 full-service digital disciplines** under one roof. Which service would you like to know more about?',
      options: [
        ...SERVICES.map(s => ({ label: s.name, value: `service_${s.name}` })),
        { label: '← Back to main menu', value: 'menu' },
      ],
    }
  }

  if (value.startsWith('service_')) {
    const name = value.replace('service_', '')
    const detail = SERVICE_DETAILS[name]
    if (detail) {
      return {
        text: `**${name}**\n\n${detail}`,
        options: [
          { label: `💰 Pricing for ${name}`, value: 'pricing' },
          { label: `⏱️ Delivery time for ${name}`, value: `delivery_${name}` },
          { label: '🛠️ See all services', value: 'services' },
          { label: '← Main menu', value: 'menu' },
        ],
      }
    }
  }

  if (value === 'contact') {
    return {
      text: `You can reach the RTech Lead team through any of these channels:\n\n📧 **Email:** infortechlead@gmail.com\n📞 **Phone:** 01771-778880\n💬 **WhatsApp:** ${WHATSAPP_NUMBER}\n📍 **Location:** Dhaka, Bangladesh\n\nOr fill out our project brief form on the Contact page and we'll respond within one working day.`,
      options: [
        { label: '💬 Chat on WhatsApp', value: '__whatsapp__' },
        { label: '📋 Go to Contact page', value: '__contact_page__' },
        { label: '← Main menu', value: 'menu' },
      ],
    }
  }

  if (value === 'pricing') {
    return {
      text: `Our pricing varies based on project scope, timeline, and complexity.\n\nFor an accurate quote tailored to your needs, please contact us on **WhatsApp** — our team will get back to you promptly with a detailed proposal.\n\n💬 WhatsApp: ${WHATSAPP_NUMBER}`,
      options: [
        { label: '💬 Get a quote on WhatsApp', value: '__whatsapp__' },
        { label: '📋 Fill project brief form', value: '__contact_page__' },
        { label: '← Main menu', value: 'menu' },
      ],
    }
  }

  if (value === 'faq') {
    return {
      text: 'Here are some frequently asked questions. Which one would you like answered?',
      options: FAQ_LIST,
    }
  }

  if (value.startsWith('faq_')) {
    const answer = FAQ_ANSWERS[value]
    if (answer) {
      return {
        text: answer,
        options: [
          { label: '❓ More FAQ', value: 'faq' },
          { label: '← Main menu', value: 'menu' },
        ],
      }
    }
  }

  if (value === 'delivery') {
    return {
      text: 'Which service are you curious about?',
      options: [
        ...SERVICES.map(s => ({ label: s.name, value: `delivery_${s.name}` })),
        { label: '← Back to main menu', value: 'menu' },
      ],
    }
  }

  if (value.startsWith('delivery_')) {
    const name = value.replace('delivery_', '')
    const time = DELIVERY_TIMES[name]
    if (time) {
      return {
        text: `⏱️ **${name}**\n\nTypical delivery: **${time}**\n\nTimelines are confirmed after your project brief is reviewed. Rush delivery may be available — ask us on WhatsApp.`,
        options: [
          { label: '💬 Ask on WhatsApp', value: '__whatsapp__' },
          { label: '⏱️ Other services', value: 'delivery' },
          { label: '← Main menu', value: 'menu' },
        ],
      }
    }
  }

  return {
    text: "I didn't quite catch that. Let me show you the main menu.",
    options: MAIN_MENU,
  }
}

/* ─── Render text with **bold** ──────────────────────── */
function renderText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    return <span key={i}>{part}</span>
  })
}

/* ─── Component ──────────────────────────────────────── */
export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [nextId, setNextId] = useState(1)
  const [typing, setTyping] = useState(false)
  const [minimised, setMinimised] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  /* init greeting */
  useEffect(() => {
    const reply = getBotReply('__init__')
    setMessages([{ id: 0, from: 'bot', text: reply.text, options: reply.options }])
  }, [])

  /* scroll to bottom on new messages */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  function handleOption(opt: Option) {
    /* special actions */
    if (opt.value === '__whatsapp__') {
      window.open(WHATSAPP, '_blank', 'noopener,noreferrer')
      return
    }
    if (opt.value === '__contact_page__') {
      window.location.href = '/contact'
      return
    }

    /* add user bubble */
    const uid = nextId
    const bid = nextId + 1
    setNextId(n => n + 2)

    setMessages(prev => [
      ...prev.map(m => ({ ...m, options: undefined })), // hide options from old messages
      { id: uid, from: 'user', text: opt.label },
    ])

    setTyping(true)
    setTimeout(() => {
      const reply = getBotReply(opt.value)
      setTyping(false)
      setMessages(prev => [...prev, { id: bid, from: 'bot', text: reply.text, options: reply.options }])
    }, 600)
  }

  return (
    <>
      {/* ── Floating Button ── */}
      <button
        id="chatbot-toggle"
        aria-label={open ? 'Close chat assistant' : 'Open chat assistant'}
        onClick={() => { setOpen(o => !o); setMinimised(false) }}
        style={{
          position: 'fixed',
          bottom: '28px',
          right: '28px',
          zIndex: 9999,
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #E63946, #9B5DE5)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 32px rgba(230,57,70,0.45)',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(230,57,70,0.55)' }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(230,57,70,0.45)' }}
      >
        {open ? <X size={24} color="#fff" /> : <MessageCircle size={24} color="#fff" />}
      </button>

      {/* Unread badge */}
      {!open && (
        <span style={{
          position: 'fixed', bottom: '78px', right: '24px', zIndex: 10000,
          background: '#E63946', color: '#fff', borderRadius: '999px',
          fontSize: '0.65rem', fontWeight: 700, padding: '2px 7px',
          fontFamily: 'var(--font-inter)', pointerEvents: 'none',
          animation: 'chatPulse 2s ease-in-out infinite',
        }}>
          Ask me!
        </span>
      )}

      {/* ── Chat Window ── */}
      {open && (
        <div
          id="chatbot-window"
          role="dialog"
          aria-label="RTech Lead Chat Assistant"
          style={{
            position: 'fixed',
            bottom: '104px',
            right: '28px',
            zIndex: 9998,
            width: 'min(400px, calc(100vw - 40px))',
            height: minimised ? '64px' : '560px',
            borderRadius: '20px',
            background: '#0F0E2A',
            boxShadow: '0 24px 80px rgba(0,0,0,0.55)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.08)',
            transition: 'height 0.3s cubic-bezier(0.4,0,0.2,1)',
          }}
        >
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #E63946 0%, #9B5DE5 100%)',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
            cursor: 'pointer',
          }}
            onClick={() => setMinimised(m => !m)}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Bot size={20} color="#fff" />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '0.9375rem', color: '#fff' }}>
                  RTech Lead Assistant
                </div>
                <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.75)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
                  Online
                </div>
              </div>
            </div>
            <ChevronDown size={18} color="rgba(255,255,255,0.8)"
              style={{ transform: minimised ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}
            />
          </div>

          {/* Messages */}
          {!minimised && (
            <>
              <div style={{
                flex: 1,
                overflowY: 'auto',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                scrollbarWidth: 'thin',
                scrollbarColor: '#2D2D3A transparent',
              }}>
                {messages.map(msg => (
                  <div key={msg.id} style={{ display: 'flex', flexDirection: 'column', alignItems: msg.from === 'bot' ? 'flex-start' : 'flex-end' }}>
                    {/* Bubble */}
                    <div style={{
                      maxWidth: '88%',
                      padding: '10px 14px',
                      borderRadius: msg.from === 'bot' ? '4px 16px 16px 16px' : '16px 4px 16px 16px',
                      background: msg.from === 'bot' ? 'rgba(255,255,255,0.07)' : 'linear-gradient(135deg,#E63946,#9B5DE5)',
                      color: '#EDECEA',
                      fontSize: '0.875rem',
                      fontFamily: 'var(--font-inter)',
                      lineHeight: 1.65,
                      whiteSpace: 'pre-line',
                      border: msg.from === 'bot' ? '1px solid rgba(255,255,255,0.06)' : 'none',
                    }}>
                      {renderText(msg.text)}
                    </div>

                    {/* Options */}
                    {msg.options && msg.options.length > 0 && (
                      <div style={{ marginTop: '10px', display: 'flex', flexWrap: 'wrap', gap: '6px', maxWidth: '92%' }}>
                        {msg.options.map(opt => (
                          <button
                            key={opt.value}
                            onClick={() => handleOption(opt)}
                            style={{
                              background: 'transparent',
                              border: '1px solid rgba(230,57,70,0.5)',
                              borderRadius: '999px',
                              color: '#EDECEA',
                              padding: '6px 14px',
                              fontSize: '0.8125rem',
                              fontFamily: 'var(--font-inter)',
                              cursor: 'pointer',
                              transition: 'background 0.15s, border-color 0.15s',
                              whiteSpace: 'nowrap',
                            }}
                            onMouseEnter={e => {
                              e.currentTarget.style.background = 'rgba(230,57,70,0.2)'
                              e.currentTarget.style.borderColor = '#E63946'
                            }}
                            onMouseLeave={e => {
                              e.currentTarget.style.background = 'transparent'
                              e.currentTarget.style.borderColor = 'rgba(230,57,70,0.5)'
                            }}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Typing indicator */}
                {typing && (
                  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <div style={{
                      padding: '12px 16px',
                      borderRadius: '4px 16px 16px 16px',
                      background: 'rgba(255,255,255,0.07)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      display: 'flex',
                      gap: '4px',
                      alignItems: 'center',
                    }}>
                      {[0, 1, 2].map(i => (
                        <span key={i} style={{
                          width: '6px', height: '6px', borderRadius: '50%',
                          background: '#E63946',
                          animation: `typingDot 1.2s ${i * 0.2}s ease-in-out infinite`,
                          display: 'inline-block',
                        }} />
                      ))}
                    </div>
                  </div>
                )}
                <div ref={bottomRef} />
              </div>

              {/* Footer */}
              <div style={{
                borderTop: '1px solid rgba(255,255,255,0.06)',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexShrink: 0,
              }}>
                <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: 'rgba(173,173,190,0.5)' }}>
                  Powered by RTech Lead
                </span>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '6px',
                    background: '#25D366', color: '#fff',
                    padding: '6px 12px', borderRadius: '999px',
                    textDecoration: 'none', fontSize: '0.75rem',
                    fontFamily: 'var(--font-inter)', fontWeight: 600,
                    transition: 'opacity 0.15s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = '0.85' }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
                >
                  <Send size={12} /> WhatsApp
                </a>
              </div>
            </>
          )}
        </div>
      )}
    </>
  )
}
