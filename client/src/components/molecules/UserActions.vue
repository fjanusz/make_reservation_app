<script setup lang="ts">
import LocaleSelector from './LocaleSelector.vue';
import UserIcon from '../Icons/UserIcon.vue';
</script>
<template>
  <div class="box-content flex gap-4 justify-end items-center">
    <LocaleSelector />
    <UserIcon class="w-12 h-12" />
  </div>
</template>
