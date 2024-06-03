<script setup lang="ts">
defineProps<{ link: string; value: string }>();
</script>
<template>
  <router-link class="text-black hover:text-blue-500 duration-150" :to="link">
    {{ value }}
  </router-link>
</template>
