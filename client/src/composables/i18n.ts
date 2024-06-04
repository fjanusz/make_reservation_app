import { createI18n } from 'vue-i18n';
import pl from '../locales/pl.json';
import en from '../locales/en.json';

export const i18nConfig = () => {
  const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'pl',
    messages: { pl, en },
    legacy: false,
  });

  return {
    i18n,
  };
};
