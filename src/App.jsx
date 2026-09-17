import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Header, Footer } from './components/layout'
import { HomePage } from './pages/HomePage'
import { AboutPage, ServicesPage } from './pages'
import { ContactPage, BookingPage } from './pages/index2'
import { PortfolioPage, PortfolioDetailPage } from './pages/index3'
import { PaymentPage, AdminDashboard } from './pages/index4'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="SAMOLVIC Technologies - Custom PWA development for East African businesses" />
        <meta name="theme-color" content="#0d47a1" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        
        <main className="flex-1">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/:slug" element={<PortfolioDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/book" element={<BookingPage />} />
            <Route path="/payment/:method/:bookingId" element={<PaymentPage />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/login" element={<AdminDashboard />} />
            
            {/* 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  )
}

// 404 Page
function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-blue-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-8">Page not found</p>
        <a href="/" className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
          Back to Home
        </a>
      </div>
    </div>
  )
}

export default App
