'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { navigation, siteConfig } from '@/data/navigation';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'bg-stone-50/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.05)]'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link href="/" className="relative z-10 group">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col"
              >
                <span
                  className={cn(
                    'font-[var(--font-playfair)] text-xl lg:text-2xl font-medium tracking-tight transition-colors duration-300',
                    isScrolled ? 'text-charcoal-900' : 'text-white'
                  )}
                >
                  Podlahy
                </span>
                <span
                  className={cn(
                    'text-xs lg:text-sm tracking-[0.2em] uppercase transition-colors duration-300',
                    isScrolled ? 'text-brass-500' : 'text-brass-300'
                  )}
                >
                  & Rekonstrukce
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'relative text-sm tracking-wide transition-colors duration-300 brass-underline',
                      isScrolled
                        ? 'text-charcoal-800 hover:text-brass-500'
                        : 'text-white/90 hover:text-white'
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hidden lg:block"
            >
              <Link
                href="/kontakt"
                className={cn(
                  'inline-flex items-center px-6 py-3 text-sm font-medium tracking-wide rounded-sm transition-all duration-300',
                  isScrolled
                    ? 'bg-brass-500 text-white hover:bg-brass-600'
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                )}
              >
                {siteConfig.phone}
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-10 p-2"
              aria-label={isMobileMenuOpen ? 'Zavřít menu' : 'Otevřít menu'}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={cn(
                    'block h-0.5 w-full transition-all duration-300 origin-center',
                    isMobileMenuOpen
                      ? 'rotate-45 translate-y-2 bg-white'
                      : isScrolled
                      ? 'bg-charcoal-900'
                      : 'bg-white'
                  )}
                />
                <span
                  className={cn(
                    'block h-0.5 w-full transition-all duration-300',
                    isMobileMenuOpen
                      ? 'opacity-0'
                      : isScrolled
                      ? 'bg-charcoal-900'
                      : 'bg-white'
                  )}
                />
                <span
                  className={cn(
                    'block h-0.5 w-full transition-all duration-300 origin-center',
                    isMobileMenuOpen
                      ? '-rotate-45 -translate-y-2 bg-white'
                      : isScrolled
                      ? 'bg-charcoal-900'
                      : 'bg-white'
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-charcoal-950"
          >
            <div className="flex flex-col items-center justify-center min-h-screen px-6">
              <nav className="flex flex-col items-center gap-8">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-3xl font-[var(--font-playfair)] text-white hover:text-brass-400 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="mt-12 text-center"
              >
                <p className="text-stone-400 text-sm mb-2">Zavolejte nám</p>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="text-xl text-brass-400 font-medium"
                >
                  {siteConfig.phone}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
