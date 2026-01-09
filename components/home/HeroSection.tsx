'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><rect fill="%233d3832" width="1920" height="1080"/><g opacity="0.3"><rect x="0" y="0" width="120" height="1080" fill="%232a2825"/><rect x="120" y="0" width="120" height="1080" fill="%234a4540"/><rect x="240" y="0" width="120" height="1080" fill="%233d3832"/><rect x="360" y="0" width="120" height="1080" fill="%232a2825"/><rect x="480" y="0" width="120" height="1080" fill="%234a4540"/><rect x="600" y="0" width="120" height="1080" fill="%233d3832"/><rect x="720" y="0" width="120" height="1080" fill="%232a2825"/><rect x="840" y="0" width="120" height="1080" fill="%234a4540"/><rect x="960" y="0" width="120" height="1080" fill="%233d3832"/><rect x="1080" y="0" width="120" height="1080" fill="%232a2825"/><rect x="1200" y="0" width="120" height="1080" fill="%234a4540"/><rect x="1320" y="0" width="120" height="1080" fill="%233d3832"/><rect x="1440" y="0" width="120" height="1080" fill="%232a2825"/><rect x="1560" y="0" width="120" height="1080" fill="%234a4540"/><rect x="1680" y="0" width="120" height="1080" fill="%233d3832"/><rect x="1800" y="0" width="120" height="1080" fill="%232a2825"/></g></svg>')`,
          }}
        />
        <div className="hero-gradient absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block text-brass-300 text-sm tracking-[0.3em] uppercase mb-6">
            Řemeslná práce pro váš domov
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-[var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-white mb-6"
        >
          Podlahy
          <br />
          <span className="text-brass-400">&</span> Rekonstrukce
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-stone-300 text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Profesionální pokládka podlah a kompletní rekonstrukce bytů v Praze a
          okolí. Preciznost, kvalita a spolehlivost od roku 2009.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button href="/portfolio" variant="primary" size="large">
            Prohlédnout portfolio
          </Button>
          <Button
            href="/kontakt"
            variant="outline"
            size="large"
            className="border-white/30 text-white hover:bg-white/10 hover:text-white"
          >
            Kontaktujte nás
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <div className="font-[var(--font-playfair)] text-4xl md:text-5xl text-white mb-2">
              15+
            </div>
            <div className="text-stone-400 text-sm tracking-wide">
              Let zkušeností
            </div>
          </div>
          <div className="text-center">
            <div className="font-[var(--font-playfair)] text-4xl md:text-5xl text-white mb-2">
              500+
            </div>
            <div className="text-stone-400 text-sm tracking-wide">
              Projektů
            </div>
          </div>
          <div className="text-center">
            <div className="font-[var(--font-playfair)] text-4xl md:text-5xl text-white mb-2">
              100%
            </div>
            <div className="text-stone-400 text-sm tracking-wide">
              Spokojenost
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <Link
          href="#sluzby"
          className="flex flex-col items-center text-white/60 hover:text-white/80 transition-colors"
        >
          <span className="text-xs tracking-[0.2em] uppercase mb-3">
            Více
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
