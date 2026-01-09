'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  label?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  label,
  align = 'center',
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={cn(
        'mb-12 lg:mb-16',
        align === 'center' && 'text-center',
        className
      )}
    >
      {label && (
        <span
          className={cn(
            'inline-block text-sm tracking-[0.2em] uppercase mb-4',
            light ? 'text-brass-300' : 'text-brass-500'
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          'font-[var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-medium',
          light ? 'text-white' : 'text-charcoal-900'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-lg max-w-2xl',
            align === 'center' && 'mx-auto',
            light ? 'text-stone-300' : 'text-stone-600'
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
