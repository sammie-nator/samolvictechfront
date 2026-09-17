import { ArrowRight, ExternalLink } from 'lucide-react'
import { Button } from '../components/common'
import { Card } from '../components/common'
import { Container } from '../components/common'
import { Grid } from '../components/common'
import { SectionHeader } from '../components/common'
import { useParams } from 'react-router-dom'

// pages/PortfolioPage.jsx
export function PortfolioPage() {
  const projects = [
    {
      id: 'pmsnyumbani',
      name: 'pmsnyumbani',
      tagline: 'Property Management Platform',
      category: 'SaaS',
      description: 'Property management solution for managing tenants, payments, and maintenance. Offline-capable for field operations.',
      image: '📊',
      stats: [
        { label: 'Properties', value: '500+' },
        { label: 'Users', value: '200+' },
        { label: 'Uptime', value: '99.9%' }
      ],
      link: 'https://pmsnyumbani.vercel.app/'
    },
    {
      id: 'smartbar',
      name: 'smartbar',
      tagline: 'Restaurant Operations Platform',
      category: 'SaaS',
      description: 'All-in-one platform for restaurant operations including orders, inventory, and analytics.',
      image: '🍽️',
      stats: [
        { label: 'Restaurants', value: '15+' },
        { label: 'Orders/Day', value: '500+' },
        { label: 'Rating', value: '4.8★' }
      ],
      link: 'https://smartbarruaka.vercel.app/'
    }
  ]
  
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-50 py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Work</h1>
            <p className="text-xl text-gray-600">
              Real apps built for real businesses. See what we've created.
            </p>
          </div>
        </Container>
      </section>
      
      {/* Projects Grid */}
      <section className="py-20">
        <Container>
          <Grid cols={2} gap={8} className="mb-12">
            {projects.map((project) => (
              <Card key={project.id} className="flex flex-col h-full hover:shadow-xl transition-all duration-300">
                <div className="text-6xl mb-4">{project.image}</div>
                
                <div className="flex-1">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-xs font-semibold rounded">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.name}</h3>
                  <p className="text-primary-600 font-semibold text-sm mb-3">{project.tagline}</p>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  
                  <div className="space-y-2 mb-6 pb-6 border-b border-gray-200">
                    {project.stats.map((stat, idx) => (
                      <div key={idx} className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">{stat.label}</span>
                        <span className="font-bold text-primary-600">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Button 
                    href={`/portfolio/${project.id}`}
                    variant="outline"
                    className="w-full"
                  >
                    View Case Study
                  </Button>
                  <Button 
                    onClick={() => window.open(project.link, '_blank')}
                    variant="ghost"
                    className="w-full justify-center"
                  >
                    Visit Project
                    <ExternalLink className="ml-2" size={16} />
                  </Button>
                </div>
              </Card>
            ))}
          </Grid>
          
          {/* CTA */}
          <div className="text-center p-12 bg-gray-50 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want Something Similar?
            </h3>
            <p className="text-gray-600 mb-6">
              We've built successful apps. Let's build one for your business.
            </p>
            <Button href="/book" variant="primary" size="lg">
              Start Your Project
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}

// pages/PortfolioDetailPage.jsx
export function PortfolioDetailPage() {
  const { slug } = useParams()
  
  const caseStudies = {
    pmsnyumbani: {
      name: 'pmsnyumbani',
      tagline: 'Property Management Without Borders',
      image: '📊',
      problem: {
        title: 'The Problem',
        description: 'Property managers across Kenya were drowning in spreadsheets. They tracked tenants in one sheet, payments in another, maintenance requests elsewhere. No single source of truth. Payment collection was chaotic. Field managers had no way to access tenant info without internet.',
        pain_points: [
          'Scattered data across multiple spreadsheets',
          'No real-time visibility into payments',
          'Difficult to track maintenance requests',
          'Can\'t manage properties without internet',
          'Manual, error-prone workflows'
        ]
      },
      solution: {
        title: 'Our Solution',
        description: 'We built pmsnyumbani—a Progressive Web App specifically designed for property managers. Unified dashboard for all property operations. Offline-capable for field work. Real-time sync when back online.',
        features: [
          'Tenant management and communication',
          'Rent payment tracking and reminders',
          'Maintenance request management',
          'Offline-first architecture',
          'Mobile-optimized interface',
          'Real-time analytics'
        ]
      },
      results: {
        title: 'Results',
        metrics: [
          { label: 'Properties Managed', value: '500+', change: '+50% YoY' },
          { label: 'Active Users', value: '200+', change: '+40% YoY' },
          { label: 'Time Saved/Week', value: '10+ hours', change: 'Per manager' },
          { label: 'System Uptime', value: '99.9%', change: 'SLA' }
        ],
        testimonial: {
          quote: 'pmsnyumbani changed how we manage properties. We\'re more organized, collections are better, and our team loves using it.',
          author: 'Property Manager, Nairobi'
        }
      },
      tech_stack: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'IndexedDB'],
      link: 'https://pmsnyumbani.vercel.app/'
    },
    smartbar: {
      name: 'smartbar',
      tagline: 'Restaurant Operations Simplified',
      image: '🍽️',
      problem: {
        title: 'The Problem',
        description: 'Restaurant operators in Nairobi struggled with operational chaos. Orders came through multiple channels. Inventory tracking was manual. Cash handling was error-prone. No visibility into what\'s selling and what isn\'t.',
        pain_points: [
          'Orders scattered across WhatsApp and calls',
          'No inventory visibility',
          'Manual cash reconciliation',
          'Can\'t track popular items',
          'Staff coordination is inefficient'
        ]
      },
      solution: {
        title: 'Our Solution',
        description: 'smartbar is an all-in-one platform for restaurant operations. Orders, inventory, and cash handling in one place. Real-time analytics to understand what\'s working. Works offline for when internet goes down.',
        features: [
          'Order management system',
          'Real-time inventory tracking',
          'Cash handling and reconciliation',
          'Sales analytics and insights',
          'Staff management',
          'Offline capability'
        ]
      },
      results: {
        title: 'Results',
        metrics: [
          { label: 'Restaurants Using', value: '15+', change: 'Growing' },
          { label: 'Inventory Waste', value: '-30%', change: 'Reduction' },
          { label: 'Order Errors', value: '-80%', change: 'Reduction' },
          { label: 'User Rating', value: '4.8★', change: 'Average' }
        ],
        testimonial: {
          quote: 'smartbar gave us visibility we never had. We know exactly what\'s moving, money is accurate, and staff coordination is smooth.',
          author: 'Restaurant Owner, Ruaka'
        }
      },
      tech_stack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Socket.io'],
      link: 'https://smartbarruaka.vercel.app/'
    }
  }
  
  const study = caseStudies[slug]
  
  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Case study not found</h1>
          <Button href="/portfolio" variant="primary">Back to Portfolio</Button>
        </div>
      </div>
    )
  }
  
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-50 py-20">
        <Container>
          <div className="max-w-3xl">
            <div className="text-6xl mb-6">{study.image}</div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">{study.name}</h1>
            <p className="text-2xl text-primary-600 font-semibold">{study.tagline}</p>
          </div>
        </Container>
      </section>
      
      {/* Problem */}
      <section className="py-20 border-b border-gray-200">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{study.problem.title}</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">{study.problem.description}</p>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">Pain Points</h3>
            <ul className="space-y-2">
              {study.problem.pain_points.map((point, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-accent-orange mr-3">•</span>
                  <span className="text-gray-600">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      
      {/* Solution */}
      <section className="py-20 border-b border-gray-200">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{study.solution.title}</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">{study.solution.description}</p>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
            <Grid cols={2} gap={4}>
              {study.solution.features.map((feature, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="text-primary-600 mr-3">✓</span>
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </Grid>
          </div>
        </Container>
      </section>
      
      {/* Results */}
      <section className="py-20 border-b border-gray-200">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">{study.results.title}</h2>
            
            <Grid cols={2} gap={8} className="mb-12">
              {study.results.metrics.map((metric, idx) => (
                <Card key={idx} className="text-center">
                  <p className="text-4xl font-bold text-primary-600 mb-2">{metric.value}</p>
                  <p className="text-gray-600 font-medium mb-2">{metric.label}</p>
                  <p className="text-sm text-accent-orange">{metric.change}</p>
                </Card>
              ))}
            </Grid>
            
            <Card className="bg-gradient-to-r from-primary-50 to-blue-50 border-0">
              <blockquote className="text-lg text-gray-700 mb-4">
                "{study.results.testimonial.quote}"
              </blockquote>
              <footer className="text-gray-600">
                — {study.results.testimonial.author}
              </footer>
            </Card>
          </div>
        </Container>
      </section>
      
      {/* Tech Stack */}
      <section className="py-20 border-b border-gray-200">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Technology Stack</h2>
            <div className="flex flex-wrap gap-3">
              {study.tech_stack.map((tech, idx) => (
                <span key={idx} className="px-4 py-2 bg-primary-100 text-primary-700 rounded-lg font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>
      
      {/* CTA */}
      <section className="py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Want to Visit the Live App?
            </h2>
            <Button 
              onClick={() => window.open(study.link, '_blank')}
              variant="primary"
              size="lg"
            >
              Visit {study.name}
              <ExternalLink className="ml-2" size={20} />
            </Button>
            
            <div className="mt-12 p-8 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Want Something Similar for Your Business?
              </h3>
              <p className="text-gray-600 mb-6">
                We've solved these problems before. Let's solve them for you.
              </p>
              <Button href="/book" variant="primary">
                Start Your Project
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
