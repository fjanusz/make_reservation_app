import { createMemoryHistory, createRouter } from 'vue-router';
import { StaticPagesPaths } from './staticPagesPaths.ts';
import Home from '../pages/Home.vue';
import AboutUs from '../pages/AboutUs.vue';
import { useTitle } from '@vueuse/core';

declare module 'vue-router' {
  interface RouteMeta {
    title: string;
  }
}

const routes = [
  {
    path: StaticPagesPaths.PAGE_HOME,
    component: Home,
    meta: { title: 'Home' },
  },
  {
    path: StaticPagesPaths.PAGE_ABOUT,
    component: AboutUs,
    meta: { title: 'About us' },
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

router.beforeEach((to) => {
  useTitle(to.meta.title);
});

export default router;
