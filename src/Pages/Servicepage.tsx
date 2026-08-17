import { ArrowLeft, ArrowRight, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { PackageCard } from '../components/PackageCard';
import { content } from '../data/content';

type Props = {
  slug: string;
};

export function ServicePage({ slug }: Props) {
  const service = content.services.find((item) => item.slug === slug);

  if (!service) {
    window.history.replaceState({}, '', '/');
    window.location.reload();
    return null;
  }

  return (
    <div className="min-h-screen overflow-hidden bg-ink text-cream">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-ink/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a
            href="/"
            className="flex items-center gap-3 text-left"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-champagne font-display font-bold text-ink">
              JS
            </span>

            <span className="font-display text-sm font-semibold uppercase tracking-[0.16em]">
              Car Services
            </span>
          </a>

          <a
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-white/60 transition hover:text-white"
          >
            <ArrowLeft size={15} />
            Terug
          </a>
        </div>
      </header>

      <main>
        <section className="relative flex min-h-[70vh] items-end overflow-hidden px-5 pb-16 pt-32 lg:px-8 lg:pb-24">
          <div className="absolute inset-0">
            <img
              src={service.image}
              alt=""
              className="h-full w-full object-cover object-center opacity-45"
            />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(200,169,107,.16),transparent_35%),linear-gradient(90deg,#08090B_5%,rgba(8,9,11,.7)_55%,rgba(8,9,11,.25)_100%)]" />

            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/30" />
          </div>

          <div className="relative mx-auto w-full max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-champagne">
                {service.number} / Services
              </p>

              <h1 className="font-display text-[clamp(4rem,10vw,8.5rem)] font-semibold leading-[.82] tracking-[-0.07em] text-white">
                {service.title}
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-white/60 sm:text-xl">
                {service.short}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="px-5 py-24 lg:px-8 lg:py-36">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
              <div>
                <p className="eyebrow">Pakketten</p>

                <h2 className="mt-5 font-display text-5xl font-semibold tracking-tight sm:text-7xl">
                  Kies jouw behandeling.
                </h2>
              </div>

              <p className="max-w-xl text-base leading-8 text-white/50 lg:justify-self-end">
                Bekijk wat er precies inbegrepen is in elk pakket en kies de
                behandeling die het beste past bij jouw wagen.
              </p>
            </div>

            <div
              className={`grid gap-5 ${
                service.packages.length === 1
                  ? 'mx-auto max-w-2xl'
                  : 'md:grid-cols-2'
              }`}
            >
              {service.packages.map((pkg) => (
                <PackageCard
                  key={pkg.name}
                  package={pkg}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="px-5 pb-16 pt-4 lg:px-8 lg:pb-24"
        >
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-cream text-ink">
            <div className="grid lg:grid-cols-[1fr_1fr]">
              <div className="p-8 sm:p-12 lg:p-16">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-ink/45">
                  Klaar voor de volgende stap? Neem contact met ons op
                </p>

                <h2 className="mt-6 font-display text-5xl font-semibold leading-none tracking-tight sm:text-6xl">
                  Interesse in {service.title.toLowerCase()}?
                </h2>

                <p className="mt-6 max-w-md text-sm leading-7 text-ink/60">
                  Neem contact op en vertel ons welke behandeling je wenst.
                  We bekijken samen wat jouw wagen nodig heeft.
                </p>

                <div className="mt-10 space-y-4 text-sm">
                  <a
                    href={`tel:${content.contact.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 font-semibold hover:opacity-60"
                  >
                    <Phone size={17} />
                    {content.contact.phone}
                  </a>

                  <a
                    href={`mailto:${content.contact.email}`}
                    className="flex items-center gap-3 font-semibold hover:opacity-60"
                  >
                    <Mail size={17} />
                    {content.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center bg-ink p-8 sm:p-12 lg:p-16">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-champagne">
                    {service.title}
                  </p>

                  <h3 className="mt-5 font-display text-4xl font-semibold text-white sm:text-5xl">
                    Een behandeling op maat.
                  </h3>

                  <p className="mt-6 max-w-md text-sm leading-7 text-white/50">
                    Alle prijzen zijn richtprijzen. De uiteindelijke prijs kan
                    afhangen van het voertuig, de staat en de gewenste
                    behandeling.
                  </p>

                  <a
                    href={`mailto:${content.contact.email}?subject=${encodeURIComponent(
                      `Aanvraag ${service.title}`,
                    )}`}
                    className="mt-8 inline-flex items-center gap-3 rounded-full bg-champagne px-6 py-3.5 text-sm font-bold text-ink transition hover:bg-cream"
                  >
                    Contact opnemen
                    <ArrowRight size={17} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 pb-16 lg:px-8">
          <div className="mx-auto max-w-7xl border-t border-white/10 pt-8">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/45 transition hover:text-white"
            >
              <ArrowLeft size={15} />
              Terug naar alle services
            </a>
          </div>
        </section>
      </main>

      <footer className="px-5 py-12 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between border-t border-white/10 pt-8">
          <div>
            <div className="font-display text-2xl font-bold">
              JS<span className="text-champagne">.</span>
            </div>

            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/35">
              Car Services
            </p>
          </div>

          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} JS Car Services
          </p>
        </div>
      </footer>
    </div>
  );
}