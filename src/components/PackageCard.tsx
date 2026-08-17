import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Package } from '../data/content';

type Props = {
  package: Package;
};

export function PackageCard({ package: pkg }: Props) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`relative flex h-full flex-col overflow-hidden rounded-[2rem] border ${
        pkg.popular
          ? 'border-white/20 bg-graphite'
          : 'border-white/10 bg-graphite/70'
      }`}
    >
      {pkg.popular && (
        <div className="bg-black px-6 py-3 text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-white">
            Meest populair
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-7 sm:p-9">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-champagne">
            Pakket
          </p>

          <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {pkg.name}
          </h3>

          <p className="mt-5 font-display text-3xl font-semibold text-white">
            {pkg.price}
          </p>

          {pkg.description && (
            <p className="mt-5 text-sm leading-7 text-white/50">
              {pkg.description}
            </p>
          )}
        </div>

        <div className="my-8 h-px bg-white/10" />

        <div className="flex-1">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
            Inbegrepen
          </p>

          <ul className="space-y-4">
            {pkg.included.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-6 text-white/70"
              >
                <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-champagne/10 text-champagne">
                  <Check size={11} strokeWidth={2.5} />
                </span>

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <a
          href="#contact"
          className="mt-9 inline-flex items-center gap-2 border-t border-white/10 pt-5 text-sm font-bold uppercase tracking-[0.12em] text-champagne transition hover:text-cream"
        >
          {pkg.priceOnRequest ? 'Prijs aanvragen' : 'Afspraak maken'}
          <ArrowRight size={15} />
        </a>
      </div>
    </motion.article>
  );
}