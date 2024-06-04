<script setup lang="ts">
import { Locale } from '../../composables/stores/useLanguageStore.ts';
import FlagIcon from '../Icons/FlagIcon.vue';
import ChevronDownIcon from '../Icons/ChevronDownIcon.vue';

defineProps<{
  selectedLocale: Locale;
  isOpen?: boolean;
  withChevron: boolean;
}>();
</script>
<template>
  <div class="flex gap-4 cursor-pointer items-center">
    <FlagIcon :lang="selectedLocale" />
    <span class="select-none">{{ $t(`topNav.lang.${selectedLocale}`) }}</span>
    <ChevronDownIcon
      v-if="withChevron"
      class="duration-100"
      :class="{ 'rotate-180': isOpen }"
    />
  </div>
</template>
