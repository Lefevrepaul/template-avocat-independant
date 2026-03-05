import Link from 'next/link';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  target?: string;
  rel?: string;
}

export default function CTAButton({ 
  href, 
  children, 
  variant = 'primary',
  className = '',
  target,
  rel
}: CTAButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = variant === 'primary'
    ? 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 shadow-lg hover:shadow-xl'
    : 'bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50 focus:ring-primary-500';

  const isExternal = href.startsWith('http://') || href.startsWith('https://');

  if (isExternal) {
    return (
      <a 
        href={href}
        target={target || '_blank'}
        rel={rel || 'noopener noreferrer'}
        className={`${baseClasses} ${variantClasses} ${className}`}
        aria-label={typeof children === 'string' ? children : 'Appel à l\'action'}
      >
        {children}
      </a>
    );
  }

  return (
    <Link 
      href={href}
      className={`${baseClasses} ${variantClasses} ${className}`}
      aria-label={typeof children === 'string' ? children : 'Appel à l\'action'}
    >
      {children}
    </Link>
  );
}
