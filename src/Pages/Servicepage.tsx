import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type ServicePackage = {
  name: string;
  price: string;
  description?: string;
  popular?: boolean;
  features: string[];
};

type ServiceData = {
  title: string;
  intro: string;
  packages: ServicePackage[];
};

const services: Record<string, ServiceData> = {
  'premium-handwas': {
    title: 'Premium handwas',
    intro:
      'Een grondige, veilige handwas voor een wagen die er opnieuw verzorgd en fris moet uitzien.',
    packages: [
      {
        name: 'Premium handwas',
        price: '€ 50',
        features: [
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
        price: '€ 80',
        popular: true,
        features: [
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

  coating: {
    title: 'Coating',
    intro:
      'Bescherm het lakwerk en geef je wagen een langdurige, hoogwaardige afwerking.',
    packages: [
      {
        name: 'Coating Pakket',
        price: '€ 800',
        features: [
          'Grondige reiniging, veilige handwas',
          'Kleibehandeling en decontaminatie',
          'Inspectie van het lakwerk',
          'Machinaal polieren in meerdere stappen (afhankelijk van de staat van de lak en het gewenste resultaat)',
          'Coating onderhoudsadvies',
        ],
      },
      {
        name: 'New Car Coating Pakket',
        price: '€ 600',
        features: [
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

  polieren: {
    title: 'Polieren',
    intro:
      'Machinale lakcorrectie om de uitstraling van het lakwerk te verbeteren en ongewenste imperfecties te verminderen.',
    packages: [
      {
        name: 'Polier pakket',
        price: '€ 400',
        features: [
          'Grondige reiniging, veilige handwas',
          'Kleibehandeling en decontaminatie',
          'Inspectie van het lakwerk',
          'Machinaal polieren in meerdere stappen (afhankelijk van de staat van de lak en het gewenste resultaat)',
        ],
      },
    ],
  },

  onderhoud: {
    title: 'Onderhoud',
    intro:
      'Periodiek voertuigonderhoud om je wagen technisch verzorgd en betrouwbaar te houden.',
    packages: [
      {
        name: 'Klein onderhoud',
        price: '€ 200',
        features: [
          'Vervangen van de olie + oliefilter',
          'Vervangen van de microfilter',
          'Algemene controle van het voertuig (banden/remmen/onderstel)',
        ],
      },
      {
        name: 'Groot onderhoud',
        price: 'Prijs op aanvraag',
        features: [
          'Moeilijk op voorhand een vaste prijs te bepalen',
          'Prijs wordt bepaald op basis van de wagen en de benodigde werkzaamheden',
        ],
      },
    ],
  },
};

export function ServicePage({ slug }: { slug: string }) {
  const navigate = useNavigate();

  const service = services[slug];

  if (!service) {
    return (
      <main className="min-h-screen bg-ink px-5 py-32 text-cream lg:px-8">
        <div className="mx-auto max-w-4xl">
          <button
            onClick={() => navigate('/')}
            className="mb-10 inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Terug naar home
          </button>

          <h1 className="font-display text-5xl font-semibold sm:text-7xl">
            Service niet gevonden
          </h1>

          <p className="mt-6 text-white/50">
            Deze service bestaat niet of is niet langer beschikbaar.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-ink text-cream">
      <header className="border-b border-white/10 bg-ink">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-3"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-champagne font-display font-bold text-ink">
              JS
            </span>

            <span className="font-display text-sm font-semibold uppercase tracking-[0.16em]">
              Car Services
            </span>
          </button>

          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Terug
          </button>
        </div>
      </header>

      <section className="px-5 pb-20 pt-24 lg:px-8 lg:pb-28 lg:pt-32">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow">JS Car Services</p>

          <h1 className="mt-6 max-w-5xl font-display text-6xl font-semibold leading-[.9] tracking-tight sm:text-8xl">
            {service.title}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/55">
            {service.intro}
          </p>
        </div>
      </section>

      <section className="px-5 pb-28 lg:px-8 lg:pb-40">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {service.packages.map((pkg) => (
            <article
              key={pkg.name}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-graphite p-7 sm:p-9"
            >
              {pkg.popular && (
                <div className="absolute left-0 right-0 top-0 bg-black px-6 py-3 text-center text-xs font-bold uppercase tracking-[0.2em] text-white">
                  Meest populair
                </div>
              )}

              <div className={pkg.popular ? 'pt-10' : ''}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-champagne">
                  Pakket
                </p>

                <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
                  {pkg.name}
                </h2>

                <p className="mt-5 font-display text-4xl font-semibold">
                  {pkg.price}
                </p>

                <div className="my-8 h-px bg-white/10" />

                <ul className="space-y-4">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 text-sm leading-6 text-white/65"
                    >
                      <Check
                        size={18}
                        className="mt-1 shrink-0 text-champagne"
                      />

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => navigate('/#contact')}
                  className="mt-9 inline-flex items-center gap-3 rounded-full bg-champagne px-6 py-3.5 text-sm font-bold text-ink transition hover:bg-cream"
                >
                  Vraag dit pakket aan
                  <ArrowRight size={17} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}