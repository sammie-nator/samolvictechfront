// components/common/Button.jsx
export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  onClick,
  disabled,
  href,
  className = '',
  ...props 
}) {
  const baseStyles = 'font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center whitespace-nowrap'
  
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-300 disabled:bg-primary-300',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-300',
    ghost: 'text-primary-600 hover:bg-primary-50 focus:ring-primary-300',
    accent: 'bg-accent-orange text-white hover:bg-orange-600 focus:ring-orange-300'
  }
  
  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg'
  }
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`
  
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }
  
  return (
    <button 
      className={`${classes} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

// components/common/Card.jsx
export function Card({ children, className = '', hover = true, ...props }) {
  return (
    <div 
      className={`bg-white rounded-lg border border-gray-200 p-6 ${
        hover ? 'hover:shadow-lg transition-shadow duration-300' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

// components/common/Badge.jsx
export function Badge({ children, variant = 'primary', className = '' }) {
  const variants = {
    primary: 'bg-primary-100 text-primary-700',
    orange: 'bg-accent-light text-accent-orange',
    gray: 'bg-gray-100 text-gray-700',
    success: 'bg-green-100 text-green-700'
  }
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}

// components/common/SectionHeader.jsx
export function SectionHeader({ 
  title, 
  subtitle, 
  badge,
  centered = true,
  className = ''
}) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {badge && <Badge className="mb-4">{badge}</Badge>}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}

// components/common/Container.jsx
export function Container({ children, className = '' }) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}

// components/common/Grid.jsx
export function Grid({ children, cols = 3, gap = 6, className = '' }) {
  const gridColsMap = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }
  
  const gapMap = {
    4: 'gap-4',
    6: 'gap-6',
    8: 'gap-8'
  }
  
  return (
    <div className={`grid ${gridColsMap[cols]} ${gapMap[gap]} ${className}`}>
      {children}
    </div>
  )
}

// components/common/Divider.jsx
export function Divider({ className = '' }) {
  return <div className={`h-px bg-gray-200 ${className}`} />
}
