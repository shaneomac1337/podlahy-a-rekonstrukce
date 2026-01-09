export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'podlahy' | 'rekonstrukce';
  description: string;
  location: string;
  year: number;
  images: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'rekonstrukce-bytu-vinohrady',
    title: 'Kompletní rekonstrukce bytu 3+1',
    category: 'rekonstrukce',
    description: 'Celková proměna bytu v činžovním domě na Vinohradech. Nová kuchyň, koupelna a podlahy v celém bytě.',
    location: 'Praha 2 - Vinohrady',
    year: 2024,
    images: ['/images/project-1.jpg'],
    featured: true,
  },
  {
    id: '2',
    slug: 'dubove-parkety-smichov',
    title: 'Dubové parkety v rodinném domě',
    category: 'podlahy',
    description: 'Pokládka masivních dubových parket včetně broušení a olejování. Plocha 120 m².',
    location: 'Praha 5 - Smíchov',
    year: 2024,
    images: ['/images/project-2.jpg'],
    featured: true,
  },
  {
    id: '3',
    slug: 'renovace-bytu-karlin',
    title: 'Moderní byt v industriálním stylu',
    category: 'rekonstrukce',
    description: 'Rekonstrukce loftového bytu s důrazem na industriální prvky a otevřený prostor.',
    location: 'Praha 8 - Karlín',
    year: 2024,
    images: ['/images/project-3.jpg'],
    featured: true,
  },
  {
    id: '4',
    slug: 'vinylova-podlaha-kancelar',
    title: 'Vinylová podlaha v kancelářích',
    category: 'podlahy',
    description: 'Realizace vinylové podlahy v administrativních prostorách. Odolné a snadno udržovatelné řešení.',
    location: 'Praha 4 - Pankrác',
    year: 2023,
    images: ['/images/project-4.jpg'],
    featured: false,
  },
  {
    id: '5',
    slug: 'renovace-parket-stare-mesto',
    title: 'Renovace historických parket',
    category: 'podlahy',
    description: 'Kompletní renovace původních parket v historickém bytě. Zachování autentického charakteru.',
    location: 'Praha 1 - Staré Město',
    year: 2023,
    images: ['/images/project-5.jpg'],
    featured: true,
  },
  {
    id: '6',
    slug: 'rekonstrukce-koupelny-dejvice',
    title: 'Luxusní koupelna s vanou',
    category: 'rekonstrukce',
    description: 'Kompletní rekonstrukce koupelny včetně vodoinstalace, obkladů a sanitární keramiky.',
    location: 'Praha 6 - Dejvice',
    year: 2023,
    images: ['/images/project-6.jpg'],
    featured: false,
  },
  {
    id: '7',
    slug: 'laminatova-podlaha-byt',
    title: 'Laminátová podlaha v bytě',
    category: 'podlahy',
    description: 'Pokládka kvalitní laminátové podlahy v bytě 2+kk včetně přechodových lišt.',
    location: 'Praha 10 - Vršovice',
    year: 2023,
    images: ['/images/project-7.jpg'],
    featured: false,
  },
  {
    id: '8',
    slug: 'celkova-rekonstrukce-holesovice',
    title: 'Rekonstrukce bytu v novostavbě',
    category: 'rekonstrukce',
    description: 'Úpravy developerského standardu dle požadavků klienta. Nová kuchyň a vestavěné skříně.',
    location: 'Praha 7 - Holešovice',
    year: 2024,
    images: ['/images/project-8.jpg'],
    featured: false,
  },
];

export const testimonials = [
  {
    id: '1',
    name: 'Martin Novák',
    location: 'Praha 2',
    text: 'Profesionální přístup od začátku do konce. Parkety jsou nádherné a práce byla dokončena přesně v termínu. Jednoznačně doporučuji.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Jana Svobodová',
    location: 'Praha 6',
    text: 'Rekonstrukce naší koupelny proběhla bez problémů. Komunikace byla výborná a výsledek předčil naše očekávání.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Petr Dvořák',
    location: 'Praha 5',
    text: 'Konečně někdo, kdo umí svou práci. Vinylová podlaha v celém bytě za výbornou cenu. Děkujeme!',
    rating: 5,
  },
];
