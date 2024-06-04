<script setup lang="ts">
import Header from '../components/organism/Header.vue';
import DefaultContainer from '../components/containers/DefaultContainer.vue';
import { useTitle } from '@vueuse/core';
import router from '../composables/router.ts';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import { useBreakPointsStore } from '../composables/stores/useBreakPointsStore.ts';
import RwdHeader from '../components/organism/RwdHeader.vue';

const i18n = useI18n();
const { breakpoints } = useBreakPointsStore();

useTitle(computed(() => i18n.t(`${router.currentRoute.value.meta.title}`)));
</script>
<template>
  <DefaultContainer>
    <RwdHeader v-if="!breakpoints.tablet.value" />
    <Header v-else />
    <RouterView />
  </DefaultContainer>
</template>
