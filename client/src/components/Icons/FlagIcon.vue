<script setup lang="ts">
defineProps<{ lang: 'en' | 'pl' }>();
const flagIconConfig = {
  en: {
    src: '/IconEnFlag.svg',
    alt: 'Great Britain flag',
  },
  pl: {
    src: '/IconPlFlag.svg',
    alt: 'Polish flag',
  },
};
</script>
<template>
  <img
    class="h-8 w-8 rounded-full"
    :src="flagIconConfig[lang].src"
    :alt="flagIconConfig[lang].alt"
  />
</template>
