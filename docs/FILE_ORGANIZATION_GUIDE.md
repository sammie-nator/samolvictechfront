# SAMOLVIC Website - File Organization & Setup Guide

## 📦 All Files Provided

Below is a list of all files I've created and where to place them:

---

## FRONTEND FILES

### 1. Configuration Files

**File:** `frontend_package.json`
```
Destination: frontend/package.json
Action: Copy entire content to frontend/package.json
Run: npm install
```

**File:** `tailwind.config.js`
```
Destination: frontend/tailwind.config.js
Action: Copy entire file
Note: Already configured with SAMOLVIC colors & typography
```

### 2. UI Components (Common)

**File:** `Button_Card_Badge.jsx`
```
Extract these functions and create separate files:

1. export function Button { ... }
   Destination: frontend/src/components/common/Button.jsx

2. export function Card { ... }
   Destination: frontend/src/components/common/Card.jsx

3. export function Badge { ... }
   Destination: frontend/src/components/common/Badge.jsx

4. export function SectionHeader { ... }
   Destination: frontend/src/components/common/SectionHeader.jsx

5. export function Container { ... }
   Destination: frontend/src/components/common/Container.jsx

6. export function Grid { ... }
   Destination: frontend/src/components/common/Grid.jsx

7. export function Divider { ... }
   Destination: frontend/src/components/common/Divider.jsx
```

### 3. Layout Components

**File:** `Header_Footer.jsx`
```
Extract:

1. export function Header { ... }
   Destination: frontend/src/components/layout/Header.jsx

2. export function Footer { ... }
   Destination: frontend/src/components/layout/Footer.jsx
```

### 4. Homepage Sections

**File:** `HomePage_Sections.jsx`
```
Extract each section:

1. export function HeroSection { ... }
   Destination: frontend/src/components/sections/HeroSection.jsx

2. export function ValuePropsSection { ... }
   Destination: frontend/src/components/sections/ValuePropsSection.jsx

3. export function PortfolioPreviewSection { ... }
   Destination: frontend/src/components/sections/PortfolioPreviewSection.jsx

4. export function ProcessSection { ... }
   Destination: frontend/src/components/sections/ProcessSection.jsx

5. export function CTASection { ... }
   Destination: frontend/src/components/sections/CTASection.jsx
```

### 5. Pages

**File:** `HomePage.jsx`
```
Destination: frontend/src/pages/HomePage.jsx
Action: Copy entire file
```

**File:** `About_Services_Pages.jsx`
```
Extract:

1. export function AboutPage { ... }
   Destination: frontend/src/pages/AboutPage.jsx

2. export function ServicesPage { ... }
   Destination: frontend/src/pages/ServicesPage.jsx
```

**File:** `Contact_Booking_Pages.jsx`
```
Extract:

1. export function ContactPage { ... }
   Destination: frontend/src/pages/ContactPage.jsx

2. export function BookingPage { ... }
   Destination: frontend/src/pages/BookingPage.jsx
```

**File:** `Portfolio_Pages.jsx`
```
Extract:

1. export function PortfolioPage { ... }
   Destination: frontend/src/pages/PortfolioPage.jsx

2. export function PortfolioDetailPage { ... }
   Destination: frontend/src/pages/PortfolioDetailPage.jsx
```

**File:** `PaymentAdmin_Pages.jsx`
```
Extract:

1. export function PaymentPage { ... }
   Destination: frontend/src/pages/PaymentPage.jsx

2. export function AdminDashboard { ... }
   Destination: frontend/src/pages/AdminDashboard.jsx
```

### 6. Utilities & App

**File:** `api_utils.js`
```
Extract:

1. export { api }
   Destination: frontend/src/utils/api.js

2. export const SERVICES = [ ... ]
   Destination: frontend/src/utils/constants.js

3. export const validateEmail = ...
   Destination: frontend/src/utils/validation.js

4. export const storage = { ... }
   Destination: frontend/src/utils/storage.js

5. export const formatCurrency = ...
   Destination: frontend/src/utils/formatting.js
```

**File:** `App.jsx`
```
Destination: frontend/src/App.jsx
Action: Copy entire file
Note: Replace import paths to match your file structure
```

---

## BACKEND FILES

### 1. Configuration Files

