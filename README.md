# RTech Lead — Full-Service Digital Agency

> **Website · Software · App · Marketing · Video · Events**  
> Eight services. One partner. Zero compromises.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-E63946)](LICENSE)

---

## Overview

This is the official website codebase for **RTech Lead**, a full-service digital agency based in Dhaka, Bangladesh. The site is built with **Next.js 16 (App Router)**, React 19, TypeScript, and Tailwind CSS v4, with a focus on performance, SEO, and premium design.

**Live site:** [rtechlead.com](https://rtechlead.com)

---

## Features

- ⚡ **Next.js 16 App Router** — server components, file-based routing, and layouts
- 🎨 **Premium dark UI** — custom design system with CSS variables, Syne + Inter typography
- 🤖 **Interactive Chatbot** — scripted assistant for services, pricing, FAQ, and delivery times
- 📧 **Contact form** — API route with Nodemailer email delivery
- 🎞️ **Animations** — GSAP, Framer Motion, and CSS micro-animations
- 📱 **Fully responsive** — mobile-first layouts across all pages
- 🔍 **SEO-optimised** — metadata, Open Graph, Twitter cards, and JSON-LD schema
- ♿ **Accessible** — skip-nav, ARIA labels, and focus-visible rings

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, stats, services preview, testimonials, blog |
| `/services` | All 8 services overview |
| `/services/[slug]` | Individual service detail pages |
| `/case-studies` | Client work & portfolio |
| `/blog` | Blog listing |
| `/about` | Agency story & team |
| `/contact` | Project brief form + contact info |
| `/thank-you` | Form submission confirmation |

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| UI Library | React 19 |
| Styling | Tailwind CSS v4 + Vanilla CSS |
| Animation | GSAP 3, Framer Motion 12 |
| Icons | Lucide React |
| Forms | React Hook Form + Zod |
| Email | Nodemailer |
| Font | Syne, Inter, Playfair Display (Google Fonts) |

---

## Getting Started

### Prerequisites

- Node.js `>=18`
- npm `>=9`

### Installation

```bash
# Clone the repository
git clone https://github.com/3a7anton/rtech-lead-nxtjs.git
cd rtech-lead-nxtjs

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Email (Nodemailer)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=recipient@example.com
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages & layouts
│   ├── layout.tsx          # Root layout (fonts, metadata, chatbot)
│   ├── globals.css         # Design system, tokens, animations
│   ├── page.tsx            # Homepage
│   ├── services/           # Services pages
│   ├── contact/            # Contact page
│   ├── about/              # About page
│   ├── blog/               # Blog listing
│   ├── case-studies/       # Portfolio
│   └── api/                # API routes (contact form)
├── components/
│   ├── layout/
│   │   ├── NavigationBar/  # Global navbar
│   │   ├── Footer/         # Global footer
│   │   └── ChatBot/        # Floating chat assistant
│   └── sections/           # Page section components
└── design/                 # Design tokens & shared styles
```

---

## Chatbot

The site includes a fully scripted floating chatbot (`/src/components/layout/ChatBot/ChatBot.tsx`) that handles:

- 🛠️ **Services** — descriptions of all 8 disciplines
- 💰 **Pricing** — routes users to WhatsApp for custom quotes
- 💬 **Contact** — email, phone, WhatsApp, Facebook, location
- ❓ **FAQ** — startups, remote work, support, payment questions
- ⏱️ **Delivery Time** — per-service estimated timelines

Pricing enquiries are funnelled directly to WhatsApp: [+880 1634-352723](https://wa.me/8801634352723)

---

## Deployment

The project is optimised for deployment on **Vercel**:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Alternatively, build and deploy to any Node.js-compatible host.

---

## Contact

**RTech Lead**  
📧 infortechlead@gmail.com  
📞 01771-778880  
💬 WhatsApp: [+880 1634-352723](https://wa.me/8801634352723)  
📍 Dhaka, Bangladesh  
🌐 [rtechlead.com](https://rtechlead.com)

---

## License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

© 2025 Abu Ahad Anton. All rights reserved.
