<script setup lang="ts">
import { ref } from 'vue';
import {
  Locale,
  useLocaleStore,
} from '../../composables/stores/useLanguageStore.ts';
import LocaleItem from '../atoms/LocaleItem.vue';

const isOpen = ref(false);
const { selectedLocale, changeLocale } = useLocaleStore();
const triggerIsOpen = () => {
  isOpen.value = !isOpen.value;
};

const selectLocale = (newLocale: Locale) => {
  changeLocale(newLocale);
  triggerIsOpen();
};
</script>
<template>
  <div class="flex items-center relative">
    <LocaleItem
      @click="triggerIsOpen"
      :is-open="isOpen"
      :with-chevron="true"
      :selected-locale="selectedLocale"
    />
    <div
      :class="isOpen ? 'visible' : 'hidden'"
      class="w-max bg-gray-100 p-4 flex flex-col absolute top-10 shadow-2xl rounded-2xl gap-4"
    >
      <LocaleItem
        @click="selectLocale('en')"
        :with-chevron="false"
        selected-locale="en"
      />
      <LocaleItem
        @click="selectLocale('pl')"
        :with-chevron="false"
        selected-locale="pl"
      />
    </div>
  </div>
</template>