**File:** `backend_package.json`
```
Destination: backend/package.json
Action: Copy entire content
Run: npm install
```

### 2. Server & Models

**File:** `backend_server.js`
```
Destination: backend/server.js
Action: Copy entire file
Note: Update import paths if needed
```

**File:** `backend_models.js`
```
Destination: backend/models.js
Action: Copy entire file
Note: Contains all MongoDB schemas
```

### 3. Routes

**File:** `backend_routes.js`
```
Extract:

1. Inquiries routes
   Destination: backend/routes/inquiries.js

2. Bookings routes
   Destination: backend/routes/bookings.js
```

**File:** `backend_payments.js`
```
Destination: backend/routes/payments.js
Action: Copy entire file
Note: Contains M-Pesa and Paystack integration
```

**File:** `backend_admin_auth.js`
```
Extract:

1. export default router (admin routes)
   Destination: backend/routes/admin.js

2. export const sendEmail { ... }
   Destination: backend/utils/email.js

3. export const generateToken { ... }
   Destination: backend/utils/auth.js
```

---

## CONFIGURATION & DOCUMENTATION

**File:** `ENV_DEPLOYMENT.md`
```
Destination: docs/ENV_DEPLOYMENT.md OR root/.env.guide
Action: Reference for environment setup
Purpose: Shows what .env variables needed and where to get them
```

**File:** `README.md`
```
Destination: README.md (in root or docs/)
Action: Main documentation
Purpose: Complete setup and deployment guide
```

**File:** `FILE_ORGANIZATION_GUIDE.md`
```
Destination: docs/FILE_ORGANIZATION_GUIDE.md
Action: This file (reference for file placement)
```

---

## 📂 Complete Frontend Structure After Setup

```
frontend/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Badge.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Container.jsx
│   │   │   ├── Divider.jsx
│   │   │   ├── Grid.jsx
│   │   │   └── SectionHeader.jsx
│   │   ├── layout/
│   │   │   ├── Footer.jsx
│   │   │   └── Header.jsx
│   │   └── sections/
│   │       ├── CTASection.jsx
│   │       ├── HeroSection.jsx
│   │       ├── PortfolioPreviewSection.jsx
│   │       ├── ProcessSection.jsx
│   │       └── ValuePropsSection.jsx
│   ├── pages/
│   │   ├── AboutPage.jsx
│   │   ├── AdminDashboard.jsx
│   │   ├── BookingPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── PaymentPage.jsx
│   │   ├── PortfolioDetailPage.jsx
│   │   └── PortfolioPage.jsx
│   ├── utils/
│   │   ├── api.js
│   │   ├── constants.js
│   │   ├── formatting.js
│   │   ├── storage.js
│   │   └── validation.js
│   ├── App.jsx
│   ├── App.css
│   └── index.css
├── public/
│   ├── index.html
│   └── favicon.ico
├── package.json
├── tailwind.config.js
├── postcss.config.js
├──  (removed - using Create React App)
└── .env
```

---

## 📂 Complete Backend Structure After Setup

```
backend/
├── routes/
│   ├── admin.js
│   ├── bookings.js
│   ├── inquiries.js
│   └── payments.js
├── utils/
│   ├── auth.js
│   └── email.js
├── models.js
├── server.js
├── package.json
├── .env
└── .env.example
```

---

## 🔧 Step-by-Step Setup Instructions

### Phase 1: Project Initialization (15 minutes)

```bash
# Create project directory
mkdir samolvic-technologies
cd samolvic-technologies

# Create frontend
npx create-react-app frontend -- --template react
cd frontend
npm install
# Copy frontend_package.json contents to package.json
npm install
# Copy tailwind.config.js
npm install -D tailwindcss postcss autoprefixer
cd ..

# Create backend
mkdir backend
cd backend
npm init -y
# Copy backend_package.json contents to package.json
npm install
cd ..
```

### Phase 2: Component Organization (30 minutes)

```bash
# Frontend directory structure
mkdir -p frontend/src/components/{common,layout,sections}
mkdir -p frontend/src/pages
mkdir -p frontend/src/utils

# Copy files to respective locations:
# 1. Copy Button_Card_Badge.jsx → Extract to common/
# 2. Copy Header_Footer.jsx → Extract to layout/
# 3. Copy HomePage_Sections.jsx → Extract to sections/
# 4. Copy page files to pages/
# 5. Copy api_utils.js → Extract to utils/
# 6. Copy App.jsx to src/
```

