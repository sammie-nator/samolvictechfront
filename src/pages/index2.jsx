import { useState } from 'react'
import { Phone, Mail, MapPin, Send, Check } from 'lucide-react'
import { Button } from '../components/common'
import { Card } from '../components/common'
import { Container } from '../components/common'
import { api } from '../utils'

// pages/ContactPage.jsx
export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await api.post('/inquiries', formData)
      setSubmitted(true)
      setFormData({ name: '', email: '', company: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Failed to submit:', error)
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-50 py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-600">
              Have questions? Want to discuss your project? We're here to help.
            </p>
          </div>
        </Container>
      </section>
      
      {/* Contact Info & Form */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <Mail className="text-primary-600 mr-4 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:hello@samolvic.com" className="text-gray-600 hover:text-primary-600">
                      hello@samolvic.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-primary-600 mr-4 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:+254712345678" className="text-gray-600 hover:text-primary-600">
                      +254 712 345 678
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-primary-600 mr-4 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">
                      Kikuyu, Kiambu County<br />
                      Kenya
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://linkedin.com/company/samolvic" className="text-gray-600 hover:text-primary-600 transition-colors">
                    LinkedIn
                  </a>
                  <a href="https://twitter.com/samolvic" className="text-gray-600 hover:text-primary-600 transition-colors">
                    Twitter
                  </a>
                  <a href="https://github.com/samolvic" className="text-gray-600 hover:text-primary-600 transition-colors">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <Card>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="primary" 
                    className="w-full"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2" size={16} />
                  </Button>
                  
                  {submitted && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center text-green-700">
                      <Check className="mr-2" size={20} />
                      Thanks for reaching out! We'll be in touch soon.
                    </div>
                  )}
                </form>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

// pages/BookingPage.jsx
export function BookingPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    serviceType: 'custom-pwa',
    projectDescription: '',
    timeline: 'flexible',
    budget: '',
    date: '',
    time: '',
    paymentMethod: 'mpesa'
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleNextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1)
    }
  }
  
  const validateStep = (currentStep) => {
    if (currentStep === 1) {
      return formData.name && formData.email && formData.company
    }
    if (currentStep === 2) {
      return formData.serviceType && formData.projectDescription
    }
    if (currentStep === 3) {
      return formData.date && formData.time
    }
    return true
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const booking = await api.post('/bookings', formData)
      
      // Handle payment based on method
      if (formData.paymentMethod === 'mpesa') {
        // Redirect to M-Pesa payment
        window.location.href = `/payment/mpesa/${booking.id}`
      } else if (formData.paymentMethod === 'paystack') {
        // Redirect to Paystack
        window.location.href = `/payment/paystack/${booking.id}`
      }
      
      setSubmitted(true)
    } catch (error) {
      console.error('Booking failed:', error)
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <Container>
        <div className="max-w-2xl mx-auto">
          {!submitted ? (
            <div>
              {/* Progress */}
              <div className="mb-12">
                <div className="flex justify-between mb-4">
                  {[1, 2, 3, 4].map(s => (
                    <div key={s} className="text-center">
                      <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center font-bold mb-2 ${
                        s <= step 
                          ? 'bg-primary-600 text-white' 
                          : 'bg-gray-300 text-gray-600'
                      }`}>
                        {s}
                      </div>
                      <p className="text-sm font-medium text-gray-600">
                        {['Details', 'Project', 'Schedule', 'Payment'][s - 1]}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-full bg-primary-600 rounded-full transition-all duration-300"
                    style={{ width: `${(step / 4) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              {/* Form */}
              <Card className="p-8">
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Contact Details */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-gray-900">Your Details</h2>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                    </div>
                  )}
                  
                  {/* Step 2: Project Details */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-gray-900">Your Project</h2>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Service Type
                        </label>
                        <select
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                        >
                          <option value="custom-pwa">Custom PWA Development</option>
                          <option value="support">Ongoing Support Package</option>
                          <option value="consulting">Technical Consulting</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Project Description
                        </label>
                        <textarea
                          name="projectDescription"
                          value={formData.projectDescription}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Tell us about your project, challenges, and goals..."
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Timeline
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                        >
                          <option value="asap">ASAP (1-2 months)</option>
                          <option value="flexible">Flexible (2-3 months)</option>
                          <option value="longterm">Long-term (3+ months)</option>
                        </select>
                      </div>
                    </div>
                  )}
                  
                  {/* Step 3: Schedule */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-gray-900">Schedule Consultation</h2>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Preferred Time
                        </label>
                        <input
                          type="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                          required
                        />
                      </div>
                    </div>
                  )}
                  
                  {/* Step 4: Payment */}
                  {step === 4 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-gray-900">Confirm Booking</h2>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-3">Booking Summary</h3>
                        <dl className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <dt className="text-gray-600">Service:</dt>
                            <dd className="text-gray-900 font-medium">{formData.serviceType}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-gray-600">Consultation Fee:</dt>
                            <dd className="text-gray-900 font-medium">KES 5,000</dd>
                          </div>
                        </dl>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Payment Method
                        </label>
                        <select
                          name="paymentMethod"
                          value={formData.paymentMethod}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                        >
                          <option value="mpesa">M-Pesa (Daraja)</option>
                          <option value="paystack">Paystack</option>
                          <option value="later">Pay Later (Invoice)</option>
                        </select>
                      </div>
                    </div>
                  )}
                  
                  {/* Navigation */}
                  <div className="flex gap-4 mt-8">
                    {step > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setStep(step - 1)}
                      >
                        Back
                      </Button>
                    )}
                    <div className="flex-1"></div>
                    {step < 4 ? (
                      <Button
                        type="button"
                        variant="primary"
                        onClick={handleNextStep}
                      >
                        Next
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        variant="primary"
                        disabled={loading}
                      >
                        {loading ? 'Processing...' : 'Complete Booking'}
                      </Button>
                    )}
                  </div>
                </form>
              </Card>
            </div>
          ) : (
            <Card className="text-center p-12">
              <div className="text-6xl mb-4">✅</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
              <p className="text-gray-600 mb-6">
                We've received your booking. Check your email for confirmation details.
              </p>
              <Button href="/" variant="primary">
                Return Home
              </Button>
            </Card>
          )}
        </div>
      </Container>
    </div>
  )
}
