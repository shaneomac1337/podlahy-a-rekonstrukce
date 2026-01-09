'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { services } from '@/data/services';

const icons = {
  floor: (
    <svg
      className="w-10 h-10"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
      />
    </svg>
  ),
  renovation: (
    <svg
      className="w-10 h-10"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
      />
    </svg>
  ),
  apartment: (
    <svg
      className="w-10 h-10"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    </svg>
  ),
};

export function ServicesPreview() {
  return (
    <section id="sluzby" className="py-24 lg:py-32 bg-stone-50">
      <Container>
        <SectionHeading
          label="Naše služby"
          title="Co pro vás můžeme udělat"
          subtitle="Nabízíme komplexní služby v oblasti podlah a rekonstrukcí. Každý projekt realizujeme s maximální péčí a důrazem na kvalitu."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/sluzby#${service.id}`}
                className="group block bg-white p-8 lg:p-10 rounded-sm shadow-[var(--shadow-soft)] card-hover h-full"
              >
                <div className="text-brass-500 mb-6 transition-transform duration-300 group-hover:scale-110">
                  {icons[service.icon]}
                </div>

                <h3 className="font-[var(--font-playfair)] text-2xl text-charcoal-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-stone-500 text-sm mb-6">{service.subtitle}</p>

                <ul className="space-y-2 mb-8">
                  {service.features.slice(0, 4).map((feature) => (
                    <li
                      key={feature}
                      className="text-stone-600 text-sm flex items-start gap-2"
                    >
                      <svg
                        className="w-4 h-4 text-brass-500 flex-shrink-0 mt-0.5"
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
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center text-brass-500 text-sm font-medium group-hover:text-brass-600 transition-colors">
                  <span>Zjistit více</span>
                  <svg
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
