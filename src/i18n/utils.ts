import { ui, defaultLang, languages, dayLabels } from './ui';

export type Lang = keyof typeof ui;
export type UIKey = keyof (typeof ui)[typeof defaultLang];

/** El `base` configurado en astro.config.mjs, siempre con barra final (p.ex. "/" o "/web-ninou/"). */
export const BASE_URL = import.meta.env.BASE_URL;

/** Añade el `base` a una ruta interna, p.ex. withBase("ca/") -> "/web-ninou/ca/". */
export function withBase(path: string): string {
  return BASE_URL + path.replace(/^\/+/, '');
}

function stripBase(pathname: string): string {
  return pathname.startsWith(BASE_URL) ? pathname.slice(BASE_URL.length) : pathname;
}

export function getLangFromUrl(url: URL): Lang {
  const [lang] = stripBase(url.pathname).split('/').filter(Boolean);
  if (lang && lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** translatePath("/") -> "/ca/" (o "/web-ninou/ca/" si hay base). */
export function useTranslatedPath(lang: Lang) {
  return function translatePath(path = '/', targetLang: Lang = lang): string {
    return withBase(`${targetLang}${path}`);
  };
}

/** Devuelve la misma ruta actual pero en el otro idioma, para el selector de idioma. */
export function getLocalizedAlternate(url: URL, targetLang: Lang): string {
  const segments = stripBase(url.pathname).split('/').filter(Boolean);
  segments[0] = targetLang;
  return withBase(`${segments.join('/')}/`);
}

export function getDayLabel(lang: Lang, day: keyof (typeof dayLabels)[typeof defaultLang]): string {
  return dayLabels[lang][day];
}

export { languages, defaultLang };
