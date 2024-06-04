<script setup lang="ts">
import Button from '../atoms/Button.vue';
import LocaleSelector from './LocaleSelector.vue';
</script>
<template>
  <div class="box-content flex gap-4 justify-end">
    <LocaleSelector />
    <Button variant="primary">
      {{ $t('topNav.LogIn') }}
    </Button>
  </div>
</template>
