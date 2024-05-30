import { defineStore } from 'pinia';
import { useBreakpoints } from '@vueuse/core';

export const useBreakPointsStore = defineStore('useBreakPointsStore', () => {
  const breakpoints = {
    mobile: 0, // optional
    tablet: 640,
    laptop: 1024,
    desktop: 1280,
  };

  return {
    breakpoints: useBreakpoints(breakpoints),
  };
});
