import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';

export type Locale = 'pl' | 'en';
export const useLocaleStore = defineStore('useLocaleStore', () => {
  const selectedLocale = ref<Locale>('en');
  const { locale } = useI18n();
  const changeLocale = (newLocale: Locale) => {
    if (selectedLocale.value !== newLocale) {
      selectedLocale.value = newLocale;
      locale.value = selectedLocale.value;
    }
  };

  return {
    selectedLocale: computed(() => selectedLocale),
    changeLocale,
  };
});
