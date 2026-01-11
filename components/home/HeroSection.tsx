'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-charcoal-950"
    >
      {/* Video Background */}
      <motion.div
        style={{ scale: videoScale, opacity: videoOpacity }}
        className="absolute inset-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/projects/podlaha-svetly-dub.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          {/*
            PIXABAY VIDEO OPTIONS (free, no attribution required):
            1. Modern interior: https://pixabay.com/videos/search/apartment%20interior/
            2. Wood flooring: https://pixabay.com/videos/search/wooden%20floor/
            3. Renovation: https://pixabay.com/videos/search/renovation/

            Download your chosen video and place it in /public/videos/hero.mp4
          */}
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-charcoal-950/50" />

        {/* Vignette Effect */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(15,14,13,0.4) 100%)',
          }}
        />

        {/* Film Grain */}
        <div
          className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-brass-500/30 to-transparent ml-[8%] hidden lg:block" />
      <div className="absolute bottom-32 right-[15%] w-32 h-32 border border-brass-500/20 rounded-full hidden lg:block" />
      <div className="absolute top-40 right-[10%] w-2 h-2 bg-brass-400 rounded-full hidden lg:block" />

      {/* Main Content */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 lg:pt-0"
      >
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 xl:col-span-6">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-px bg-brass-500" />
              <span className="text-brass-400 text-sm tracking-[0.25em] uppercase font-medium">
                Od roku 2009
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mb-8"
            >
              <span className="block font-[var(--font-playfair)] text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-medium text-white leading-[0.95] tracking-tight">
                Podlahy
              </span>
              <span className="block font-[var(--font-playfair)] text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-medium text-white leading-[0.95] tracking-tight mt-2">
                <span className="text-brass-400 font-sans italic">&</span>
                <span className="ml-4">Rekonstrukce</span>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-stone-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
            >
              Profesionální pokládka podlah a kompletní rekonstrukce bytů
              v Praze a okolí. Preciznost a kvalita v každém detailu.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap gap-4 mb-16 lg:mb-0"
            >
              <Button href="/portfolio" variant="primary" size="large">
                <span className="flex items-center gap-2">
                  Prohlédnout portfolio
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Button>
              <Button
                href="/kontakt"
                variant="outline"
                size="large"
                className="border-white/20 text-white hover:bg-white/10 hover:border-white/40"
              >
                Nezávazná konzultace
              </Button>
            </motion.div>
          </div>

          {/* Right Side - Stats */}
          <div className="lg:col-span-5 xl:col-span-6 lg:pl-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="grid grid-cols-3 lg:grid-cols-1 gap-6 lg:gap-0 lg:space-y-8"
            >
              {[
                { value: '15+', label: 'Let zkušeností', sublabel: 'na trhu' },
                { value: '500+', label: 'Dokončených', sublabel: 'projektů' },
                { value: '100%', label: 'Spokojených', sublabel: 'zákazníků' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.15 }}
                  className="lg:flex lg:items-baseline lg:gap-6 text-center lg:text-left group"
                >
                  <div className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-white mb-1 lg:mb-0 lg:min-w-[140px] transition-colors group-hover:text-brass-400">
                    {stat.value}
                  </div>
                  <div className="lg:border-l lg:border-stone-700 lg:pl-6">
                    <div className="text-stone-300 text-sm tracking-wide">
                      {stat.label}
                    </div>
                    <div className="text-stone-500 text-sm hidden lg:block">
                      {stat.sublabel}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-0 left-0 right-0 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Scroll Indicator */}
          <Link
            href="#sluzby"
            className="flex items-center gap-3 text-stone-400 hover:text-white transition-colors group"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-6 h-10 border border-stone-600 rounded-full flex items-start justify-center p-2 group-hover:border-brass-500 transition-colors"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1 h-2 bg-stone-400 rounded-full group-hover:bg-brass-400 transition-colors"
              />
            </motion.div>
            <span className="text-xs tracking-[0.2em] uppercase">
              Zjistit více
            </span>
          </Link>

          {/* Quick Contact */}
          <div className="flex items-center gap-6 text-sm text-stone-400">
            <a href="tel:+420123456789" className="hover:text-brass-400 transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +420 123 456 789
            </a>
            <span className="hidden sm:inline text-stone-600">|</span>
            <span className="hidden sm:inline">Praha a okolí</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
