export interface Brand {
  id: string;
  name: string;
}

/** Marques amb les que treballem. Placeholder de text mentre no tenim els
 * logotips oficials de cada marca — quan arribin els arxius, substituir el
 * <span> de cada element a Brands.astro per <Image src={logo} alt={brand.name} />
 * dins del mateix contenidor d'alçada uniforme, sense tocar la resta del component. */
export const BRANDS: Brand[] = [
  { id: 'abaccino', name: 'Abaccino' },
  { id: 'cacharel-bags', name: 'Cacharel Bags' },
  { id: 'binnari', name: 'Bolsos Binnari' },
  { id: 'martina-k', name: 'Martina K' },
  { id: 'kcb', name: 'KCB' },
  { id: 'fri-yay', name: 'Fri-yay' },
  { id: 'vittorio-lucchino', name: 'Vittorio & Lucchino' },
  { id: 'roncato', name: 'Roncato' },
  { id: 'samsonite', name: 'Samsonite' },
  { id: 'cabinzero', name: 'CabinZero' },
  { id: 'pielnoble', name: 'Pielnoble' },
  { id: 'miguel-bellido', name: 'Miguel Bellido' },
  { id: 'lola-casademunt', name: 'Lola Casademunt' },
  { id: 'zilch', name: 'Zilch' },
  { id: 'vandos', name: 'Vandos' },
];
