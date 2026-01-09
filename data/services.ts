export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: 'floor' | 'renovation' | 'apartment';
}

export const services: Service[] = [
  {
    id: 'pokladka-podlah',
    title: 'Pokládka podlah',
    subtitle: 'Všechny typy podlahových krytin',
    description:
      'Profesionálně položíme jakoukoli podlahovou krytinu. Od vinylových podlah přes laminát až po masivní dřevěné podlahy. Každý projekt realizujeme s maximální precizností a důrazem na detail.',
    features: [
      'Vinylové a laminátové podlahy',
      'Dřevěné masivní podlahy',
      'Parketové podlahy',
      'Koberce a PVC',
      'Příprava podkladu',
      'Pokládka soklových lišt',
    ],
    icon: 'floor',
  },
  {
    id: 'renovace-parket',
    title: 'Renovace parket',
    subtitle: 'Obnovíme krásu vašich dřevěných podlah',
    description:
      'Dáme vašim parketám nový život. Broušení, tmelení, lakování nebo olejování - vše provedeme odborně a s použitím kvalitních materiálů pro dlouhou životnost.',
    features: [
      'Broušení parket',
      'Tmelení a opravy',
      'Lakování podlah',
      'Olejování a voskování',
      'Odstranění škrábanců',
      'Renovace historických podlah',
    ],
    icon: 'renovation',
  },
  {
    id: 'rekonstrukce-bytu',
    title: 'Kompletní rekonstrukce bytu',
    subtitle: 'Od návrhu po realizaci',
    description:
      'Zajistíme kompletní rekonstrukci vašeho bytu na klíč. Od prvotní konzultace přes bourací práce až po finální úpravy. Vše pod jednou střechou bez zbytečných starostí.',
    features: [
      'Bourací práce',
      'Elektroinstalace',
      'Vodoinstalatérství',
      'Obklady a dlažby',
      'Malování a nátěry',
      'Montáž kuchyní',
    ],
    icon: 'apartment',
  },
];

export const processSteps = [
  {
    number: '01',
    title: 'Konzultace',
    description: 'Osobní návštěva a prohlídka prostoru. Probereme vaše představy a potřeby.',
  },
  {
    number: '02',
    title: 'Návrh a kalkulace',
    description: 'Připravíme detailní návrh řešení a transparentní cenovou kalkulaci.',
  },
  {
    number: '03',
    title: 'Realizace',
    description: 'Profesionální provedení prací s důrazem na kvalitu a termíny.',
  },
  {
    number: '04',
    title: 'Předání',
    description: 'Kontrola kvality, úklid a předání díla s dokumentací a zárukou.',
  },
];
