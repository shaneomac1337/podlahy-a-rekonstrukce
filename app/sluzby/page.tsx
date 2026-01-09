'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { services } from '@/data/services';

const icons = {
  floor: (
    <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
      />
    </svg>
  ),
  renovation: (
    <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
      />
    </svg>
  ),
  apartment: (
    <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    </svg>
  ),
};

export default function SluzbyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-charcoal-950">
        <Container>
          <div className="text-center">
            <span className="inline-block text-brass-400 text-sm tracking-[0.2em] uppercase mb-4">
              Co nabízíme
            </span>
            <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Naše služby
            </h1>
            <p className="text-stone-400 text-lg max-w-2xl mx-auto">
              Nabízíme kompletní služby v oblasti podlah a rekonstrukcí. Od
              konzultace přes realizaci až po finální předání.
            </p>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <Container>
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 lg:gap-16 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div
                    className="aspect-[4/3] rounded-sm overflow-hidden"
                    style={{
                      backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><rect fill="%23${index === 0 ? '8b7355' : index === 1 ? '9c8461' : '5c544a'}" width="800" height="600"/><g opacity="0.4"><rect x="0" y="0" width="100" height="600" fill="%23${index === 0 ? '7a6349' : index === 1 ? '8b7355' : '4a4540'}"/><rect x="100" y="0" width="100" height="600" fill="%23${index === 0 ? '9c8461' : index === 1 ? 'a8956d' : '6a6257'}"/><rect x="200" y="0" width="100" height="600" fill="%23${index === 0 ? '8b7355' : index === 1 ? '9c8461' : '5c544a'}"/><rect x="300" y="0" width="100" height="600" fill="%23${index === 0 ? '7a6349' : index === 1 ? '8b7355' : '4a4540'}"/><rect x="400" y="0" width="100" height="600" fill="%23${index === 0 ? '9c8461' : index === 1 ? 'a8956d' : '6a6257'}"/><rect x="500" y="0" width="100" height="600" fill="%23${index === 0 ? '8b7355' : index === 1 ? '9c8461' : '5c544a'}"/><rect x="600" y="0" width="100" height="600" fill="%23${index === 0 ? '7a6349' : index === 1 ? '8b7355' : '4a4540'}"/><rect x="700" y="0" width="100" height="600" fill="%23${index === 0 ? '9c8461' : index === 1 ? 'a8956d' : '6a6257'}"/></g></svg>')`,
                      backgroundSize: 'cover',
                    }}
                  />
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <div className="text-brass-500 mb-6">{icons[service.icon]}</div>

                  <h2 className="font-[var(--font-playfair)] text-3xl lg:text-4xl text-charcoal-900 mb-3">
                    {service.title}
                  </h2>

                  <p className="text-brass-500 text-lg mb-6">{service.subtitle}</p>

                  <p className="text-stone-600 leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 text-stone-700"
                      >
                        <svg
                          className="w-5 h-5 text-brass-500 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-stone-100">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-[var(--font-playfair)] text-3xl lg:text-4xl text-charcoal-900 mb-6">
              Potřebujete poradit?
            </h2>
            <p className="text-stone-600 mb-8">
              Kontaktujte nás pro nezávaznou konzultaci. Rádi vám poradíme s
              výběrem materiálů i realizací vašeho projektu.
            </p>
            <a
              href="/kontakt"
              className="inline-flex items-center px-8 py-4 bg-brass-500 text-white font-medium tracking-wide rounded-sm hover:bg-brass-600 transition-colors"
            >
              Kontaktujte nás
            </a>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
