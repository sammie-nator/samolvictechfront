import { ArrowRight, Wifi, Zap, Shield, Users } from 'lucide-react'
import { Button } from '../common'
import { Card } from '../common'
import { Container } from '../common'
import { Grid } from '../common'
import { SectionHeader } from '../common'

// components/sections/HeroSection.jsx
export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-blue-50 py-20 md:py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-accent-orange opacity-10 rounded-full blur-3xl"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent-light text-accent-orange">
              ✨ Building for Africa
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            We Build <span className="text-primary-600">Progressive Web Apps</span> for East African Businesses
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Custom software that works offline, works reliably, and actually solves your problems. No hype. Just practical tools.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button href="/book" variant="primary" size="lg">
              Start Your Project
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button href="/portfolio" variant="outline" size="lg">
              See Our Work
            </Button>
          </div>
          
          {/* Social proof */}
          <div className="pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-sm mb-4">Trusted by businesses across Kenya</p>
            <div className="flex justify-center items-center gap-6 text-sm text-gray-600">
              <div>
                <p className="font-bold text-gray-900">50+</p>
                <p>Projects Shipped</p>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div>
                <p className="font-bold text-gray-900">1000+</p>
                <p>Daily Active Users</p>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div>
                <p className="font-bold text-gray-900">99.9%</p>
                <p>Uptime</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

// components/sections/ValuePropsSection.jsx
export function ValuePropsSection() {
  const features = [
    {
      icon: Wifi,
      title: "Works Offline",
      description: "Your app functions perfectly even without internet. Data syncs automatically when back online."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Load times under 1 second. Progressive Web Apps feel like native apps, not websites."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with automatic updates. No manual app store distribution."
    },
    {
      icon: Users,
      title: "User-Focused",
      description: "We build tools that your team actually wants to use. Minimal training required."
    }
  ]
  
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <SectionHeader 
          title="Why Choose SAMOLVIC?"
          subtitle="We don't just build apps. We solve real problems for real businesses."
          centered
          className="mb-16"
        />
        
        <Grid cols={2} gap={8}>
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <Card key={idx}>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100">
                      <Icon className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            )
          })}
        </Grid>
      </Container>
    </section>
  )
}

// components/sections/PortfolioPreviewSection.jsx
export function PortfolioPreviewSection() {
  const projects = [
    {
      id: 'pmsnyumbani',
      name: 'pmsnyumbani',
      tagline: 'Property Management Platform',
      description: 'Manage properties, tenants, payments, and maintenance all in one place. Offline-capable for field operations.',
      image: '📊',
      stats: [
        { label: 'Properties Managed', value: '500+' },
        { label: 'Monthly Transactions', value: '10K+' },
        { label: 'Active Users', value: '200+' }
      ],
      link: 'https://pmsnyumbani.vercel.app/'
    },
    {
      id: 'smartbar',
      name: 'smartbar',
      tagline: 'Restaurant Operations Platform',
      description: 'Orders, inventory, cash handling, and analytics. Everything a restaurant needs to run smoothly.',
      image: '🍽️',
      stats: [
        { label: 'Restaurants Using', value: '15+' },
        { label: 'Orders Daily', value: '500+' },
        { label: 'User Rating', value: '4.8★' }
      ],
      link: 'https://smartbarruaka.vercel.app/'
    }
  ]
  
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <Container>
        <SectionHeader 
          title="Featured Work"
          subtitle="Real apps, solving real problems, used by real businesses every day."
          centered
          className="mb-16"
        />
        
        <Grid cols={2} gap={8}>
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-4">{project.image}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.name}</h3>
              <p className="text-primary-600 font-semibold text-sm mb-3">{project.tagline}</p>
              <p className="text-gray-600 mb-6">{project.description}</p>
              
              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                {project.stats.map((stat, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">{stat.label}</span>
                    <span className="font-bold text-primary-600">{stat.value}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                href={project.link}
                variant="outline"
                className="w-full"
                onClick={(e) => {
                  if (project.link.startsWith('http')) {
                    e.preventDefault()
                    window.open(project.link, '_blank')
                  }
                }}
              >
                View Project
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </Card>
          ))}
        </Grid>
        
        <div className="text-center mt-12">
          <Button href="/portfolio" variant="primary" size="lg">
            See All Projects
          </Button>
        </div>
      </Container>
    </section>
  )
}

// components/sections/ProcessSection.jsx
export function ProcessSection() {
  const steps = [
    {
      number: '1',
      title: 'Discovery',
      description: 'We understand your business, challenges, and goals through detailed conversations.'
    },
    {
      number: '2',
      title: 'Design & Plan',
      description: 'We create wireframes and architecture plans, showing you exactly what we\'ll build.'
    },
    {
      number: '3',
      title: 'Development',
      description: 'We build your app with modern practices, testing as we go. Regular updates keep you informed.'
    },
    {
      number: '4',
      title: 'Launch & Train',
      description: 'We deploy your app and train your team to use it effectively.'
    },
    {
      number: '5',
      title: 'Support',
      description: 'Ongoing maintenance, updates, and feature enhancements keep your app running perfectly.'
    }
  ]
  
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <SectionHeader 
          title="Our Process"
          subtitle="From concept to production-ready app. Transparent, collaborative, results-driven."
          centered
          className="mb-16"
        />
        
        <div className="relative">
          {/* Connection line (desktop only) */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-accent-orange to-primary-200"></div>
          
          <Grid cols={5} gap={6}>
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-xl mb-4 relative z-10">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </Grid>
        </div>
      </Container>
    </section>
  )
}

// components/sections/CTASection.jsx
export function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Something?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Let's talk about your project. We'll help you understand what's possible and how to get there.
          </p>
          <Button href="/book" variant="primary" size="lg">
            Schedule a Consultation
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </Container>
    </section>
  )
}
