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
    slug: 'rekonstrukce-wc-vinohrady',
    title: 'Kompletní rekonstrukce WC',
    category: 'rekonstrukce',
    description: 'Kompletní přeměna zastaralého WC v moderní prostor s novým obkladem v dekoru dřeva a závěsnou toaletou.',
    location: 'Praha 2 - Vinohrady',
    year: 2024,
    images: ['/images/projects/rekonstrukce-wc-pred-po.jpg'],
    featured: true,
  },
  {
    id: '2',
    slug: 'vinylova-podlaha-svetly-dub',
    title: 'Vinylová podlaha v moderním bytě',
    category: 'podlahy',
    description: 'Pokládka vinylové podlahy v dekoru světlého dubu včetně podkladové vrstvy. Prostor s proskleným balkónem.',
    location: 'Praha 5 - Smíchov',
    year: 2024,
    images: ['/images/projects/podlaha-svetly-dub.jpg'],
    featured: true,
  },
  {
    id: '3',
    slug: 'rekonstrukce-predsine',
    title: 'Rekonstrukce vstupní předsíně',
    category: 'rekonstrukce',
    description: 'Kompletní proměna vstupního prostoru včetně omítek, podlahy a nového nátěru. Výsledek hovoří sám za sebe.',
    location: 'Praha 8 - Karlín',
    year: 2024,
    images: ['/images/projects/rekonstrukce-predsni-pred-po.jpg'],
    featured: true,
  },
  {
    id: '4',
    slug: 'vinylova-podlaha-tmave-drevo',
    title: 'Vinylová podlaha v tmavém dekoru',
    category: 'podlahy',
    description: 'Elegantní vinylová podlaha v dekoru tmavého dřeva s precizně provedenými přechody a lištami.',
    location: 'Praha 4 - Pankrác',
    year: 2024,
    images: ['/images/projects/podlaha-tmave-drevo.jpg'],
    featured: true,
  },
  {
    id: '5',
    slug: 'podlaha-betonovy-efekt',
    title: 'Podlaha v betonovém stylu',
    category: 'podlahy',
    description: 'Moderní vinylová podlaha s efektem leštěného betonu a kontrastními černými lištami.',
    location: 'Praha 1 - Staré Město',
    year: 2024,
    images: ['/images/projects/podlaha-beton.jpg'],
    featured: false,
  },
  {
    id: '6',
    slug: 'sprchovy-kout-luxusni',
    title: 'Luxusní sprchový kout',
    category: 'rekonstrukce',
    description: 'Realizace sprchového koutu se skleněnými dveřmi a obkladem v teplých tónech.',
    location: 'Praha 6 - Dejvice',
    year: 2024,
    images: ['/images/projects/rekonstrukce-sprcha.jpg'],
    featured: false,
  },
  {
    id: '7',
    slug: 'koupelna-moderni-rohova',
    title: 'Moderní koupelna s rohovým sprchovým koutem',
    category: 'rekonstrukce',
    description: 'Kompletní rekonstrukce koupelny s rohovým sprchovým koutem, umyvadlovou skříňkou a elegantním designem.',
    location: 'Praha 10 - Vršovice',
    year: 2024,
    images: ['/images/projects/koupelna-moderni.jpg'],
    featured: false,
  },
  {
    id: '8',
    slug: 'dlazba-koupelna-bila',
    title: 'Bílá dlažba v koupelně',
    category: 'rekonstrukce',
    description: 'Pokládka velkoformátové bílé dlažby v koupelně s precizně provedenými spárami.',
    location: 'Praha 7 - Holešovice',
    year: 2024,
    images: ['/images/projects/podlaha-dlazba-bila.jpg'],
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
