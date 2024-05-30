<script setup lang="ts">
import { StaticPagesPaths } from '../../composables/staticPagesPaths.js';
</script>
<template>
  <RouterLink :to="StaticPagesPaths.PAGE_HOME">
    <img src="/vite.svg" alt="logo" />
  </RouterLink>
</template>
