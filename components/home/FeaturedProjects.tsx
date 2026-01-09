'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { projects } from '@/data/projects';

export function FeaturedProjects() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="py-24 lg:py-32 bg-stone-100">
      <Container>
        <SectionHeading
          label="Portfolio"
          title="Vybrané realizace"
          subtitle="Prohlédněte si ukázky naší práce. Každý projekt je pro nás výzvou k dokonalosti."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={index === 0 ? 'md:col-span-2' : ''}
            >
              <Link
                href="/portfolio"
                className="group block relative overflow-hidden rounded-sm aspect-[16/10] bg-stone-300"
              >
                {/* Placeholder gradient for demo */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-stone-400 to-stone-600 transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><rect fill="%23${project.category === 'podlahy' ? '8b7355' : '5c544a'}" width="800" height="500"/><g opacity="0.4"><rect x="0" y="0" width="100" height="500" fill="%23${project.category === 'podlahy' ? '7a6349' : '4a4540'}"/><rect x="100" y="0" width="100" height="500" fill="%23${project.category === 'podlahy' ? '9c8461' : '6a6257'}"/><rect x="200" y="0" width="100" height="500" fill="%23${project.category === 'podlahy' ? '8b7355' : '5c544a'}"/><rect x="300" y="0" width="100" height="500" fill="%23${project.category === 'podlahy' ? '7a6349' : '4a4540'}"/><rect x="400" y="0" width="100" height="500" fill="%23${project.category === 'podlahy' ? '9c8461' : '6a6257'}"/><rect x="500" y="0" width="100" height="500" fill="%23${project.category === 'podlahy' ? '8b7355' : '5c544a'}"/><rect x="600" y="0" width="100" height="500" fill="%23${project.category === 'podlahy' ? '7a6349' : '4a4540'}"/><rect x="700" y="0" width="100" height="500" fill="%23${project.category === 'podlahy' ? '9c8461' : '6a6257'}"/></g></svg>')`,
                    backgroundSize: 'cover',
                  }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent" />

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-brass-500 text-white text-xs tracking-wider uppercase rounded-sm">
                    {project.category === 'podlahy'
                      ? 'Podlahy'
                      : 'Rekonstrukce'}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <h3 className="font-[var(--font-playfair)] text-xl lg:text-2xl text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-stone-300 text-sm flex items-center gap-2">
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {project.location}
                  </p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-6 py-3 bg-white text-charcoal-900 text-sm font-medium rounded-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Zobrazit projekt
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button href="/portfolio" variant="outline">
            Zobrazit všechny projekty
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
