'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/navigation';

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-stone-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brass-500/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brass-500/5 rounded-full translate-x-1/2 translate-y-1/2" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block text-brass-500 text-sm tracking-[0.2em] uppercase mb-4">
            Začněme spolupracovat
          </span>

          <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-charcoal-900 mb-6">
            Máte projekt na mysli?
          </h2>

          <p className="text-stone-600 text-lg mb-10 max-w-2xl mx-auto">
            Rádi vám pomůžeme s realizací vašich představ. Kontaktujte nás pro
            nezávaznou konzultaci a cenovou nabídku.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/kontakt" variant="primary" size="large">
              Kontaktujte nás
            </Button>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-charcoal-900 hover:text-brass-500 transition-colors"
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              {siteConfig.phone}
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
