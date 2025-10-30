interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'small' | 'medium' | 'large'
}

export const Button = ({ children, variant = 'primary', size = 'medium', ...props }: ButtonProps) => {
  const baseClasses = 'text-white border-none rounded cursor-pointer font-medium transition-all duration-200 ease-in-out'
  
  const variants: Record<string, string> = {
    primary: 'bg-blue-500 hover:bg-blue-600',
    secondary: 'bg-green-500 hover:bg-green-600', 
    danger: 'bg-red-500 hover:bg-red-600'
  }
  
  const sizes: Record<string, string> = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  }

  const variantClass = variants[variant] || variants.primary
  const sizeClass = sizes[size] || sizes.medium

  return (
    <button 
      className={`${baseClasses} ${variantClass} ${sizeClass}`}
      {...props}
    >
      {children}
    </button>
  )
}