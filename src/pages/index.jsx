import { Button } from '../components/common'
import { Card } from '../components/common'
import { Container } from '../components/common'
import { Grid } from '../components/common'
import { SectionHeader } from '../components/common'
import { CheckCircle, Code, Users, Zap } from 'lucide-react'

// pages/AboutPage.jsx
export function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-50 py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About SAMOLVIC</h1>
            <p className="text-xl text-gray-600">
              We're a team of passionate builders creating practical software for East African businesses.
            </p>
          </div>
        </Container>
      </section>
      
      {/* Founder Story */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full h-96 bg-gradient-to-br from-primary-200 to-accent-light rounded-lg flex items-center justify-center text-8xl">
                👨‍💻
              </div>
            </div>
            <div>
              <SectionHeader 
                title="Hello, I'm Samuel"
                subtitle=""
                centered={false}
                className="mb-6"
              />
              <p className="text-gray-600 mb-4 leading-relaxed">
                I started SAMOLVIC because I was frustrated. I saw brilliant business ideas failing because the software didn't work for them. Spreadsheets couldn't scale. Off-the-shelf tools didn't fit. And internet connectivity in Kenya? Unpredictable.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                So I built pmsnyumbani for property managers drowning in spreadsheets. Then smartbar for restaurants juggling orders on paper. Both solved real problems. Both are profitable. Both proved something: offline-first PWAs aren't theoretical—they're essential in Africa.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Now I build custom PWAs for businesses like yours. I understand your challenges. I've solved them. I'm personally accountable for your success.
              </p>
              <Button href="/book" variant="primary">
                Let's Talk
              </Button>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <Container>
          <SectionHeader 
            title="Our Values"
            subtitle="What drives us every day"
            centered
            className="mb-16"
          />
          
          <Grid cols={3} gap={8}>
            {[
              {
                title: 'Practical',
                description: 'We solve real problems. No hype. No BS. Just working software.'
              },
              {
                title: 'Reliable',
                description: 'We build for Africas reality. Connectivity is optional. Your app works anyway.'
              },
              {
                title: 'Accessible',
                description: 'Custom software shouldnt be expensive. We price fairly for SMEs.'
              }
            ].map((value, idx) => (
              <Card key={idx}>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </Grid>
        </Container>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-primary-600 text-white">
        <Container className="text-center max-w-2xl">
          <h2 className="text-4xl font-bold mb-6">Let's Build Together</h2>
          <p className="text-lg mb-8 text-primary-100">
            Whether it's a custom app or consulting, we're ready to help you succeed.
          </p>
          <Button href="/book" variant="primary" size="lg">
            Start Your Project
          </Button>
        </Container>
      </section>
    </div>
  )
}

// pages/ServicesPage.jsx
export function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-50 py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600">
              Everything you need to build, launch, and scale your custom app.
            </p>
          </div>
        </Container>
      </section>
      
      {/* Services */}
      <section className="py-20">
        <Container>
          {/* Custom PWA Development */}
          <div className="mb-20 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-primary-100 to-blue-50 p-12 rounded-lg flex items-center justify-center text-7xl">
                💻
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Custom PWA Development
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                From idea to production-ready app. We handle everything: design, development, deployment, and support.
              </p>
              
              <h3 className="text-lg font-bold text-gray-900 mb-4">What's included:</h3>
              <ul className="space-y-3 mb-8">
                {[
                  'Full-stack development (frontend + backend)',
                  'Offline-first architecture',
                  'Mobile-optimized design',
                  'Integration with your payment systems',
                  'User training & documentation',
                  'Deployment & monitoring',
                  '3 months of free support'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="text-primary-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-accent-light p-4 rounded-lg mb-8">
                <p className="text-sm text-accent-orange font-semibold">
                  Timeline: 4-12 weeks depending on complexity
                </p>
              </div>
              
              <Button href="/book" variant="primary" size="lg">
                Discuss Your Project
              </Button>
            </div>
          </div>
          
          {/* Ongoing Support */}
          <div className="mb-20 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Ongoing Support & Maintenance
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Your app needs care after launch. We provide comprehensive support to keep everything running smoothly.
              </p>
              
              <h3 className="text-lg font-bold text-gray-900 mb-4">Includes:</h3>
              <ul className="space-y-3 mb-8">
                {[
                  'Bug fixes & performance optimization',
                  'Feature enhancements & improvements',
                  'Security updates & patches',
                  'User support & training',
                  'Analytics & insights',
                  'Quarterly strategy reviews',
                  'Priority response time'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="text-primary-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-accent-light p-4 rounded-lg mb-8">
                <p className="text-sm text-accent-orange font-semibold">
                  Starting from: KES 25,000/month
                </p>
              </div>
              
              <Button href="/book" variant="primary" size="lg">
                Learn More
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-gradient-to-br from-orange-100 to-accent-light p-12 rounded-lg flex items-center justify-center text-7xl">
                🔧
              </div>
            </div>
          </div>
          
          {/* Consulting */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-purple-100 to-pink-50 p-12 rounded-lg flex items-center justify-center text-7xl">
                🎯
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Technical Consulting
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Need guidance on your tech strategy? We help you make the right decisions.
              </p>
              
              <h3 className="text-lg font-bold text-gray-900 mb-4">Perfect for:</h3>
              <ul className="space-y-3 mb-8">
                {[
                  'Evaluating your current tech stack',
                  'Planning a new product launch',
                  'Scaling your engineering team',
                  'Optimizing performance & costs',
                  'Security & compliance reviews',
                  'Architecture planning',
                  'Team training & workshops'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="text-primary-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-accent-light p-4 rounded-lg mb-8">
                <p className="text-sm text-accent-orange font-semibold">
                  Daily rate: KES 50,000 (minimum 4 hours)
                </p>
              </div>
              
              <Button href="/book" variant="primary" size="lg">
                Book a Session
              </Button>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <Container>
          <SectionHeader 
            title="Why Work With SAMOLVIC?"
            subtitle=""
            centered
            className="mb-16"
          />
          
          <Grid cols={4} gap={8}>
            {[
              {
                icon: Code,
                title: 'Expert Builders',
                description: 'We ship production software. See pmsnyumbani and smartbar.'
              },
              {
                icon: Users,
                title: 'Personal Accountability',
                description: 'Founder-led. Your success is our success.'
              },
              {
                icon: Zap,
                title: 'Offline-First',
                description: 'Built for Africa's connectivity reality.'
              },
              {
                icon: CheckCircle,
                title: 'Full Support',
                description: 'From concept through maintenance. We\'ve got you.'
              }
            ].map((reason, idx) => {
              const Icon = reason.icon
              return (
                <Card key={idx}>
                  <Icon className="text-primary-600 mb-4" size={32} />
                  <h3 className="font-bold text-gray-900 mb-2">{reason.title}</h3>
                  <p className="text-sm text-gray-600">{reason.description}</p>
                </Card>
              )
            })}
          </Grid>
        </Container>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-primary-600 text-white">
        <Container className="text-center max-w-2xl">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8 text-primary-100">
            Tell us about your project. We'll review it and get back to you within 24 hours.
          </p>
          <Button href="/book" variant="primary" size="lg">
            Schedule a Consultation
          </Button>
        </Container>
      </section>
    </div>
  )
}
