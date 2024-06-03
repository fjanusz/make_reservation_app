<script setup lang="ts">
import Logo from '../atoms/Logo.vue';
import TopNav from '../molecules/TopNav.vue';
import UserActions from '../molecules/UserActions.vue';
</script>
<template>
  <div class="grid grid-cols-3 justify-between align-middle py-4">
    <Logo />
    <TopNav />
    <UserActions />
  </div>
</template>
