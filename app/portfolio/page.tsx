import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GalleryGrid } from '@/components/gallery/GalleryGrid';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Prohlédněte si naše realizované projekty. Podlahy, renovace parket a kompletní rekonstrukce bytů v Praze.',
};

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-charcoal-950">
        <Container>
          <div className="text-center">
            <span className="inline-block text-brass-400 text-sm tracking-[0.2em] uppercase mb-4">
              Naše práce
            </span>
            <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Portfolio
            </h1>
            <p className="text-stone-400 text-lg max-w-2xl mx-auto">
              Každý projekt je pro nás příležitostí ukázat naši zručnost a cit
              pro detail. Prohlédněte si naše realizace.
            </p>
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <Container>
          <GalleryGrid />
        </Container>
      </section>
    </>
  );
}
