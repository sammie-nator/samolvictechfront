// utils/api.js
import axios from 'axios'

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Add token to requests if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Handle responses
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export { api }

// utils/constants.js
export const SERVICES = [
  {
    id: 'custom-pwa',
    name: 'Custom PWA Development',
    description: 'Build your own app',
    price: 'Starting KES 150,000'
  },
  {
    id: 'support',
    name: 'Ongoing Support',
    description: 'Monthly maintenance package',
    price: 'Starting KES 25,000/month'
  },
  {
    id: 'consulting',
    name: 'Technical Consulting',
    description: 'Strategy and guidance',
    price: 'KES 50,000/day'
  }
]

export const TIMELINES = [
  { value: 'asap', label: 'ASAP (1-2 months)' },
  { value: 'flexible', label: 'Flexible (2-3 months)' },
  { value: 'longterm', label: 'Long-term (3+ months)' }
]

export const PAYMENT_METHODS = [
  { value: 'mpesa', label: 'M-Pesa (Daraja)' },
  { value: 'paystack', label: 'Paystack' },
  { value: 'later', label: 'Invoice (Pay Later)' }
]

// utils/validation.js
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

export const validatePhone = (phone) => {
  const re = /^(\+254|0)[0-9]{9}$/
  return re.test(phone)
}

export const validateForm = (data, requiredFields) => {
  const errors = {}
  requiredFields.forEach(field => {
    if (!data[field]) {
      errors[field] = `${field} is required`
    }
  })
  
  if (data.email && !validateEmail(data.email)) {
    errors.email = 'Invalid email'
  }
  
  if (data.phone && !validatePhone(data.phone)) {
    errors.phone = 'Invalid phone number'
  }
  
  return errors
}

// utils/storage.js
export const storage = {
  set: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
  },
  get: (key) => {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : null
  },
  remove: (key) => {
    localStorage.removeItem(key)
  },
  clear: () => {
    localStorage.clear()
  }
}

// utils/formatting.js
export const formatCurrency = (amount, currency = 'KES') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0
  }).format(amount)
}

export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date))
}

export const formatTime = (time) => {
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  }).format(new Date(`2024-01-01T${time}`))
}
