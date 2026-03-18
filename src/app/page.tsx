import NavigationBar from '@/components/layout/NavigationBar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import LogoMarquee from '@/components/sections/LogoMarquee'
import ServicesGrid from '@/components/sections/ServicesGrid'
import StatsBanner from '@/components/sections/StatsBanner'
import AboutProcess from '@/components/sections/AboutProcess'
import CaseStudiesGrid from '@/components/sections/CaseStudiesGrid'
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel'
import BlogPreview from '@/components/sections/BlogPreview'
import CtaBanner from '@/components/sections/CtaBanner'

export default function HomePage() {
  return (
    <>
      <NavigationBar />
      <main id="main-content">
        <HeroSection />
        <LogoMarquee />
        <ServicesGrid />
        <StatsBanner />
        <AboutProcess />
        <CaseStudiesGrid />
        <TestimonialsCarousel />
        <BlogPreview />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
