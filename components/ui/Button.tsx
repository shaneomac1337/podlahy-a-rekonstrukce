import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'default' | 'large';
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'default',
  className,
  onClick,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 rounded-sm';

  const variants = {
    primary:
      'bg-brass-500 text-white hover:bg-brass-600 shadow-md hover:shadow-lg',
    secondary:
      'bg-charcoal-900 text-white hover:bg-charcoal-800 shadow-md hover:shadow-lg',
    outline:
      'bg-transparent border-2 border-brass-500 text-brass-500 hover:bg-brass-500 hover:text-white',
  };

  const sizes = {
    default: 'px-6 py-3 text-sm',
    large: 'px-8 py-4 text-base',
  };

  const styles = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
