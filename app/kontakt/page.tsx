'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/data/navigation';

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-charcoal-950">
        <Container>
          <div className="text-center">
            <span className="inline-block text-brass-400 text-sm tracking-[0.2em] uppercase mb-4">
              Spojte se s námi
            </span>
            <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Kontakt
            </h1>
            <p className="text-stone-400 text-lg max-w-2xl mx-auto">
              Máte dotaz nebo zájem o naše služby? Neváhejte nás kontaktovat.
              Rádi vám poradíme a připravíme nezávaznou nabídku.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Info */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-[var(--font-playfair)] text-3xl text-charcoal-900 mb-8">
                Kontaktní informace
              </h2>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brass-500/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-brass-500"
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
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal-900 mb-1">Telefon</h3>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                      className="text-lg text-brass-500 hover:text-brass-600 transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                    <p className="text-stone-500 text-sm mt-1">
                      Volejte v pracovní době
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brass-500/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-brass-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal-900 mb-1">E-mail</h3>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-lg text-brass-500 hover:text-brass-600 transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                    <p className="text-stone-500 text-sm mt-1">
                      Odpovíme do 24 hodin
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brass-500/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-brass-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal-900 mb-1">Adresa</h3>
                    <p className="text-stone-600">
                      {siteConfig.address.street}
                      <br />
                      {siteConfig.address.postalCode} {siteConfig.address.city}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brass-500/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-brass-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal-900 mb-1">
                      Otevírací doba
                    </h3>
                    <div className="text-stone-600 text-sm space-y-1">
                      <p>{siteConfig.hours.weekdays}</p>
                      <p>{siteConfig.hours.saturday}</p>
                      <p>{siteConfig.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Area */}
              <div className="mt-12 p-6 bg-stone-100 rounded-sm">
                <h3 className="font-medium text-charcoal-900 mb-2">
                  Oblast působnosti
                </h3>
                <p className="text-stone-600 text-sm">
                  Působíme v Praze a Středočeském kraji. Pro větší projekty jsme
                  ochotni dojet i dále.
                </p>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="sticky top-32">
                <div
                  className="aspect-square lg:aspect-[4/5] rounded-sm overflow-hidden bg-stone-200"
                  style={{
                    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 750"><rect fill="%23e8e4dd" width="600" height="750"/><g fill="%23d4cec3" opacity="0.5"><rect x="50" y="100" width="200" height="150" rx="2"/><rect x="300" y="80" width="250" height="200" rx="2"/><rect x="100" y="300" width="180" height="120" rx="2"/><rect x="320" y="320" width="220" height="180" rx="2"/><rect x="50" y="470" width="250" height="140" rx="2"/><rect x="350" y="540" width="200" height="160" rx="2"/></g><g fill="%23b8af9f" opacity="0.3"><path d="M0 200 L200 200 L200 180 L250 220 L200 260 L200 240 L0 240 Z"/><path d="M300 350 L600 350 L600 330 L550 370 L600 410 L600 390 L300 390 Z"/><path d="M150 0 L150 300 L130 300 L170 350 L210 300 L190 300 L190 0 Z"/><path d="M450 400 L450 750 L430 750 L470 700 L510 750 L490 750 L490 400 Z"/></g><circle cx="300" cy="375" r="20" fill="%23b8862f"/><circle cx="300" cy="375" r="8" fill="%23faf9f7"/></svg>')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center p-8 bg-white/90 backdrop-blur-sm rounded-sm shadow-lg">
                      <div className="w-12 h-12 rounded-full bg-brass-500 flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <p className="font-[var(--font-playfair)] text-charcoal-900">
                        {siteConfig.address.street}
                      </p>
                      <p className="text-stone-500 text-sm">
                        {siteConfig.address.city}
                      </p>
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(
                          `${siteConfig.address.street}, ${siteConfig.address.postalCode} ${siteConfig.address.city}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 text-brass-500 hover:text-brass-600 text-sm transition-colors"
                      >
                        Otevřít v Google Maps
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
