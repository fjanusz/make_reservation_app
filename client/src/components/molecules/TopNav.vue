<script setup lang="ts">
import NavElement from '../atoms/NavElement.vue';
import { StaticPagesPaths } from '../../composables/staticPagesPaths.ts';
</script>
<template>
  <div class="box-content flex gap-4 items-center justify-center">
    <NavElement :link="StaticPagesPaths.PAGE_HOME" :value="$t('topNav.home')" />
    <NavElement
      :link="StaticPagesPaths.PAGE_ABOUT"
      :value="$t('topNav.about')"
    />
  </div>
</template>
