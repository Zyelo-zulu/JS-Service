export type Package = {
  name: string;
  price: string;
  description?: string;
  included: string[];
  popular?: boolean;
  priceOnRequest?: boolean;
};

export type Service = {
  number: string;
  slug: string;
  title: string;
  short: string;
  price: string;
  image: string;
  packages: Package[];
};

export const content: {
  brand: {
    name: string;
    mark: string;
    tagline: string;
  };
  contact: {
    phone: string;
    email: string;
  };
  services: Service[];
  priceNote: string;
} = {
  brand: {
    name: 'JS Car Services',
    mark: 'JS',
    tagline: 'Uw wagen.\nOnze standaard.',
  },

  contact: {
    phone: 'NOG TOE TE VOEGEN',
    email: 'NOG TOE TE VOEGEN',
  },

  services: [
    {
      number: '01',
      slug: 'premium-handwas',
      title: 'Premium handwas',
      short: 'Een grondige handwas met aandacht voor elk detail.',
      price: 'Vanaf €50',
      image:
        'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1600&q=85',

      packages: [
        {
          name: 'Premium handwas',
          price: '€50',
          included: [
            'Krasvrije wasbeurt (2 emmer methode)',
            'Reinigen deurstijlen en instaplijsten',
            'Reinigen velgen, banden en wielkasten',
            'Drogen met warme lucht en zachte microvezel',
            'Spraywax of sealant',
            'Bandendressing',
          ],
        },

        {
          name: 'Premium handwas + basis interieur',
          price: '€80',
          popular: true,
          included: [
            'Krasvrije wasbeurt (2 emmer methode)',
            'Reinigen deurstijlen en instaplijsten',
            'Reinigen velgen, banden en wielkasten',
            'Drogen met warme lucht en zachte microvezel',
            'Spraywax of sealant',
            'Bandendressing',
            'Interieur stofzuigen',
            'Interieur afstoffen',
            'Reinigen ramen en spiegels',
          ],
        },
      ],
    },

    {
      number: '02',
      slug: 'polieren',
      title: 'Polieren',
      short: 'Lakcorrectie en een diepere, strakkere uitstraling.',
      price: 'Vanaf €400',
      image:
        'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=85',

      packages: [
        {
          name: 'Polier pakket',
          price: '€400',
          included: [
            'Grondige reiniging, veilige handwas',
            'Kleibehandeling en decontaminatie',
            'Inspectie van het lakwerk',
            'Machinaal polieren in meerdere stappen (afhankelijk van de staat van de lak en het gewenste resultaat)',
          ],
        },
      ],
    },

    {
      number: '03',
      slug: 'coating',
      title: 'Coating',
      short: 'Een premium beschermlaag voor een verzorgde finish.',
      price: 'Vanaf €600',
      image:
        'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=85',

      packages: [
        {
          name: 'Coating Pakket',
          price: '€800',
          included: [
            'Grondige reiniging, veilige handwas',
            'Kleibehandeling en decontaminatie',
            'Inspectie van het lakwerk',
            'Machinaal polieren in meerdere stappen (afhankelijk van de staat van de lak en het gewenste resultaat)',
            'Coating onderhoudsadvies',
          ],
        },

        {
          name: 'New Car Coating Pakket',
          price: '€600',
          included: [
            'Grondige reiniging, veilige handwas',
            'Chemische decontaminatie',
            'Inspectie van het lakwerk',
            'Polieren met CARPRO Essence primer',
            'Aanbrengen 2 lagen CARPRO CQuartz Finest RESERVE',
            'Infrarood uitharding van de coating',
            'Coating onderhoudsadvies',
          ],
        },
      ],
    },

    {
      number: '04',
      slug: 'onderhoud',
      title: 'Onderhoud',
      short: 'Klein en groot onderhoud met aandacht voor jouw voertuig.',
      price: 'Vanaf €200',
      image:
        'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=1600&q=85',

      packages: [
        {
          name: 'Klein onderhoud',
          price: '€200',
          included: [
            'Vervangen van de olie + oliefilter',
            'Vervangen van de microfilter',
            'Algemene controle van het voertuig (banden/remmen/onderstel)',
          ],
        },

        {
          name: 'Groot onderhoud',
          price: 'Prijs op aanvraag',
          priceOnRequest: true,
          description:
            'De prijs van een groot onderhoud is afhankelijk van het type voertuig en de benodigde werkzaamheden. Neem contact met ons op voor een vrijblijvende prijsinschatting.',
          included: [
            'Onderhoud afgestemd op het voertuig',
            'Controle van de benodigde werkzaamheden',
            'Prijsinschatting op maat',
          ],
        },
      ],
    },
  ],

  priceNote:
    'Alle prijzen zijn richtprijzen en kunnen afwijken naargelang het voertuig, de staat en de gewenste behandeling. Neem eerst contact op voor een gerichte kostenraming.',
};