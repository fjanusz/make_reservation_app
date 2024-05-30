<script setup lang="ts">
import Button from '../atoms/Button.vue';
</script>
<template>
  <div class="box-content flex gap-4">
    <Button variant="primary">
      {{ $t('LogIn') }}
    </Button>
  </div>
</template>
