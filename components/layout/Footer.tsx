import Link from 'next/link';
import { navigation, siteConfig } from '@/data/navigation';

export function Footer() {
  return (
    <footer className="bg-charcoal-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-[var(--font-playfair)] text-2xl font-medium tracking-tight text-white">
                Podlahy
              </span>
              <span className="block text-sm tracking-[0.2em] uppercase text-brass-400">
                & Rekonstrukce
              </span>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
              Precizní řemeslná práce pro váš domov. Více než 15 let zkušeností
              v oboru podlah a rekonstrukcí.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-stone-300 mb-6">
              Navigace
            </h3>
            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-stone-400 hover:text-brass-400 transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-stone-300 mb-6">
              Služby
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/sluzby#pokladka-podlah"
                  className="text-stone-400 hover:text-brass-400 transition-colors text-sm"
                >
                  Pokládka podlah
                </Link>
              </li>
              <li>
                <Link
                  href="/sluzby#renovace-parket"
                  className="text-stone-400 hover:text-brass-400 transition-colors text-sm"
                >
                  Renovace parket
                </Link>
              </li>
              <li>
                <Link
                  href="/sluzby#rekonstrukce-bytu"
                  className="text-stone-400 hover:text-brass-400 transition-colors text-sm"
                >
                  Rekonstrukce bytů
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-stone-300 mb-6">
              Kontakt
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="text-stone-400 hover:text-brass-400 transition-colors text-sm flex items-center gap-2"
                >
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-stone-400 hover:text-brass-400 transition-colors text-sm flex items-center gap-2"
                >
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-stone-400 text-sm flex items-start gap-2">
                <svg
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
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
                <span>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.postalCode} {siteConfig.address.city}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-500 text-sm">
              &copy; {new Date().getFullYear()} Podlahy a Rekonstrukce. Všechna
              práva vyhrazena.
            </p>
            <p className="text-stone-500 text-sm">
              Působíme v Praze a Středočeském kraji
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
