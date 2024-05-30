<script setup lang="ts">
import Header from '../components/organism/Header.vue';
import DefaultContainer from '../components/containers/DefaultContainer.vue';
</script>
<template>
  <DefaultContainer>
    <Header />
    <RouterView />
  </DefaultContainer>
</template>
