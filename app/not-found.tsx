import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-stone-50 pt-20">
      <Container>
        <div className="text-center">
          <span className="inline-block text-brass-500 text-sm tracking-[0.2em] uppercase mb-4">
            Chyba 404
          </span>
          <h1 className="font-[var(--font-playfair)] text-5xl md:text-6xl text-charcoal-900 mb-6">
            Stránka nenalezena
          </h1>
          <p className="text-stone-600 text-lg max-w-md mx-auto mb-10">
            Omlouváme se, ale stránka, kterou hledáte, neexistuje nebo byla
            přesunuta.
          </p>
          <Button href="/" variant="primary" size="large">
            Zpět na hlavní stránku
          </Button>
        </div>
      </Container>
    </section>
  );
}
