<script setup lang="ts">
import Header from '../components/organism/Header.vue';
import DefaultContainer from '../components/containers/DefaultContainer.vue';
import { useTitle } from '@vueuse/core';
import router from '../composables/router.ts';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const i18n = useI18n();

useTitle(computed(() => i18n.t(`${router.currentRoute.value.meta.title}`)));
</script>
<template>
  <DefaultContainer>
    <Header />
    <RouterView />
  </DefaultContainer>
</template>
