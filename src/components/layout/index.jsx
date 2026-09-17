import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '../common'
import { Container } from '../common'

// components/layout/Header.jsx
export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' }
  ]
  
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <Container className="py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold">
            <span className="text-accent-orange">SAMOLVIC</span>
            <span className="text-primary-600"> TECHNOLOGIES</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button href="/book" variant="primary">
              Book Consultation
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3 border-t border-gray-200 pt-4">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                className="block text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button href="/book" variant="primary" className="w-full">
              Book Consultation
            </Button>
          </nav>
        )}
      </Container>
    </header>
  )
}

// components/layout/Footer.jsx
export function Footer() {
  const currentYear = new Date().getFullYear()
  
  const footerLinks = {
    'Company': [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' }
    ],
    'Services': [
      { label: 'Custom PWA Development', href: '/services' },
      { label: 'Ongoing Support', href: '/services' },
      { label: 'Consulting', href: '/services' }
    ],
    'Products': [
      { label: 'pmsnyumbani', href: 'https://pmsnyumbani.vercel.app/' },
      { label: 'smartbar', href: 'https://smartbarruaka.vercel.app/' }
    ]
  }
  
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">
              <span className="text-accent-orange">SAMOLVIC</span> TECHNOLOGIES
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Building practical PWAs for East African businesses.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/samolvic" className="hover:text-accent-orange transition-colors">
                LinkedIn
              </a>
              <a href="https://twitter.com/samolvic" className="hover:text-accent-orange transition-colors">
                Twitter
              </a>
              <a href="https://github.com/samolvic" className="hover:text-accent-orange transition-colors">
                GitHub
              </a>
            </div>
          </div>
          
          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-gray-400 hover:text-accent-orange transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div>
              <p className="text-gray-400 text-sm">
                <span className="text-white font-semibold">Email:</span> hello@samolvic.com
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">
                <span className="text-white font-semibold">Phone:</span> +254 712 345 678
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">
                <span className="text-white font-semibold">Location:</span> Kikuyu, Kenya
              </p>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; {currentYear} SAMOLVIC TECHNOLOGIES. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="hover:text-accent-orange transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-accent-orange transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