### Phase 3: Backend Setup (20 minutes)

```bash
# Backend directory structure
mkdir -p backend/routes
mkdir -p backend/utils

# Copy files:
# 1. Copy backend_server.js → server.js
# 2. Copy backend_models.js → models.js
# 3. Copy backend_routes.js → Extract to routes/
# 4. Copy backend_payments.js → routes/payments.js
# 5. Copy backend_admin_auth.js → Extract to routes/admin.js & utils/
```

### Phase 4: Environment Setup (10 minutes)

```bash
# Frontend
cd frontend
echo "REACT_APP_API_URL=http://localhost:5000/api" > .env

# Backend
cd ../backend
echo "
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/samolvic
JWT_SECRET=your-secret-key-change-this
FRONTEND_URL=http://localhost:3000
API_URL=http://localhost:5000
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
MPESA_CONSUMER_KEY=sandbox-key
MPESA_CONSUMER_SECRET=sandbox-secret
PAYSTACK_SECRET_KEY=sk_test_key
" > .env
```

### Phase 5: Testing (15 minutes)

```bash
# Terminal 1: Backend
cd backend
npm start
# Should see: "SAMOLVIC Backend running on port 5000"

# Terminal 2: Frontend
cd frontend
npm start
# Should see: "VITE v... ready in ... ms"

# Terminal 3: Browser
# Visit http://localhost:3000
# Test: Homepage loads, navigation works, forms appear
```

---

## ✅ Verification Checklist

Before deploying, verify:

- [ ] All component files created in correct locations
- [ ] All imports updated with correct paths
- [ ] package.json files configured
- [ ] .env files created with test values
- [ ] npm install completed without errors
- [ ] Backend server starts without errors
- [ ] Frontend dev server starts without errors
- [ ] Homepage renders
- [ ] Navigation links work
- [ ] Contact form submits (check terminal for logs)
- [ ] Booking form works (step through all pages)
- [ ] Admin login page appears
- [ ] Browser console has no critical errors

---

## 📝 Common Tasks

### Add a New Page

```javascript
// 1. Create file: frontend/src/pages/NewPage.jsx
export function NewPage() {
  return (
    <div>
      <Helmet>
        <title>Page Title | SAMOLVIC</title>
      </Helmet>
      {/* Content */}
    </div>
  )
}

// 2. Add route in App.jsx:
<Route path="/new-page" element={<NewPage />} />

// 3. Add link in Header:
{ label: 'New Page', href: '/new-page' }
```

### Add a New API Endpoint

```javascript
// 1. Create file: backend/routes/newroute.js
import express from 'express'
const router = express.Router()

router.post('/', async (req, res) => {
  // implementation
})

export default router

// 2. Import in server.js:
import newRouteRoutes from './routes/newroute.js'
app.use('/api/newroute', newRouteRoutes)
```

### Change Colors

```javascript
// Update tailwind.config.js:
colors: {
  primary: {
    600: '#your-new-color'  // Change from #0d47a1
  }
}
// Restart dev server
```

---

## 🎯 Success Criteria

Your setup is complete when:

1. ✅ Homepage loads with all sections
2. ✅ Navigation between pages works
3. ✅ Contact form submits and sends email confirmation
4. ✅ Booking form works (all 4 steps)
5. ✅ Admin login works (test with admin@samolvic.com)
6. ✅ Portfolio pages show case studies
7. ✅ External links open (pmsnyumbani, smartbar)
8. ✅ No console errors
9. ✅ Mobile responsive (test on phone size)
10. ✅ Performance is good (< 3s load time)

---

## 🚀 You're Ready!

Once you've completed all steps, you have a fully-functional website ready to:
- Deploy to Vercel (frontend)
- Deploy to Heroku/Railway/Render (backend)
- Collect inquiries and bookings
- Process payments with M-Pesa and Paystack
- Manage everything from admin dashboard

**Next: Follow ENV_DEPLOYMENT.md for deployment steps**

---

**Need help?** Refer to README.md for troubleshooting
