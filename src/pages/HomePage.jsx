import { Helmet } from 'react-helmet'
import { HeroSection } from '../components/sections'
import { ValuePropsSection } from '../components/sections'
import { PortfolioPreviewSection } from '../components/sections'
import { ProcessSection } from '../components/sections'
import { CTASection } from '../components/sections'

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>SAMOLVIC Technologies | Custom PWA Development</title>
        <meta name="description" content="We build Progressive Web Apps for East African businesses. Offline-capable, reliable, custom software." />
        <meta name="keywords" content="PWA, web apps, custom software, Kenya, property management, restaurants" />
      </Helmet>
      
      <HeroSection />
      <ValuePropsSection />
      <PortfolioPreviewSection />
      <ProcessSection />
      <CTASection />
    </>
  )
}
