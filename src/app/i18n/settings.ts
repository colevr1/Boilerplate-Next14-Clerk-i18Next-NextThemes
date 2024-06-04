export const fallbackLng: string = 'en';
export const languages: string[] = [fallbackLng, 'fr'];
export const defaultNS: string = 'translation';
export const cookieName: string = 'i18next';

interface I18nOptions {
  supportedLngs: string[];
  fallbackLng: string;
  lng: string;
  fallbackNS: string | string[];
  defaultNS: string;
  ns: string | string[];
}

export function getOptions(lng: string = fallbackLng, ns: string | string[] = defaultNS): I18nOptions {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  };
}