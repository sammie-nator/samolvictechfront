/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3f6fb',
          100: '#e7edf8',
          200: '#cfdaf0',
          300: '#b8c8e9',
          400: '#a0b5e1',
          500: '#0d47a1',
          600: '#0a3d8c',
          700: '#082d6b',
          800: '#051a42',
          900: '#020d21'
        },
        accent: {
          orange: '#FF6B35',
          gold: '#D4AF37',
          light: '#FFE5D9'
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
