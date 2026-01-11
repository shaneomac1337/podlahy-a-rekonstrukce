'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';

const stats = [
  { value: '15+', label: 'Let zkušeností' },
  { value: '500+', label: 'Dokončených projektů' },
  { value: '100%', label: 'Spokojenost zákazníků' },
  { value: '0', label: 'Nedokončených zakázek' },
];

const values = [
  {
    title: 'Kvalita',
    description:
      'Používáme pouze ověřené materiály a postupy. Každý projekt realizujeme s maximální pečlivostí.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    title: 'Spolehlivost',
    description:
      'Dodržujeme termíny a sliby. Na naše slovo se můžete spolehnout.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Transparentnost',
    description:
      'Jasná cenová nabídka bez skrytých poplatků. Vždy víte, za co platíte.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
  {
    title: 'Profesionalita',
    description:
      'Tým zkušených řemeslníků s láskou ke své práci a smyslem pro detail.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

export default function ONasPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-charcoal-950">
        <Container>
          <div className="text-center">
            <span className="inline-block text-brass-400 text-sm tracking-[0.2em] uppercase mb-4">
              Kdo jsme
            </span>
            <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              O nás
            </h1>
            <p className="text-stone-400 text-lg max-w-2xl mx-auto">
              Jsme tým zkušených řemeslníků s vášní pro dokonale odvedenou práci.
              Podlahy a rekonstrukce jsou naším posláním.
            </p>
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[4/3] rounded-sm overflow-hidden relative">
                <Image
                  src="/images/projects/rekonstrukce-predsni-pred-po.jpg"
                  alt="Ukázka naší práce - rekonstrukce předsíně"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-brass-500 text-sm tracking-[0.2em] uppercase mb-4">
                Náš příběh
              </span>
              <h2 className="font-[var(--font-playfair)] text-3xl lg:text-4xl text-charcoal-900 mb-6">
                Více než 15 let zkušeností
              </h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  Naše firma vznikla v roce 2009 s jasnou vizí - poskytovat
                  kvalitní řemeslné služby s důrazem na spokojenost zákazníka.
                  Za dobu naší existence jsme realizovali stovky projektů po celé
                  Praze a Středočeském kraji.
                </p>
                <p>
                  Začínali jsme jako malá rodinná firma specializující se na
                  pokládku podlah. Postupem času jsme rozšířili naše služby o
                  renovace parket a kompletní rekonstrukce bytů, abychom mohli
                  zákazníkům nabídnout komplexní řešení pod jednou střechou.
                </p>
                <p>
                  Dnes jsme hrdí na náš tým zkušených profesionálů, kteří sdílejí
                  stejné hodnoty - preciznost, spolehlivost a lásku k řemeslu.
                  Každý projekt bereme jako příležitost ukázat, co umíme.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-24 bg-charcoal-950">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-[var(--font-playfair)] text-4xl lg:text-5xl text-brass-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-stone-400 text-sm tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 lg:mb-16"
          >
            <span className="inline-block text-brass-500 text-sm tracking-[0.2em] uppercase mb-4">
              Naše hodnoty
            </span>
            <h2 className="font-[var(--font-playfair)] text-3xl lg:text-4xl text-charcoal-900">
              Proč si vybrat nás
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-sm shadow-[var(--shadow-soft)]"
              >
                <div className="text-brass-500 mb-4">{value.icon}</div>
                <h3 className="font-[var(--font-playfair)] text-xl text-charcoal-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
