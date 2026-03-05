interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'info';
  className?: string;
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const baseClasses = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium';
  
  const variantClasses = {
    default: 'bg-primary-100 text-primary-700',
    success: 'bg-green-100 text-green-700',
    info: 'bg-blue-100 text-blue-700',
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}
