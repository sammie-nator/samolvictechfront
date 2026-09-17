import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { api } from '../utils'
import { Button } from '../components/common'
import { Card } from '../components/common'
import { Container } from '../components/common'
import { LogOut, Plus, Eye, Trash2 } from 'lucide-react'

// pages/PaymentPage.jsx
export function PaymentPage() {
  const { method, bookingId } = useParams()
  const navigate = useNavigate()
  const [booking, setBooking] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    fetchBooking()
  }, [bookingId])
  
  const fetchBooking = async () => {
    try {
      const response = await api.get(`/bookings/${bookingId}`)
      setBooking(response.data)
    } catch (err) {
      setError('Booking not found')
      setTimeout(() => navigate('/'), 3000)
    } finally {
      setLoading(false)
    }
  }
  
  const handleMpesaPayment = async () => {
    try {
      setLoading(true)
      const response = await api.post(`/payments/mpesa/init`, {
        bookingId,
        amount: 5000,
        phone: booking.phone
      })
      
      // Store transaction ID for checking status
      localStorage.setItem('mpesaTransactionId', response.data.checkoutRequestId)
      
      // Poll for payment status
      const pollInterval = setInterval(async () => {
        try {
          const statusResponse = await api.get(`/payments/mpesa/status/${response.data.checkoutRequestId}`)
          if (statusResponse.data.status === 'completed') {
            clearInterval(pollInterval)
            handlePaymentSuccess()
          }
        } catch (err) {
          console.error('Status check failed:', err)
        }
      }, 2000)
      
      // Clear polling after 5 minutes
      setTimeout(() => clearInterval(pollInterval), 300000)
    } catch (err) {
      setError('M-Pesa payment failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }
  
  const handlePaystackPayment = async () => {
    try {
      setLoading(true)
      const response = await api.post(`/payments/paystack/init`, {
        bookingId,
        amount: 5000,
        email: booking.email
      })
      
      // Redirect to Paystack
      window.location.href = response.data.authorization_url
    } catch (err) {
      setError('Paystack payment failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }
  
  const handlePaymentSuccess = async () => {
    try {
      await api.patch(`/bookings/${bookingId}`, {
        paymentStatus: 'completed'
      })
      setTimeout(() => navigate('/'), 2000)
    } catch (err) {
      console.error('Failed to update booking:', err)
    }
  }
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Processing...</p>
        </div>
      </div>
    )
  }
  
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <p className="text-gray-600">Redirecting...</p>
        </div>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <Container>
        <div className="max-w-2xl mx-auto">
          <Card className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Complete Your Booking</h1>
            <p className="text-gray-600 mb-8">
              Booking fee: <span className="font-bold text-gray-900">KES 5,000</span>
            </p>
            
            {booking && (
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">Booking Details</h3>
                <dl className="space-y-3">
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Name:</dt>
                    <dd className="font-medium">{booking.name}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Email:</dt>
                    <dd className="font-medium">{booking.email}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Company:</dt>
                    <dd className="font-medium">{booking.company}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Service:</dt>
                    <dd className="font-medium capitalize">{booking.serviceType}</dd>
                  </div>
                </dl>
              </div>
            )}
            
            <div className="space-y-4">
              {method === 'mpesa' && (
                <Button 
                  onClick={handleMpesaPayment}
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? 'Processing...' : 'Pay with M-Pesa'}
                </Button>
              )}
              
              {method === 'paystack' && (
                <Button 
                  onClick={handlePaystackPayment}
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? 'Redirecting...' : 'Pay with Paystack'}
                </Button>
              )}
              
              <Button 
                href="/book"
                variant="outline"
                className="w-full"
              >
                Back to Booking
              </Button>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  )
}

