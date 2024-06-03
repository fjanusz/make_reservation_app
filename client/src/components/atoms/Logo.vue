<script setup lang="ts">
import { StaticPagesPaths } from '../../composables/staticPagesPaths.js';
import CalendarIcon from './CalendarIcon.vue';
</script>
<template>
  <RouterLink :to="StaticPagesPaths.PAGE_HOME" class="flex gap-2 items-center">
    <CalendarIcon class="w-12 h-12" />
    <span>{{ $t('My Logo') }}</span>
  </RouterLink>
</template>
