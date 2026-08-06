import { ui, defaultLang, languages, dayLabels } from './ui';

export type Lang = keyof typeof ui;
export type UIKey = keyof (typeof ui)[typeof defaultLang];

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function useTranslatedPath(lang: Lang) {
  return function translatePath(path: string, targetLang: Lang = lang): string {
    return `/${targetLang}${path}`;
  };
}

/** Devuelve la misma ruta actual pero en el otro idioma, para el selector de idioma. */
export function getLocalizedAlternate(url: URL, targetLang: Lang): string {
  const segments = url.pathname.split('/').filter(Boolean);
  segments[0] = targetLang;
  return `/${segments.join('/')}/`;
}

export function getDayLabel(lang: Lang, day: keyof (typeof dayLabels)[typeof defaultLang]): string {
  return dayLabels[lang][day];
}

export { languages, defaultLang };