// pages/AdminDashboard.jsx
export function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('adminToken'))
  const [loginData, setLoginData] = useState({ email: '', password: '' })
  const [inquiries, setInquiries] = useState([])
  const [bookings, setBookings] = useState([])
  const [activeTab, setActiveTab] = useState('inquiries')
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    if (isLoggedIn) {
      fetchData()
    }
  }, [isLoggedIn, activeTab])
  
  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await api.post('/admin/login', loginData)
      localStorage.setItem('adminToken', response.data.token)
      setIsLoggedIn(true)
      setLoginData({ email: '', password: '' })
    } catch (err) {
      alert('Login failed')
    } finally {
      setLoading(false)
    }
  }
  
  const fetchData = async () => {
    try {
      if (activeTab === 'inquiries') {
        const response = await api.get('/inquiries')
        setInquiries(response.data)
      } else if (activeTab === 'bookings') {
        const response = await api.get('/bookings')
        setBookings(response.data)
      }
    } catch (err) {
      console.error('Failed to fetch data:', err)
    }
  }
  
  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    setIsLoggedIn(false)
  }
  
  const handleDelete = async (type, id) => {
    if (confirm('Are you sure?')) {
      try {
        await api.delete(`/${type}/${id}`)
        if (type === 'inquiries') {
          setInquiries(inquiries.filter(i => i.id !== id))
        } else {
          setBookings(bookings.filter(b => b.id !== id))
        }
      } catch (err) {
        alert('Failed to delete')
      }
    }
  }
  
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-blue-50 flex items-center justify-center py-20">
        <Card className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={loginData.email}
                onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>
            <Button type="submit" variant="primary" className="w-full" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </Button>
          </form>
        </Card>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <Container className="py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <LogOut size={20} className="mr-2" />
            Logout
          </button>
        </Container>
      </div>
      
      <Container className="py-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-200">
          {['inquiries', 'bookings'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 px-6 font-medium border-b-2 transition-colors ${
                activeTab === tab
                  ? 'text-primary-600 border-primary-600'
                  : 'text-gray-600 border-transparent hover:text-gray-900'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Content */}
        {activeTab === 'inquiries' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Inquiries</h2>
            {inquiries.length === 0 ? (
              <Card><p className="text-gray-600">No inquiries yet</p></Card>
            ) : (
              inquiries.map(inquiry => (
                <Card key={inquiry.id}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-gray-900">{inquiry.name}</h3>
                      <p className="text-sm text-gray-600">{inquiry.email}</p>
                    </div>
                    <button
                      onClick={() => handleDelete('inquiries', inquiry.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                  <p className="text-gray-600 mb-3">{inquiry.message}</p>
                  <p className="text-xs text-gray-500">{new Date(inquiry.createdAt).toLocaleString()}</p>
                </Card>
              ))
            )}
          </div>
        )}
        
        {activeTab === 'bookings' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Bookings</h2>
            {bookings.length === 0 ? (
              <Card><p className="text-gray-600">No bookings yet</p></Card>
            ) : (
              bookings.map(booking => (
                <Card key={booking.id}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-gray-900">{booking.name}</h3>
                      <p className="text-sm text-gray-600">{booking.email} • {booking.phone}</p>
                    </div>
                    <div className="flex gap-2">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        booking.paymentStatus === 'completed'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {booking.paymentStatus}
                      </span>
                      <button
                        onClick={() => handleDelete('bookings', booking.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                  <dl className="grid grid-cols-2 gap-4 text-sm mb-3">
                    <div>
                      <dt className="text-gray-600">Company:</dt>
                      <dd className="font-medium">{booking.company}</dd>
                    </div>
                    <div>
                      <dt className="text-gray-600">Service:</dt>
                      <dd className="font-medium capitalize">{booking.serviceType}</dd>
                    </div>
                    <div>
                      <dt className="text-gray-600">Date:</dt>
                      <dd className="font-medium">{booking.date}</dd>
                    </div>
                    <div>
                      <dt className="text-gray-600">Time:</dt>
                      <dd className="font-medium">{booking.time}</dd>
                    </div>
                  </dl>
                  <p className="text-xs text-gray-500">{new Date(booking.createdAt).toLocaleString()}</p>
                </Card>
              ))
            )}
          </div>
        )}
      </Container>
    </div>
  )
}
