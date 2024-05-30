import { createI18n } from 'vue-i18n';
import pl from '../locales/pl.json';
import en from '../locales/en.json';

export const i18nConfig = () => {
  const i18n = createI18n({
    locale: 'pl',
    fallbackLocale: 'en',
    messages: { pl, en },
  });

  return {
    i18n,
  };
};
