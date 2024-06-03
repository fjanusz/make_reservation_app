<script setup lang="ts">
import Button from '../atoms/Button.vue';
import LangSelector from './LangSelector.vue';
</script>
<template>
  <div class="box-content flex gap-4 justify-end">
    <LangSelector />
    <Button variant="primary">
      {{ $t('LogIn') }}
    </Button>
  </div>
</template>
