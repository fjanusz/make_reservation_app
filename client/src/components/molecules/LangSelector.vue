<script setup lang="ts">
import FlagIcon from '../atoms/FlagIcon.vue';
import ChevronDown from '../atoms/ChevronDown.vue';
</script>
<template>
  <div class="flex items-center cursor-pointer gap-4">
    <FlagIcon lang="en" />
    <span>{{ $t('topNav.lang.en') }}</span>
    <ChevronDown />
  </div>
</template>
