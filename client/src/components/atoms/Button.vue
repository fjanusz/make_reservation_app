<script setup lang="ts">
defineProps<{ variant: 'primary' | 'outline' }>();
</script>
<template>
  <div
    class="py-2 px-4 bg-blue-500 text-white rounded hover:cursor-pointer hover:bg-blue-300 transition-colors"
  >
    <slot />
  </div>
</template>
