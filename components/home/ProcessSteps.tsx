'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { processSteps } from '@/data/services';

export function ProcessSteps() {
  return (
    <section className="py-24 lg:py-32 bg-charcoal-950 overflow-hidden">
      <Container>
        <SectionHeading
          label="Jak pracujeme"
          title="Náš pracovní postup"
          subtitle="Od první konzultace po finální předání. Transparentní proces bez překvapení."
          light
        />

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-stone-700 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* Number circle */}
                <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 mb-6 bg-charcoal-950 border-2 border-brass-500 rounded-full">
                  <span className="font-[var(--font-playfair)] text-2xl text-brass-500">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-[var(--font-playfair)] text-xl text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-stone-400 text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
