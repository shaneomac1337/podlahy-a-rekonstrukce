import type { Metadata } from 'next';
import { Playfair_Display, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-playfair',
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-source-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Podlahy a Rekonstrukce | Precizní řemeslná práce pro váš domov',
    template: '%s | Podlahy a Rekonstrukce',
  },
  description:
    'Profesionální pokládka podlah, renovace parket a kompletní rekonstrukce bytů v Praze a okolí. 15 let zkušeností, stovky spokojených zákazníků.',
  keywords: [
    'podlahy Praha',
    'rekonstrukce bytu',
    'pokládka podlah',
    'renovace parket',
    'vinylové podlahy',
    'laminátové podlahy',
    'dřevěné podlahy',
  ],
  authors: [{ name: 'Podlahy a Rekonstrukce' }],
  creator: 'Podlahy a Rekonstrukce',
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: 'https://www.podlahy-rekonstrukce.cz',
    siteName: 'Podlahy a Rekonstrukce',
    title: 'Podlahy a Rekonstrukce | Precizní řemeslná práce pro váš domov',
    description:
      'Profesionální pokládka podlah a rekonstrukce bytů v Praze a okolí.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body
        className={`${playfair.variable} ${sourceSans.variable} antialiased bg-stone-50 text-charcoal-900`}
      >
        <div className="wood-grain-overlay" aria-hidden="true" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
